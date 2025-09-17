'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import Link from 'next/link'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
      gsap.from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10">
          <h1 className="hero-text text-4xl md:text-6xl font-bold mb-4">John Rodney Bargayo</h1>
          <p className="hero-text text-xl md:text-2xl mb-6">Front-End Developer & UI/UX Enthusiast</p>
          <p className="hero-text text-gray-400 mb-8">Experienced full-stack developer specializing in creating robust web applications and innovative digital solutions for businesses and communities.</p>
          <Link href="/portfolio" className="hero-text inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
            Explore My Work
          </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image 
            src="https://scontent.fceb7-1.fna.fbcdn.net/v/t39.30808-6/411068017_7561810227171334_4227971823188484885_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGkLWkjaGmsac5w_WuGmgZSVII8DFubZd1UgjwMW5tl3S80nRPKLK_7t-rdKSu9vsui_axtvxKlqg0oJRyJSoDu&_nc_ohc=hKsmh3JbfZwQ7kNvgGXQdl2&_nc_zt=23&_nc_ht=scontent.fceb7-1.fna&_nc_gid=A1NKt6TSpo3NxrhzQkNTFaw&oh=00_AYB685OJytoezJKyS_oyHgIGVkly9s3pZtBK21ECsdBzcQ&oe=6760C3AC" 
            alt="John Rodney Bargayo" 
            width={400} 
            height={400} 
            className="hero-image rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

