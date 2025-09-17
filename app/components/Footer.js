import Link from 'next/link'
import { Facebook, Linkedin, Github, Mail, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 John Rodney Bargayo. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/lockdown15100" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com/juanbargayo/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/rodbargayo/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="mailto:johnrodney.bargayo@gmail.com">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

