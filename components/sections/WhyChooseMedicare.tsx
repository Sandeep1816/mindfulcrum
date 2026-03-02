"use client"

import { WHY_CHOOSE_ITEMS } from "@/lib/constants"

export default function WhyChooseMedicare() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">

      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-accent/20 text-accent text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border border-accent/30">
              ✨ Our Strengths
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Why Choose{" "}
            <span className="text-accent">MediCare?</span>
          </h2>

          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2 leading-relaxed">
            Built by healthcare experts with decades of global experience to
            deliver world-class medical care and comprehensive wellness solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div key={index} className="group relative">

              {/* Hover Glow */}
              <div className="absolute -inset-0.5 bg-accent/40 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>

              {/* Card */}
              <div className="relative bg-primary/80 backdrop-blur-lg border border-primary-foreground/10 rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:border-accent/40">

                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-5 sm:mb-6 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30 group-hover:bg-accent/30 transition-all duration-300">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary-foreground">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-primary-foreground/10">
          {[
            { value: "200+", label: "Expert Doctors" },
            { value: "24/7", label: "Support" },
            { value: "100%", label: "Certified" },
            { value: "6M+", label: "Patients" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}