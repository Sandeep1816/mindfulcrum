import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import {
  Heart,
  Shield,
  Clock,
  Users,
  Stethoscope,
  Brain,
  Activity,
  Phone,
  ChevronRight,
  Play,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Announcement Banners */}
      <div className="bg-blue-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Announcement"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <Badge className="bg-blue-100 text-blue-800 mb-1">Exciting News</Badge>
                <p className="text-sm">
                  <span className="font-semibold">Telemedicine services now in</span>{" "}
                  <span className="text-blue-600 font-semibold">Delhi NCR.</span>
                </p>
                <p className="text-xs text-gray-600">Bringing quality healthcare within your reach..</p>
              </div>
            </div>
            <Button variant="outline" className="text-blue-600 border-blue-600">
              Book Your Session <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trust MediCare with your health
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Our mission is simple: to help you feel better, get better and stay better.
              </p>
              <p className="text-gray-600">
                We bring together comprehensive care, support from qualified doctors and specialists, as well as
                community access to deliver the best quality healthcare for your needs.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More
              </Button>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform rotate-12"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Healthcare professional"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MediCare Section */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why MediCare?</h2>
            <p className="text-teal-100 max-w-3xl mx-auto">
              Our platform is built by doctors, specialists and healthcare experts with immense global experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">Comprehensive Care</h3>
              <p className="text-teal-100 text-sm">
                From preventive care & therapy, to specialist consultations & medication management, we can help with it
                all.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">Evidence-Based Medicine</h3>
              <p className="text-teal-100 text-sm">
                Our treatment options are based on scientifically proven treatments & clinically validated approaches.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">Personalized Support</h3>
              <p className="text-teal-100 text-sm">
                Our treatment plans are tailored to your unique needs, so you can get the right care at the right time.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-teal-100 text-sm">
                Our healthcare services can be accessed from wherever you might be, all 7 days a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our healthcare offerings</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              We are a healthcare ecosystem that brings together multiple treatment options to create an experience that
              makes getting help easy and seamless. From assessment to treatment, we're with you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold">MediCare</span>
                    </div>
                    <span className="text-2xl font-bold">48:32</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-red-500 hover:bg-red-600">
                        End
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Doctor consultation"
                      width={300}
                      height={200}
                      className="w-full rounded-lg object-cover"
                    />
                    <div className="absolute bottom-4 right-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="Patient"
                        width={60}
                        height={60}
                        className="rounded-lg border-2 border-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Consultation & Specialist Care</h3>
              <p className="text-gray-600">
                Our professionals are highly qualified and trained to deliver quality and compassionate clinical
                treatment across specialties through telemedicine, in-person consultations, and comprehensive care for
                your health and family's wellbeing.
              </p>
              <p className="text-gray-600">
                They follow evidence-based protocols & undergo peer supervision to ensure you get exceptional care, now
                available both online and in-person. Meet your healthcare expert today.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">Explore Specialists</Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Health Tracking</h3>
                <p className="text-gray-600">The MediCare app is a digital powerhouse of health tracking resources.</p>
                <p className="text-gray-600">
                  Get access to a personalized plan with 600+ tools, activities, articles & daily reminders to make
                  healthcare a part of your routine.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Download the App</Button>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Community</h3>
                <p className="text-gray-600">
                  The MediCare community is a safe space to share what you're dealing with & get peer support.
                </p>
                <p className="text-gray-600">
                  Connect with people from across the globe. Remain anonymous (if you prefer) and get ongoing emotional
                  support in a space moderated by healthcare experts.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Join the Community</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Health tracking app"
                  width={300}
                  height={400}
                  className="mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Community app"
                  width={300}
                  height={400}
                  className="mx-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Conditions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What are you looking for help with?</h2>
            <p className="text-gray-600">MediCare is here to support you with all your healthcare needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "General Medicine",
                description: "Comprehensive primary care for your everyday health needs. We can help.",
                icon: Stethoscope,
                color: "bg-teal-700",
              },
              {
                title: "Cardiology",
                description:
                  "Expert heart care and cardiovascular health management. Let us help you maintain a healthy heart.",
                icon: Heart,
                color: "bg-teal-700",
              },
              {
                title: "Neurology",
                description:
                  "Specialized care for neurological conditions and brain health. You can find the care you need with us.",
                icon: Brain,
                color: "bg-teal-700",
              },
              {
                title: "Orthopedics",
                description: "Expert care for bone, joint, and muscle conditions. We can help you stay active.",
                icon: Activity,
                color: "bg-teal-700",
              },
              {
                title: "Pediatrics",
                description:
                  "Specialized healthcare for children and adolescents. There are ways to ensure your child's health.",
                icon: Users,
                color: "bg-teal-700",
              },
              {
                title: "Emergency Care",
                description:
                  "24/7 emergency medical services and urgent care. We can help you cope with medical emergencies.",
                icon: Phone,
                color: "bg-teal-700",
              },
            ].map((condition, index) => (
              <Card key={index} className={`${condition.color} text-white border-0 hover:shadow-lg transition-shadow`}>
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <condition.icon className="w-6 h-6 text-orange-300" />
                    </div>
                    <CardTitle className="text-white">{condition.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-teal-100 mb-4">{condition.description}</CardDescription>
                  <Button variant="link" className="text-white p-0 h-auto font-semibold">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="link" className="text-blue-600">
              View More Specialties
            </Button>
          </div>
        </div>
      </section>

      {/* Corporate Wellness Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-600 text-white mb-4">MediCare's Corporate Wellness Programme</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Invest in Your Employees and Build Thriving Teams
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Imagine a workplace where employees are supported, engaged, and motivated to bring their best selves to
              work. That's the reality we create. Over 120+ organizations have partnered with MediCare to empower their
              teams and drive measurable business results.
            </p>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-12 opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt={`Company ${i}`}
                  width={120}
                  height={40}
                  className="grayscale"
                />
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "Drive innovation and creativity by fostering a culture of wellness",
              "Stand out as an employer of choice that prioritizes employee wellbeing",
              "See the positive impact on key metrics like reduced absenteeism and presenteeism",
              "Foster a positive and engaged workforce, driving innovation and organizational success",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600 text-sm">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Visualize the impact of wellness programs on your organization in real time
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">See It Live</Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Stories Of <span className="text-blue-600">Hope</span>
              </h2>
              <p className="text-gray-600">
                Here's what our patients have to say about the MediCare experience. Check out stories which connect with
                humans beyond their health concerns.
              </p>
              <p className="text-gray-600">
                Each story reflects the personalized care, results, and ongoing support that define our approach.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Patient testimonial video"
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                      <Play className="w-6 h-6 mr-2" />
                      Watch Story
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    Healthcare Helped Me Reclaim My Life
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16">
            {[
              { number: "200+", label: "in-house doctors and specialists" },
              { number: "6 million+", label: "lives impacted" },
              { number: "220k+", label: "consultations delivered" },
              { number: "50k+", label: "community members" },
              { number: "Best App for Health", label: "by Google Play India" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Media Mentions */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">We've Been Featured in</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt={`Media ${i}`}
                    width={120}
                    height={40}
                    className="grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">MediCare's Health Resources</h2>
            <p className="text-gray-600">
              Awareness is the first step to change. Check out our digital library to learn more about health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                type: "Article",
                duration: "4 min",
                title: "Building Healthy Habits",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                type: "Article",
                duration: "3 min",
                title: "Is It Time to Ask For Help?",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                type: "Video",
                duration: "5 min",
                title: "Managing Stress Effectively",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((resource, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-700">
                    {resource.type} | {resource.duration}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">View All Resources</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Need help for someone you care about?</h2>
              <p className="text-gray-600">
                We know how hard it is to watch someone you care about struggling. Finding the right care is the first
                step. If you want guidance on the best healthcare support for yourself or a loved one an MediCare Care
                Consultant can help you.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">Connect with Us</Button>
            </div>
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Care team"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
