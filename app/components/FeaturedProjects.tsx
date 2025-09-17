'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Careero',
    description: 'A comprehensive career development platform helping professionals advance their careers.',
    link: 'https://careero.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
    type: 'Business Platform'
  },
  {
    title: 'ProductHQ',
    description: 'A product feedback and feature request management platform helping teams build better products with customer feedback.',
    link: 'https://producthq.io/',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    type: 'Business Platform'
  },
  {
    title: 'VerbiVibe',
    description: 'An interactive presentation and audience engagement platform similar to Mentimeter, allowing real-time audience participation.',
    link: 'https://www.verbivibe.com/login',
    technologies: ['Next.js', 'React', 'WebSocket', 'PostgreSQL', 'Prisma'],
    type: 'SaaS Platform'
  },
  {
    title: 'KeystrokeQuest',
    description: 'A code typing test platform for developers to practice and improve their coding speed and accuracy.',
    link: 'https://htas2wdun2k.vercel.app/?vercelToolbarCode=Ty129TZvCqESc2x',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    type: 'Developer Tool'
  },
  {
    title: 'Construction Demo',
    description: 'A modern website template for construction companies featuring responsive design and dynamic content.',
    link: 'https://v7gipcjbs9bvqsav.vercel.app/',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    type: 'Website Template'
  }
]

const FeaturedProjects = () => {
  const projectsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      })
    }, projectsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={projectsRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image 
                  src={`https://api.microlink.io?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <Link 
                    href={project.link}
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
                <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mb-3">
                  {project.type}
                </span>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects

