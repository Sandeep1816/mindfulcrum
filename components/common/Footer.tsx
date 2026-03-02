export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              MediCare
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted healthcare partner delivering world-class medical 
              services and personalized wellness solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Telemedicine
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Specialist Consultations
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">

          <p className="text-sm text-primary-foreground/60">
            © {currentYear} MediCare. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}