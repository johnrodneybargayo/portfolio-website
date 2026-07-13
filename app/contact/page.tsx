'use client';

import Footer from '@/app/components/Footer';
import Stars from '@/app/components/Stars';
import Shapes3D from '@/app/components/Shapes3D';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Clock,
} from 'lucide-react';

const phoneNumber = '+6399967788865';
const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
const viberLink = `viber://chat?number=${phoneNumber.replace(/\D/g, '')}`;

export default function ContactPage() {
  const details = [
    {
      Icon: Mail,
      label: 'Email',
      value: 'johnrodney.bargayo@gmail.com',
      href: 'mailto:johnrodney.bargayo@gmail.com',
      breakAll: true,
    },
    {
      Icon: Phone,
      label: 'Phone',
      value: phoneNumber,
      href: `tel:${phoneNumber}`,
    },
    {
      Icon: MapPin,
      label: 'Location',
      value: 'Philippines',
    },
  ];

  const channels = [
    {
      Icon: MessageCircle,
      title: 'WhatsApp',
      subtitle: 'Send me a message',
      href: whatsappLink,
      external: true,
      accent: 'text-emerald-400',
      tile: 'bg-emerald-500/15 group-hover:bg-emerald-500/25',
      ring: 'ring-emerald-500/30 hover:ring-emerald-400/60',
      glow: 'from-emerald-500/10',
    },
    {
      Icon: MessageCircle,
      title: 'Viber',
      subtitle: 'Call or message',
      href: viberLink,
      external: false,
      accent: 'text-purple-400',
      tile: 'bg-purple-500/15 group-hover:bg-purple-500/25',
      ring: 'ring-purple-500/30 hover:ring-purple-400/60',
      glow: 'from-purple-500/10',
    },
    {
      Icon: Mail,
      title: 'Email',
      subtitle: 'Send directly',
      href: 'mailto:johnrodney.bargayo@gmail.com',
      external: false,
      accent: 'text-blue-400',
      tile: 'bg-blue-500/15 group-hover:bg-blue-500/25',
      ring: 'ring-blue-500/30 hover:ring-blue-400/60',
      glow: 'from-blue-500/10',
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 antialiased">
      {/* Ambient background */}
      <Stars />
      <Shapes3D />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20 md:pt-28 md:pb-24">
        {/* Heading */}
        <div className="mb-14 md:mb-16 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-300/90 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60" />
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
            Let&apos;s build{' '}
            <span className="bg-gradient-to-r from-blue-300 to-sky-400 bg-clip-text text-transparent">
              something great
            </span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-400 leading-relaxed">
            Available for freelance projects, consultations, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-mono text-slate-600">01</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Contact Information
                </h2>
              </div>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-700 via-slate-800 to-transparent" />
            </div>

            <div className="space-y-4">
              {details.map(({ Icon, label, value, href, breakAll }) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20 text-blue-300 transition-colors group-hover:bg-blue-500/20">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        {label}
                      </h3>
                      <p
                        className={`text-sm md:text-base text-slate-200 ${
                          breakAll ? 'break-all' : ''
                        }`}
                      >
                        {value}
                      </p>
                    </div>
                  </>
                );

                const cardClass =
                  'group flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:ring-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10';

                return href ? (
                  <a key={label} href={href} className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <div key={label} className={cardClass}>
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Response time */}
            <div className="mt-4 flex items-center gap-3 p-5 md:p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 ring-1 ring-white/10">
              <Clock size={18} className="shrink-0 text-emerald-400" />
              <p className="text-sm text-slate-300">
                I typically respond within{' '}
                <span className="font-semibold text-white">24 hours</span>.
              </p>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <div className="mb-8">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-mono text-slate-600">02</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Quick Contact
                </h2>
              </div>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-700 via-slate-800 to-transparent" />
            </div>

            <div className="space-y-4">
              {channels.map(
                ({
                  Icon,
                  title,
                  subtitle,
                  href,
                  external,
                  accent,
                  tile,
                  ring,
                  glow,
                }) => (
                  <a
                    key={title}
                    href={href}
                    {...(external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className={`group relative flex items-center justify-between gap-4 overflow-hidden p-5 md:p-6 rounded-2xl bg-slate-900/60 ring-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 ${ring}`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <div className="relative flex items-center gap-4 min-w-0">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${tile}`}
                      >
                        <Icon className={accent} size={20} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base md:text-lg font-bold text-white">
                          {title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-400">
                          {subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`relative shrink-0 ${accent} transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
                      size={20}
                    />
                  </a>
                )
              )}
            </div>

            {/* Info Box */}
            <div className="mt-4 p-6 md:p-7 rounded-2xl bg-slate-900/60 ring-1 ring-white/10">
              <p className="text-sm text-slate-300 leading-relaxed">
                Feel free to reach out through any method above — whether it&apos;s a
                full project, a quick question, or just to say hello. I&apos;d love to
                hear what you&apos;re working on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}