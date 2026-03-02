"use client"

import { Button } from "@/components/ui/button"
import { Play, Star, Heart, TrendingUp } from "lucide-react"
import { STATISTICS } from "@/lib/constants"
import StatisticCard from "@/components/shared/StatisticCard"

export default function SuccessStories() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-6">
            ⭐ Real Patient Stories
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Patient Success <span className="text-accent">Stories</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Real journeys from patients who experienced meaningful transformation 
            through our integrated and compassionate care.
          </p>
        </div>

        {/* ================= VIDEO SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">
              Transformation Begins <span className="text-accent">Here</span>
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Watch patient testimonials and see how our medical expertise and
              holistic approach have helped thousands achieve better health outcomes.
            </p>

            <div className="space-y-4">
              {[
                "Real patient journeys",
                "Documented medical improvements",
                "Expert interventions",
                "Holistic wellness programs",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-foreground text-base font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Card */}
          <div className="order-1 lg:order-2">
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">

              <div className="relative aspect-video bg-muted flex items-center justify-center">
                <Play className="w-12 h-12 text-muted-foreground" />

                <button className="absolute w-16 h-16 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-md transition">
                  <Play className="w-6 h-6 text-accent-foreground ml-1" />
                </button>
              </div>

              <div className="p-6 border-t border-border bg-card">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-primary">
                      Patient Success Case
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Verified transformation journey
                    </p>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= STATISTICS ================= */}
        <div className="bg-card border border-border rounded-3xl p-10 md:p-16 mb-20">

          <div className="text-center mb-14">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
              Our <span className="text-accent">Impact</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The measurable difference we make in patients’ lives.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {STATISTICS.map((stat, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-sm transition"
              >
                <StatisticCard {...stat} />
              </div>
            ))}
          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8 group">
            <Heart className="w-5 h-5 mr-2" />
            Read More Success Stories
            <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  )
}