import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import {
  Stethoscope,
  Heart,
  Brain,
  Baby,
  Eye,
  Bone,
  Activity,
  Phone,
  Video,
  Clock,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Comprehensive primary care for your everyday health needs and preventive medicine.",
      features: ["Annual checkups", "Chronic disease management", "Preventive care", "Health screenings"],
      href: "/services/general-medicine",
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Expert heart care and cardiovascular health management from leading specialists.",
      features: ["Heart disease treatment", "Cardiac surgery", "Preventive cardiology", "Emergency cardiac care"],
      href: "/services/cardiology",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Specialized care for neurological conditions and comprehensive brain health services.",
      features: ["Stroke treatment", "Epilepsy care", "Memory disorders", "Neurological rehabilitation"],
      href: "/services/neurology",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert care for bone, joint, and muscle conditions to keep you active and mobile.",
      features: ["Joint replacement", "Sports medicine", "Fracture care", "Physical therapy"],
      href: "/services/orthopedics",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized healthcare for children and adolescents from infancy through teenage years.",
      features: ["Well-child visits", "Immunizations", "Developmental assessments", "Pediatric emergencies"],
      href: "/services/pediatrics",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Comprehensive eye care services from routine exams to advanced surgical procedures.",
      features: ["Eye exams", "Cataract surgery", "Retinal care", "Vision correction"],
      href: "/services/ophthalmology",
    },
  ]

  const specializedServices = [
    {
      icon: Video,
      title: "Telemedicine",
      description: "Virtual consultations with our healthcare professionals from the comfort of your home.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Phone,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response and critical care capabilities.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Activity,
      title: "Health Checkups",
      description: "Comprehensive health assessments and preventive screenings for early detection.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Corporate Wellness",
      description: "Workplace health programs designed to improve employee wellbeing and productivity.",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Our Medical Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive healthcare services delivered by experienced professionals using state-of-the-art technology
              and evidence-based practices.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Medical Specialties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of specialists provides expert care across a wide range of medical disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Additional healthcare services designed to meet your specific needs and provide convenient access to care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose MediCare Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Medical Team</h3>
                    <p className="text-gray-600">
                      Our board-certified physicians and specialists bring years of experience and expertise to your
                      care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                    <p className="text-gray-600">
                      Round-the-clock emergency services and urgent care to ensure you get help when you need it most.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                    <p className="text-gray-600">
                      State-of-the-art medical equipment and innovative treatment methods for the best possible
                      outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Medical services"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule an appointment with one of our specialists or contact us to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
