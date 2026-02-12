'use client';

import Footer from '@/app/components/Footer';
import Stars from '@/app/components/Stars';
import Shapes3D from '@/app/components/Shapes3D';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const phoneNumber = '+6399967788865';
const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
const viberLink = `viber://chat?number=${phoneNumber.replace(/\D/g, '')}`;

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-20 relative overflow-hidden">
      <Stars />
      <Shapes3D />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 md:mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-slate-400">
            Let's connect and discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 md:mb-8">Contact Information</h2>
              
              <div className="space-y-4 md:space-y-6">
                {/* Email */}
                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors duration-200">
                  <Mail className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div className="min-w-0">
                    <h3 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Email</h3>
                    <a href="mailto:johnrodney.bargayo@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-xs md:text-sm break-all">
                      johnrodney.bargayo@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors duration-200">
                  <Phone className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Phone</h3>
                    <a href={`tel:${phoneNumber}`} className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-xs md:text-sm">
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors duration-200">
                  <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Location</h3>
                    <p className="text-slate-400 text-xs md:text-sm">
                      Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 md:mb-8">Quick Contact</h2>
            
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-r from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30 rounded-lg border border-green-500/50 hover:border-green-400 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 md:gap-4 min-w-0">
                <div className="p-2 md:p-3 bg-green-500/20 group-hover:bg-green-500/30 rounded-lg flex-shrink-0">
                  <MessageCircle className="text-green-400" size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm md:text-lg">WhatsApp</h3>
                  <p className="text-slate-400 text-xs md:text-sm">Send me a message</p>
                </div>
              </div>
              <span className="text-green-400 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0">→</span>
            </a>

            {/* Viber Button */}
            <a
              href={viberLink}
              className="flex items-center justify-between gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 rounded-lg border border-purple-500/50 hover:border-purple-400 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 md:gap-4 min-w-0">
                <div className="p-2 md:p-3 bg-purple-500/20 group-hover:bg-purple-500/30 rounded-lg flex-shrink-0">
                  <MessageCircle className="text-purple-400" size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm md:text-lg">Viber</h3>
                  <p className="text-slate-400 text-xs md:text-sm">Call or message</p>
                </div>
              </div>
              <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0">→</span>
            </a>

            {/* Email Option */}
            <a
              href="mailto:johnrodney.bargayo@gmail.com"
              className="flex items-center justify-between gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 rounded-lg border border-blue-500/50 hover:border-blue-400 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 md:gap-4 min-w-0">
                <div className="p-2 md:p-3 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-lg flex-shrink-0">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm md:text-lg">Email</h3>
                  <p className="text-slate-400 text-xs md:text-sm">Send directly</p>
                </div>
              </div>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0">→</span>
            </a>

            {/* Info Box */}
            <div className="p-4 md:p-6 bg-slate-800/50 rounded-lg border border-slate-700 mt-6 md:mt-8">
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                I'm available for freelance projects, consultations, and collaborations. Feel free to reach out through any method above. I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
