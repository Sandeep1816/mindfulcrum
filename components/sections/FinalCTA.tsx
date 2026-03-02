"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8">

            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-2 rounded-full">
              Ready to Get Started?
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Ready to Prioritize <span className="text-accent">Your Health?</span>
            </h2>

            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-lg">
              Connect with our healthcare team and take the first step toward
              better health. Our experts are ready to support your wellness journey.
            </p>

            {/* Benefits */}
            <div className="space-y-4 pt-4">
              {[
                "Personalized health consultation",
                "Access to 200+ expert specialists",
                "24/7 medical support available",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8"
              >
                Schedule Consultation
              </Button>
            </div>

          </div>

          {/* ================= RIGHT CONTACT CARD ================= */}
          <div>
            <div className="bg-card text-foreground border border-border rounded-3xl p-10 shadow-sm">

              <h3 className="text-2xl font-bold text-primary mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Call Us</p>
                    <p className="font-bold text-lg">+1 (800) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Email</p>
                    <p className="font-bold text-lg">hello@medicare.com</p>
                    <p className="text-sm text-muted-foreground">Response within 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Visit Us</p>
                    <p className="font-bold text-lg">123 Medical Plaza</p>
                    <p className="text-sm text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>

              </div>

              {/* Divider */}
              <div className="border-t border-border my-8" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-accent">200+</p>
                  <p className="text-sm text-muted-foreground">Specialists</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">50M+</p>
                  <p className="text-sm text-muted-foreground">Happy Patients</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= TRUST BADGES ================= */}
        <div className="mt-20 pt-12 border-t border-primary-foreground/10 text-center">
          <p className="text-sm font-semibold mb-6 uppercase tracking-wide text-primary-foreground/70">
            Trusted By Healthcare Professionals Worldwide
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HIPAA Certified",
              "ISO 27001",
              "4.9/5 Rating",
            ].map((badge, i) => (
              <div
                key={i}
                className="px-5 py-2 border border-primary-foreground/20 rounded-full text-sm"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}