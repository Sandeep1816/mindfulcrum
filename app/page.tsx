import Navbar from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import AnnouncementBanner from "@/components/sections/AnnouncementBanner"
import HeroSection from "@/components/sections/HeroSection"
import WhyChooseMedicare from "@/components/sections/WhyChooseMedicare"
import ConsultationServices from "@/components/sections/ConsultationServices"
import HealthcareSpecialties from "@/components/sections/HealthcareSpecialties"
import AppFeatures from "@/components/sections/AppFeatures"
import SuccessStories from "@/components/sections/SuccessStories"
import CorporateWellness from "@/components/sections/CorporateWellness"
import ResourcesSection from "@/components/sections/ResourcesSection"
import FinalCTA from "@/components/sections/FinalCTA"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AnnouncementBanner />
      <HeroSection />
      <WhyChooseMedicare />
      <ConsultationServices />
      <HealthcareSpecialties />
      <AppFeatures />
      <SuccessStories />
      <CorporateWellness />
      <ResourcesSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}