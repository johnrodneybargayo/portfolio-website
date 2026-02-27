import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import SplashCursor from "./components/SplashCursor"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rod - Freelance Fullstack Web Developer",
  description: "Personal portfolio of John Rodney Bargayo, a creative fullstack developer",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.slice(1)
        const element = document.getElementById(id!)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <SplashCursor />
        <div className="pt-16 md:pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

