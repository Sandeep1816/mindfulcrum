import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Video, FileText, TrendingUp } from "lucide-react"
import { RESOURCES } from "@/lib/constants"

export default function ResourcesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-blue-100 text-blue-600 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
              📚 Expert Resources
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Health Resources & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">
            Expert-curated content to support your health education and wellness journey with trusted medical insights
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {["All", "Articles", "Videos", "Guides"].map((filter) => (
            <button
              key={filter}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                filter === "All"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RESOURCES.map((resource, index) => (
            <div key={index} className="group h-full">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>

              {/* Card */}
              <Card className="overflow-hidden border border-gray-200 group-hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full relative z-10 group-hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  {/* SVG Placeholder */}
                  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`resourceGrad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                    </defs>

                    <rect width="300" height="200" fill={`url(#resourceGrad${index})`} />

                    {/* Content based on resource type */}
                    {resource.type === "Video" && (
                      <>
                        <circle cx="150" cy="100" r="40" fill="#3b82f6" opacity="0.2" />
                        <polygon points="130,80 130,120 170,100" fill="#3b82f6" />
                        <text x="150" y="160" fontSize="14" fill="#94a3b8" textAnchor="middle">
                          Video Content
                        </text>
                      </>
                    )}
                    {resource.type === "Article" && (
                      <>
                        <rect x="50" y="40" width="200" height="120" fill="none" stroke="#3b82f6" strokeWidth="2" rx="5" />
                        <line x1="70" y1="60" x2="230" y2="60" stroke="#3b82f6" strokeWidth="1" />
                        <line x1="70" y1="75" x2="230" y2="75" stroke="#3b82f6" strokeWidth="1" />
                        <line x1="70" y1="90" x2="230" y2="90" stroke="#3b82f6" strokeWidth="1" />
                        <line x1="70" y1="105" x2="200" y2="105" stroke="#3b82f6" strokeWidth="1" />
                        <text x="150" y="160" fontSize="14" fill="#94a3b8" textAnchor="middle">
                          Article
                        </text>
                      </>
                    )}
                    {resource.type === "Guide" && (
                      <>
                        <path d="M 100 50 Q 150 40 200 50 L 200 150 Q 150 160 100 150 Z" fill="#3b82f6" opacity="0.2" />
                        <text x="150" y="110" fontSize="48" textAnchor="middle">📖</text>
                        <text x="150" y="160" fontSize="14" fill="#94a3b8" textAnchor="middle">
                          Guide
                        </text>
                      </>
                    )}
                  </svg>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full border-0">
                      {resource.type}
                    </Badge>
                    <Badge className="bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                      {resource.time}
                    </Badge>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button className="bg-white hover:bg-blue-50 text-gray-900 font-semibold text-xs sm:text-sm h-9 sm:h-10 shadow-lg">
                      Read More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <CardHeader className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-gray-900 group-hover:text-blue-600 transition-colors text-base sm:text-lg font-bold leading-tight flex-1">
                      {resource.title}
                    </CardTitle>
                    {resource.type === "Video" && <Video className="w-5 h-5 text-blue-600 flex-shrink-0" />}
                    {resource.type === "Article" && <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />}
                    {resource.type === "Guide" && <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />}
                  </div>
                  {resource.description && (
                    <CardDescription className="text-gray-600 text-xs sm:text-sm line-clamp-2 flex-1">
                      {resource.description}
                    </CardDescription>
                  )}
                  
                  {/* Meta info */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Popular
                    </span>
                    <span className="text-xs font-semibold text-blue-600 group-hover:text-indigo-600 transition-colors">
                      Read →
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl sm:rounded-4xl blur-xl"></div>

            {/* Content */}
            <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100/50 rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Our Complete <span className="text-blue-600">Resource Library</span>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Access hundreds of expert-curated articles, videos, and guides to support your health and wellness journey
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all group">
                Explore All Resources
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}