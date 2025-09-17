import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-blue-900 to-gray-900"></div>
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-gray-900 to-blue-900"></div>
        </div>
        <div className="relative z-10">
          <FeaturedProjects />
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-blue-900 to-gray-900"></div>
        </div>
        <div className="relative z-10">
          <Skills />
        </div>
      </div>
      <Testimonials />
      <CTA />
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
          <div className="text-center">
            <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Read My Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

