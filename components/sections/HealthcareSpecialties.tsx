"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { SPECIALTIES } from "@/lib/constants"

export default function HealthcareSpecialties() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Healthcare Specialties
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Comprehensive medical services across multiple specialties to address all your health concerns.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((specialty, index) => (
            <Card
              key={index}
              className="group border border-border hover:border-accent hover:shadow-md transition-all duration-300 bg-card flex flex-col h-full rounded-2xl"
            >

              <CardHeader className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <specialty.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>

                <CardTitle className="text-primary text-lg sm:text-xl">
                  {specialty.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-1">
                <p className="text-muted-foreground text-sm sm:text-base mb-6">
                  {specialty.description}
                </p>

                <Button
                  variant="link"
                  className="text-accent p-0 h-auto font-semibold hover:text-accent/80 text-sm"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>

            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}