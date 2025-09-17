'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && photoRef.current && skillsRef.current) {
      const container = containerRef.current
      const photo = photoRef.current
      const skillsContainer = skillsRef.current

      gsap.set(skillsContainer.children, { opacity: 0, scale: 0 })

      skills.forEach((_, index) => {
        const pipe = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        pipe.setAttribute('stroke', '#4B5563')
        pipe.setAttribute('stroke-width', '2')
        pipe.setAttribute('fill', 'none')
        container.appendChild(pipe)

        const endX = 50 + (index % 5) * 100
        const endY = 300 + Math.floor(index / 5) * 100

        const path = `M ${photo.offsetLeft + photo.offsetWidth / 2} ${photo.offsetTop + photo.offsetHeight} C ${photo.offsetLeft + photo.offsetWidth / 2} ${endY - 50}, ${endX - 50} ${endY}, ${endX} ${endY}`
        pipe.setAttribute('d', path)

        gsap.from(pipe, {
          strokeDasharray: pipe.getTotalLength(),
          strokeDashoffset: pipe.getTotalLength(),
          duration: 1.5,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        })

        gsap.to(skillsContainer.children[index], {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: index * 0.1 + 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: container,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        })
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-20" ref={containerRef}>
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/3" ref={photoRef}>
            <Image 
              src="https://scontent.fceb7-1.fna.fbcdn.net/v/t39.30808-6/411068017_7561810227171334_4227971823188484885_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGkLWkjaGmsac5w_WuGmgZSVII8DFubZd1UgjwMW5tl3S80nRPKLK_7t-rdKSu9vsui_axtvxKlqg0oJRyJSoDu&_nc_ohc=hKsmh3JbfZwQ7kNvgGXQdl2&_nc_zt=23&_nc_ht=scontent.fceb7-1.fna&_nc_gid=A1NKt6TSpo3NxrhzQkNTFaw&oh=00_AYB685OJytoezJKyS_oyHgIGVkly9s3pZtBK21ECsdBzcQ&oe=6760C3AC" 
              alt="John Rodney Bargayo" 
              width={400} 
              height={600} 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3 bg-gray-800 bg-opacity-80 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Hi, I'm John Rodney Bargayo</h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate full-stack developer with extensive experience in creating beautiful, functional, and user-centered digital experiences. With a strong foundation in web technologies and a keen eye for design, I strive to craft intuitive and engaging user interfaces that leave a lasting impression.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in web development started with a curiosity about how things work on the internet. This curiosity has evolved into a fulfilling career where I continuously push the boundaries of what's possible on the web. I love staying up-to-date with the latest trends and technologies in the ever-evolving world of web development.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Skills & Technologies</h3>
            <div className="grid grid-cols-5 gap-4 mb-6" ref={skillsRef}>
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-2">
                    <Image src={skill.icon} alt={skill.name} width={24} height={24} />
                  </div>
                  <p className="text-xs text-center">{skill.name}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300">
              When I'm not coding, you can find me watching movies, going hiking, or freediving. I also enjoy meeting with friends, though I'm mostly just at home. Despite my love for technology, I value a good work-life balance and enjoy these activities to recharge and find inspiration. I'm always open to new opportunities and collaborations, so feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

