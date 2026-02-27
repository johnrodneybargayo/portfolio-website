import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import FeaturedProjects from "./components/FeaturedProjects"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <section id="home" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <Hero />
      </section>

      <section id="about" className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-700">
        <About />
      </section>

      <section id="skills" className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-600">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-700">
        <FeaturedProjects />
        <Portfolio />
      </section>

      <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-800">
        <Contact />
      </section>
    </main>
  )
}

