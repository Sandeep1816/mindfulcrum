"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Calendar } from "lucide-react"
import AppointmentModal from "@/app/doctors/AppointmentModal"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.9,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    rating: 4.8,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    rating: 4.9,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Dr. Rajesh Kumar",
    specialty: "Orthopedics",
    rating: 4.7,
    image: "/placeholder.svg",
  },
]

export default function HomeDoctorsCarousel() {
  const [index, setIndex] = useState(0)
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % doctors.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const visibleDoctors = [
    doctors[index],
    doctors[(index + 1) % doctors.length],
    doctors[(index + 2) % doctors.length],
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Meet Our Expert Doctors
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Highly experienced specialists dedicated to providing world-class care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
          {visibleDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-card border border-border rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300"
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={120}
                height={120}
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-accent/20"
              />

              <h3 className="text-xl font-semibold text-primary mt-6">
                {doctor.name}
              </h3>

              <p className="text-accent font-medium mt-1">
                {doctor.specialty}
              </p>

              <div className="flex justify-center items-center gap-2 mt-3">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-foreground">
                  {doctor.rating}
                </span>
              </div>

              <Button
                onClick={() => {
                  setSelectedDoctor(doctor)
                  setModalOpen(true)
                }}
                className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedDoctor && (
          <AppointmentModal
            doctorName={selectedDoctor.name}
            open={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </section>
  )
}