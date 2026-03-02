"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Smartphone, Users } from "lucide-react"
import { APP_FEATURES_HEALTH, APP_FEATURES_COMMUNITY } from "@/lib/constants"

export default function AppFeatures() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
           HEALTH TRACKING
        ========================== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

          {/* Phone Mockup (Clean Version) */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-72 sm:w-80 bg-card border border-border rounded-3xl shadow-sm p-6">

              <div className="bg-muted rounded-2xl aspect-[9/16] flex items-center justify-center">
                <Smartphone className="w-12 h-12 text-muted-foreground" />
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">

            <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-2 rounded-full">
              📱 Health Tracking
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Your Personal <span className="text-accent">Health Companion</span>
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              600+ tools, activities, and smart insights designed to make wellness part of your daily routine.
              Track everything from fitness to nutrition in one secure platform.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {APP_FEATURES_HEALTH.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
                  <span className="text-foreground text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12">
                <Smartphone className="w-5 h-5 mr-2" />
                Download App
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12"
              >
                View Features
              </Button>
            </div>

          </div>
        </div>

        {/* =========================
           COMMUNITY SUPPORT
        ========================== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">

            <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-2 rounded-full">
              👥 Community Support
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Connect With <span className="text-accent">Millions</span>
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Join a safe, moderated healthcare community. Share experiences, 
              receive peer guidance, and build meaningful connections.
            </p>

            <div className="space-y-4">
              {APP_FEATURES_COMMUNITY.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
                  <span className="text-foreground text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12">
                <Users className="w-5 h-5 mr-2" />
                Join Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12"
              >
                Learn More
              </Button>
            </div>

          </div>

          {/* Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-72 sm:w-80 bg-card border border-border rounded-3xl shadow-sm p-6">
              <div className="bg-muted rounded-2xl aspect-[9/16] flex items-center justify-center">
                <Users className="w-12 h-12 text-muted-foreground" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}