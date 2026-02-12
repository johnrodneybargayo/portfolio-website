'use client';

import { useState } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <main className="bg-gray-900">
      <Navigation />
      
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-12 text-center">Get In Touch</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-500 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-bold mb-2">Email</h3>
                    <a href="mailto:johnrodney.bargayo@gmail.com" className="text-gray-400 hover:text-blue-500">
                      johnrodney.bargayo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-blue-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-bold mb-2">Phone</h3>
                    <a href="tel:+639661641562" className="text-gray-400 hover:text-blue-500">
                      +639661641562
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-bold mb-2">Location</h3>
                    <p className="text-gray-400">
                      Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-white font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/rodbargayo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                    LinkedIn
                  </a>
                  <a href="https://www.facebook.com/lockdown15100" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/juanbargayo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-bold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  Send Message
                </button>

                {status && (
                  <p className={`text-center ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
