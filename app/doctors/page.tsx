"use client"

import { useState } from "react"
import Navbar from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import DoctorCard from "./DoctorCard"
import AppointmentModal from "./AppointmentModal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      experience: "15+ years",
      rating: 4.9,
      reviews: 234,
      location: "Delhi",
      image: "/placeholder.svg",
      consultationFee: "₹1,500",
      nextAvailable: "Today, 2:30 PM",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      experience: "12+ years",
      rating: 4.8,
      reviews: 189,
      location: "Mumbai",
      image: "/placeholder.svg",
      consultationFee: "₹1,800",
      nextAvailable: "Tomorrow, 10:00 AM",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48 -mt-48"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2">
            👨‍⚕️ Expert Specialists
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Find the Right
            <span className="block text-accent">Doctor for You</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with experienced medical professionals committed to your wellness.
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <section className="py-10 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">

            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search by name or specialty..."
                className="pl-12 h-12 border-border"
              />
            </div>

            <Select>
              <SelectTrigger className="h-12 w-full lg:w-52 border-border">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12 w-full lg:w-52 border-border">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
              </SelectContent>
            </Select>

            <Button className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>

          </div>
        </div>
      </section>

      {/* DOCTORS GRID */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBook={() => {
                  setSelectedDoctor(doctor)
                  setModalOpen(true)
                }}
              />
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Help Choosing?
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our coordinators will help you find the perfect specialist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Contact Coordinator
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>

      {selectedDoctor && (
        <AppointmentModal
          doctorName={selectedDoctor.name}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  )
}