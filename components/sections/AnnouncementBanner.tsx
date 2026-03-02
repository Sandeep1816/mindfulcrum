import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"

export default function AnnouncementBanner() {
  return (
    <div className="bg-primary/5 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">

          {/* Left Content */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 w-full">

            {/* Icon Box */}
            <div className="flex-shrink-0 p-2 sm:p-3 bg-accent rounded-lg">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <Badge className="bg-accent text-accent-foreground text-xs font-semibold">
                  New Service
                </Badge>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-primary line-clamp-2">
                Telemedicine services now available in{" "}
                <span className="text-accent">Delhi NCR</span>
              </p>

              <p className="text-xs text-muted-foreground mt-1 hidden sm:block">
                Professional healthcare delivered to your home
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap flex-shrink-0 w-full sm:w-auto text-xs sm:text-sm py-2 sm:py-3">
            Book Session
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
          </Button>

        </div>
      </div>
    </div>
  )
}