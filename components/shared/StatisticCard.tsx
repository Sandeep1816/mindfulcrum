import type { StatisticItem } from "@/app/types"

export default function StatisticCard({ number, label }: StatisticItem) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
        {number}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 font-medium line-clamp-2">
        {label}
      </div>
    </div>
  )
}