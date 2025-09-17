'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

function Contact() {
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setSending(true)
    setMessage('')

    const form = event.target
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setMessage('Message sent successfully!')
        form.reset()
      } else {
        setMessage('Failed to send message')
      }
    } catch (error) {
      setMessage('Error sending message')
    }

    setSending(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Get In Touch</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-400" />
                <span>johnrodney.bargayo@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-400" />
                <span>+639661641562</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-400" />
                <span>Cebu City, Philippines</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/lockdown15100" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/juanbargayo/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/rodbargayo/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {message && (
                <p className={`mt-4 text-sm ${message.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

