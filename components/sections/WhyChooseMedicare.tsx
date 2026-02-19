import { WHY_CHOOSE_ITEMS } from "@/lib/constants"

export default function WhyChooseMedicare() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm border border-white/30">
              ✨ Our Strengths
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Why Choose <span className="text-blue-200">MediCare?</span>
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2 leading-relaxed">
            Built by healthcare experts with decades of global experience to deliver world-class medical care and comprehensive wellness solutions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-40 blur transition-all duration-300"></div>

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/40 group-hover:-translate-y-2">
                
                {/* Icon Container */}
                <div className="relative mb-5 sm:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-lg sm:rounded-xl flex items-center justify-center border border-white/20 group-hover:border-white/40 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-blue-100 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-white/10 rounded-tr-2xl group-hover:border-t-white/20 transition-colors"></div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-blue-100 mb-1 sm:mb-2">200+</div>
            <p className="text-xs sm:text-sm text-blue-200">Expert Doctors</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-blue-100 mb-1 sm:mb-2">24/7</div>
            <p className="text-xs sm:text-sm text-blue-200">Support</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-blue-100 mb-1 sm:mb-2">100%</div>
            <p className="text-xs sm:text-sm text-blue-200">Certified</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-blue-100 mb-1 sm:mb-2">6M+</div>
            <p className="text-xs sm:text-sm text-blue-200">Patients</p>
          </div>
        </div>
      </div>
    </section>
  )
}