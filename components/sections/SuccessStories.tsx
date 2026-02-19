import { Button } from "@/components/ui/button"
import { Play, Star, Heart, TrendingUp } from "lucide-react"
import { STATISTICS } from "@/lib/constants"
import StatisticCard from "@/components/shared/StatisticCard"

export default function SuccessStories() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-blue-50 to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -mr-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl -ml-48"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-blue-100 text-blue-600 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
              ⭐ Real Patient Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Patient Success <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-2">
            Real stories from real patients who have experienced transformation through our comprehensive care approach. Discover how our services changed lives.
          </p>
        </div>

        {/* Video Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Transformation Begins <span className="text-blue-600">Here</span>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Watch compelling patient testimonials and see how our integrated medical approach has helped thousands achieve their health goals.
              </p>
            </div>

            {/* Key points */}
            <div className="space-y-3 sm:space-y-4">
              {[
                "Real patients sharing their journeys",
                "Documented health transformations",
                "Expert medical interventions",
                "Holistic wellness approach"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Card */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Glow background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 via-indigo-200 to-blue-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Main card */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-100 group-hover:border-blue-200 transition-all duration-300">
                {/* Video placeholder */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  {/* SVG Video Thumbnail */}
                  <svg viewBox="0 0 500 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="videoBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                    </defs>
                    
                    <rect width="500" height="300" fill="url(#videoBg)" />

                    {/* Patient figure */}
                    <circle cx="150" cy="100" r="40" fill="#fdbcb4" />
                    <path d="M 110 100 Q 110 60 150 60 Q 190 60 190 100" fill="#2c1810" />
                    <circle cx="130" cy="85" r="5" fill="#000" />
                    <circle cx="170" cy="85" r="5" fill="#000" />
                    <path d="M 140 120 Q 150 130 160 120" stroke="#8b4513" strokeWidth="2" fill="none" />

                    {/* Happy expression - heart */}
                    <text x="150" y="200" fontSize="60" textAnchor="middle">❤️</text>

                    {/* Text */}
                    <text x="250" y="80" fontSize="24" fontWeight="bold" fill="#fff" textAnchor="middle">Success Story</text>
                    <text x="250" y="110" fontSize="14" fill="#cbd5e1" textAnchor="middle">Patient Testimonial</text>
                    <text x="250" y="200" fontSize="48" textAnchor="middle">▶️</text>
                  </svg>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <button className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1" />
                    </button>
                  </div>
                </div>

                {/* Info section */}
                <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-blue-50">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <p className="text-sm sm:text-base font-bold text-gray-900">Patient Success Case</p>
                      <p className="text-xs sm:text-sm text-gray-600">Real transformation journey</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="relative">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl sm:rounded-4xl blur-xl opacity-20"></div>

          {/* Content */}
          <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 border border-blue-100/50 backdrop-blur-sm">
            {/* Section header */}
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Our <span className="text-blue-600">Impact</span>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                By the numbers - the real difference we make in patients' lives
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {STATISTICS.map((stat, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>

                  {/* Card */}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-gray-100 group-hover:border-blue-200">
                    <StatisticCard {...stat} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all group">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Read More Success Stories
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}