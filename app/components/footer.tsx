import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Star, Download, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-teal-700 text-white">
      {/* Contact Banner */}
      <div className="bg-teal-800 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          If you don't find what you were looking for, please reach out to us at{" "}
          <a href="mailto:care@medicare.com" className="underline hover:text-teal-200">
            care@medicare.com
          </a>{" "}
          or{" "}
          <a href="tel:+919876543210" className="underline hover:text-teal-200">
            +91 98765 43210
          </a>
          . We're here for you - for anything you might need.
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4 text-lg">About MediCare</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-teal-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-teal-200 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-teal-200 transition-colors">
                  MediCare in Media
                </Link>
              </li>
              <li>
                <Link href="/doctors/join" className="hover:text-teal-200 transition-colors">
                  For Doctors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-200 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-teal-200 transition-colors">
                  Help/FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/general-medicine" className="hover:text-teal-200 transition-colors">
                  General Medicine
                </Link>
              </li>
              <li>
                <Link href="/services/specialist-care" className="hover:text-teal-200 transition-colors">
                  Specialist Care
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="hover:text-teal-200 transition-colors">
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link href="/services/telemedicine" className="hover:text-teal-200 transition-colors">
                  Telemedicine
                </Link>
              </li>
              <li>
                <Link href="/services/health-checkups" className="hover:text-teal-200 transition-colors">
                  Health Checkups
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-teal-200 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/services/assessments" className="hover:text-teal-200 transition-colors">
                  Health Assessments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Conditions</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/conditions/diabetes" className="hover:text-teal-200 transition-colors">
                  Diabetes
                </Link>
              </li>
              <li>
                <Link href="/conditions/hypertension" className="hover:text-teal-200 transition-colors">
                  Hypertension
                </Link>
              </li>
              <li>
                <Link href="/conditions/heart-disease" className="hover:text-teal-200 transition-colors">
                  Heart Disease
                </Link>
              </li>
              <li>
                <Link href="/conditions/respiratory" className="hover:text-teal-200 transition-colors">
                  Respiratory Issues
                </Link>
              </li>
              <li>
                <Link href="/conditions/digestive" className="hover:text-teal-200 transition-colors">
                  Digestive Health
                </Link>
              </li>
              <li>
                <Link href="/conditions/womens-health" className="hover:text-teal-200 transition-colors">
                  Women's Health
                </Link>
              </li>
              <li>
                <Link href="/conditions/mens-health" className="hover:text-teal-200 transition-colors">
                  Men's Health
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Centers</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/centers/delhi" className="hover:text-teal-200 transition-colors">
                  Delhi
                </Link>
              </li>
              <li>
                <Link href="/centers/mumbai" className="hover:text-teal-200 transition-colors">
                  Mumbai
                </Link>
              </li>
              <li>
                <Link href="/centers/bangalore" className="hover:text-teal-200 transition-colors">
                  Bangalore
                </Link>
              </li>
              <li>
                <Link href="/centers/chennai" className="hover:text-teal-200 transition-colors">
                  Chennai
                </Link>
              </li>
              <li>
                <Link href="/centers/hyderabad" className="hover:text-teal-200 transition-colors">
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/centers/pune" className="hover:text-teal-200 transition-colors">
                  Pune
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-teal-600">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <span className="text-xl font-bold block">MediCare</span>
                <span className="text-xs text-teal-200">Your Health Partner</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">Build a good life for yourself with MediCare</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs">Best App for Health</span>
                <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-800" />
                </div>
                <span className="text-xs">on Google Play India</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Button variant="outline" size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
              <Download className="w-4 h-4 mr-2" />
              Google Play
            </Button>
            <Button variant="outline" size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
              <Download className="w-4 h-4 mr-2" />
              App Store
            </Button>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex justify-center space-x-8 py-8 border-t border-teal-600">
          <div className="flex items-center space-x-4 opacity-60">
            <Image src="/placeholder.svg?height=40&width=40" alt="ISO Certified" width={40} height={40} />
            <Image src="/placeholder.svg?height=40&width=40" alt="HIPAA Compliant" width={40} height={40} />
            <Image src="/placeholder.svg?height=40&width=40" alt="Security Certified" width={40} height={40} />
          </div>
        </div>

        {/* Social Media & Legal */}
        <div className="pt-8 border-t border-teal-600">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-teal-200 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center space-x-6 text-xs text-teal-200">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cancellation" className="hover:text-white transition-colors">
                Cancellation Policy
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          <div className="text-center text-xs text-teal-200 space-y-3">
            <p className="flex items-center justify-center space-x-2">
              <span>© 2024 MediCare. All rights reserved.</span>
            </p>
            <p className="max-w-4xl mx-auto leading-relaxed">
              <strong>Disclaimer:</strong> MediCare is equipped to provide care and support for individuals experiencing
              various health conditions, including comprehensive and specialized medical care. For those in need of
              immediate care and daily support, we are launching our in-network care facility in Bangalore 2024.
            </p>
            <p className="max-w-4xl mx-auto leading-relaxed">
              If you or someone you know is experiencing a medical emergency, please call emergency services immediately
              or go to the nearest hospital emergency room. Having a close family member or friend stay with you for
              support can be invaluable during this time.
            </p>
            <p>
              <strong>For emergency medical support, please call our helpline at 1800 891 4416.</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
