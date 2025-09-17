import Link from 'next/link'

const articles = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in the world of web development.',
    date: 'June 15, 2023',
    slug: 'future-of-web-development'
  },
  {
    title: 'Mastering React Hooks',
    excerpt: 'A comprehensive guide to using React Hooks effectively in your projects.',
    date: 'May 22, 2023',
    slug: 'mastering-react-hooks'
  },
  {
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Best practices for creating robust and scalable APIs using Node.js and Express.',
    date: 'April 10, 2023',
    slug: 'building-scalable-apis-nodejs'
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{article.date}</p>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className="text-blue-400 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

