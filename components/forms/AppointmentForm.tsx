"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import { appointmentSchema } from "@/lib/validation"
import { Button } from "@/components/ui/button"

export default function AppointmentForm({
  slot,
  doctorName,
  onSuccess,
}: {
  slot: string
  doctorName: string
  onSuccess: () => void
}) {
  return (
    <Formik
      initialValues={{ name: "", phone: "", email: "" }}
      validationSchema={appointmentSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await fetch("/api/appointment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              phone: values.phone,
              email: values.email,
              slot,
              doctor: doctorName,
            }),
          })

          const data = await response.json()

          if (!response.ok) {
            alert(data.error || "Booking failed")
            return
          }

          onSuccess()
        } catch (error) {
          console.error("Form Error:", error)
          alert("Something went wrong")
        }

        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">

          <div>
            <Field
              name="name"
              placeholder="Full Name"
              className="w-full border border-border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Field
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <ErrorMessage name="phone" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Field
              name="email"
              placeholder="Email Address"
              className="w-full border border-border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl"
          >
            {isSubmitting ? "Booking..." : "Confirm Appointment"}
          </Button>

        </Form>
      )}
    </Formik>
  )
}