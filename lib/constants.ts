import {
  Heart,
  Shield,
  Clock,
  Users,
  Stethoscope,
  Brain,
  Activity,
  Phone,
} from "lucide-react"
import type { CardProps, ResourceItem, StatisticItem, BenefitItem, SpecialtyItem } from "@/app/types"

export const WHY_CHOOSE_ITEMS: CardProps[] = [
  {
    icon: Heart,
    title: "Comprehensive Care",
    description: "Complete healthcare from preventive care to specialist consultations",
  },
  {
    icon: Shield,
    title: "Evidence-Based",
    description: "Scientifically proven treatments and clinically validated approaches",
  },
  {
    icon: Users,
    title: "Personalized Plans",
    description: "Tailored treatment designed specifically for your unique needs",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Healthcare services available anytime, anywhere, any day",
  },
]

export const SPECIALTIES: SpecialtyItem[] = [
  {
    title: "General Medicine",
    description: "Primary care for everyday health needs",
    icon: Stethoscope,
  },
  {
    title: "Cardiology",
    description: "Expert heart and cardiovascular health management",
    icon: Heart,
  },
  {
    title: "Neurology",
    description: "Specialized neurological condition care",
    icon: Brain,
  },
  {
    title: "Orthopedics",
    description: "Bone, joint, and muscle condition expertise",
    icon: Activity,
  },
  {
    title: "Pediatrics",
    description: "Specialized healthcare for children and teens",
    icon: Users,
  },
  {
    title: "Emergency Care",
    description: "24/7 urgent care and emergency services",
    icon: Phone,
  },
]

export const APP_FEATURES_HEALTH = [
  "Personalized health plans",
  "Daily wellness reminders",
  "Progress tracking",
  "Expert guidance",
]

export const APP_FEATURES_COMMUNITY = [
  "Anonymous sharing options",
  "Expert moderation",
  "Peer support",
  "Global community",
]

export const CONSULTATION_FEATURES = [
  "Board-certified specialists",
  "Evidence-based protocols",
  "Peer-supervised care",
  "Flexible scheduling",
]

export const STATISTICS: StatisticItem[] = [
  { number: "200+", label: "Expert Doctors" },
  { number: "6M+", label: "Lives Impacted" },
  { number: "220k+", label: "Consultations" },
  { number: "50k+", label: "Community Members" },
  { number: "#1", label: "Health App Award" },
]

export const BENEFITS: BenefitItem[] = [
  { icon: "💡", text: "Boost innovation and creativity" },
  { icon: "⭐", text: "Become an employer of choice" },
  { icon: "📊", text: "Measurable health improvements" },
  { icon: "🚀", text: "Enhanced organizational success" },
]

export const RESOURCES: ResourceItem[] = [
  { type: "Article", time: "4 min", title: "Building Healthy Habits" },
  { type: "Article", time: "3 min", title: "When to Seek Professional Help" },
  { type: "Video", time: "5 min", title: "Stress Management Techniques" },
]