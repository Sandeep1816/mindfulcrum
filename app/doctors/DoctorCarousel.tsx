"use client"

import { useEffect, useState } from "react"
import DoctorCard from "./DoctorCard"
import AppointmentModal from "./AppointmentModal"

export default function DoctorCarousel({ doctors }: any) {
  const [index, setIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % doctors.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [doctors.length])

  const visibleDoctors = doctors.slice(index, index + 3)

  return (
    <div className="relative">

      <div className="grid md:grid-cols-3 gap-6 transition-all duration-500">
        {visibleDoctors.map((doctor: any) => (
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

      {selectedDoctor && (
        <AppointmentModal
          doctorName={selectedDoctor.name}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}