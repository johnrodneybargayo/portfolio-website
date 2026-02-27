"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skills = [
  // UI/UX & Design
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },

  // Frontend
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    noInvert: true,
  },

  // Mobile
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  {
    name: "Expo",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rhZixN5PTk2BYdrjvRNu2NmblPEzP7.png",
  },

  // Backend
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },

  // Additional Skills
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
]

const Skills = () => {
  const skillsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      })
    }, skillsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={skillsRef} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mb-2 transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80">
                <Image
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className={`${skill.noInvert ? "" : "invert"} object-contain`}
                />
              </div>
              <p className="text-white text-xs sm:text-sm mt-2 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

