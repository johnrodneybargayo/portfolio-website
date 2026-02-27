import Image from 'next/image'

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO, TechCorp',
    content: 'John's work on our website was exceptional. His attention to detail and creative solutions greatly improved our user experience.',
    avatar: 'https://source.unsplash.com/random/100x100?portrait-woman-1'
  },
  {
    name: 'John Smith',
    role: 'CTO, StartupX',
    content: 'Working with John was a pleasure. His technical skills and ability to translate our vision into reality exceeded our expectations.',
    avatar: 'https://source.unsplash.com/random/100x100?portrait-man-1'
  },
  {
    name: 'Emily Brown',
    role: 'Marketing Director, BrandCo',
    content: 'John's expertise in front-end development helped us create a website that truly represents our brand. Highly recommended!',
    avatar: 'https://source.unsplash.com/random/100x100?portrait-woman-2'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
              <p className="text-gray-400 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

