export interface ClinicLocation {
  id: string;
  name: string;
  region: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  features: string[];
  description: string;
  parkingInfo: string;
  leadClinician: string;
  rating: number;
  reviewCount: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'physio' | 'sports' | 'rehab' | 'specialized' | 'wellness';
  badge: string;
  shortDesc: string;
  fullDesc: string;
  indications: string[];
  techniques: string[];
  duration: string;
  rebateEligible: boolean;
  featured?: boolean;
}

export interface AnatomicalPoint {
  id: string;
  label: string;
  region: string;
  position3D: [number, number, number];
  commonConditions: string[];
  symptoms: string[];
  treatmentApproach: string;
  recoveryTimeline: string;
  recommendedModality: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  credentials: string;
  experience: string;
  locations: string[];
  specialties: string[];
  bio: string;
  avatar: string;
}

export interface RecoveryProtocol {
  id: string;
  condition: string;
  category: string;
  estimatedWeeks: number;
  phases: {
    phase: string;
    timeline: string;
    focus: string;
    interventions: string[];
    milestoneCriteria: string;
  }[];
  clinicalEvidence: string;
}

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'penrith',
    name: 'Penrith Flagship Clinic & Rehab Gym',
    region: 'Greater Western Sydney',
    address: '95 Lethbridge Street',
    suburb: 'Penrith',
    state: 'NSW',
    postcode: '2750',
    phone: '(02) 4722 5555',
    email: 'penrith@thehealthybodycompany.com.au',
    hours: {
      weekdays: '7:30 AM – 7:30 PM',
      friday: '7:30 AM – 6:00 PM',
      saturday: '8:00 AM – 1:00 PM',
      sunday: 'Closed',
    },
    features: ['Fully-Equipped Rehab Gym', 'Shockwave Therapy', 'Orthopaedic Casting', 'Sports Club Testing Lab', 'Private Treatment Suites'],
    description: 'Serving the Penrith and Nepean community for over 25 years. Features our state-of-the-art rehabilitation gym, biomechanical assessment bay, and immediate parking.',
    parkingInfo: 'Dedicated rear patient parking accessible via Lethbridge St, plus convenient on-street parking.',
    leadClinician: 'Stephen Cunningham (Clinical Director)',
    rating: 4.9,
    reviewCount: 428,
  },
  {
    id: 'caringbah',
    name: 'Caringbah Practice',
    region: 'Sutherland Shire',
    address: 'Suite 2, 383 Port Hacking Road',
    suburb: 'Caringbah',
    state: 'NSW',
    postcode: '2229',
    phone: '(02) 9524 4400',
    email: 'caringbah@thehealthybodycompany.com.au',
    hours: {
      weekdays: '8:00 AM – 7:00 PM',
      friday: '8:00 AM – 5:00 PM',
      saturday: '7:30 AM – 12:30 PM',
      sunday: 'Closed',
    },
    features: ['Clinical Pilates Studio', 'Remedial Massage Suites', 'Running Gait Video Analysis', 'Post-Op Knee/Hip Rehab'],
    description: 'A vibrant clinic in the heart of Sutherland Shire, delivering world-class sports physio, spinal rehabilitation, and hands-on musculoskeletal therapy.',
    parkingInfo: 'Basement visitor parking with lift access, plus ample free Council parking nearby.',
    leadClinician: 'Emma Taylor (Senior Sports Physio)',
    rating: 4.9,
    reviewCount: 312,
  },
  {
    id: 'jordan-springs',
    name: 'Jordan Springs Clinic',
    region: 'Penrith City District',
    address: '63 Watergum Drive',
    suburb: 'Jordan Springs',
    state: 'NSW',
    postcode: '2747',
    phone: '(02) 4702 0222',
    email: 'jordansprings@thehealthybodycompany.com.au',
    hours: {
      weekdays: '8:00 AM – 7:00 PM',
      friday: '8:00 AM – 5:30 PM',
      saturday: '8:00 AM – 1:00 PM',
      sunday: 'Closed',
    },
    features: ['Paediatric & Youth Sports Care', 'Spine & Posture Lab', 'Exercise Physiology', 'HICAPS Instant Claims'],
    description: 'Modern family and sports health practice founded by Jude Holroyd. Offering specialized care from youth sports injuries to chronic back pain management.',
    parkingInfo: 'Abundant ground-level parking directly adjacent to the medical centre.',
    leadClinician: 'Jude Holroyd (Practice Principal)',
    rating: 4.9,
    reviewCount: 295,
  },
  {
    id: 'mount-annan',
    name: 'Mount Annan Practice',
    region: 'Macarthur Region',
    address: 'Shop 17, Mount Annan Central, 11-13 Main Street',
    suburb: 'Mount Annan',
    state: 'NSW',
    postcode: '2567',
    phone: '(02) 4647 8880',
    email: 'mountannan@thehealthybodycompany.com.au',
    hours: {
      weekdays: '8:00 AM – 7:00 PM',
      friday: '8:00 AM – 5:00 PM',
      saturday: '8:00 AM – 12:30 PM',
      sunday: 'Closed',
    },
    features: ['Senior Falls & Balance Classes', 'WorkCover SIRA Certified', 'NDIS Accredited', 'Hydrotherapy Referrals'],
    description: 'Providing comprehensive physiotherapy and allied health care to the Macarthur region with an emphasis on functional recovery and chronic disease support.',
    parkingInfo: 'Direct parking lot with level wheelchair-accessible entry in Mount Annan Central.',
    leadClinician: 'David Campbell (Senior Musculoskeletal Physio)',
    rating: 4.8,
    reviewCount: 219,
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'sports-physio',
    title: 'Musculoskeletal & Sports Physiotherapy',
    category: 'sports',
    badge: 'Flagship Service',
    shortDesc: 'Rapid acute diagnosis, targeted hands-on therapy, and progressive return-to-play conditioning.',
    fullDesc: 'Whether you are an elite athlete competing at state level or a weekend warrior enjoying local touch rugby, our evidence-based sports physiotherapy gets you back to peak performance faster and safer. We combine joint mobilisations, soft tissue release, dry needling, and sports-specific loading drills in our dedicated gyms.',
    indications: ['Hamstring & groin strains', 'Ankle sprains & ligament tears', 'Rotator cuff & shoulder impingement', 'Tennis & golfer’s elbow', 'Patellar & Achilles tendinopathy'],
    techniques: ['Biomechanical video analysis', 'Active joint mobilisation', 'Dry needling & trigger point work', 'Isometric & eccentric strength load testing', 'Taping & strapping protocols'],
    duration: '45 min initial / 30 min follow-up',
    rebateEligible: true,
    featured: true,
  },
  {
    id: 'spine-neck',
    title: 'Spinal, Lower Back & Neck Rehabilitation',
    category: 'physio',
    badge: 'High Demand',
    shortDesc: 'Evidence-led care for sciatica, herniated discs, postural strain, and stubborn chronic back pain.',
    fullDesc: 'Back and neck pain are the leading causes of physical limitation in Australia. Our structured spinal pathway shifts you from acute crisis and nerve irritation to core stabilization and lifelong posture resilience without reliance on repetitive passive cracking.',
    indications: ['Lumbar disc bulge / herniation', 'Sciatica and shooting leg pain', 'Cervicogenic headaches & neck stiffness', 'Facet joint arthropathy', 'Postural fatigue from desk work'],
    techniques: ['McKenzie mechanical assessment', 'Gentle Maitland spinal mobilisations', 'Deep core & transverse abdominis motor retraining', 'Ergonomic workstation audits', 'Neural flossing & nerve mobilisation'],
    duration: '45 min initial / 30 min follow-up',
    rebateEligible: true,
    featured: true,
  },
  {
    id: 'post-op-rehab',
    title: 'Post-Surgical Orthopaedic Rehabilitation',
    category: 'rehab',
    badge: 'Specialist Protocols',
    shortDesc: 'Structured milestone-driven recovery for ACL reconstructions, joint replacements, and shoulder repairs.',
    fullDesc: 'Surgery is only the first half of your healing journey. Our clinical directors collaborate directly with Sydney’s leading orthopaedic surgeons to guide you through phased milestones: controlling joint effusion, restoring ROM, rebuild quadriceps/glute volume, and passing return-to-sport testing.',
    indications: ['ACL / PCL & meniscus reconstructions', 'Total knee and total hip arthroplasty', 'Rotator cuff repairs & labral repairs', 'Ankle syndesmosis surgery', 'Spinal microdiscectomy & fusions'],
    techniques: ['Cryo-compression & swelling control', 'Early passive-to-active range restoration', 'Force-plate & dynamometer strength testing', 'Proprioceptive neuro-muscular retraining', 'Surgeon milestone sign-off reports'],
    duration: '45 min initial / 30-45 min follow-up',
    rebateEligible: true,
    featured: true,
  },
  {
    id: 'shockwave-therapy',
    title: 'Radial Shockwave Therapy (ESWT)',
    category: 'specialized',
    badge: 'Advanced Modality',
    shortDesc: 'Acoustic shockwave technology that reactivates cellular healing in chronic, stubborn tendinopathies.',
    fullDesc: 'Shockwave therapy delivers high-energy acoustic pulses to chronically degenerated tendon fibers. It stimulates neovascularisation, dissolves calcium deposits, and significantly dampens substance P pain receptors. Most patients experience breakthrough relief in 3 to 5 targeted sessions.',
    indications: ['Plantar fasciitis & heel spurs', 'Calcific tendinitis of the shoulder', 'Achilles tendinopathy', 'Greater trochanteric pain (hip bursitis)', 'Patellar tendinitis (Jumper’s knee)'],
    techniques: ['Swiss EMS DolorClast shockwave system', 'High-frequency acoustic stimulation', 'Coupled with eccentric loading prescription', 'Tendon thickness monitoring'],
    duration: '30 min session',
    rebateEligible: true,
    featured: false,
  },
  {
    id: 'clinical-pilates',
    title: 'Clinical Pilates & Exercise Physiology',
    category: 'rehab',
    badge: '1-on-1 & Small Group',
    shortDesc: 'Physiotherapist-guided reformer and mat exercises for core control, pelvic stability, and injury prevention.',
    fullDesc: 'Unlike commercial gym reformer classes, our clinical pilates is individually prescribed following a detailed musculoskeletal audit. We isolate weak stabilizer muscle groups, correct kinetic chain asymmetries, and rebuild movement confidence in a safe, monitored setting.',
    indications: ['Post-rehab spine conditioning', 'Pelvic girdle instability', 'Prenatal & postpartum core weakness', 'Hypermobility spectrum disorders', 'Chronic posture deficiencies'],
    techniques: ['Reformer, Trapeze & Wunda chair exercises', 'Real-time ultrasound biofeedback', 'Individual movement pattern recalibration', 'Small group (max 4:1) precision focus'],
    duration: '45 min private / 45 min small group',
    rebateEligible: true,
    featured: false,
  },
  {
    id: 'tmj-vertigo',
    title: 'TMJ Jaw Pain, Vertigo & Vestibular Rehab',
    category: 'specialized',
    badge: 'Sub-Specialty',
    shortDesc: 'Targeted treatment for jaw clicking, clenching, BPPV vertigo, balance deficits, and dizziness.',
    fullDesc: 'Our specialized practitioners treat complex cranial and vestibular conditions. From Epley repositioning maneuvers for crystals in the inner ear to intra-oral myofascial release for severe jaw clenching and temporomandibular joint displacement.',
    indications: ['BPPV (Benign Paroxysmal Positional Vertigo)', 'TMJ clicking, locking & jaw pain', 'Teeth grinding (bruxism) related headaches', 'Post-concussion vestibular balance issues', 'Labyrinthitis & vestibular neuritis'],
    techniques: ['Dix-Hallpike & Epley repositioning', 'Intra-oral pterygoid & masseter release', 'Vestibulo-ocular reflex (VOR) drills', 'Cervicogenic balance recalibration'],
    duration: '45 min initial / 30 min follow-up',
    rebateEligible: true,
    featured: false,
  },
  {
    id: 'remedial-massage',
    title: 'Remedial Massage & Soft Tissue Therapy',
    category: 'wellness',
    badge: 'Restorative Care',
    shortDesc: 'Deep muscle release, lymphatic drainage, and trigger point therapy by qualified remedial therapists.',
    fullDesc: 'Complement your physical therapy with focused remedial soft tissue restoration. Our certified therapists work hand-in-hand with your physiotherapist to release chronic muscular tension, improve local circulation, and facilitate deep neuromuscular relaxation.',
    indications: ['Severe muscle tension & knots', 'Work-related postural fatigue', 'Pre-competition sports flushing', 'Pregnancy muscular strain', 'Chronic tension headaches'],
    techniques: ['Myofascial release', 'Trigger point deactivation', 'Deep tissue structural massage', 'Passive assisted stretching'],
    duration: '30 / 60 / 90 min options',
    rebateEligible: true,
    featured: false,
  },
  {
    id: 'workcover-ndis',
    title: 'Workers Compensation (SIRA) & NDIS Care',
    category: 'specialized',
    badge: 'Accredited Schemes',
    shortDesc: 'Streamlined rehabilitation and return-to-work coordination for workplace injuries and NDIS participants.',
    fullDesc: 'We have 25+ years of experience partnering with insurers, case managers, GPs, and employers across NSW. We provide rapid case approvals, thorough functional capacity evaluations, and supportive care plans with zero out-of-pocket costs on approved claims.',
    indications: ['SIRA approved Workers Comp injuries', 'CTP motor vehicle accident injuries', 'NDIS self-managed & plan-managed goals', 'Department of Veterans’ Affairs (DVA)', 'Medicare EPC / Chronic Disease plans'],
    techniques: ['Functional capacity testing', 'Ergonomic return-to-work conditioning', 'Multi-party case conferencing', 'Goal-oriented NDIS outcome reporting'],
    duration: '45 min initial / 30 min follow-up',
    rebateEligible: true,
    featured: false,
  },
];

export const ANATOMICAL_POINTS: AnatomicalPoint[] = [
  {
    id: 'neck-cervical',
    label: 'Cervical Spine & Neck',
    region: 'Spine & Cranium',
    position3D: [0, 1.45, 0.15],
    commonConditions: ['Cervical Radiculopathy', 'Whip-lash & Neck Sprain', 'Cervicogenic Headaches', 'Tech-Neck Strain'],
    symptoms: ['Radiating numbness down arm', 'Sharp catching when turning head', 'Dull band-like occipital headaches', 'Shoulder blade aching'],
    treatmentApproach: 'Targeted cervical mobilisations, thoracic extension drills, deep neck flexor reactivation, posture ergonomics.',
    recoveryTimeline: '2 to 6 weeks for acute strain; 6 to 12 weeks for nerve root irritation',
    recommendedModality: 'Hands-on Physio & Posture Lab',
  },
  {
    id: 'shoulder-rotator',
    label: 'Shoulder & Rotator Cuff',
    region: 'Upper Limb',
    position3D: [-0.75, 1.15, 0.1],
    commonConditions: ['Supraspinatus Tendinopathy', 'Subacromial Impingement', 'Frozen Shoulder (Adhesive Capsulitis)', 'Labral Tear / SLAP'],
    symptoms: ['Pain when reaching overhead or behind back', 'Weakness lifting coffee mug', 'Night pain when sleeping on side', 'Clicking sensation'],
    treatmentApproach: 'Scapulothoracic rhythm correction, rotator cuff eccentric loading, glenohumeral capsular stretching, shockwave therapy.',
    recoveryTimeline: '4 to 8 weeks for tendinopathy; 12 to 24 weeks for frozen shoulder',
    recommendedModality: 'Sports Physio & Shockwave',
  },
  {
    id: 'lumbar-spine',
    label: 'Lumbar Spine & Lower Back',
    region: 'Core & Trunk',
    position3D: [0, 0.35, -0.05],
    commonConditions: ['Lumbar Disc Bulge', 'Sciatica & Nerve Compression', 'Facet Joint Arthropathy', 'Sacroiliac Joint Dysfunction'],
    symptoms: ['Sharp morning stiffness', 'Shooting electric pain down leg/buttock', 'Pain aggravated by prolonged sitting', 'Inability to bend forward'],
    treatmentApproach: 'McKenzie directional preference exercises, lumbar traction, core motor control, progressive hip hinge loading in rehab gym.',
    recoveryTimeline: '4 to 8 weeks for acute disc bulge; 8 to 14 weeks for chronic recurrent pain',
    recommendedModality: 'Spinal Rehab & Clinical Pilates',
  },
  {
    id: 'hip-pelvis',
    label: 'Hip & Pelvic Complex',
    region: 'Pelvis & Groin',
    position3D: [0.45, -0.15, 0.1],
    commonConditions: ['Greater Trochanteric Pain Syndrome (GTPS)', 'Femoroacetabular Impingement (FAI)', 'Hip Osteoarthritis', 'Adductor Tendinopathy'],
    symptoms: ['Lateral hip aching when lying in bed', 'Deep groin pinch when squatting or tying shoes', 'Stiffness after rising from car', 'Limping gait'],
    treatmentApproach: 'Gluteus medius strengthening, pelvic kinetic alignment, dry needling, load management, shockwave therapy for trochanteric bursitis.',
    recoveryTimeline: '6 to 12 weeks with structured strength protocols',
    recommendedModality: 'Exercise Physiology & Shockwave',
  },
  {
    id: 'knee-joint',
    label: 'Knee & Patellofemoral',
    region: 'Lower Limb',
    position3D: [-0.4, -0.95, 0.1],
    commonConditions: ['Patellofemoral Pain Syndrome (Runner’s Knee)', 'Meniscus Degeneration / Tears', 'Patellar Tendinopathy (Jumper’s Knee)', 'ACL Post-Op Recovery'],
    symptoms: ['Crepitus / crunching going down stairs', 'Pain directly behind kneecap after running', 'Swelling after sports matches', 'Giving-way feeling'],
    treatmentApproach: 'VMO & quadriceps isometric loading, hip abduction strength, dynamic landing mechanics, biomechanical gait analysis.',
    recoveryTimeline: '3 to 6 weeks for patellofemoral; 6 to 9 months for post-op ACL',
    recommendedModality: 'Rehab Gym & Gait Analysis',
  },
  {
    id: 'ankle-foot',
    label: 'Ankle & Plantar Complex',
    region: 'Foot & Lower Limb',
    position3D: [0.38, -1.8, 0.1],
    commonConditions: ['Plantar Fasciitis', 'Inversion Ankle Sprain (ATFL/CFL)', 'Achilles Tendinopathy', 'Tibialis Posterior Tendinopathy'],
    symptoms: ['First-step stabbing pain in morning heel', 'Instability on uneven ground or sports grass', 'Thickened tender Achilles tendon cord', 'Swollen lateral ankle'],
    treatmentApproach: 'High-energy shockwave therapy for plantar fascia, calf heavy-slow resistance training, balance wobble-board proprioception, supportive orthotics/taping.',
    recoveryTimeline: '2 to 4 weeks for mild sprain; 6 to 12 weeks for chronic plantar fasciitis',
    recommendedModality: 'Shockwave Therapy & Proprioception',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'jude-holroyd',
    name: 'Jude Holroyd',
    title: 'Practice Principal & Co-Founder',
    credentials: 'B.App.Sc (Physiotherapy) USYD, APAM',
    experience: '26+ Years Clinical Practice',
    locations: ['Jordan Springs', 'Penrith'],
    specialties: ['Spinal Pain & Complex Sciatica', 'Youth Sports Development', 'Clinical Mentorship', 'Post-Surgical Protocols'],
    bio: 'Jude co-founded The Healthy Body Company with the goal of creating an empowering, patient-first clinic. With over two decades of clinical experience in Sydney, Jude combines hands-on manual techniques with active functional rehabilitation.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'stephen-cunningham',
    name: 'Stephen Cunningham',
    title: 'Clinical Director & Principal Physiotherapist',
    credentials: 'B.Physiotherapy (Hons), Master of Sports Physio, APAM',
    experience: '18+ Years Clinical Practice',
    locations: ['Penrith Flagship'],
    specialties: ['Elite Sports Injury Rehab', 'Shoulder & Rotator Cuff', 'Knee Reconstruction / ACL', 'High Performance Loading'],
    bio: 'As Clinical Director at our flagship Penrith clinic, Stephen oversees our clinical quality frameworks and sporting partnerships (including Brothers Penrith JRLC & Nepean FC). He is passionate about getting athletes back on the pitch stronger than before.',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'emma-taylor',
    name: 'Emma Taylor',
    title: 'Senior Musculoskeletal & Sports Physio',
    credentials: 'B.Physiotherapy, Certified Clinical Pilates (Polestar)',
    experience: '12+ Years Clinical Practice',
    locations: ['Caringbah (Sutherland Shire)'],
    specialties: ['Clinical Pilates', 'Running Biomechanics', 'Hip & Pelvic Instability', 'Dry Needling'],
    bio: 'Based at Caringbah, Emma blends cutting-edge biomechanical video analysis with Polestar Pilates rehab to fix faulty kinetic movement chains in runners, swimmers, and desk workers alike.',
    avatar: 'https://images.unsplash.com/photo-1594824813571-638f0263613a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'david-campbell',
    name: 'David Campbell',
    title: 'Senior Physiotherapist & WorkCover Specialist',
    credentials: 'B.App.Sc (Physiotherapy), SIRA Accredited',
    experience: '14+ Years Clinical Practice',
    locations: ['Mount Annan', 'Penrith'],
    specialties: ['Workplace Injury Rehabilitation', 'TMJ Jaw Dysfunction', 'BPPV / Vestibular Therapy', 'Chronic Pain Management'],
    bio: 'David leads our occupational health and complex chronic conditions stream. He has successfully helped hundreds of injured workers achieve durable, safe return-to-work outcomes through structured functional conditioning.',
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
  },
];

export const RECOVERY_PROTOCOLS: RecoveryProtocol[] = [
  {
    id: 'acl-rehab',
    condition: 'Post-Op ACL Reconstruction Protocol',
    category: 'Surgical Rehabilitation',
    estimatedWeeks: 38,
    clinicalEvidence: 'Based on Melbourne ACL Rehabilitation Guide & Delaware-Oslo Cohort Evidence. Reduces re-injury rate from 24% to under 6% when strictly milestone-guided.',
    phases: [
      {
        phase: 'Phase 1: Protection & Swelling Control',
        timeline: 'Weeks 0 – 2',
        focus: 'Achieve full passive knee extension (0°), reduce joint effusion, and achieve active quadriceps contraction.',
        interventions: ['Cryotherapy & elevation protocols', 'Patellar mobilisations', 'Isometric quad sets & straight leg raises', 'Crutch weaning with normal heel-to-toe gait'],
        milestoneCriteria: 'Full knee extension equal to uninjured limb; trace or zero effusion; lag-free straight leg raise.',
      },
      {
        phase: 'Phase 2: Early Strength & Range of Motion',
        timeline: 'Weeks 2 – 6',
        focus: 'Restore knee flexion past 120°, begin closed-chain kinetic loading, normalize symmetrical walking.',
        interventions: ['Stationary cycling with zero resistance', 'Leg press (bilateral transitioning to eccentric single-leg)', 'Glute bridging & calf raises', 'Balance pad proprioception'],
        milestoneCriteria: 'Knee flexion > 125°; pain-free normal stair descent; symmetrical quad activation.',
      },
      {
        phase: 'Phase 3: Progressive Hypertrophy & Plyometrics',
        timeline: 'Weeks 6 – 16',
        focus: 'Rebuild isolated quadriceps and hamstring muscle volume; introduce linear jumping and light deceleration.',
        interventions: ['Open-chain knee extensions (90°–45° safety range)', 'Romanian deadlifts and Bulgarian split squats', 'Linear running re-introduction on treadmill at week 12', 'Double-to-single leg hop mechanics'],
        milestoneCriteria: 'Limb Symmetry Index (LSI) > 75% on dynamometer; zero swelling reaction post-running.',
      },
      {
        phase: 'Phase 4: Sports-Specific Agility & Return-to-Play',
        timeline: 'Weeks 16 – 38',
        focus: 'Multi-directional cutting, high-velocity deceleration, reactive sport simulations, psychological readiness.',
        interventions: ['T-test & 505 agility drills with cognitive stimuli', 'Maximal triple hop for distance test', 'Contact drills and sport scrimmage integration', 'ACL-RSI psychological questionnaire'],
        milestoneCriteria: 'LSI > 90% across all 4 hop tests; surgeon formal discharge; ACL-RSI score > 80.',
      },
    ],
  },
  {
    id: 'lumbar-disc',
    condition: 'Lumbar Disc Herniation & Sciatica Recovery',
    category: 'Spine & Nerve Pathways',
    estimatedWeeks: 10,
    clinicalEvidence: '90% of lumbar disc herniations resolve successfully without surgery when treated with directional preference mechanical therapy and graded progressive spinal loading.',
    phases: [
      {
        phase: 'Phase 1: Centralisation & Decompression',
        timeline: 'Weeks 0 – 2',
        focus: 'Centralize peripheral leg/foot tingling back toward the spine; eliminate antalgic scoliosis shift.',
        interventions: ['McKenzie prone extension in lying', 'Gentle lateral shift corrections', 'Pacing strategies (avoid prolonged slouched sitting)', 'Gentle neurodynamic sciatic flossing'],
        milestoneCriteria: 'Abolition of distal leg numbness; ability to stand straight without antalgic tilt.',
      },
      {
        phase: 'Phase 2: Trunk Stabilisation & Neutral Control',
        timeline: 'Weeks 2 – 5',
        focus: 'Train deep transverse abdominis and multifidus bracing without spinal flexion intolerance.',
        interventions: ['Deadbugs & Bird-Dog progressions', 'Side-lying planks with neutral spine', 'Hip hinge mechanics retraining (sparing the lumbar spine)', 'Brisk walking program (20-30 min daily)'],
        milestoneCriteria: 'Holding neutral spine during sit-to-stand; pain score reduced by > 50%.',
      },
      {
        phase: 'Phase 3: Functional Load Capacity & Lifelong Resilience',
        timeline: 'Weeks 5 – 10',
        focus: 'Progress from neutral protection to multi-planar movement, lifting tolerance, and recreational return.',
        interventions: ['Kettlebell deadlifts with optimal hip dominant form', 'Farmer’s walks for anti-rotation core stability', 'Return to running / tennis / gardening drills', 'Workplace ergonomics certification'],
        milestoneCriteria: 'Full unrestricted pain-free daily activities; lifting 20kg without hesitation.',
      },
    ],
  },
  {
    id: 'achilles-tendon',
    condition: 'Achilles Tendinopathy Heavy-Load Protocol',
    category: 'Tendon Architecture',
    estimatedWeeks: 12,
    clinicalEvidence: 'Based on Jill Cook & Alfredson Tendon Continuum model. Tendons require progressive mechanical tensile strain rather than prolonged total rest.',
    phases: [
      {
        phase: 'Phase 1: Pain Inhibition & Isometrics',
        timeline: 'Weeks 0 – 2',
        focus: 'Calm cortical inhibition and acute tendon pain with sustained isometric holds without tendon compression.',
        interventions: ['Mid-range isometric calf holds (5 x 45s holds @ 70% MVC)', 'Radial shockwave therapy session 1 & 2', 'Temporary heel-lift insert in sports footwear', 'Cessation of high-speed stretch-shortening cycles'],
        milestoneCriteria: 'Morning tendon stiffness duration reduced from 30 mins to under 5 mins.',
      },
      {
        phase: 'Phase 2: Heavy-Slow Resistance (HSR)',
        timeline: 'Weeks 2 – 7',
        focus: 'Stimulate collagen tenocyte synthesis and improve tendon tensile stiffness using 3-second concentric / 3-second eccentric loads.',
        interventions: ['Seated soleus calf raise (3 sets of 8 RM)', 'Standing gastrocnemius calf raise off flat floor', 'Shockwave sessions 3 & 4', 'Low impact cycling & incline walking'],
        milestoneCriteria: 'Tolerating 1.5x bodyweight single-leg calf raise without next-morning flare.',
      },
      {
        phase: 'Phase 3: Energy Storage & Return to Sprinting',
        timeline: 'Weeks 7 – 12',
        focus: 'Re-train Achilles tendon spring-like elastic recoil and fast plyometric loading for sprinting and jumping.',
        interventions: ['Skipping rope intervals', 'Box drop jumps & bounding drills', 'Progressive sprint accelerations (50% -> 75% -> 100%)', 'VISA-A tendon outcome scale verification'],
        milestoneCriteria: 'VISA-A score > 85; 30 single-leg hops without pain or apprehension.',
      },
    ],
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Penrith Marathon Runner',
    clinic: 'Penrith Clinic',
    rating: 5,
    quote: 'After 8 months of crippling plantar fasciitis that other clinics couldn’t resolve, Stephen at Penrith used shockwave therapy paired with heavy loading. Within 5 weeks I was back on the Nepean River trail pain-free. Absolutely life-changing.',
    condition: 'Plantar Fasciitis',
  },
  {
    id: 2,
    name: 'Michael Brennan',
    role: 'Local Grade Rugby Player',
    clinic: 'Jordan Springs Clinic',
    rating: 5,
    quote: 'Tore my ACL and meniscus last year. Jude Holroyd and the team took me through every single milestone with force-plate testing and direct surgeon communication. Returned to contact rugby yesterday feeling bulletproof.',
    condition: 'ACL Reconstruction',
  },
  {
    id: 3,
    name: 'Eleanor Vance',
    role: 'High School Teacher',
    clinic: 'Caringbah Practice',
    rating: 5,
    quote: 'The clinical pilates with Emma at Caringbah completely transformed my chronic lower back and sciatica pain from 10 years of classroom standing. The clinic atmosphere is warm, calm, and deeply professional.',
    condition: 'Chronic Sciatica & Posture',
  },
  {
    id: 4,
    name: 'Marcus Zhou',
    role: 'Logistics Supervisor',
    clinic: 'Mount Annan Practice',
    rating: 5,
    quote: 'Suffered a severe shoulder impingement at work. David took care of the SIRA Workers Comp approvals instantly with zero headache. The on-site rehab gym exercises helped me return to full duties 3 weeks ahead of schedule.',
    condition: 'WorkCover Shoulder Rehab',
  },
];

export const HEALTH_FUNDS = [
  'Bupa', 'Medibank', 'HCF', 'NIB', 'Teachers Health', 'AHM', 'CBHS', 'Defense Health', 'HBF', 'Australian Unity'
];

