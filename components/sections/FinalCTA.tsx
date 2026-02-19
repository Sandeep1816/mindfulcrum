import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      {/* Animated gradient orb */}
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm border border-white/30">
                ✨ Ready to Get Started?
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ready to Prioritize <span className="text-blue-200">Your Health?</span>
              </h2>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-lg">
                Connect with our healthcare team today and take the first step towards a healthier, happier you. Our experts are ready to support your wellness journey.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 sm:space-y-4 pt-4">
              {[
                "Personalized health consultation",
                "Access to 200+ expert specialists",
                "24/7 medical support available"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-blue-100" />
                  </div>
                  <span className="text-sm sm:text-base text-blue-50 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all group">
                Get Started Now 
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white/10 font-bold text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 transition-all group">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Right Side - Contact Info & Stats */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Card */}
            <div className="group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-8">Get In Touch</h3>

                {/* Contact methods */}
                <div className="space-y-5 mb-8">
                  {[
                    {
                      icon: Phone,
                      label: "Call Us",
                      value: "+1 (800) 123-4567",
                      desc: "Available 24/7"
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hello@medicare.com",
                      desc: "We'll respond within 1 hour"
                    },
                    {
                      icon: MapPin,
                      label: "Visit Us",
                      value: "123 Medical Plaza",
                      desc: "New York, NY 10001"
                    }
                  ].map((contact, i) => {
                    const Icon = contact.icon
                    return (
                      <div key={i} className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                        <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover/item:bg-white/20 transition-colors">
                          <Icon className="w-5 h-5 text-blue-200" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-blue-100">{contact.label}</p>
                          <p className="text-base sm:text-lg font-bold text-white truncate">{contact.value}</p>
                          <p className="text-xs sm:text-sm text-blue-200">{contact.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-white/20 to-transparent mb-8"></div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "200+", label: "Specialists" },
                    { number: "50M+", label: "Happy Patients" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</p>
                      <p className="text-xs sm:text-sm text-blue-200">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "⏱️", text: "Quick Booking" },
                { emoji: "🔒", text: "100% Secure" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/15 hover:border-white/40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-blue-50">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 border-t border-white/10">
          <div className="text-center">
            <p className="text-blue-100 text-xs sm:text-sm font-semibold mb-4 uppercase tracking-widest">
              Trusted By Healthcare Professionals Worldwide
            </p>
            <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
              {["🏥 HIPAA Certified", "✓ ISO 27001", "⭐ 4.9/5 Rating"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm text-blue-100 font-semibold hover:bg-white/15 transition-colors">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}