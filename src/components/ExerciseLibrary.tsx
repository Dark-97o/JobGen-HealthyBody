import React, { useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  Flame, 
  Target, 
  ShieldAlert, 
  Activity 
} from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  category: 'Spine & Core' | 'Shoulder & Neck' | 'Knee & Ankle' | 'Mobility';
  targetMuscle: string;
  dosage: string;
  tempo: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  cues: string[];
  caution: string;
  image: string;
}

const EXERCISES: Exercise[] = [
  {
    id: 'mcgill-bird-dog',
    title: 'McGill Bird-Dog Core Stabiliser',
    category: 'Spine & Core',
    targetMuscle: 'Multifidus, Gluteus Maximus & Erector Spinae',
    dosage: '3 sets of 6 reps per side (hold 5-8 seconds each)',
    tempo: 'Slow controlled 6s isometric hold',
    difficulty: 'Beginner',
    description: 'Gold-standard spinal stabilization exercise developed by Dr. Stuart McGill. Builds endurance in deep lumbar stabilizing musculature without subjecting the lower back discs to painful flexion compressive loads.',
    cues: [
      'Begin on hands and knees with hands under shoulders, knees under hips.',
      'Brace your abdominal wall as if bracing for a light punch—do not hollow.',
      'Simultaneously reach your right arm forward and left leg straight back.',
      'Imagine drawing a line from fingers to heel; keep pelvis completely level.',
    ],
    caution: 'Avoid hyperextending your lower back or lifting your leg higher than hip level.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'scap-wall-slide',
    title: 'Serratus Anterior Wall Slide with Foam Roller',
    category: 'Shoulder & Neck',
    targetMuscle: 'Serratus Anterior & Lower Trapezius',
    dosage: '3 sets of 10-12 repetitions',
    tempo: '2s concentric upward, 3s controlled descent',
    difficulty: 'Intermediate',
    description: 'Restores upward scapular rotation and eliminates shoulder subacromial impingement by teaching the shoulder blade to glide smoothly around the thoracic rib cage.',
    cues: [
      'Place forearms against a roller or wall at eye level in a slight V-shape.',
      'Protract your shoulder blades gently (push your sternum back away from wall).',
      'Slowly slide upward until arms are overhead without letting lower back arch.',
      'Hold the peak overhead position for 1 second, feeling the lateral ribcage engage.',
    ],
    caution: 'Do not shrug your upper traps toward your ears; maintain long neck posture.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hsr-calf-raise',
    title: 'Heavy-Slow Resistance Calf Raise',
    category: 'Knee & Ankle',
    targetMuscle: 'Gastrocnemius & Achilles Tendon Complex',
    dosage: '4 sets of 8 repetitions (3s up / 3s down)',
    tempo: '3-0-3 (3 seconds lifting, 0s pause, 3 seconds lowering)',
    difficulty: 'Intermediate',
    description: 'Evidence-based tendinopathy protocol based on Alfredson & Jill Cook research. Imparts tensile mechanical strain to stimulate collagen renewal and remodel degenerated tendon tissue.',
    cues: [
      'Stand with balls of both feet on an elevated step or flat floor.',
      'Take 3 full seconds to rise all the way onto toes, pushing through the big toe knuckle.',
      'Take 3 full seconds to lower under strict muscular deceleration.',
      'Progress to single-leg loading once pain-free.',
    ],
    caution: 'Avoid bouncy or ballistic bouncing at the bottom of the movement.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'thoracic-extension',
    title: 'Thoracic Foam Roller Extension & Breathing',
    category: 'Mobility',
    targetMuscle: 'Thoracic Spine & Anterior Chest Wall',
    dosage: '2 minutes (5 breaths per spinal segment)',
    tempo: 'Relaxed rhythmic diaphragmatic breathing',
    difficulty: 'Beginner',
    description: 'Reverses the postural slump of long desk hours and driving. Mobilises stiff mid-back joints to take excessive mechanical stress off the neck and lower back.',
    cues: [
      'Place foam roller horizontally across mid-back (bra-strap line).',
      'Support head with interlocked fingers; keep pelvis planted on the floor.',
      'Inhale deeply; on gentle exhale, allow upper back to gently extend over roller.',
      'Do not crank your neck; pivot solely from your thoracic cage.',
    ],
    caution: 'Never place the foam roller under your lower back (lumbar spine).',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80',
  },
];

export const ExerciseLibrary: React.FC = () => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise>(EXERCISES[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(45);

  const categories = ['All', 'Spine & Core', 'Shoulder & Neck', 'Knee & Ankle', 'Mobility'];

  const filtered = activeCategory === 'All' 
    ? EXERCISES 
    : EXERCISES.filter(e => e.category === activeCategory);

  const handleStartTimer = () => {
    setSeconds(45);
    setTimerRunning(true);
  };

  React.useEffect(() => {
    let interval: any = null;
    if (timerRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setTimerRunning(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning, seconds]);

  return (
    <section className="py-24 bg-sand-50/70 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-forest-200">
            <Activity className="w-3.5 h-3.5 text-forest-600" />
            Physio-Pedia Inspired Movement Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            At-Home Rehabilitation & <br className="hidden sm:inline" />
            <span className="text-forest-700 italic font-serif">Motor Control Protocols</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Accurate exercise execution is the difference between lasting recovery and chronic relapse. Review clinical form cues prescribed by our senior physiotherapists.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-sand-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Master-Detail Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Exercise List */}
          <div className="lg:col-span-5 space-y-3">
            {filtered.map((item) => {
              const isSelected = item.id === selectedExercise.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedExercise(item)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all relative ${
                    isSelected
                      ? 'bg-white border-forest-600 shadow-elevated ring-1 ring-forest-500/20'
                      : 'bg-sand-50 hover:bg-white text-slate-700 border-sand-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-forest-700 bg-forest-50 px-2 py-0.5 rounded border border-forest-100">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {item.difficulty}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-forest-600" />
                    <span className="truncate">{item.targetMuscle}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Exercise View with Built-in Dosage Timer */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-sand-300 shadow-elevated space-y-6">
            {/* Visual Header Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 shadow-inner">
              <img
                src={selectedExercise.image}
                alt={selectedExercise.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold text-emerald-300">
                    Clinical Motor Prescription
                  </span>
                  <div className="text-lg font-bold">{selectedExercise.title}</div>
                </div>

                {/* Built-in Tempo / Set Timer */}
                <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-sm font-bold">
                    {seconds}s
                  </span>
                  <button
                    type="button"
                    onClick={handleStartTimer}
                    className="p-1 rounded-md bg-forest-700 hover:bg-forest-600 text-white text-[11px] font-bold px-2"
                  >
                    {timerRunning ? 'Reset' : 'Start'}
                  </button>
                </div>
              </div>
            </div>

            {/* Dosage & Tempo Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-sand-50 border border-sand-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-0.5">
                  <Flame className="w-3.5 h-3.5 text-forest-700" />
                  Recommended Dosage
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {selectedExercise.dosage}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-sand-50 border border-sand-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-0.5">
                  <Clock className="w-3.5 h-3.5 text-forest-700" />
                  Prescribed Tempo
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {selectedExercise.tempo}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Clinical Rationale
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedExercise.description}
              </p>
            </div>

            {/* Step-by-Step Form Cues */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-forest-700" />
                Key Technique & Execution Cues
              </h4>
              <div className="space-y-2">
                {selectedExercise.cues.map((cue, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-forest-100 text-forest-900 font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{cue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Caution */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-amber-900">
                <span className="font-bold">Clinical Caution: </span>
                {selectedExercise.caution}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
