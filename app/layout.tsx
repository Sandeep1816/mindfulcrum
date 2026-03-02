import type { Metadata } from "next"
import { Inter, Fira_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const firaMono = Fira_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "MediCare",
  description: "Professional healthcare solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}