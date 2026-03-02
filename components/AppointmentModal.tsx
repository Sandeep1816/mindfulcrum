"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AppointmentModal({ onClose }: any) {
  const [step, setStep] = useState(1)
  const [slot, setSlot] = useState("")
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleSubmit = async () => {
    await fetch("/api/appointment", {
      method: "POST",
      body: JSON.stringify({ ...form, slot }),
    })

    alert("Appointment booked successfully!")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl w-[400px] space-y-6">

        {step === 1 && (
          <>
            <h2 className="text-xl font-bold">Select Slot</h2>

            <div className="grid grid-cols-2 gap-3">
              {["10:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSlot(s)}
                  className={`p-2 rounded-lg border ${
                    slot === s
                      ? "bg-accent text-white"
                      : "border-border"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <Button
              className="w-full bg-accent"
              onClick={() => setStep(2)}
              disabled={!slot}
            >
              Continue
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold">Enter Details</h2>

            <input
              placeholder="Name"
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Phone"
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              placeholder="Email"
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <Button
              className="w-full bg-accent"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </>
        )}
      </div>
    </div>
  )
}