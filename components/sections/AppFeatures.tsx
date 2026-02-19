import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Smartphone, TrendingUp, Users, Heart } from "lucide-react"
import { APP_FEATURES_HEALTH, APP_FEATURES_COMMUNITY } from "@/lib/constants"

export default function AppFeatures() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Health Tracking */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Mobile Phone Mockup */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-200 via-indigo-200 to-blue-200 rounded-3xl blur-2xl opacity-30"></div>

              {/* Phone frame */}
              <div className="relative w-72 sm:w-80 bg-black rounded-3xl p-3 sm:p-4 shadow-2xl border-8 border-gray-900">
                {/* Screen */}
                <div className="bg-gradient-to-b from-blue-50 to-indigo-50 rounded-3xl overflow-hidden aspect-[9/19.5]">
                  <svg viewBox="0 0 390 844" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e0f2fe" />
                        <stop offset="100%" stopColor="#dbeafe" />
                      </linearGradient>
                    </defs>

                    {/* Background */}
                    <rect width="390" height="844" fill="url(#healthGradient)" />

                    {/* Status bar */}
                    <rect width="390" height="50" fill="#0284c7" />
                    <text x="20" y="35" fontSize="14" fontWeight="bold" fill="#fff">9:41</text>
                    <text x="350" y="35" fontSize="12" fill="#fff">📶 🔋</text>

                    {/* Header */}
                    <rect y="50" width="390" height="80" fill="#e0f2fe" />
                    <text x="20" y="85" fontSize="24" fontWeight="bold" fill="#0c4a6e">Health</text>
                    <text x="20" y="115" fontSize="12" fill="#0284c7">Track your wellness daily</text>

                    {/* Stats cards */}
                    <rect x="20" y="150" width="170" height="80" rx="15" fill="#fff" stroke="#bfdbfe" strokeWidth="2" />
                    <circle cx="40" cy="170" r="20" fill="#3b82f6" />
                    <text x="70" y="175" fontSize="18" fontWeight="bold" fill="#1e40af">8432</text>
                    <text x="70" y="195" fontSize="10" fill="#64748b">Steps Today</text>

                    <rect x="200" y="150" width="170" height="80" rx="15" fill="#fff" stroke="#bfdbfe" strokeWidth="2" />
                    <circle cx="220" cy="170" r="20" fill="#f43f5e" />
                    <text x="250" y="175" fontSize="18" fontWeight="bold" fill="#be123c">72</text>
                    <text x="250" y="195" fontSize="10" fill="#64748b">BPM</text>

                    {/* Activity chart */}
                    <rect x="20" y="250" width="350" height="150" rx="15" fill="#fff" stroke="#bfdbfe" strokeWidth="2" />
                    <text x="30" y="275" fontSize="14" fontWeight="bold" fill="#0c4a6e">Weekly Activity</text>
                    
                    {/* Bar chart */}
                    <rect x="40" y="340" width="30" height="30" fill="#3b82f6" rx="5" />
                    <rect x="85" y="320" width="30" height="50" fill="#3b82f6" rx="5" />
                    <rect x="130" y="300" width="30" height="70" fill="#06b6d4" rx="5" />
                    <rect x="175" y="310" width="30" height="60" fill="#3b82f6" rx="5" />
                    <rect x="220" y="330" width="30" height="40" fill="#3b82f6" rx="5" />
                    <rect x="265" y="280" width="30" height="90" fill="#06b6d4" rx="5" />
                    <rect x="310" y="315" width="30" height="55" fill="#3b82f6" rx="5" />

                    {/* Bottom navigation */}
                    <rect y="750" width="390" height="94" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
                    <circle cx="65" cy="797" r="20" fill="#3b82f6" />
                    <text x="52" y="802" fontSize="24">❤️</text>
                    <text x="130" y="802" fontSize="24">📊</text>
                    <text x="200" y="802" fontSize="24">🏥</text>
                    <text x="270" y="802" fontSize="24">⚙️</text>
                  </svg>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-600 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
                📱 Health Tracking
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Your Personal Health <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Companion</span>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                600+ tools, activities, and resources designed to make wellness part of your daily routine. Track everything from fitness to nutrition.
              </p>
            </div>

            {/* Features with icons */}
            <div className="space-y-3 sm:space-y-4">
              {APP_FEATURES_HEALTH.map((item, i) => (
                <div key={i} className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base h-11 sm:h-12 shadow-lg hover:shadow-xl transition-all group">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download the App
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold text-sm sm:text-base h-11 sm:h-12">
                View Features
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-blue-600">600+</div>
                <p className="text-xs sm:text-sm text-gray-600">Tools & Features</p>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-blue-600">Real-time</div>
                <p className="text-xs sm:text-sm text-gray-600">Sync Data</p>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-blue-600">AI Smart</div>
                <p className="text-xs sm:text-sm text-gray-600">Insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Support */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-purple-100 text-purple-600 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
                👥 Community Support
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Connect With <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Millions</span>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Join a safe, moderated space for emotional support and peer guidance. Share experiences, learn from others, and build meaningful connections.
              </p>
            </div>

            {/* Features with icons */}
            <div className="space-y-3 sm:space-y-4">
              {APP_FEATURES_COMMUNITY.map((item, i) => (
                <div key={i} className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-sm sm:text-base h-11 sm:h-12 shadow-lg hover:shadow-xl transition-all group">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Join Community
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold text-sm sm:text-base h-11 sm:h-12">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-purple-600">50M+</div>
                <p className="text-xs sm:text-sm text-gray-600">Active Members</p>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-purple-600">24/7</div>
                <p className="text-xs sm:text-sm text-gray-600">Moderated</p>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-purple-600">100%</div>
                <p className="text-xs sm:text-sm text-gray-600">Safe Space</p>
              </div>
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-br from-purple-200 via-pink-200 to-purple-200 rounded-3xl blur-2xl opacity-30"></div>

              {/* Phone frame */}
              <div className="relative w-72 sm:w-80 bg-black rounded-3xl p-3 sm:p-4 shadow-2xl border-8 border-gray-900">
                {/* Screen */}
                <div className="bg-gradient-to-b from-purple-50 to-pink-50 rounded-3xl overflow-hidden aspect-[9/19.5]">
                  <svg viewBox="0 0 390 844" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="communityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fce7f3" />
                        <stop offset="100%" stopColor="#fae8ff" />
                      </linearGradient>
                    </defs>

                    {/* Background */}
                    <rect width="390" height="844" fill="url(#communityGradient)" />

                    {/* Status bar */}
                    <rect width="390" height="50" fill="#a855f7" />
                    <text x="20" y="35" fontSize="14" fontWeight="bold" fill="#fff">9:41</text>
                    <text x="350" y="35" fontSize="12" fill="#fff">📶 🔋</text>

                    {/* Header */}
                    <rect y="50" width="390" height="80" fill="#fce7f3" />
                    <text x="20" y="85" fontSize="24" fontWeight="bold" fill="#831843">Community</text>
                    <text x="20" y="115" fontSize="12" fill="#a855f7">Connect & Share</text>

                    {/* Community posts */}
                    <rect x="20" y="150" width="350" height="100" rx="15" fill="#fff" stroke="#fbcfe8" strokeWidth="2" />
                    <circle cx="40" cy="170" r="15" fill="#ec4899" />
                    <text x="65" y="175" fontSize="12" fontWeight="bold" fill="#831843">Sarah • 2h ago</text>
                    <text x="65" y="195" fontSize="11" fill="#64748b">Just completed my 30-day wellness challenge!</text>
                    <text x="65" y="215" fontSize="10" fill="#a78bfa">❤️ 234  💬 45</text>

                    <rect x="20" y="270" width="350" height="100" rx="15" fill="#fff" stroke="#fbcfe8" strokeWidth="2" />
                    <circle cx="40" cy="290" r="15" fill="#f472b6" />
                    <text x="65" y="295" fontSize="12" fontWeight="bold" fill="#831843">John • 4h ago</text>
                    <text x="65" y="315" fontSize="11" fill="#64748b">Anyone have tips for better sleep? Struggling lately</text>
                    <text x="65" y="335" fontSize="10" fill="#a78bfa">❤️ 156  💬 32</text>

                    {/* Bottom navigation */}
                    <rect y="750" width="390" height="94" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
                    <circle cx="65" cy="797" r="20" fill="#a855f7" />
                    <text x="52" y="802" fontSize="24">👥</text>
                    <text x="130" y="802" fontSize="24">💬</text>
                    <text x="200" y="802" fontSize="24">🔔</text>
                    <text x="270" y="802" fontSize="24">👤</text>
                  </svg>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}