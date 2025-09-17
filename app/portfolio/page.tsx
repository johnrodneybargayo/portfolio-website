import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    category: "Business Solutions",
    items: [
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
        title: 'Curtis INT CRM',
        description: 'An integrated CRM system with service and support portals for customer management.',
        link: 'https://service.curtiscss.com/',
        technologies: ['PHP', 'MySQL', 'Vue.js', 'Laravel', 'Bootstrap'],
        type: 'Enterprise Software'
      },
      {
        title: 'Empire One Contact Center',
        description: 'Professional contact center and customer service solutions platform.',
        link: 'https://empireonecontactcenter.com/',
        technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Theme', 'JavaScript'],
        type: 'Corporate Website'
      },
      {
        title: 'Empire One Credit',
        description: 'Financial services and credit solutions platform for Canadian customers.',
        link: 'https://empireonecredit.ca/',
        technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Plugin Development'],
        type: 'Financial Services'
      }
    ]
  },
  {
    category: "Current Projects",
    items: [
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
  },
  {
    category: "Community Platforms",
    items: [
      {
        title: 'Bangkok Women',
        description: 'A community platform for women in Bangkok featuring articles, events, and networking opportunities.',
        link: 'https://bangkok-women.com/',
        technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Plugin Development'],
        type: 'Community Platform'
      },
      {
        title: 'Peru Dating',
        description: 'A dating platform specifically designed for the Peruvian community with unique cultural features.',
        link: 'https://perudating.com/',
        technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
        type: 'Dating Platform'
      },
      {
        title: 'Cebu Insights',
        description: 'A community news and information platform for Cebu residents and visitors.',
        link: 'https://cebuinsights.com/',
        technologies: ['WordPress', 'PHP', 'MySQL', 'SEO Optimization'],
        type: 'Community Portal'
      }
    ]
  }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900"></div>
      </div>
      <main className="container mx-auto px-6 py-20 relative z-10">
        <h1 className="text-4xl font-bold mb-12 text-center">My Portfolio</h1>
        
        {projects.map((category, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-blue-400">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((project, projectIndex) => (
                <div 
                  key={projectIndex} 
                  className="bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image 
                      src={`https://api.microlink.io?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
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
        ))}
      </main>
    </div>
  )
}

