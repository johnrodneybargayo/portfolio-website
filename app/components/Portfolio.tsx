'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, title: 'Project 1', image: '/placeholder.svg?height=300&width=400' },
  { id: 2, title: 'Project 2', image: '/placeholder.svg?height=300&width=400' },
  { id: 3, title: 'Project 3', image: '/placeholder.svg?height=300&width=400' },
  { id: 4, title: 'Project 4', image: '/placeholder.svg?height=300&width=400' },
  { id: 5, title: 'Project 5', image: '/placeholder.svg?height=300&width=400' },
  { id: 6, title: 'Project 6', image: '/placeholder.svg?height=300&width=400' },
]

const Portfolio = () => {
  const sectionRef = useRef(null)
  const projectRefs = useRef([])

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length)

    projectRefs.current.forEach((project, index) => {
      gsap.from(project, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: project,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      })
    })
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

