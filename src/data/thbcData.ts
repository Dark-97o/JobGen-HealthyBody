export interface RealTeamMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  img: string;
  location: string;
  specialties: string[];
}

export interface RealService {
  id: string;
  title: string;
  shortDesc: string;
  category: 'physio' | 'specialized' | 'rehab' | 'community';
  indications: string[];
  features: string[];
  image: string;
}

export interface RealClinic {
  id: string;
  name: string;
  suburb: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    friday: string;
    saturday: string;
  };
  image: string;
  parking: string;
  description: string;
  mapQuery: string;
}

export interface RealBlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export const REAL_CLINICS: RealClinic[] = [
  {
    id: 'penrith',
    name: 'Penrith Flagship Clinic & Rehab Gym',
    suburb: 'Penrith',
    address: '95 Lethbridge Street, Penrith NSW 2750',
    phone: '(02) 4722 5555',
    email: 'penrith@thehealthybodycompany.com.au',
    hours: {
      weekdays: '7:30 AM – 7:30 PM',
      friday: '7:30 AM – 6:00 PM',
      saturday: '8:00 AM – 1:00 PM',
    },
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Physiotherapy-in-Penrith-scaled-e1761877313120.jpg',
    parking: 'Dedicated patient parking at the rear of the clinic accessible via Lethbridge St, with level wheelchair access.',
    description: 'Serving Penrith and Nepean for over 25 years. Features our flagship rehabilitation gym, shockwave therapy suite, orthopaedic casting, and sports performance testing.',
    mapQuery: '95+Lethbridge+Street+Penrith+NSW+2750',
  },
  {
    id: 'caringbah',
    name: 'Caringbah Practice',
    suburb: 'Caringbah',
    address: 'Suite 2, 383 Port Hacking Road, Caringbah NSW 2229',
    phone: '(02) 9531 2000',
    email: 'caringbah@thehealthybodycompany.com.au',
    hours: {
      weekdays: '8:00 AM – 7:00 PM',
      friday: '8:00 AM – 5:00 PM',
      saturday: '7:30 AM – 12:30 PM',
    },
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/04/jordan-springs-284A0112-scaled.jpg',
    parking: 'Underground visitor parking with lift access directly to Suite 2, plus ample free Council parking on Port Hacking Rd.',
    description: 'A vibrant Sutherland Shire clinic offering hands-on musculoskeletal therapy, sports physio, clinical Pilates reformer sessions, and remedial massage.',
    mapQuery: '383+Port+Hacking+Road+Caringbah+NSW+2229',
  },
  {
    id: 'jordan-springs',
    name: 'Jordan Springs Clinic',
    suburb: 'Jordan Springs',
    address: 'Level 1, Unit 9, 65 Water Gum Drive, Jordan Springs NSW 2747',
    phone: '(02) 4722 6994',
    email: 'jordansprings@thehealthybodycompany.com.au',
    hours: {
      weekdays: '8:00 AM – 7:00 PM',
      friday: '8:00 AM – 5:30 PM',
      saturday: '8:00 AM – 1:00 PM',
    },
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Penrith-Physio-14-scaled.jpg',
    parking: 'Plentiful ground-level parking directly adjacent to the Jordan Springs Town Centre.',
    description: 'Modern family and sports practice led by Jude Holroyd. Offering paediatric care, youth sports injury management, spine rehabilitation, and NDIS services.',
    mapQuery: '65+Water+Gum+Drive+Jordan+Springs+NSW+2747',
  },
  {
    id: 'mount-annan',
    name: 'Mount Annan Practice',
    suburb: 'Mount Annan',
    address: 'Shop 2, 1 Raintree Way, Mount Annan NSW 2567',
    phone: '(02) 4622 8111',
    email: 'mountannan@thehealthybodycompany.com.au',
    hours: {
      weekdays: '8:00 AM – 7:00 PM',
      friday: '8:00 AM – 5:00 PM',
      saturday: '8:00 AM – 12:30 PM',
    },
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Penrith-Physio-12-scaled-e1761877163453.jpg',
    parking: 'Free shopping centre parking directly in front of the practice with zero stairs or steps.',
    description: 'Providing comprehensive allied health to the Macarthur region. Specializing in functional rehabilitation, senior mobility classes, and WorkCover SIRA care.',
    mapQuery: '1+Raintree+Way+Mount+Annan+NSW+2567',
  },
];

export const REAL_SERVICES: RealService[] = [
  {
    id: 'physiotherapy-treatment',
    title: 'Physiotherapy Treatment',
    category: 'physio',
    shortDesc: 'Evidence-based hands-on manual therapy and personalized exercise recovery.',
    indications: ['Back & Neck Pain', 'Joint Stiffness', 'Sciatica & Nerve Impingement', 'Postural Strain'],
    features: ['45-min Initial 1-on-1 Assessment', 'Targeted Joint Mobilisation', 'Tailored Home Exercise Program'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/physiotherapy-9.jpg',
  },
  {
    id: 'sports-physiotherapy',
    title: 'Sports Physiotherapy',
    category: 'physio',
    shortDesc: 'Rapid acute diagnosis, ligament rehab, and high-performance return-to-play.',
    indications: ['Hamstring & Groin Strains', 'ACL & Meniscus Tears', 'Ankle Sprains', 'Rotator Cuff Issues'],
    features: ['On-site Gym Strength Testing', 'Biomechanical Video Analysis', 'Sports Strapping & Taping'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/sports-physiotherapy.jpg',
  },
  {
    id: 'tmj-dysfunction-jaw-pain',
    title: 'TMJ Dysfunction & Jaw Pain',
    category: 'specialized',
    shortDesc: 'Specialized therapy for jaw clenching, temporomandibular clicking, and facial pain.',
    indications: ['Jaw Clicking & Locking', 'Bruxism / Teeth Grinding', 'Cervicogenic Headaches', 'Ear & Temple Pain'],
    features: ['Intra-oral Myofascial Release', 'Jaw Biomechanics Recalibration', 'Cranial & Neck Alignment'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/TMJ-and-jaw-pain-scaled.jpg',
  },
  {
    id: 'orthopaedic-physio',
    title: 'Orthopaedic Physio',
    category: 'rehab',
    shortDesc: 'Pre- and post-surgical rehabilitation following joint replacements and reconstructions.',
    indications: ['Total Knee & Hip Replacements', 'Shoulder Rotator Cuff Surgery', 'Spinal Decompression', 'Ankle Reconstruction'],
    features: ['Surgeon Protocol Compliance', 'Swelling & Cryo Control', 'Gait & Balance Re-education'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/Orthopaedic-physiotherapy.jpg',
  },
  {
    id: 'work-injuries',
    title: 'Work Injuries (SIRA Approved)',
    category: 'specialized',
    shortDesc: 'Streamlined Workers Compensation and CTP rehabilitation with zero out-of-pocket costs.',
    indications: ['Lifting & Repetitive Strain Injuries', 'Workplace Slips & Falls', 'CTP Motor Vehicle Accidents'],
    features: ['Direct Insurer Billing', 'Return-to-Work Coordination', 'SIRA Certificate of Capacity Support'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/work-injuries.jpg',
  },
  {
    id: 'shockwave-therapy',
    title: 'Shockwave Therapy',
    category: 'specialized',
    shortDesc: 'Acoustic radial shockwave (ESWT) technology to resolve chronic, stubborn tendon pain.',
    indications: ['Plantar Fasciitis', 'Achilles Tendinopathy', 'Tennis & Golfer’s Elbow', 'Calcific Shoulder Tendinitis'],
    features: ['Swiss DolorClast Technology', 'Stimulates Cellular Collagen Renewal', 'Non-Invasive Breakthrough Relief'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/shock-wave-bigstock-Procedure-Shock-Wave-Therapy-A-324700759.jpg',
  },
  {
    id: 'massage-therapy',
    title: 'Massage Therapy',
    category: 'community',
    shortDesc: 'Remedial, sports, and deep tissue soft-tissue restoration by qualified therapists.',
    indications: ['Severe Muscle Tightness', 'Postural Stress', 'Sports Recovery & Flushing', 'Pregnancy Tension'],
    features: ['Deep Tissue Myofascial Release', 'Trigger Point Therapy', 'Private Heated Treatment Rooms'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/massage-therapy.jpg',
  },
  {
    id: 'vertigo-dizziness',
    title: 'Vertigo & Dizziness',
    category: 'specialized',
    shortDesc: 'Vestibular rehabilitation and Epley repositioning maneuvers for BPPV and balance loss.',
    indications: ['BPPV (Spinning Sensation)', 'Vestibular Neuritis', 'Post-Concussion Balance Deficits', 'Cervical Dizziness'],
    features: ['Dix-Hallpike Diagnostic Maneuver', 'Canalith Repositioning Treatment', 'Vestibulo-Ocular Reflex Exercises'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/vertigo-and-dizziness-scaled.jpg',
  },
  {
    id: 'exercise-classes',
    title: 'Exercise Classes & Pilates',
    category: 'rehab',
    shortDesc: 'Physiotherapist-led clinical Pilates reformer sessions and small group mobility classes.',
    indications: ['Core Muscle Weakness', 'Chronic Lower Back Pain', 'Post-Rehabilitation Conditioning', 'Joint Hypermobility'],
    features: ['Reformer & Trapeze Equipment', 'Individualized Progression', 'Health Fund Rebates Apply'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/exercise-physiotherapy.jpg',
  },
  {
    id: 'healthy-mums',
    title: 'Healthy Mums (Women’s Health)',
    category: 'community',
    shortDesc: 'Compassionate prenatal and postnatal pelvic floor, abdominal, and spinal care.',
    indications: ['Pelvic Girdle Pain', 'Abdominal Separation (Diastasis)', 'Postpartum Recovery', 'Pregnancy Back Ache'],
    features: ['Real-Time Ultrasound Biofeedback', 'Pelvic Stability Strengthening', 'Safe Return to Exercise Planning'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/physio-3.jpg',
  },
  {
    id: 'ndis',
    title: 'NDIS Physiotherapy',
    category: 'community',
    shortDesc: 'Empowering self-managed and plan-managed NDIS participants to achieve movement independence.',
    indications: ['Neurological Conditions', 'Physical Disabilities', 'Mobility & Transfer Limitations', 'Functional Capacity Deficits'],
    features: ['Detailed Functional Outcome Reports', 'Home & Clinic Sessions Available', 'Dedicated NDIS Coordinator'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/NDIS-scaled.jpg',
  },
  {
    id: 'paediatric-physiotherapy',
    title: 'Paediatric Physiotherapy',
    category: 'community',
    shortDesc: 'Gentle, supportive therapy for children, adolescents, and growing youth athletes.',
    indications: ['Sever’s Disease & Osgood-Schlatter', 'Growing Pains & Scoliosis', 'Youth Sports Injuries', 'Coordination & Gait Abnormalities'],
    features: ['Child-Friendly Clinical Environment', 'Family Education & Guidance', 'Age-Appropriate Exercises'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/04/pediatric-PKR_2068-copy.jpg',
  },
  {
    id: 'falls-prevention-mobility',
    title: 'Falls Prevention & Mobility',
    category: 'rehab',
    shortDesc: 'Evidence-based "Strong and Steady" balance training for seniors to prevent dangerous falls.',
    indications: ['Balance Uncertainty & Tripping', 'Post-Fracture Recovery', 'General Age-Related Deconditioning', 'Osteoporosis Care'],
    features: ['Validated Balance Score Testing', 'Safe Progressive Resistance Drills', 'Confidence Rebuilding'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/08/falls-2.png',
  },
  {
    id: 'physio-cancer',
    title: 'Physio & Cancer Care',
    category: 'specialized',
    shortDesc: 'Oncology exercise therapy to combat fatigue, retain strength, and restore quality of life.',
    indications: ['Post-Chemotherapy Fatigue', 'Post-Mastectomy Shoulder Mobility', 'Cancer Cachexia & Weakness', 'Lymphedema Management'],
    features: ['PINC & STEEL Certified Protocols', 'Gentle Monitored Gym Sessions', 'Multidisciplinary Oncology Support'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/Physio-and-cancer-scaled.jpg',
  },
  {
    id: 'respiratory-physiotherapy',
    title: 'Respiratory Physiotherapy',
    category: 'specialized',
    shortDesc: 'Airway clearance techniques, breathing pattern retraining, and chest mobility therapy.',
    indications: ['COPD & Emphysema', 'Bronchiectasis', 'Post-Pneumonia Lung Rehabilitation', 'Dysfunctional Breathing Patterns'],
    features: ['Active Cycle of Breathing (ACBT)', 'Inspiratory Muscle Training', 'Physical Exercise Prescription'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/repiratory-physiotherapy-scaled.jpg',
  },
  {
    id: 'telehealth',
    title: 'Telehealth Consultations',
    category: 'physio',
    shortDesc: 'Secure, high-definition online video consultations from the comfort of your home.',
    indications: ['Remote & Regional Patients', 'Acute Flare-up Triage', 'Home Workstation Ergonomic Audits', 'Travel & Isolation Support'],
    features: ['Secure Encrypted Platform', 'Visual Movement Diagnostics', 'Digital Exercise App Delivery'],
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/08/telehealth-284A0133.jpg',
  },
];

export const REAL_TEAM: RealTeamMember[] = [
  {
    id: 'jude-holroyd',
    name: 'Jude Holroyd',
    role: 'Practice Principal & Co-Founder',
    quote: "Jude's aim is to ensure that every patient that walks through the doors of the clinic are looked after and provided with a tailored approach to their concerns.",
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/jude-holroyd.jpg',
    location: 'Jordan Springs & Penrith',
    specialties: ['Spine & Sciatica', 'Youth Sports', 'Clinical Leadership'],
  },
  {
    id: 'stephen-cunningham',
    name: 'Stephen Cunningham',
    role: 'Clinical Director',
    quote: 'Stephen Cunningham is the Clinical Director of The Healthy Body Company and has been a leading sports physiotherapist in Sydney for over two decades.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/Steph-Cummins.jpg',
    location: 'Penrith Flagship',
    specialties: ['Elite Sports Rehab', 'Knee Reconstructions', 'Shoulder Impingement'],
  },
  {
    id: 'tom-hamilton',
    name: 'Tom Hamilton',
    role: 'Practice Principal',
    quote: 'Tom incorporates both a hands-on and exercise-based approach to treatment whilst implementing the best available evidence to help clients reach their goals.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/tom-hamilton.jpg',
    location: 'Mount Annan',
    specialties: ['Sports Injuries', 'Orthopaedic Rehab', 'Strength Conditioning'],
  },
  {
    id: 'steph-winchester',
    name: 'Steph Winchester',
    role: 'Senior Physiotherapist',
    quote: 'Steph thrives on helping her patients reach their full potential and has wide experience treating both an athletic and general population with hands-on care.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/steph-winchester.jpg',
    location: 'Caringbah',
    specialties: ['Clinical Pilates', 'Running Injuries', 'Pelvic Girdle'],
  },
  {
    id: 'nathan-duguid',
    name: 'Nathan Duguid',
    role: 'Senior Physiotherapist',
    quote: 'Nathan believes seeing a physio should be a partnership between patient and therapist, working collaboratively to achieve optimal health outcomes.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/04/nathan-duguid.jpg',
    location: 'Jordan Springs & Penrith',
    specialties: ['Spinal Mobilisation', 'Tendon Loading', 'Gym Rehab'],
  },
  {
    id: 'isaac-serhan',
    name: 'Isaac Serhan',
    role: 'Senior Physiotherapist',
    quote: "Isaac's focus has been on helping people through all sorts of chronic conditions, along with acute sporting and gym-based injuries.",
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/isaac-serhan.jpg',
    location: 'Jordan Springs',
    specialties: ['Chronic Pain', 'Gym Lifting Injuries', 'Post-Op Knee'],
  },
  {
    id: 'travis-adelerhof',
    name: 'Travis Adelerhof',
    role: 'Senior Physiotherapist',
    quote: 'Travis has a passion for sports injury rehabilitation and high performance, and believes in empowering individuals to live a healthy and active lifestyle.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/travis-adelerhof.jpg',
    location: 'Caringbah',
    specialties: ['Sports Rehab', 'Athletic Screening', 'Ankle Sprains'],
  },
  {
    id: 'paul-chester',
    name: 'Paul Chester',
    role: 'Associate Physiotherapist',
    quote: 'Paul relishes the opportunity to support his patients in the management of sports injury rehab to facilitate a safe, confident, and enduring return to sport.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/paul-chester.jpg',
    location: 'Penrith Flagship',
    specialties: ['Return-to-Play', 'Hamstring Strains', 'Shoulder Instability'],
  },
  {
    id: 'sarah-morley',
    name: 'Sarah Morley',
    role: 'Associate Physiotherapist',
    quote: 'Sarah combines an interest in cutting-edge health science with her deep passion for helping people recover from daily pain and physical limitations.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/sarah-morley.jpg',
    location: 'Jordan Springs',
    specialties: ['Musculoskeletal Care', 'Postural Correction', 'Joint Mobility'],
  },
  {
    id: 'thiwanka-jayamaha',
    name: 'Thiwanka Jayamaha',
    role: 'Associate Physiotherapist',
    quote: 'Thiwanka has a special interest in cardiorespiratory physiotherapy and believes in empowering her patients in self-management and leading healthy lifestyles.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/Thiwanka-Jayamahajpg.jpg',
    location: 'Mount Annan',
    specialties: ['Cardiorespiratory', 'Post-Viral Fatigue', 'Senior Mobility'],
  },
  {
    id: 'tina-chen',
    name: 'Tina Chen',
    role: 'Associate Physiotherapist',
    quote: 'Tina is particularly interested in helping people return to an active, fulfilling lifestyle in the face of an acute injury or stubborn chronic condition.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/tina-chen.jpg',
    location: 'Jordan Springs',
    specialties: ['Lower Limb Rehab', 'Desk Worker Posture', 'Soft Tissue'],
  },
  {
    id: 'trey-weidle',
    name: 'Trey Weidle',
    role: 'Physiotherapist',
    quote: 'Trey has a passion for musculoskeletal physiotherapy stemmed from his long history in combat sports and the gym, having faced his fair share of injuries.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/trey-weidle.jpg',
    location: 'Mount Annan',
    specialties: ['Combat Sports Rehab', 'Heavy Resistance Training', 'Rotator Cuff'],
  },
  {
    id: 'zena-metcalfe',
    name: 'Zena Metcalfe',
    role: 'Remedial Massage Therapist',
    quote: 'Zena has a degree in Sports Studies specializing in physiology, bringing deep anatomical knowledge to postural release and injury recovery.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/zena-metcalfe.jpg',
    location: 'Caringbah',
    specialties: ['Remedial Massage', 'Deep Tissue Release', 'Myofascial Trigger Points'],
  },
  {
    id: 'martin-mai',
    name: 'Martin Mai',
    role: 'Physiotherapist',
    quote: 'Martin believes in empowering his patients to build strength safely and sustainably, with a strong focus on long-term physical health and longevity.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/03/martin-mai.png',
    location: 'Mount Annan',
    specialties: ['Functional Strength', 'Spinal Health', 'Injury Prevention'],
  },
  {
    id: 'mackenzie-barglik',
    name: 'Mackenzie Barglik',
    role: 'Physiotherapist',
    quote: 'Navigating all the challenges that come with recovery, Mackenzie is committed to supporting people not just to recover, but to truly achieve their personal goals.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/03/Mackenzie-Barglik.png',
    location: 'Jordan Springs',
    specialties: ['Active Rehab', 'Adolescent Sports', 'Balance Training'],
  },
  {
    id: 'emily-brown',
    name: 'Emily Brown',
    role: 'Physiotherapist',
    quote: 'Emily takes a personalised approach to care, supporting individuals to achieve their goals and return to the activities they enjoy most.',
    img: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/11/emily-brown-1.png',
    location: 'Penrith Flagship',
    specialties: ['Lower Limb Biomechanics', 'Core Strength', 'Rehabilitation'],
  },
];

export const REAL_BLOG_POSTS: RealBlogPost[] = [
  {
    id: 'how-many-ways-did-you-move-today',
    title: 'How Many Ways Did You Move Today?',
    category: 'Movement & Longevity',
    date: 'Nov 10, 2026',
    readTime: '4 min read',
    excerpt:
      'You can still do stairs. Nobody decides to become less capable overnight—it happens in small trades. Discover how daily varied movement keeps joints resilient.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/11/shutterstock_2668505205.jpg',
  },
  {
    id: 'tight-hip-flexor-dont-miss-a-stress-injury',
    title: "Tight Hip Flexor? Don't Miss a Bone Stress Injury!",
    category: 'Running Health',
    date: 'Nov 09, 2026',
    readTime: '5 min read',
    excerpt:
      'Persistent front-of-hip tightness in runners is often blamed on hip flexors, yet can signal a femoral neck or pelvic bone stress injury requiring prompt assessment.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/11/shutterstock_2437833945.jpg',
  },
  {
    id: 'corked-thigh-symptoms-treatment-and-return-to-sport',
    title: 'Corked Thigh: Symptoms, Treatment and Return to Sport',
    category: 'Injury Guide',
    date: 'Aug 13, 2026',
    readTime: '5 min read',
    excerpt:
      'A cork is one of the most common contact sport injuries. Learn why early aggressive stretching can worsen bleeding and how structured physiotherapy speeds return to play.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/08/shutterstock_5031961.jpg',
  },
  {
    id: 'groin-pain-in-sport-it-could-be-osteitis-pubis',
    title: 'Groin Pain in Sport? It Could Be Osteitis Pubis',
    category: 'Sports Physio',
    date: 'Jul 07, 2026',
    readTime: '5 min read',
    excerpt:
      'Deep aching at the front of the pelvis that warms up during training and flares afterwards can indicate osteitis pubis. Explore load management and adductor rehab.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/07/Osteitis-Pubis-The-Healthy-Body-Company.jpg',
  },
  {
    id: 'lower-back-pain-in-children',
    title: 'Lower Back Pain in Children – What Does It Mean and What Should You Do?',
    category: 'Paediatric Physio',
    date: 'May 20, 2026',
    readTime: '5 min read',
    excerpt:
      'For young gymnasts, cricketers, and active kids, persistent lower back pain warrants careful screening for pars stress injuries and guided load recovery.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/05/back-pain-child-gymnastics.jpg',
  },
  {
    id: 'physiotherapy-workshops-for-students-build-real-clinical-skills-confidence-early',
    title: 'Physiotherapy Workshops for Students: Build Real Clinical Skills & Confidence Early',
    category: 'Clinical Education',
    date: 'Apr 22, 2026',
    readTime: '4 min read',
    excerpt:
      'Bridging the gap between university anatomy theory and real-world hands-on patient assessment through our Physiotherapy Essentials student workshops.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/04/DSCF2028-scaled-e1776832196563.jpeg',
  },
  {
    id: 'outer-knee-pain',
    title: 'Outer Knee Pain When Running? It Could Be ITB Syndrome',
    category: 'Running Clinic',
    date: 'Apr 20, 2026',
    readTime: '4 min read',
    excerpt:
      'Iliotibial band syndrome is a compressive load issue on the outside of the knee. Learn why hip stability and running cadence matter more than foam rolling.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2021/11/iliotibial-band-syndrome.jpg',
  },
  {
    id: 'four-lessons-i-learned-from-both-sides-of-acl-rehabilitation',
    title: 'ACL Rehabilitation: 4 Lessons From a Physio Who’s Been Through It',
    category: 'Surgical Recovery',
    date: 'Apr 13, 2026',
    readTime: '6 min read',
    excerpt:
      'Having undergone three ACL reconstructions firsthand, our physiotherapist shares the physical milestones, patience, and strength benchmarks behind lasting recovery.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/04/shutterstock_2559965813.jpg',
  },
  {
    id: 'gamers-wrist-ecu-tendinopathy-causes-symptoms-and-treatment',
    title: 'Gamers Wrist (ECU Tendinopathy): Causes, Symptoms and Treatment',
    category: 'Hand & Wrist',
    date: 'Apr 04, 2026',
    readTime: '4 min read',
    excerpt:
      'Pain along the pinky side of the wrist after long desk, gaming, or gym sessions is frequently ECU tendinopathy. Discover ergonomic fixes and tendon loading.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/04/Gamers-Wrist-Physiotherapy.jpg',
  },
  {
    id: 'dry-needling-2',
    title: 'Dry Needling in Physiotherapy',
    category: 'Treatment Guide',
    date: 'Mar 09, 2026',
    readTime: '4 min read',
    excerpt:
      'How sterile dry needling targets myofascial trigger points to reduce muscle tension, restore range of motion, and complement hands-on physiotherapy.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/03/physio-in-penrith-dry-needling.jpg',
  },
  {
    id: 'concussion-if-in-doubt-sit-them-out',
    title: 'Concussion: If in doubt, sit them out!',
    category: 'Sports Safety',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    excerpt:
      'A practical guide for parents, coaches, and athletes on recognising concussion symptoms early and following safe graded return-to-sport protocols.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2022/03/bj-pearce-Ag36XuTuARM-unsplash-scaled-1.jpg',
  },
  {
    id: 'physio-and-diabetes',
    title: 'Physio and Diabetes: How Exercise Helps Manage Type 2 Diabetes',
    category: 'Chronic Care',
    date: 'Nov 12, 2025',
    readTime: '5 min read',
    excerpt:
      'Safe, progressive resistance and aerobic exercise improves insulin sensitivity, cardiovascular health, and joint confidence across every age group.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2015/07/Diabetes-and-Physio-1-1-scaled.jpg',
  },
  {
    id: 'tennis-elbow-explained-causes-symptoms-physiotherapy-treatment',
    title: 'Tennis Elbow Explained: Causes, Symptoms & Physiotherapy Treatment',
    category: 'Tendon Rehab',
    date: 'Oct 29, 2025',
    readTime: '5 min read',
    excerpt:
      'Lateral epicondylalgia affects desk workers and tradespeople far more often than tennis players. Learn how eccentric loading and shockwave therapy resolve it.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/tennis-elbow-and-physiotherapy-in-penrith.jpg',
  },
  {
    id: 'small-steps',
    title: 'How Small Breaks and Movement Can Transform Our Minds and Bodies',
    category: 'Workplace Health',
    date: 'Oct 28, 2025',
    readTime: '4 min read',
    excerpt:
      'Short intentional movement breaks throughout the workday counteract prolonged sitting stiffness, boost energy, and protect spinal health.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Physio-in-Caringbah-scaled-e1761639907271.jpg',
  },
  {
    id: 'acl-what-is-it',
    title: 'What Is an ACL Injury? Symptoms, Causes and What to Do Next',
    category: 'Knee Rehab',
    date: 'Sep 29, 2025',
    readTime: '5 min read',
    excerpt:
      'Understanding anterior cruciate ligament tears, early swelling control, surgical vs non-surgical pathways, and evidence-based knee rehabilitation.',
    image: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2016/01/physio-and-ACL-injury-2.jpg',
  },
];

export const REAL_FAQS = [
  {
    q: 'Do I need a doctor’s referral to see a physiotherapist at your clinics?',
    a: 'No referral is needed if you are a private patient. Physiotherapists in Australia are primary contact healthcare practitioners. You can simply book online or call your nearest clinic directly. Referrals are only necessary for SIRA Workers Compensation, CTP Motor Vehicle claims, Department of Veterans’ Affairs (DVA), or Medicare EPC (Enhanced Primary Care) plans.',
  },
  {
    q: 'Can I claim my private health insurance on the spot?',
    a: 'Yes, absolutely. All four of our clinics (Penrith, Caringbah, Jordan Springs, and Mount Annan) are equipped with digital HICAPS terminals. Please bring your physical private health fund card or your mobile digital card (Apple Wallet / Google Wallet with participating funds). We claim your rebate instantly at the desk, and you only pay the remaining gap.',
  },
  {
    q: 'What should I wear to my physiotherapy consultation?',
    a: 'Wear comfortable, loose-fitting activewear or casual clothing that allows your physiotherapist to easily inspect and treat the affected area. For lower limb issues (hip, knee, ankle), shorts are ideal. For shoulder and neck assessments, a singlet or loose-fitting T-shirt is recommended.',
  },
  {
    q: 'What makes The Healthy Body Company different from other practices?',
    a: 'We have served Sydney communities since 1998 with an unwavering focus on one-on-one care. You will never be left alone in a curtained cubicle with an ultrasound machine. Every consultation combines expert hands-on manual therapy with active, progressive conditioning in our private on-site gyms.',
  },
  {
    q: 'Do you treat WorkCover NSW (SIRA) and NDIS patients?',
    a: 'Yes. We have over 25 years of extensive experience managing SIRA Workers Compensation and CTP accident claims, working closely with your nominated treating doctor and case manager with direct insurer billing. We also warmly welcome self-managed and plan-managed NDIS participants.',
  },
  {
    q: 'How long are consultations?',
    a: 'Initial consultations are 45 minutes of comprehensive assessment, physical diagnosis, hands-on treatment, and recovery planning. Standard follow-up appointments are 30 minutes of focused progression.',
  },
];

