export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} John Rodney Bargayo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

