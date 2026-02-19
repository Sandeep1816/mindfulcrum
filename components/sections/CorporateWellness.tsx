import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BENEFITS } from "@/lib/constants"

export default function CorporateWellness() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-blue-600 text-white mb-4 text-xs sm:text-sm font-semibold py-1 px-3">Corporate Solutions</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Elevate Employee Wellness
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Partner with us to create a healthier, more engaged, and productive workforce. Trusted by 120+ leading organizations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl mb-3">{benefit.icon}</div>
              <p className="text-gray-700 font-semibold text-sm sm:text-base">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 w-full sm:w-auto">
            Schedule Demo <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}