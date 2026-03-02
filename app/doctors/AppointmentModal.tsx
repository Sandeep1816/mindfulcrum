"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import AppointmentForm from "@/components/forms/AppointmentForm"

const slots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:30 PM",
  "04:00 PM",
]

export default function AppointmentModal({
  doctorName,
  open,
  onClose,
}: {
  doctorName: string
  open: boolean
  onClose: () => void
}) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-card w-full max-w-lg rounded-3xl shadow-2xl border border-border p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
        >
          <X />
        </button>

        {!success ? (
          <>
            <h2 className="text-xl font-bold text-primary mb-6">
              Book with {doctorName}
            </h2>

            {!selectedSlot ? (
              <>
                <p className="text-muted-foreground mb-4">
                  Select a time slot
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className="py-2 rounded-xl border border-border hover:border-accent hover:bg-accent/10 transition-all text-sm"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-4">
                  Selected:{" "}
                  <span className="text-accent font-medium">
                    {selectedSlot}
                  </span>
                </p>

                <AppointmentForm
                  slot={selectedSlot}
                  doctorName={doctorName}  // ✅ FIXED
                  onSuccess={() => setSuccess(true)}
                />
              </>
            )}
          </>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-xl font-bold text-accent mb-3">
              Appointment Confirmed 🎉
            </h3>
            <p className="text-muted-foreground">
              A confirmation email has been sent.
            </p>

            <Button
              onClick={onClose}
              className="mt-6 bg-accent hover:bg-accent/90"
            >
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}