"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar } from "lucide-react"

interface Doctor {
  id: number
  name: string
  specialty: string
  experience: string
  rating: number
  reviews: number
  location: string
  image: string
  consultationFee: string
  nextAvailable: string
}

export default function DoctorCard({
  doctor,
  onBook,
}: {
  doctor: Doctor
  onBook: () => void
}) {
  return (
    <div className="group bg-card border border-border rounded-3xl p-6 hover:shadow-xl hover:border-accent/40 transition-all duration-300">

      <div className="flex items-center gap-4">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={90}
          height={90}
          className="rounded-2xl object-cover border-2 border-accent/20 group-hover:border-accent transition-all"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-primary">
            {doctor.name}
          </h3>

          <Badge className="bg-primary/10 text-primary mt-1">
            {doctor.specialty}
          </Badge>

          <div className="flex items-center gap-2 mt-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-foreground">
              {doctor.rating}
            </span>
            <span className="text-sm text-muted-foreground">
              ({doctor.reviews})
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-accent" />
          {doctor.location}
        </div>
        <p>Experience: {doctor.experience}</p>
        <p className="text-accent font-semibold">
          {doctor.consultationFee}
        </p>
      </div>

      <Button
        onClick={onBook}
        className="w-full mt-5 bg-accent hover:bg-accent/90 text-accent-foreground"
      >
        <Calendar className="w-4 h-4 mr-2" />
        Book Appointment
      </Button>
    </div>
  )
}