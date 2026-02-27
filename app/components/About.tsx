"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && textRef.current && imageRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      tl.fromTo([textRef.current, imageRef.current], { opacity: 1, y: 0 }, { opacity: 0.5, y: -50, stagger: 0.2 })
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div ref={sectionRef} className="container mx-auto px-4 md:px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
            <div ref={imageRef} className="w-full lg:w-2/5 max-w-md">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl bg-yellow-600">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/88fc74ac-e4cc-4627-843a-07c0671d9ce0_20250106_173700_0000-mI9VPi55K41tftdhIcKcwSBLu4GaLG.png"
                  alt="John Rodney Bargayo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div ref={textRef} className="w-full lg:w-3/5 bg-gray-800 bg-opacity-80 p-8 md:p-12 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold mb-8 text-blue-400">Hi, I'm John Rodney Bargayo</h3>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  I'm a passionate full-stack developer with extensive experience in creating beautiful, functional, and
                  user-centered digital experiences. With a strong foundation in web technologies and a keen eye for
                  design, I strive to craft intuitive and engaging user interfaces that leave a lasting impression.
                </p>
                <p>
                  My journey in web development started with a curiosity about how things work on the internet. This
                  curiosity has evolved into a fulfilling career where I continuously push the boundaries of what's
                  possible on the web. I love staying up-to-date with the latest trends and technologies in the
                  ever-evolving world of web development.
                </p>
                <p>
                  I believe in the power of continuous learning and growth. Every project is an opportunity to learn
                  something new, and I approach each one with enthusiasm and dedication. If you're looking for a
                  developer who is passionate about creating exceptional digital experiences, I'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

