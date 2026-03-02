"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BENEFITS } from "@/lib/constants"

export default function CorporateWellness() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-accent/10 text-accent mb-6 text-sm font-semibold px-4 py-2">
            Corporate Solutions
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Elevate Employee Wellness
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Partner with us to build a healthier, more engaged, and productive workforce.
            Trusted by 120+ leading organizations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-sm transition-all duration-300"
            >
              <div className="text-3xl mb-4 text-accent">
                {benefit.icon}
              </div>

              <p className="text-foreground font-semibold text-base">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base h-12 px-8">
            Schedule Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

      </div>
    </section>
  )
}