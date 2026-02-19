import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Your Health,
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Priority</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Comprehensive healthcare solutions delivered by experienced professionals. We're committed to your wellness journey with world-class medical expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full sm:w-auto">
                Get Started <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 w-full sm:w-auto">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8 pt-4 sm:pt-6">
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">200+</div>
                <p className="text-xs sm:text-sm text-gray-600">Expert Specialists</p>
              </div>
              <div className="h-12 hidden sm:block border-l border-gray-300"></div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">24/7</div>
                <p className="text-xs sm:text-sm text-gray-600">Available Support</p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-2 pt-4 border-t border-gray-200">
              {["✓ HIPAA Certified", "✓ ISO 27001 Compliant", "✓ Board-Certified Doctors"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-2xl sm:rounded-3xl blur-2xl opacity-60"></div>
            <div className="relative">
              {/* Dummy SVG Image */}
              <svg
                width="500"
                height="600"
                viewBox="0 0 500 600"
                className="w-full rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <defs>
                  <linearGradient id="gradBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f2fe" />
                    <stop offset="100%" stopColor="#dbeafe" />
                  </linearGradient>
                  <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fdbcb4" />
                    <stop offset="100%" stopColor="#f5a898" />
                  </linearGradient>
                </defs>

                {/* Background */}
                <rect width="500" height="600" fill="url(#gradBg)" />

                {/* Head */}
                <circle cx="250" cy="120" r="60" fill="url(#skinTone)" />

                {/* Hair */}
                <path
                  d="M 190 120 Q 190 60 250 60 Q 310 60 310 120"
                  fill="#2c1810"
                />

                {/* Eyes */}
                <circle cx="230" cy="110" r="6" fill="#000" />
                <circle cx="270" cy="110" r="6" fill="#000" />

                {/* Smile */}
                <path d="M 235 135 Q 250 145 265 135" stroke="#8b4513" strokeWidth="3" fill="none" strokeLinecap="round" />

                {/* Stethoscope */}
                <path
                  d="M 280 160 Q 290 170 300 180 Q 310 190 310 210"
                  stroke="#1e40af"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="315" cy="210" r="12" fill="#1e40af" />
                <circle cx="315" cy="210" r="8" fill="none" stroke="#fff" strokeWidth="2" />

                {/* Upper Body - Medical Coat */}
                <rect x="180" y="180" width="140" height="120" fill="#fff" stroke="#cbd5e1" strokeWidth="2" rx="10" />

                {/* Buttons on coat */}
                <circle cx="250" cy="210" r="4" fill="#94a3b8" />
                <circle cx="250" cy="245" r="4" fill="#94a3b8" />
                <circle cx="250" cy="280" r="4" fill="#94a3b8" />

                {/* Stethoscope hanging */}
                <path
                  d="M 220 200 Q 200 220 210 260"
                  stroke="#1e40af"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Arms */}
                <rect x="140" y="200" width="40" height="100" fill="url(#skinTone)" rx="20" />
                <rect x="320" y="200" width="40" height="100" fill="url(#skinTone)" rx="20" />

                {/* Hands */}
                <circle cx="145" cy="310" r="18" fill="url(#skinTone)" />
                <circle cx="355" cy="310" r="18" fill="url(#skinTone)" />

                {/* Lower Body */}
                <rect x="190" y="300" width="120" height="150" fill="#1e3a8a" rx="10" />

                {/* Legs */}
                <rect x="210" y="450" width="30" height="120" fill="url(#skinTone)" />
                <rect x="260" y="450" width="30" height="120" fill="url(#skinTone)" />

                {/* Shoes */}
                <ellipse cx="225" cy="575" rx="20" ry="12" fill="#000" />
                <ellipse cx="275" cy="575" rx="20" ry="12" fill="#000" />

                {/* Medical Badge/ID */}
                <rect x="330" y="220" width="50" height="70" fill="#dbeafe" stroke="#0284c7" strokeWidth="2" rx="4" />
                <text x="355" y="255" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#0284c7">MD</text>

                {/* Decorative hearts */}
                <text x="80" y="100" fontSize="32">❤️</text>
                <text x="420" y="150" fontSize="32">💊</text>
                <text x="70" y="400" fontSize="32">🏥</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}