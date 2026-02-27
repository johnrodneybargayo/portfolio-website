"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    category: "Business Solutions",
    color: "bg-blue-600",
    items: [
      {
        title: "Careero",
        description: "A comprehensive career development platform helping professionals advance their careers.",
        link: "https://careero.com",
        technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
        type: "Business Platform",
      },
      {
        title: "ProductHQ",
        description:
          "A product feedback and feature request management platform helping teams build better products with customer feedback.",
        link: "https://producthq.io/",
        technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
        type: "Business Platform",
      },
    ],
  },
  {
    category: "SaaS Platforms",
    color: "bg-green-600",
    items: [
      {
        title: "VerbiVibe",
        description:
          "An interactive presentation and audience engagement platform similar to Mentimeter, allowing real-time audience participation.",
        link: "https://www.verbivibe.com/login",
        technologies: ["Next.js", "React", "WebSocket", "PostgreSQL", "Prisma"],
        type: "SaaS Platform",
      },
    ],
  },
  {
    category: "Developer Tools",
    color: "bg-purple-600",
    items: [
      {
        title: "KeystrokeQuest",
        description:
          "A code typing test platform for developers to practice and improve their coding speed and accuracy.",
        link: "https://htas2wdun2k.vercel.app/?vercelToolbarCode=Ty129TZvCqESc2x",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
        type: "Developer Tool",
      },
    ],
  },
  {
    category: "Web Templates",
    color: "bg-red-600",
    items: [
      {
        title: "Construction Demo",
        description:
          "A modern website template for construction companies featuring responsive design and dynamic content.",
        link: "https://v7gipcjbs9bvqsav.vercel.app/",
        technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        type: "Website Template",
      },
    ],
  },
]

const Portfolio = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      projects.forEach((category, index) => {
        gsap.from(`.category-${index}`, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: `.category-${index}`,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="container mx-auto px-4 md:px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
      <div className="space-y-24">
        {projects.map((category, categoryIndex) => (
          <div key={categoryIndex} className={`category-${categoryIndex}`}>
            <h3
              className={`text-3xl font-bold text-center mb-12 py-2 px-4 inline-block rounded-full ${category.color}`}
            >
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={`https://api.microlink.io?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mb-3">
                      {project.type}
                    </span>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio

