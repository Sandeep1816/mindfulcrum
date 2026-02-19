export interface CardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export interface ResourceItem {
  type: "Article" | "Video"
  time: string
  title: string
}

export interface StatisticItem {
  number: string
  label: string
}

export interface BenefitItem {
  icon: string
  text: string
}

export interface SpecialtyItem {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}