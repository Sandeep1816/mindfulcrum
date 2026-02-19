import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { Phone, MapPin, Clock, AlertTriangle, Heart, Zap, Activity, Ambulance, Brain } from "lucide-react"

export default function EmergencyPage() {
  const emergencyServices = [
    {
      icon: Heart,
      title: "Cardiac Emergency",
      description: "Immediate care for heart attacks, chest pain, and cardiac arrests",
      response: "< 5 minutes",
    },
    {
      icon: Brain,
      title: "Stroke Care",
      description: "Rapid response for stroke symptoms and neurological emergencies",
      response: "< 10 minutes",
    },
    {
      icon: Activity,
      title: "Trauma Care",
      description: "Emergency treatment for accidents, injuries, and severe trauma",
      response: "< 5 minutes",
    },
    {
      icon: Zap,
      title: "Critical Care",
      description: "Life-threatening conditions requiring immediate medical attention",
      response: "< 3 minutes",
    },
  ]

  const emergencyContacts = [
    {
      title: "Emergency Hotline",
      number: "+91 98765 43200",
      description: "24/7 Emergency Medical Services",
      type: "primary",
    },
    {
      title: "Ambulance Service",
      number: "+91 98765 43201",
      description: "Emergency Transportation",
      type: "secondary",
    },
    {
      title: "Poison Control",
      number: "+91 98765 43202",
      description: "Poisoning & Overdose Emergency",
      type: "secondary",
    },
  ]

  const emergencyLocations = [
    {
      name: "MediCare Emergency Center - Delhi",
      address: "123 Healthcare Street, Medical District, Delhi 110001",
      phone: "+91 98765 43210",
      distance: "2.5 km",
    },
    {
      name: "MediCare Emergency Center - Mumbai",
      address: "456 Medical Avenue, Healthcare Hub, Mumbai 400001",
      phone: "+91 98765 43220",
      distance: "3.2 km",
    },
    {
      name: "MediCare Emergency Center - Bangalore",
      address: "789 Wellness Road, Tech Park, Bangalore 560001",
      phone: "+91 98765 43230",
      distance: "1.8 km",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="w-6 h-6" />
            <p className="text-lg font-semibold">24/7 Emergency Services Available</p>
            <Button variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Call Now: +91 98765 43200
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Emergency Medical Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              When every second counts, our emergency medical team is ready to provide immediate, life-saving care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="w-5 h-5 mr-2" />
                Emergency: +91 98765 43200
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <Ambulance className="w-5 h-5 mr-2" />
                Request Ambulance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Save these numbers in your phone for quick access during emergencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-shadow ${
                  contact.type === "primary" ? "bg-red-50 border-red-200" : ""
                }`}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      contact.type === "primary" ? "bg-red-600" : "bg-blue-600"
                    }`}
                  >
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                  {contact.type === "primary" && <Badge className="bg-red-600">Primary Emergency</Badge>}
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">{contact.number}</p>
                  <p className="text-gray-600">{contact.description}</p>
                  <Button
                    className={`w-full mt-4 ${
                      contact.type === "primary" ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Emergency Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our emergency department is equipped to handle all types of medical emergencies with rapid response times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Response: {service.response}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Emergency Centers Near You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the nearest MediCare emergency center for immediate medical attention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyLocations.map((location, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{location.name}</CardTitle>
                  <Badge variant="secondary">{location.distance} away</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-700">{location.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-700">24/7 Emergency Services</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      Get Directions
                    </Button>
                    <Button className="flex-1 bg-red-600 hover:bg-red-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call Emergency */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">When to Call Emergency Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Call our emergency hotline immediately if you experience any of these symptoms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Chest pain or pressure",
              "Difficulty breathing",
              "Severe bleeding",
              "Loss of consciousness",
              "Severe allergic reaction",
              "Signs of stroke (FAST)",
              "Severe burns",
              "Poisoning or overdose",
              "Severe head injury",
              "Broken bones",
              "High fever with confusion",
              "Severe abdominal pain",
            ].map((symptom, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-gray-700">{symptom}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Remember:</strong> If you're unsure whether it's an emergency, it's better to call and be safe.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency: +91 98765 43200
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
