"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      
      {/* Subtle Background Accent Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight">
                Your Health,
                <br />
                <span className="text-accent">Our Priority</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Comprehensive healthcare solutions delivered by experienced
                professionals. Dedicated to providing compassionate,
                accessible, and world-class medical care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-12"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 h-12"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 pt-6 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-accent">200+</p>
                <p className="text-sm text-muted-foreground">
                  Expert Specialists
                </p>
              </div>

              <div className="h-10 border-l border-border"></div>

              <div>
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">
                  Available Support
                </p>
              </div>
            </div>

            {/* Trust */}
            <div className="space-y-2 pt-4">
              {[
                "HIPAA Certified",
                "ISO 27001 Compliant",
                "Board-Certified Doctors",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm text-foreground font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative">

            {/* Main Doctor Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/images/doctors.png"   // replace with actual image
                alt="Professional Healthcare Team"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 bg-card border border-border rounded-2xl p-6 shadow-lg w-64">
              <p className="text-sm text-muted-foreground">
                Patient Satisfaction
              </p>
              <p className="text-2xl font-bold text-accent">98.7%</p>
              <p className="text-xs text-muted-foreground">
                Based on 50M+ reviews
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}