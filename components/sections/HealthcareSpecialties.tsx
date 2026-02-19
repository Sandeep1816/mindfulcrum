import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { SPECIALTIES } from "@/lib/constants"

export default function HealthcareSpecialties() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Healthcare Specialties</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Comprehensive medical services across multiple specialties to address all your health concerns
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SPECIALTIES.map((specialty, index) => (
            <Card key={index} className="group border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
              <CardHeader className="space-y-4 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-colors">
                  <specialty.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-gray-900 text-base sm:text-lg">{specialty.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <p className="text-gray-600 text-xs sm:text-sm mb-4">{specialty.description}</p>
                <Button variant="link" className="text-blue-600 p-0 h-auto font-semibold hover:text-blue-700 text-xs sm:text-sm">
                  Learn More <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}