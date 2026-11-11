# The Healthy Body Company — Modern Redesign & React Web Application

A modern, evidence-based React web application redesign for **[The Healthy Body Company](https://www.thehealthybodycompany.com.au/)**, Sydney’s established multi-disciplinary physiotherapy and sports rehabilitation practice (Est. 1998, with clinics in **Penrith, Caringbah, Jordan Springs, and Mount Annan**).

---

## 🌟 Design Synthesis & Reference Architecture

This redesign fuses best-in-class concepts from top-tier physiotherapy, wellness, and medical digital experiences:

1. **[Limitless Physio](https://limitless.physio/) — High-Performance Athletic Modernism**
   - High-contrast typography with modern editorial rhythm.
   - Dynamic clinic metrics (28,000+ patients treated, 26+ years of practice, 4.9★ rating).
   - Clear focus on active rehabilitation in on-site gyms rather than passive treatment.

2. **[Yogi Showcase](https://yogitemplate-showcase.webflow.io/) — Serene, Human-Centered Wellness Aesthetic**
   - Calming, earth-mineral palette: warm sandstone (`#FBF9F5`, `#FAF8F5`), deep forest emerald (`#143427`, `#2D6E4F`), and soft sage accents.
   - Generous whitespace, refined Newsreader editorial serif paired with Plus Jakarta Sans geometric typography.

3. **[Fiziopont](https://fiziopont---website-project.webflow.io/) — Kinetic Biomechanical Navigation & Triage**
   - Interactive diagnostic workflow: Patients select symptoms or target problem areas to instantly view clinical explanations and matched modalities.
   - 4-Step Clinical Pathway: From acute diagnosis to hands-on relief, gym loading, and lifelong resilience.

4. **[Physio-Pedia](https://www.physio-pedia.com/) — Evidence-Based Clinical Transparency**
   - Transparent rehabilitation milestone simulator (e.g. Melbourne ACL Return-to-Play, Lumbar Disc Herniation, Achilles Tendinopathy HSR).
   - Objective progression criteria (dynamometry, limb symmetry index, ROM).

---

## ⚡ Core Features & Interactive Capabilities

### 1. 3D Interactive Biomechanical Body Navigator (React Three Fiber)
- Built with **`@react-three/fiber`** and **`@react-three/drei`**.
- Features a spatial anatomical mannequin with articulated spine, cervical vertebra, rib cage, lumbar chain, and kinetic joint hinges.
- **Interactive 3D Hotspots**:
  - Cervical Spine & Neck
  - Shoulder & Rotator Cuff
  - Lumbar Spine & Lower Back
  - Hip & Pelvis
  - Knee & Patellofemoral
  - Ankle & Plantar Complex
- OrbitControls with damped rotation, zoom constraints, multi-angle camera switchers (Anterior/Front, Posterior/Spine, Sagittal/Side), and real-time clinical diagnostic data feed.

### 2. Interactive Symptom & Goal Triage Care Matcher
- Patients can self-identify concerns:
  - Acute Sports Injuries
  - Back, Neck or Sciatica Pain
  - Post-Surgical Orthopaedic Rehab
  - Chronic Tendon Pain (Plantar Fasciitis / Achilles)
  - TMJ Jaw Pain, Vertigo or Headaches
  - Workplace (SIRA) & Motor Vehicle (CTP) Claims
- Dynamically recommends the lead practitioner specialist, expected recovery horizon, first-session assessment steps, and specialized tools.

### 3. Comprehensive Services Matrix
- Filterable by: *Sports & Performance*, *Spine & Musculoskeletal*, *Post-Op & Pilates*, *Shockwave & TMJ*, and *Remedial Massage*.
- Displays clinical indications, hands-on techniques, session durations, and HICAPS rebate eligibility.

### 4. 4-Step Clinical Pathway
1. **Deep Biomechanical Diagnosis** (45-min one-on-one audit)
2. **Targeted Hands-On Alleviation** (Joint mobilisations, soft tissue, dry needling)
3. **Active Rehab in Our On-Site Gym** (Heavy-slow resistance, Pilates reformer, Vald dynamometry)
4. **Return to Life, Sport & Work** (Objective milestone clearance, long-term resilience)

### 5. Multi-Clinic Network Hub (Sydney)
Detailed live profiles with hours, parking advice, direct lines, and Google Maps directions for:
- **Penrith Flagship Clinic & Rehab Gym** (95 Lethbridge St)
- **Caringbah Practice** (Suite 2, 383 Port Hacking Rd)
- **Jordan Springs Clinic** (63 Watergum Dr)
- **Mount Annan Practice** (Shop 17, Mount Annan Central)

### 6. Practitioner Leadership Showcase
- **Jude Holroyd** — Practice Principal & Co-Founder (26+ yrs experience)
- **Stephen Cunningham** — Clinical Director (Master of Sports Physio, Brothers Penrith & Nepean FC partner)
- **Emma Taylor** — Senior Musculoskeletal Physio & Polestar Pilates Lead (Caringbah)
- **David Campbell** — Senior Physio & WorkCover SIRA Specialist (Mount Annan)

### 7. Interactive Multi-Step Booking & HICAPS Rebate Calculator Modal
- Step-by-step triage: Choose Clinic -> Choose Service -> Select Preferred Time.
- **Live Health Fund Rebate Estimator**: Select from Bupa, Medibank, HCF, NIB, CBHS, Teachers Health, etc., to see estimated fund rebates and out-of-pocket gap calculations.
- Instant SMS & email confirmation flow with celebratory confetti animation (`canvas-confetti`).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v3 with custom palette (`forest`, `sage`, `sand`, `athletic`)
- **3D Graphics & Canvas**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Icons**: Lucide React
- **Animations**: CSS keyframe transitions & `canvas-confetti`

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build
npm run build
```

The application runs locally on `http://127.0.0.1:5173/`.
