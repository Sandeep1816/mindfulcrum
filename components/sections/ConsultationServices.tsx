import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, Heart, ArrowRight, Video, Clock } from "lucide-react"
import { CONSULTATION_FEATURES } from "@/lib/constants"

export default function ConsultationServices() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-blue-100 text-blue-600 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
              🎥 Live Consultations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Expert Medical <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Professionals</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2 leading-relaxed">
            Expert professionals delivering quality clinical treatment across all specialties through telemedicine and in-person consultations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Video Section */}
          <div className="relative order-2 lg:order-1 group">
            {/* Background glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 via-indigo-200 to-blue-200 rounded-3xl sm:rounded-4xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700 overflow-hidden group-hover:border-slate-600 transition-all duration-300">
              {/* Video header */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6 border border-slate-700/50">
                {/* Header info */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white animate-pulse" />
                    </div>
                    <span className="font-bold text-white text-sm sm:text-base">Live Consultation</span>
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-blue-300 bg-blue-900/30 px-3 py-1 rounded-lg">⏱️ 48:32</span>
                </div>

                {/* Video placeholder SVG */}
                <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg sm:rounded-xl aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 250"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="videoBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="250" fill="url(#videoBg)" />
                    
                    {/* Doctor illustration */}
                    <circle cx="100" cy="80" r="35" fill="#fdbcb4" />
                    <path d="M 60 80 Q 60 50 100 50 Q 140 50 140 80" fill="#2c1810" />
                    <circle cx="85" cy="70" r="4" fill="#000" />
                    <circle cx="115" cy="70" r="4" fill="#000" />
                    <path d="M 90 100 Q 100 110 110 100" stroke="#8b4513" strokeWidth="2" fill="none" />
                    
                    {/* Lab coat */}
                    <rect x="65" y="115" width="70" height="90" fill="#fff" rx="5" />
                    <circle cx="100" cy="125" r="3" fill="#cbd5e1" />
                    <circle cx="100" cy="155" r="3" fill="#cbd5e1" />
                    <circle cx="100" cy="185" r="3" fill="#cbd5e1" />
                    
                    {/* Stethoscope */}
                    <path d="M 115 120 Q 135 140 140 170" stroke="#3b82f6" strokeWidth="5" fill="none" strokeLinecap="round" />
                    <circle cx="143" cy="175" r="8" fill="#3b82f6" />
                    
                    {/* Patient side */}
                    <circle cx="280" cy="80" r="35" fill="#fdbcb4" />
                    <path d="M 240 80 Q 240 50 280 50 Q 320 50 320 80" fill="#4a3728" />
                    <circle cx="265" cy="70" r="4" fill="#000" />
                    <circle cx="295" cy="70" r="4" fill="#000" />
                    
                    {/* Patient clothing */}
                    <rect x="245" y="115" width="70" height="90" fill="#e0e7ff" rx="5" />
                    
                    {/* Connection line */}
                    <line x1="150" y1="130" x2="240" y2="130" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                  </svg>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <button className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Video className="w-5 h-5 sm:w-7 sm:h-7 text-white ml-1" />
                    </button>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 sm:gap-3 pt-2">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all h-10 sm:h-11">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    <span className="hidden sm:inline">Start</span> Connect
                  </Button>
                  <Button className="flex-1 border-2 border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-slate-500 font-semibold text-xs sm:text-sm transition-all h-10 sm:h-11">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Schedule
                  </Button>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Title with accent */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Professional Care <br /> You Can Trust
                </h3>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed pl-0">
                Our healthcare team comprises highly qualified specialists trained to deliver compassionate, evidence-based treatment across all medical disciplines.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Available 24/7 for both telemedicine and in-person consultations, ensuring accessibility and convenience for your healthcare needs.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-100">
              {CONSULTATION_FEATURES.map((item, i) => (
                <div key={i} className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 p-1">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:text-green-700 transition-colors" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base h-11 sm:h-12 shadow-lg hover:shadow-xl transition-all group">
              Explore Specialists 
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: "✓", text: "Board Certified" },
                { icon: "🔒", text: "HIPAA Secure" },
                { icon: "⭐", text: "5-Star Rated" }
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}