import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Input } from "@/app/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { Star, MapPin, Calendar, Search, Filter } from "lucide-react"

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      experience: "15+ years",
      rating: 4.9,
      reviews: 234,
      location: "Delhi",
      image: "/placeholder.svg?height=300&width=300",
      qualifications: ["MBBS", "MD Cardiology", "Fellowship in Interventional Cardiology"],
      languages: ["English", "Hindi"],
      consultationFee: "₹1,500",
      nextAvailable: "Today, 2:30 PM",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      experience: "12+ years",
      rating: 4.8,
      reviews: 189,
      location: "Mumbai",
      image: "/placeholder.svg?height=300&width=300",
      qualifications: ["MBBS", "MD Neurology", "DM Neurology"],
      languages: ["English", "Mandarin"],
      consultationFee: "₹1,800",
      nextAvailable: "Tomorrow, 10:00 AM",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      experience: "10+ years",
      rating: 4.9,
      reviews: 312,
      location: "Bangalore",
      image: "/placeholder.svg?height=300&width=300",
      qualifications: ["MBBS", "MD Pediatrics", "Fellowship in Pediatric Cardiology"],
      languages: ["English", "Spanish", "Hindi"],
      consultationFee: "₹1,200",
      nextAvailable: "Today, 4:00 PM",
    },
    {
      id: 4,
      name: "Dr. Rajesh Kumar",
      specialty: "Orthopedics",
      experience: "18+ years",
      rating: 4.7,
      reviews: 156,
      location: "Chennai",
      image: "/placeholder.svg?height=300&width=300",
      qualifications: ["MBBS", "MS Orthopedics", "Fellowship in Joint Replacement"],
      languages: ["English", "Hindi", "Tamil"],
      consultationFee: "₹1,600",
      nextAvailable: "Tomorrow, 11:30 AM",
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      specialty: "Dermatology",
      experience: "8+ years",
      rating: 4.8,
      reviews: 203,
      location: "Hyderabad",
      image: "/placeholder.svg?height=300&width=300",
      qualifications: ["MBBS", "MD Dermatology", "Fellowship in Cosmetic Dermatology"],
      languages: ["English", "Hindi", "Telugu"],
      consultationFee: "₹1,400",
      nextAvailable: "Today, 6:00 PM",
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      specialty: "General Medicine",
      experience: "20+ years",
      rating: 4.6,
      reviews: 445,
      location: "Pune",
      image: "/placeholder.svg?height=300&width=300",
      qualifications: ["MBBS", "MD Internal Medicine", "Fellowship in Diabetes"],
      languages: ["English", "Hindi", "Marathi"],
      consultationFee: "₹1,000",
      nextAvailable: "Today, 3:15 PM",
    },
  ]

  const specialties = [
    "All Specialties",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "General Medicine",
  ]
  const locations = ["All Locations", "Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune"]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Find Your Doctor</h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with experienced healthcare professionals who are committed to providing you with the best medical
              care.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search doctors by name or specialty..." className="pl-10 h-12" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty.toLowerCase().replace(/\s+/g, "-")}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location.toLowerCase().replace(/\s+/g, "-")}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="w-full md:w-auto h-12 bg-blue-600 hover:bg-blue-700">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {doctor.specialty}
                  </Badge>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{doctor.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {doctor.location}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">Experience</p>
                    <p className="text-sm text-gray-600">{doctor.experience}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">Qualifications</p>
                    <p className="text-sm text-gray-600">{doctor.qualifications.join(", ")}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">Languages</p>
                    <p className="text-sm text-gray-600">{doctor.languages.join(", ")}</p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Consultation Fee</p>
                      <p className="text-lg font-bold text-blue-600">{doctor.consultationFee}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Next Available</p>
                      <p className="text-sm font-medium text-green-600">{doctor.nextAvailable}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button variant="outline" className="flex-1">
                      View Profile
                    </Button>
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Doctors
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Can't Find the Right Doctor?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our care coordinators are here to help you find the perfect healthcare professional for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Care Coordinator
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Call Us: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
