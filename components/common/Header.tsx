"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="hidden sm:inline font-bold text-gray-900 text-lg">MediCare</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Specialties
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Contact
            </a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm">
            Get Started <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  )
}