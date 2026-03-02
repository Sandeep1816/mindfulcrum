"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, Heart, ArrowRight, Video, Clock } from "lucide-react"
import { CONSULTATION_FEATURES } from "@/lib/constants"

export default function ConsultationServices() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-block bg-accent/10 text-accent text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-4">
            🎥 Live Consultations
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Expert Medical{" "}
            <span className="text-accent">Professionals</span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Expert professionals delivering quality clinical treatment across all specialties
            through telemedicine and in-person consultations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Video Card */}
          <div className="order-2 lg:order-1">
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">

              {/* Top Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-primary">
                    Live Consultation
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  48:32
                </span>
              </div>

              {/* Video Placeholder */}
              <div className="relative bg-muted rounded-xl aspect-video flex items-center justify-center border border-border">
                <Video className="w-10 h-10 text-muted-foreground" />

                <button className="absolute w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-md transition">
                  <Video className="w-6 h-6 text-accent-foreground ml-1" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <Button className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-11">
                  <Phone className="w-4 h-4 mr-2" />
                  Start Connect
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-11"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">

            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Professional Care <br /> You Can Trust
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                Our healthcare team comprises highly qualified specialists trained to deliver
                compassionate, evidence-based treatment across all medical disciplines.
              </p>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Available 24/7 for both telemedicine and in-person consultations,
                ensuring accessibility and convenience for your healthcare needs.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 bg-muted rounded-2xl p-6 border border-border">
              {CONSULTATION_FEATURES.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12 group">
              Explore Specialists
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: "✓", text: "Board Certified" },
                { icon: "🔒", text: "HIPAA Secure" },
                { icon: "⭐", text: "5-Star Rated" }
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-lg"
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}