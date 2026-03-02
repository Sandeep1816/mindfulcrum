"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                M
              </span>
            </div>
            <span className="hidden sm:inline font-bold text-primary text-lg">
              MediCare
            </span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Specialties", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground/70 hover:text-accent font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

        </div>
      </div>
    </nav>
  )
}