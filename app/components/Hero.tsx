"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import TypewriterText from "./TypewriterText"
import ShinyText from "./ShinyText"

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden px-4"
    >
      <div className="container mx-auto py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="hero-text text-3xl md:text-4xl lg:text-6xl font-bold mb-2">Hi, I'm</h1>
          <h2 className="hero-text text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
            <TypewriterText />
          </h2>
          <p className="hero-text text-gray-400 mb-8 text-base md:text-lg lg:text-xl">
            Experienced full-stack developer specializing in creating robust web applications and innovative digital
            solutions for businesses and communities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

