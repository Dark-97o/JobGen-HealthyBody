export interface ServiceRichContent {
  availableAt: string[];
  overviewParagraphs: string[];
  clinicalFocusTitle: string;
  clinicalFocusItems: string[];
  treatmentApproachTitle: string;
  treatmentApproachText: string;
}

export const SERVICE_DETAILS: Record<string, ServiceRichContent> = {
  'physiotherapy-treatment': {
    availableAt: ['Penrith', 'Jordan Springs', 'Mount Annan', 'Caringbah'],
    overviewParagraphs: [
      'At The Healthy Body Company, we take pride in being home to university-trained, AHPRA-registered physiotherapists equipped with the latest clinical skills and evidence-based reasoning.',
      'Our commitment to excellence begins with our rigorous Graduate Program and continues with ongoing in-house and external mentoring. Every appointment combines hands-on manual therapy AND structured exercise rehabilitation — we never talk at you and send you on your way.',
    ],
    clinicalFocusTitle: 'Conditions & Symptoms We Assess',
    clinicalFocusItems: [
      'Acute & chronic lower back, thoracic, and neck pain',
      'Sciatica, disc irritation, and peripheral nerve impingement',
      'Joint stiffness, osteoarthritis, and postural overload',
      'Tendon, ligament, and muscle strains across all ages',
    ],
    treatmentApproachTitle: 'Hands-On Therapy + Active Rehabilitation',
    treatmentApproachText:
      'Every initial consultation runs for 45 minutes so your physiotherapist can perform a thorough biomechanical diagnosis, deliver targeted joint mobilisation or soft-tissue release, and build a clear, achievable home and gym exercise plan.',
  },
  'sports-physiotherapy': {
    availableAt: ['Penrith', 'Jordan Springs', 'Mount Annan', 'Caringbah'],
    overviewParagraphs: [
      'In the clinic, our team brings deep expertise in the rapid diagnosis and management of acute and overuse sports injuries. Getting an early, precise diagnosis is the express lane to returning safely to competition.',
      'On the field, we have supported local and representative sporting clubs across Sydney for decades — providing game-day acute injury triage, strapping, return-to-play testing, and close communication with coaches and sports doctors.',
    ],
    clinicalFocusTitle: 'In the Clinic & On the Field',
    clinicalFocusItems: [
      'ACL, meniscus, ankle ligament, and shoulder instability rehab',
      'Hamstring, calf, groin, and quad muscle tear grading',
      'On-site gym strength, force, and hop-testing milestones',
      'Match-day acute management and sports strapping',
    ],
    treatmentApproachTitle: 'Express Lane Back to Peak Performance',
    treatmentApproachText:
      'We bridge the gap between pain relief and high-speed sport demands using our on-site rehabilitation gyms, progressive plyometrics, and objective return-to-sport criteria so you come back stronger than before.',
  },
  'tmj-dysfunction-jaw-pain': {
    availableAt: ['Penrith', 'Jordan Springs', 'Mount Annan', 'Caringbah'],
    overviewParagraphs: [
      'Jaw pain, trouble opening your mouth, or recurring headaches from temporo-mandibular joint (TMJ) dysfunction can be surprisingly disabling. Research suggests around 20% of people experience TMJ dysfunction, and many do not realise it is a major driver of neck and head pain.',
      'The good news is that TMJ conditions are highly treatable with targeted physiotherapy addressing both the jaw joint itself and the upper cervical spine.',
    ],
    clinicalFocusTitle: 'Common Signs & Symptoms of TMJ Dysfunction',
    clinicalFocusItems: [
      'Pain or tenderness around the jaw, ear, or temple',
      'Clicking, locking, or stiffness when chewing or yawning',
      'Morning jaw tightness from nighttime clenching (bruxism)',
      'Feelings of poor jaw alignment (malocclusion) and cervicogenic headaches',
    ],
    treatmentApproachTitle: 'Gentle Jaw & Upper Cervical Recalibration',
    treatmentApproachText:
      'Your physiotherapist assesses jaw tracking, intra-oral and external masticatory muscles, and upper neck joints, combining gentle myofascial release with neuromuscular control drills to restore smooth, pain-free movement.',
  },
  'orthopaedic-physio': {
    availableAt: ['Penrith', 'Jordan Springs', 'Mount Annan', 'Caringbah'],
    overviewParagraphs: [
      'Orthopaedic surgery is designed to restore the function of joints, ligaments, and muscles — and structured post-operative physiotherapy is essential to re-establish full joint motion, muscle strength, and confidence.',
      'Whether you are preparing for surgery (prehab) or recovering afterwards, we work closely alongside your orthopaedic surgeon to follow exact protocol timelines safely.',
    ],
    clinicalFocusTitle: 'Procedures We Rehabilitate',
    clinicalFocusItems: [
      'Total or partial knee and hip replacements',
      'Shoulder replacement and rotator cuff repair',
      'ACL reconstruction and ankle stabilisation',
      'Spinal decompression, discectomy, and neck/back surgery',
    ],
    treatmentApproachTitle: 'Tailored Post-Surgical Recovery Plans',
    treatmentApproachText:
      'Each procedure has unique healing windows. We guide swelling control, early range-of-motion milestones, gait re-education, and progressive gym strengthening at every stage of your recovery.',
  },
  'work-injuries': {
    availableAt: ['Penrith', 'Jordan Springs', 'Mount Annan', 'Caringbah'],
    overviewParagraphs: [
      'Work-related musculoskeletal injuries — including joint, ligament, tendon, muscle, and spinal disc injuries — require prompt, coordinated care to support a safe and sustainable return to work.',
      'With over 25 years managing SIRA Workers Compensation and CTP Motor Vehicle Accident claims, our clinicians collaborate directly with your nominated treating doctor, employer, and insurer with zero out-of-pocket fees for approved claims.',
    ],
    clinicalFocusTitle: 'Crucial Elements of Your Work Injury Recovery',
    clinicalFocusItems: [
      'Early assessment and hands-on treatment to prevent chronicity',
      'Direct collaboration between your GP, physiotherapist, and case manager',
      'Work-hardening strength conditioning in our on-site rehab gyms',
      'SIRA Certificate of Capacity and return-to-duties planning',
    ],
    treatmentApproachTitle: 'Streamlined SIRA & CTP Care',
    treatmentApproachText:
      'We take the administrative stress off your shoulders by handling insurer approvals and direct billing while focusing 100% on restoring your capacity for work and everyday life.',
  },
  'shockwave-therapy': {
    availableAt: ['Penrith', 'Jordan Springs', 'Caringbah'],
    overviewParagraphs: [
      'Chronic tendon injuries are notoriously stubborn. While surgery can carry mixed outcomes and cortisone injections may weaken tendon tensile strength over time, Radial Shockwave Therapy (ESWT) offers an evidence-based, non-invasive alternative.',
      'Acoustic pressure waves stimulate local blood flow, break down calcific deposits, and trigger cellular collagen regeneration to calm persistent tendon pain.',
    ],
    clinicalFocusTitle: 'Ideal for Stubborn Tendon Conditions',
    clinicalFocusItems: [
      'Plantar fasciitis and heel spur pain',
      'Achilles tendinopathy and patellar jumper’s knee',
      'Tennis elbow (lateral epicondylalgia) and golfer’s elbow',
      'Calcific shoulder tendinitis and gluteal tendinopathy',
    ],
    treatmentApproachTitle: 'Combined with Progressive Tendon Loading',
    treatmentApproachText:
      'Shockwave therapy works best when paired with tailored heavy-slow resistance loading. We combine Swiss DolorClast ESWT sessions with progressive strength exercises for lasting tendon resilience.',
  },
  'massage-therapy': {
    availableAt: ['Caringbah'],
    overviewParagraphs: [
      'Our qualified Remedial Massage Therapists use targeted soft-tissue techniques ranging from gentle flushing strokes to deep myofascial pressure, helping relieve muscle tension, sports fatigue, and postural stiffness.',
      'Integrated within our Caringbah clinic, massage therapy works seamlessly alongside physiotherapy when recovering from injury, training blocks, or everyday workplace stress.',
    ],
    clinicalFocusTitle: 'How Remedial Massage Helps',
    clinicalFocusItems: [
      'Deep tissue myofascial release for tight shoulders, neck, and lower back',
      'Sports recovery flushing between intense training sessions or events',
      'Trigger point therapy for stubborn muscular knots and tension headaches',
      'Pregnancy and postural relaxation in private heated rooms',
    ],
    treatmentApproachTitle: 'Tailored Pressure & Private Suites',
    treatmentApproachText:
      'Every session is adapted to your comfort level and physical goals, with instant HICAPS private health fund claiming available at reception.',
  },
  'vertigo-dizziness': {
    availableAt: ['Penrith', 'Jordan Springs', 'Mount Annan', 'Caringbah'],
    overviewParagraphs: [
      'Vertigo describes a false sensation of spinning or movement that can appear suddenly and severely disrupt balance, driving, and daily confidence.',
      'Our vestibular-trained physiotherapists perform precise diagnostic testing to identify whether symptoms stem from inner ear crystals (BPPV), vestibular neuritis, or the upper cervical spine.',
    ],
    clinicalFocusTitle: 'Common Vestibular Symptoms We Treat',
    clinicalFocusItems: [
      'Spinning sensations triggered by rolling in bed or looking up (BPPV)',
      'Loss of balance, unsteadiness, and visual motion sensitivity',
      'Post-concussion dizziness and vestibulo-ocular fatigue',
      'Cervicogenic dizziness linked to neck stiffness',
    ],
    treatmentApproachTitle: 'Targeted Repositioning & Gaze Stability',
    treatmentApproachText:
      'Using Dix-Hallpike diagnostics and gentle Epley canalith repositioning maneuvers, many BPPV cases improve dramatically within 1–2 visits, supported by tailored balance retraining.',
  },
  'exercise-classes': {
    availableAt: ['Penrith', 'Jordan Springs', 'Mount Annan', 'Caringbah'],
    overviewParagraphs: [
      'Our physiotherapist-led Exercise Classes — including Strong and Steady and Clinical Pilates — are designed to help you stay active, independent, and confident at every age and fitness level.',
      'Every participant completes an initial 1-on-1 assessment so your program is customized to your joints, bone density, heart and lung health, and personal movement goals.',
    ],
    clinicalFocusTitle: 'Benefits of Our Tailored Exercise Programs',
    clinicalFocusItems: [
      'Enhance bone mineral strength to combat osteoporosis',
      'Support joint health and alleviate osteoarthritis stiffness',
      'Boost cardiovascular and respiratory fitness (including COPD)',
      'Build core stability, leg strength, and everyday balance',
    ],
    treatmentApproachTitle: 'Small Groups Supervised by Physiotherapists',
    treatmentApproachText:
      'Train safely in small, supportive groups using reformers, weights, and functional balance equipment — with private health fund rebates available for eligible classes.',
  },
  'healthy-mums': {
    availableAt: ['Jordan Springs', 'Mount Annan', 'Caringbah'],
    overviewParagraphs: [
      'Pregnancy and the postnatal period place unique demands on the spine, pelvis, abdominal wall, and pelvic floor. Our Healthy Mums women’s health physiotherapists provide compassionate, specialist care through every trimester and beyond.',
      'We help mums manage discomfort during pregnancy and safely rebuild core and pelvic stability after birth.',
    ],
    clinicalFocusTitle: 'Women’s Health Areas We Support',
    clinicalFocusItems: [
      'Pregnancy-related pelvic girdle, sacroiliac, and lower back pain',
      'Postnatal abdominal separation (rectus diastasis) assessment',
      'Pelvic floor strengthening and real-time ultrasound biofeedback',
      'Safe, graded return to running and gym exercise post-delivery',
    ],
    treatmentApproachTitle: 'Supportive Care for Every Stage of Motherhood',
    treatmentApproachText:
      'Sessions take place in private rooms with practical guidance you can apply while caring for your baby, helping you feel strong, supported, and confident.',
  },
  ndis: {
    availableAt: ['Penrith', 'Jordan Springs', 'Mount Annan', 'Caringbah'],
    overviewParagraphs: [
      'We partner with self-managed and plan-managed NDIS participants to improve mobility, strength, functional independence, and community participation.',
      'Our clinicians work closely with participants, families, support coordinators, and occupational therapists to set meaningful, measurable NDIS goals.',
    ],
    clinicalFocusTitle: 'NDIS Physiotherapy Support Includes',
    clinicalFocusItems: [
      'Neurological, developmental, and physical disability rehabilitation',
      'Balance, gait, transfer, and mobility aid training',
      'In-clinic on-site gym sessions or home/community visits',
      'Comprehensive NDIS functional outcome and progress reports',
    ],
    treatmentApproachTitle: 'Empowering Everyday Independence',
    treatmentApproachText:
      'From initial plan review to ongoing weekly therapy, we make the NDIS process straightforward while keeping your functional goals at the centre of every session.',
  },
  'paediatric-physiotherapy': {
    availableAt: ['Penrith', 'Mount Annan'],
    overviewParagraphs: [
      'Babies, children, and growing adolescents are not just small adults — their bones, growth plates, and motor coordination develop rapidly and require age-specific physiotherapy care.',
      'Our paediatric physiotherapists create a warm, encouraging environment for families and young athletes.',
    ],
    clinicalFocusTitle: 'Conditions Seen in Babies, Kids & Teens',
    clinicalFocusItems: [
      'Developmental milestone delays, plagiocephaly, and torticollis',
      'Hip dysplasia, toe-walking, and coordination difficulties',
      'Growing pains including Sever’s heel pain and Osgood-Schlatter knee pain',
      'Youth sporting injuries, scoliosis screening, and hypermobility',
    ],
    treatmentApproachTitle: 'Play-Based & Family-Centred Therapy',
    treatmentApproachText:
      'We turn rehabilitation exercises into engaging, age-appropriate activities and equip parents with simple daily strategies to support confident movement at home and school.',
  },
  'falls-prevention-mobility': {
    availableAt: ['Caringbah'],
    overviewParagraphs: [
      'An unexpected trip or subtle change in balance should never limit how you live your life. Our Steady Steps Falls Prevention Program partners with older adults to reclaim confidence, rebuild leg strength, and protect long-term independence.',
      'Backed by a Primary Care Innovation Grant from the Central and Eastern Sydney PHN (CESPHN), this evidence-based program uses validated balance testing and progressive strength training.',
    ],
    clinicalFocusTitle: 'Who Steady Steps Helps',
    clinicalFocusItems: [
      'Adults experiencing unsteadiness, tripping, or fear of falling',
      'Post-fracture or post-hospital mobility rebuilding',
      'Osteoporosis and age-related muscle deconditioning',
      'Safe confidence-building for stairs, uneven paths, and community outings',
    ],
    treatmentApproachTitle: 'Measurable Balance & Strength Gains',
    treatmentApproachText:
      'Every participant starts with baseline balance and mobility scoring, followed by supervised, progressive resistance and reaction drills tailored to your pace.',
  },
  'physio-cancer': {
    availableAt: ['Caringbah'],
    overviewParagraphs: [
      'Physiotherapy plays a vital role before, during, and after cancer treatment. Emerging research demonstrates that supervised, appropriate exercise significantly reduces cancer-related fatigue, preserves muscle mass, and restores shoulder and joint mobility.',
      'Our certified oncology physiotherapists deliver gentle, monitored care tailored to your energy levels and medical treatment plan.',
    ],
    clinicalFocusTitle: 'How Oncology Physiotherapy Supports You',
    clinicalFocusItems: [
      'Combating cancer-related fatigue and preserving strength & endurance',
      'Post-mastectomy and post-surgical shoulder range-of-motion recovery',
      'Managing peripheral neuropathy, balance changes, and stiffness',
      'Safe, medically coordinated exercise progression during recovery',
    ],
    treatmentApproachTitle: 'Gentle, Individualised & Evidence-Led',
    treatmentApproachText:
      'Whether in private consultation suites or supervised gym sessions, every program is carefully paced around your oncology schedule to help you feel stronger and more in control.',
  },
  'respiratory-physiotherapy': {
    availableAt: ['Jordan Springs', 'Mount Annan'],
    overviewParagraphs: [
      'Cardiorespiratory (chest) physiotherapy focuses on optimising lung function, clearing airway secretions, and improving breathing efficiency and exercise tolerance.',
      'Our clinicians work closely with patients managing acute chest infections as well as chronic respiratory conditions.',
    ],
    clinicalFocusTitle: 'Respiratory Conditions & Techniques',
    clinicalFocusItems: [
      'COPD, emphysema, chronic bronchitis, and bronchiectasis',
      'Post-pneumonia or post-surgical lung expansion rehabilitation',
      'Active Cycle of Breathing Techniques (ACBT) and airway clearance',
      'Breathing pattern retraining and inspiratory muscle strengthening',
    ],
    treatmentApproachTitle: 'Breathe Easier, Move Further',
    treatmentApproachText:
      'We combine practical airway clearance techniques, chest mobility exercises, and paced cardiovascular conditioning so everyday activities feel less breathless.',
  },
  telehealth: {
    availableAt: ['Penrith', 'Jordan Springs', 'Mount Annan', 'Caringbah'],
    overviewParagraphs: [
      'Our physiotherapists offer secure, high-definition Telehealth video consultations for clients across Greater Sydney and regional Australia — all you need is a working internet connection.',
      'Telehealth is ideal when busy work schedules, travel, illness, or distance make attending a clinic in person difficult.',
    ],
    clinicalFocusTitle: 'What We Cover via Telehealth',
    clinicalFocusItems: [
      'Acute injury triage, diagnosis, and pain management advice',
      'Guided visual movement assessments from home',
      'Home office ergonomic workstation setup and posture audits',
      'Progressive digital exercise program updates and rehab coaching',
    ],
    treatmentApproachTitle: 'Seamless Care From Anywhere',
    treatmentApproachText:
      'Find a clear space near your camera so your physiotherapist can observe key movements, explain your diagnosis clearly, and send your tailored video exercise program straight to your phone.',
  },
};
