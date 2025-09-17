import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p className="mb-8">Let's work together to bring your ideas to life!</p>
        <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
          Get in Touch
        </Link>
      </div>
    </section>
  )
}

