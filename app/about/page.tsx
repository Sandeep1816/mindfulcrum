import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { Heart, Users, Award, Globe, Target, Eye } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">About MediCare</h1>
            <p className="text-xl text-gray-600 mb-8">
              Transforming healthcare through innovation, compassion, and excellence in medical care.
            </p>
            <p className="text-lg text-gray-600">
              Founded with a vision to make quality healthcare accessible to everyone, MediCare has been at the
              forefront of medical innovation for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  To provide comprehensive, compassionate, and accessible healthcare services that improve the quality
                  of life for individuals and communities we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  To be the leading healthcare provider, setting new standards in medical excellence and patient care
                  through innovation and technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  MediCare was founded in 2010 with a simple yet powerful vision: to revolutionize healthcare delivery
                  by combining cutting-edge medical technology with compassionate patient care.
                </p>
                <p>
                  What started as a small clinic with a team of dedicated doctors has grown into a comprehensive
                  healthcare network serving millions of patients across the country.
                </p>
                <p>
                  Today, we continue to innovate and expand our services, always keeping our patients' wellbeing at the
                  center of everything we do.
                </p>
              </div>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Learn More About Our Journey</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="MediCare facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we deliver healthcare services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We treat every patient with empathy, kindness, and respect.",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in medical care and service delivery.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We work together as a team to achieve the best outcomes for our patients.",
              },
              {
                icon: Globe,
                title: "Innovation",
                description: "We embrace new technologies and methods to improve healthcare delivery.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading MediCare's mission to transform healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Executive Officer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "25+ years of experience in healthcare administration and medical practice.",
              },
              {
                name: "Dr. Michael Chen",
                role: "Chief Medical Officer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Renowned cardiologist with expertise in innovative treatment methodologies.",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Chief Technology Officer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Leading digital health transformation with cutting-edge medical technologies.",
              },
            ].map((leader, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <Badge variant="secondary">{leader.role}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to providing exceptional healthcare services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1M+", label: "Patients Served" },
              { number: "500+", label: "Healthcare Professionals" },
              { number: "50+", label: "Medical Centers" },
              { number: "24/7", label: "Emergency Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
