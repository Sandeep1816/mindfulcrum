export interface CardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export type ResourceItem = {
  type: "Article" | "Video" | "Guide"
  time: string
  title: string
  description?: string
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