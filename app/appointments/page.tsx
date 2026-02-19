"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { CalendarIcon, Phone, Mail, MapPin, CreditCard } from "lucide-react"
import { format } from "date-fns"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("")

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
  ]

  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology", fee: "₹1,500" },
    { id: 2, name: "Dr. Michael Chen", specialty: "Neurology", fee: "₹1,800" },
    { id: 3, name: "Dr. Emily Rodriguez", specialty: "Pediatrics", fee: "₹1,200" },
    { id: 4, name: "Dr. Rajesh Kumar", specialty: "Orthopedics", fee: "₹1,600" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Book Your Appointment</h1>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a consultation with our experienced healthcare professionals at your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Booking Forms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Schedule Your Appointment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Appointment Type */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Appointment Type</Label>
                  <RadioGroup value={appointmentType} onValueChange={setAppointmentType}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="in-person" id="in-person" />
                        <Label htmlFor="in-person" className="flex-1 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-medium">In-Person Consultation</p>
                              <p className="text-sm text-gray-600">Visit our medical center</p>
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="telemedicine" id="telemedicine" />
                        <Label htmlFor="telemedicine" className="flex-1 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-green-600" />
                            <div>
                              <p className="font-medium">Telemedicine</p>
                              <p className="text-sm text-gray-600">Video consultation from home</p>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Doctor Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Select Doctor</Label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Choose a doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.id.toString()}>
                          <div className="flex justify-between items-center w-full">
                            <div>
                              <p className="font-medium">{doctor.name}</p>
                              <p className="text-sm text-gray-600">{doctor.specialty}</p>
                            </div>
                            <span className="text-blue-600 font-medium">{doctor.fee}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time Selection */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full h-12 justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Select Time</Label>
                    <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="h-10"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Patient Information */}
                <div className="space-y-6">
                  <Label className="text-lg font-semibold">Patient Information</Label>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter last name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="Enter phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="Enter age" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Medical Information */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Medical Information</Label>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="symptoms">Reason for Visit / Symptoms</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Please describe your symptoms or reason for the appointment"
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="medical-history">Medical History</Label>
                      <Textarea
                        id="medical-history"
                        placeholder="Please list any relevant medical history, current medications, or allergies"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Insurance Information */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Insurance Information</Label>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="insurance-provider">Insurance Provider</Label>
                      <Input id="insurance-provider" placeholder="Enter insurance company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="policy-number">Policy Number</Label>
                      <Input id="policy-number" placeholder="Enter policy number" />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <a href="/terms" className="text-blue-600 hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications" />
                    <Label htmlFor="notifications" className="text-sm">
                      I would like to receive appointment reminders and health tips via email/SMS
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Book Appointment & Pay
                  </Button>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    You will be redirected to secure payment gateway
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Booking?</h2>
            <p className="text-gray-600 mb-8">
              Our care coordinators are available to assist you with booking your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 98765 43210
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Email: appointments@medicare.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
