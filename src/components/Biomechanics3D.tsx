import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html, Center } from '@react-three/drei';
import * as THREE from 'three';
import { ANATOMICAL_POINTS, type AnatomicalPoint } from '../data/clinicsData';
import { Activity, ShieldCheck, Clock, ArrowRight, RotateCw, ZoomIn, Info } from 'lucide-react';

// Hotpoint pin component rendered in 3D space
interface HotpointProps {
  point: AnatomicalPoint;
  isSelected: boolean;
  onSelect: (point: AnatomicalPoint) => void;
}

const Hotpoint: React.FC<HotpointProps> = ({ point, isSelected, onSelect }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ringRef.current) {
      const s = 1 + Math.sin(t * 3 + point.position3D[1]) * 0.25;
      ringRef.current.scale.set(s, s, s);
      const mat = ringRef.current.material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.opacity = 0.4 + Math.cos(t * 3) * 0.3;
      }
    }
  });

  return (
    <group position={point.position3D}>
      {/* Outer pulsing ring */}
      <mesh ref={ringRef}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial
          color={isSelected ? '#10B981' : hovered ? '#0284C7' : '#2D6E4F'}
          transparent
          opacity={0.5}
          wireframe
        />
      </mesh>

      {/* Core sphere */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(point);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.045, 24, 24]} />
        <meshStandardMaterial
          color={isSelected ? '#10B981' : hovered ? '#38BDF8' : '#23573F'}
          emissive={isSelected ? '#10B981' : hovered ? '#0284C7' : '#143427'}
          emissiveIntensity={isSelected ? 1.5 : hovered ? 1.2 : 0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 3D Label on hover or selected */}
      {(hovered || isSelected) && (
        <Html distanceFactor={8} position={[0, 0.12, 0]} center pointerEvents="none">
          <div className="bg-slate-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-500/40 shadow-lg whitespace-nowrap backdrop-blur-md flex items-center gap-1.5 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            {point.label}
          </div>
        </Html>
      )}
    </group>
  );
};

// Anatomical Biomechanical Mannequin in 3D
const BiomechanicalMannequin: React.FC<{ selectedId?: string }> = () => {
  const spineGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (spineGroup.current) {
      const t = state.clock.getElapsedTime();
      // Subtle organic breath movement
      spineGroup.current.position.y = Math.sin(t * 0.8) * 0.02;
    }
  });

  return (
    <group ref={spineGroup} position={[0, 0, 0]}>
      {/* Head & Cranium */}
      <mesh position={[0, 1.82, 0]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshPhysicalMaterial
          color="#94A3B8"
          roughness={0.3}
          metalness={0.1}
          transmission={0.65}
          thickness={0.5}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Jaw / TMJ articulation */}
      <mesh position={[0, 1.68, 0.08]}>
        <boxGeometry args={[0.16, 0.08, 0.12]} />
        <meshStandardMaterial color="#64748B" roughness={0.4} metalness={0.3} />
      </mesh>

      {/* Cervical Vertebrae Stack (Neck) */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`cerv-${i}`} position={[0, 1.55 - i * 0.045, 0]}>
          <cylinderGeometry args={[0.07 - i * 0.003, 0.075 - i * 0.003, 0.03, 16]} />
          <meshStandardMaterial color="#38BDF8" roughness={0.3} metalness={0.4} />
        </mesh>
      ))}

      {/* Clavicles & Shoulder Girdle */}
      <mesh position={[0, 1.35, 0.02]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.85, 16]} />
        <meshStandardMaterial color="#64748B" roughness={0.3} metalness={0.5} />
      </mesh>

      {/* Shoulder Joints */}
      <mesh position={[-0.48, 1.32, 0]}>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshStandardMaterial color="#0D9488" roughness={0.2} metalness={0.7} />
      </mesh>
      <mesh position={[0.48, 1.32, 0]}>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshStandardMaterial color="#0D9488" roughness={0.2} metalness={0.7} />
      </mesh>

      {/* Arms & Forearms */}
      <mesh position={[-0.56, 0.95, 0]} rotation={[0, 0, 0.12]}>
        <cylinderGeometry args={[0.04, 0.035, 0.65, 16]} />
        <meshStandardMaterial color="#94A3B8" transparent opacity={0.7} />
      </mesh>
      <mesh position={[0.56, 0.95, 0]} rotation={[0, 0, -0.12]}>
        <cylinderGeometry args={[0.04, 0.035, 0.65, 16]} />
        <meshStandardMaterial color="#94A3B8" transparent opacity={0.7} />
      </mesh>

      {/* Thoracic Rib Cage Architecture */}
      {[0, 1, 2, 3, 4].map((i) => {
        const radius = 0.26 - Math.abs(i - 2) * 0.03;
        return (
          <mesh key={`rib-${i}`} position={[0, 1.25 - i * 0.08, 0]}>
            <torusGeometry args={[radius, 0.025, 12, 32, Math.PI * 1.8]} />
            <meshStandardMaterial
              color="#CBD5E1"
              roughness={0.3}
              metalness={0.2}
              transparent
              opacity={0.75}
            />
          </mesh>
        );
      })}

      {/* Sternum Core */}
      <mesh position={[0, 1.05, 0.22]}>
        <boxGeometry args={[0.06, 0.38, 0.02]} />
        <meshStandardMaterial color="#0284C7" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Lumbar Spine Segment (L1 - L5) */}
      {[0, 1, 2, 3, 4].map((i) => (
        <group key={`lumb-${i}`} position={[0, 0.75 - i * 0.08, -0.02]}>
          <mesh>
            <cylinderGeometry args={[0.08, 0.085, 0.05, 16]} />
            <meshStandardMaterial color="#10B981" roughness={0.2} metalness={0.6} />
          </mesh>
          {/* Intervertebral Disc */}
          <mesh position={[0, -0.035, 0]}>
            <cylinderGeometry args={[0.075, 0.075, 0.015, 16]} />
            <meshStandardMaterial color="#38BDF8" roughness={0.1} emissive="#0284C7" emissiveIntensity={0.4} />
          </mesh>
        </group>
      ))}

      {/* Pelvis & Sacrum Complex */}
      <mesh position={[0, 0.25, 0]}>
        <torusGeometry args={[0.28, 0.05, 16, 32]} />
        <meshPhysicalMaterial
          color="#475569"
          roughness={0.4}
          metalness={0.4}
          transmission={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Hip Joints */}
      <mesh position={[-0.26, 0.15, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#0D9488" roughness={0.2} metalness={0.7} />
      </mesh>
      <mesh position={[0.26, 0.15, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#0D9488" roughness={0.2} metalness={0.7} />
      </mesh>

      {/* Femur (Upper Legs) */}
      <mesh position={[-0.24, -0.38, 0]} rotation={[0, 0, -0.04]}>
        <cylinderGeometry args={[0.05, 0.045, 0.95, 16]} />
        <meshStandardMaterial color="#94A3B8" transparent opacity={0.7} />
      </mesh>
      <mesh position={[0.24, -0.38, 0]} rotation={[0, 0, 0.04]}>
        <cylinderGeometry args={[0.05, 0.045, 0.95, 16]} />
        <meshStandardMaterial color="#94A3B8" transparent opacity={0.7} />
      </mesh>

      {/* Knee Joints & Patellae */}
      <group position={[-0.22, -0.92, 0.02]}>
        <mesh>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#10B981" roughness={0.2} metalness={0.6} />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#38BDF8" emissive="#0284C7" emissiveIntensity={0.6} />
        </mesh>
      </group>

      <group position={[0.22, -0.92, 0.02]}>
        <mesh>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#10B981" roughness={0.2} metalness={0.6} />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#38BDF8" emissive="#0284C7" emissiveIntensity={0.6} />
        </mesh>
      </group>

      {/* Tibia & Fibula (Lower Legs) */}
      <mesh position={[-0.22, -1.42, 0]}>
        <cylinderGeometry args={[0.04, 0.035, 0.9, 16]} />
        <meshStandardMaterial color="#94A3B8" transparent opacity={0.7} />
      </mesh>
      <mesh position={[0.22, -1.42, 0]}>
        <cylinderGeometry args={[0.04, 0.035, 0.9, 16]} />
        <meshStandardMaterial color="#94A3B8" transparent opacity={0.7} />
      </mesh>

      {/* Ankles & Feet */}
      <mesh position={[-0.22, -1.9, 0.06]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.1, 0.06, 0.22]} />
        <meshStandardMaterial color="#64748B" roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh position={[0.22, -1.9, 0.06]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.1, 0.06, 0.22]} />
        <meshStandardMaterial color="#64748B" roughness={0.3} metalness={0.4} />
      </mesh>

      {/* Stylized Floor Grid Target */}
      <mesh position={[0, -2.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 0.9, 32]} />
        <meshBasicMaterial color="#2D6E4F" transparent opacity={0.15} wireframe />
      </mesh>
    </group>
  );
};

interface Biomechanics3DProps {
  onBookCondition?: (conditionName: string) => void;
}

export const Biomechanics3D: React.FC<Biomechanics3DProps> = ({ onBookCondition }) => {
  const [selectedPoint, setSelectedPoint] = useState<AnatomicalPoint>(ANATOMICAL_POINTS[2]); // Default Lumbar spine
  const [cameraView, setCameraView] = useState<'front' | 'back' | 'side'>('front');
  const controlsRef = useRef<any>(null);

  const handleAngleChange = (view: 'front' | 'back' | 'side') => {
    setCameraView(view);
    if (!controlsRef.current) return;

    if (view === 'front') {
      controlsRef.current.setAzimuthalAngle(0);
      controlsRef.current.setPolarAngle(Math.PI / 2);
    } else if (view === 'back') {
      controlsRef.current.setAzimuthalAngle(Math.PI);
      controlsRef.current.setPolarAngle(Math.PI / 2);
    } else if (view === 'side') {
      controlsRef.current.setAzimuthalAngle(Math.PI / 2);
      controlsRef.current.setPolarAngle(Math.PI / 2);
    }
  };

  return (
    <section id="interactive-body-map" className="py-20 bg-gradient-to-b from-sand-50 via-white to-sand-100 relative overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(#2D6E4F_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-forest-200">
            <Activity className="w-3.5 h-3.5 text-forest-600" />
            Interactive 3D Anatomical Navigator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Target Your Pain with <span className="text-forest-700 italic font-serif">Biomechanical Precision</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Click any kinetic hotspot on our 3D model below to explore underlying structural causes, symptoms, and our evidence-based rehabilitation protocols.
          </p>
        </div>

        {/* 3D Canvas + Diagnostic Details Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left / Center: 3D WebGL Canvas */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-4 sm:p-6 shadow-elevated border border-slate-800 relative flex flex-col justify-between overflow-hidden min-h-[540px]">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                  3D Spatial Kinematic Engine
                </span>
              </div>

              {/* View Angles Switcher */}
              <div className="flex items-center bg-slate-900/90 rounded-lg p-1 border border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={() => handleAngleChange('front')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    cameraView === 'front' ? 'bg-forest-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Anterior (Front)
                </button>
                <button
                  type="button"
                  onClick={() => handleAngleChange('back')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    cameraView === 'back' ? 'bg-forest-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Posterior (Spine)
                </button>
                <button
                  type="button"
                  onClick={() => handleAngleChange('side')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    cameraView === 'side' ? 'bg-forest-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sagittal (Side)
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div className="w-full h-[440px] sm:h-[480px] cursor-grab active:cursor-grabbing relative">
              <Suspense
                fallback={
                  <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-3">
                    <RotateCw className="w-8 h-8 animate-spin text-forest-400" />
                    <span className="text-xs font-mono">Calibrating Anatomical Coordinates...</span>
                  </div>
                }
              >
                <Canvas
                  dpr={[1, 2]}
                  camera={{ position: [0, 0, 4.2], fov: 45 }}
                  className="w-full h-full"
                >
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[5, 10, 5]} intensity={1.5} color="#F8FAFC" />
                  <pointLight position={[-5, -5, -5]} intensity={0.5} color="#38BDF8" />
                  <pointLight position={[0, 2, 2]} intensity={1.2} color="#10B981" />

                  <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.2}>
                    <Center position={[0, 0.1, 0]}>
                      <BiomechanicalMannequin selectedId={selectedPoint.id} />

                      {/* Hotpoints */}
                      {ANATOMICAL_POINTS.map((pt) => (
                        <Hotpoint
                          key={pt.id}
                          point={pt}
                          isSelected={selectedPoint.id === pt.id}
                          onSelect={(p) => setSelectedPoint(p)}
                        />
                      ))}
                    </Center>
                  </Float>

                  <OrbitControls
                    ref={controlsRef}
                    enablePan={false}
                    minDistance={2.5}
                    maxDistance={6.0}
                    maxPolarAngle={Math.PI / 1.7}
                    minPolarAngle={Math.PI / 4}
                    dampingFactor={0.08}
                  />
                </Canvas>
              </Suspense>

              {/* Interaction instructions helper */}
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-400 text-[11px] px-3 py-1.5 rounded-full flex items-center gap-2 pointer-events-none">
                <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                <span>Drag to rotate • Scroll to zoom • Click glowing nodes</span>
              </div>
            </div>

            {/* Quick Node Badges below canvas for fast mobile navigation */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80 z-10">
              {ANATOMICAL_POINTS.map((pt) => {
                const active = selectedPoint.id === pt.id;
                return (
                  <button
                    key={pt.id}
                    onClick={() => setSelectedPoint(pt)}
                    className={`text-[11px] px-2.5 py-1 rounded-md transition-all font-medium ${
                      active
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {pt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Clinical Pathway Card for Selected Hotspot */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-elevated border border-slate-100 flex flex-col justify-between">
            <div>
              {/* Region & Modality Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                  {selectedPoint.region}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-forest-50 text-forest-700 border border-forest-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {selectedPoint.recommendedModality}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {selectedPoint.label}
              </h3>

              {/* Common Conditions */}
              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-forest-600" />
                  Common Diagnoses Treated
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selectedPoint.commonConditions.map((cond, i) => (
                    <span
                      key={i}
                      className="bg-sand-100/80 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium border border-sand-200"
                    >
                      {cond}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clinical Presentation / Symptoms */}
              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-forest-600" />
                  Typical Symptoms
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {selectedPoint.symptoms.map((sym, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest-600 mt-1.5 flex-shrink-0" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Evidence-Based Treatment Approach */}
              <div className="mt-5 p-3.5 rounded-2xl bg-forest-50/60 border border-forest-100">
                <h4 className="text-xs font-bold text-forest-900 uppercase tracking-wider">
                  The Healthy Body Approach
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-forest-800/90 leading-relaxed">
                  {selectedPoint.treatmentApproach}
                </p>
              </div>

              {/* Recovery Timeline */}
              <div className="mt-5 flex items-center gap-3 p-3 rounded-xl bg-sand-100/60 border border-sand-200">
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-forest-700 shadow-sm flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Expected Recovery Horizon
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900">
                    {selectedPoint.recoveryTimeline}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onBookCondition && onBookCondition(selectedPoint.label)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Book Consult for {selectedPoint.label}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
