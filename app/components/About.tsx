'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })

    tl.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
    }).from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
    }, '-=1')
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div ref={textRef} className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-6">
            I'm a creative developer with a passion for building beautiful, functional, and user-friendly websites and applications. With years of experience in both design and development, I bring a unique perspective to every project.
          </p>
          <p className="text-lg">
            My expertise includes front-end development, UI/UX design, and creating engaging interactive experiences. I'm always eager to learn new technologies and push the boundaries of what's possible on the web.
          </p>
        </div>
        <div ref={imageRef} className="md:w-1/2">
          <img src="/placeholder.svg?height=400&width=400" alt="John Doe working" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default About

