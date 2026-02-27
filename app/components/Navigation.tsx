"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navHeight = 80 // Adjust this value based on your navigation height
      const sectionTop = section.offsetTop - navHeight
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Skills", sectionId: "skills" },
    { name: "Projects", sectionId: "projects" },
    { name: "Contact", sectionId: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white text-black" : "bg-transparent text-white"}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollToSection("home")} className="text-2xl font-bold">
            Rod
          </button>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul
            className={`md:flex md:space-x-8 ${isMenuOpen ? "block" : "hidden"} absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent text-black md:text-inherit`}
          >
            {navItems.map((item) => (
              <li key={item.name} className="md:inline-block">
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block py-2 px-4 md:p-0 hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

