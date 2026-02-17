import { Activity, Bone, HeartPulse, PersonStanding, Hand, Zap } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: typeof Activity;
  heroDescription: string;
  whatItTreats: string[];
  howItWorks: string;
  whoItsFor: string;
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "back-neck-pain",
    title: "Back & Neck Pain Therapy",
    shortDescription: "Targeted treatment for chronic and acute back and neck pain using evidence-based techniques.",
    icon: Bone,
    heroDescription: "Back and neck pain affects millions of people worldwide and can significantly impact daily life. At Reactive Physio, we use a combination of manual therapy, exercise prescription, and education to address the root cause of your pain — not just the symptoms.",
    whatItTreats: [
      "Chronic lower back pain",
      "Cervical (neck) pain and stiffness",
      "Sciatica and nerve-related pain",
      "Muscle tension and spasms",
      "Disc-related conditions",
      "Whiplash injuries",
    ],
    howItWorks: "Our physiotherapists begin with a thorough assessment of your posture, movement patterns, and pain triggers. We then create a personalized treatment plan combining hands-on manual therapy, targeted exercises, ergonomic advice, and progressive rehabilitation to restore mobility and reduce pain long-term.",
    whoItsFor: "Anyone experiencing acute or chronic back and neck pain — from office workers with postural strain to individuals recovering from disc injuries or whiplash.",
    benefits: [
      "Reduce pain without reliance on medication",
      "Improve spinal mobility and flexibility",
      "Strengthen core and postural muscles",
      "Prevent recurring episodes",
      "Return to daily activities pain-free",
    ],
    metaTitle: "Back & Neck Pain Therapy | Reactive Physio Clinic",
    metaDescription: "Expert physiotherapy for back and neck pain. Evidence-based treatments for sciatica, disc problems, and chronic pain at Reactive Physio Clinic.",
  },
  {
    slug: "sports-injury",
    title: "Sports Injury Rehabilitation",
    shortDescription: "Get back in the game with expert sports injury assessment, treatment and rehabilitation.",
    icon: Activity,
    heroDescription: "Whether you're a professional athlete or a weekend warrior, sports injuries require specialized care to ensure full recovery and prevent re-injury. Our sports rehabilitation program combines clinical expertise with performance-focused recovery.",
    whatItTreats: [
      "Ligament sprains and tears (ACL, MCL)",
      "Muscle strains and pulls",
      "Tendinitis and tendinopathy",
      "Stress fractures",
      "Shoulder dislocations",
      "Runner's knee and shin splints",
    ],
    howItWorks: "We assess the injury mechanism and current functional level, then design a phased rehabilitation program. This includes pain management, progressive strengthening, sport-specific drills, and return-to-play testing to ensure you're ready to perform at your best.",
    whoItsFor: "Athletes of all levels — from professional competitors to recreational sports enthusiasts dealing with acute or overuse injuries.",
    benefits: [
      "Faster, safer return to sport",
      "Reduced risk of re-injury",
      "Improved athletic performance",
      "Sport-specific rehabilitation protocols",
      "Expert guidance throughout recovery",
    ],
    metaTitle: "Sports Injury Rehabilitation | Reactive Physio Clinic",
    metaDescription: "Professional sports injury rehabilitation. Expert treatment for ligament tears, muscle strains, and athletic injuries at Reactive Physio Clinic.",
  },
  {
    slug: "post-surgery",
    title: "Post-Surgery Recovery",
    shortDescription: "Structured rehabilitation programs to ensure optimal recovery after orthopedic surgery.",
    icon: HeartPulse,
    heroDescription: "Post-surgical rehabilitation is critical for achieving the best possible outcome after orthopedic surgery. Our structured recovery programs are designed in collaboration with your surgeon to restore function, strength, and confidence.",
    whatItTreats: [
      "Knee replacement recovery",
      "Hip replacement rehabilitation",
      "ACL reconstruction",
      "Rotator cuff repair",
      "Spinal surgery recovery",
      "Fracture fixation aftercare",
    ],
    howItWorks: "Following your surgeon's protocols, we guide you through progressive phases of recovery — from early mobility and pain management to strength building and functional return. Regular progress assessments ensure your rehabilitation stays on track.",
    whoItsFor: "Patients recovering from any orthopedic or musculoskeletal surgery who want to maximize their recovery outcomes.",
    benefits: [
      "Optimized surgical outcomes",
      "Progressive, protocol-driven recovery",
      "Reduced post-operative complications",
      "Restored strength and function",
      "Coordinated care with your surgical team",
    ],
    metaTitle: "Post-Surgery Recovery Program | Reactive Physio Clinic",
    metaDescription: "Specialized post-surgery rehabilitation programs. Expert physiotherapy for knee, hip, shoulder, and spinal surgery recovery.",
  },
  {
    slug: "posture-correction",
    title: "Posture Correction",
    shortDescription: "Comprehensive posture analysis and correction programs for long-term spinal health.",
    icon: PersonStanding,
    heroDescription: "Poor posture is one of the leading causes of chronic pain and musculoskeletal problems in modern life. Our posture correction program identifies the underlying causes and provides lasting solutions through targeted exercises and ergonomic guidance.",
    whatItTreats: [
      "Forward head posture",
      "Rounded shoulders",
      "Thoracic kyphosis",
      "Anterior pelvic tilt",
      "Desk-related postural strain",
      "Text neck syndrome",
    ],
    howItWorks: "We perform a detailed postural assessment using visual and movement analysis. Based on findings, we create a corrective exercise program targeting weak and tight muscles, combined with workplace ergonomic advice and daily habit modifications.",
    whoItsFor: "Office workers, students, and anyone experiencing pain or discomfort related to prolonged sitting, screen use, or poor postural habits.",
    benefits: [
      "Reduced chronic pain from poor posture",
      "Improved spinal alignment",
      "Better breathing and energy levels",
      "Workplace ergonomic optimization",
      "Long-term postural awareness",
    ],
    metaTitle: "Posture Correction Program | Reactive Physio Clinic",
    metaDescription: "Professional posture correction and analysis. Fix forward head posture, rounded shoulders, and desk-related strain at Reactive Physio Clinic.",
  },
  {
    slug: "manual-therapy",
    title: "Manual Therapy & Massage",
    shortDescription: "Hands-on therapeutic techniques to relieve pain, improve mobility and accelerate healing.",
    icon: Hand,
    heroDescription: "Manual therapy encompasses a range of skilled hands-on techniques used to diagnose and treat musculoskeletal conditions. Combined with therapeutic massage, these treatments provide immediate relief while promoting long-term healing.",
    whatItTreats: [
      "Joint stiffness and restrictions",
      "Muscle tightness and trigger points",
      "Tension headaches",
      "Frozen shoulder",
      "TMJ dysfunction",
      "Chronic pain conditions",
    ],
    howItWorks: "Our therapists use techniques including joint mobilization, soft tissue manipulation, myofascial release, and therapeutic massage. Each session targets specific areas of dysfunction identified during assessment, providing both immediate and cumulative benefits.",
    whoItsFor: "Anyone experiencing musculoskeletal pain, stiffness, or restricted movement — from chronic pain sufferers to those seeking therapeutic relief from stress and tension.",
    benefits: [
      "Immediate pain relief",
      "Improved joint mobility",
      "Reduced muscle tension",
      "Enhanced circulation and healing",
      "Complementary to exercise-based treatment",
    ],
    metaTitle: "Manual Therapy & Massage | Reactive Physio Clinic",
    metaDescription: "Expert manual therapy and therapeutic massage. Hands-on treatment for joint stiffness, muscle tension, and chronic pain at Reactive Physio.",
  },
  {
    slug: "dry-needling",
    title: "Dry Needling & Modern Methods",
    shortDescription: "Advanced therapeutic techniques including dry needling, cupping, and electrotherapy.",
    icon: Zap,
    heroDescription: "Modern physiotherapy goes beyond traditional methods. We offer advanced treatment modalities including dry needling, cupping therapy, and electrotherapy to complement manual and exercise-based rehabilitation for faster, more effective results.",
    whatItTreats: [
      "Myofascial trigger points",
      "Chronic muscle pain",
      "Tendinopathy",
      "Sports-related muscle injuries",
      "Nerve-related pain",
      "Persistent pain conditions",
    ],
    howItWorks: "Dry needling involves inserting thin needles into trigger points to release muscle tension and stimulate healing. Combined with other modern modalities like cupping and electrotherapy, these techniques target deep tissue dysfunction that may not respond to conventional treatment alone.",
    whoItsFor: "Patients with persistent pain, myofascial dysfunction, or sports injuries who may benefit from advanced treatment techniques alongside traditional physiotherapy.",
    benefits: [
      "Rapid release of deep muscle tension",
      "Enhanced pain relief",
      "Accelerated tissue healing",
      "Effective for chronic conditions",
      "Combined with comprehensive treatment plans",
    ],
    metaTitle: "Dry Needling & Modern Therapy | Reactive Physio Clinic",
    metaDescription: "Advanced dry needling, cupping, and electrotherapy treatments. Modern physiotherapy methods for chronic pain and sports injuries.",
  },
];
