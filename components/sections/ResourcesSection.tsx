"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Video, FileText, TrendingUp } from "lucide-react"
import { RESOURCES } from "@/lib/constants"

export default function ResourcesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <Badge className="bg-accent/10 text-accent text-sm font-semibold px-4 py-2 mb-6">
            📚 Expert Resources
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Health Resources & <span className="text-accent">Insights</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Expert-curated medical content designed to support your health education 
            and long-term wellness journey.
          </p>
        </div>

        {/* ================= FILTER TABS ================= */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["All", "Articles", "Videos", "Guides"].map((filter, index) => (
            <button
              key={filter}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition ${
                index === 0
                  ? "bg-accent text-accent-foreground"
                  : "bg-card border border-border text-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ================= RESOURCES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {RESOURCES.map((resource, index) => (
            <Card
              key={index}
              className="border border-border bg-card hover:shadow-sm transition-all duration-300 rounded-2xl flex flex-col"
            >

              {/* Image Placeholder */}
              <div className="h-52 bg-muted flex items-center justify-center rounded-t-2xl border-b border-border">
                {resource.type === "Video" && <Video className="w-10 h-10 text-muted-foreground" />}
                {resource.type === "Article" && <BookOpen className="w-10 h-10 text-muted-foreground" />}
                {resource.type === "Guide" && <FileText className="w-10 h-10 text-muted-foreground" />}
              </div>

              {/* Content */}
              <CardHeader className="flex flex-col flex-1">

                <div className="flex justify-between items-start mb-3">
                  <Badge className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1">
                    {resource.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {resource.time}
                  </span>
                </div>

                <CardTitle className="text-primary text-lg font-bold mb-2">
                  {resource.title}
                </CardTitle>

                {resource.description && (
                  <CardDescription className="text-muted-foreground text-sm line-clamp-2 flex-1">
                    {resource.description}
                  </CardDescription>
                )}

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Popular
                  </span>

                  <button className="text-accent font-semibold text-sm hover:text-accent/80 transition">
                    Read →
                  </button>
                </div>

              </CardHeader>
            </Card>
          ))}

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-24 text-center">
          <div className="bg-card border border-border rounded-3xl p-12">

            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Explore Our Complete <span className="text-accent">Resource Library</span>
            </h3>

            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Access expert articles, educational videos, and in-depth medical guides 
              designed to support informed healthcare decisions.
            </p>

            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8">
              Explore All Resources
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

          </div>
        </div>

      </div>
    </section>
  )
}