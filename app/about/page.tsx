'use client';

import Footer from '@/app/components/Footer';
import Stars from '@/app/components/Stars';
import Image from 'next/image';

export default function AboutPage() {
  const skills = [
    { name: 'WordPress', icon: 'devicon-wordpress-plain' },
    { name: 'Shopify', icon: 'devicon-shopify-plain' },
    { name: 'Wix', icon: 'devicon-wix-plain' },
    { name: 'Framer', icon: 'devicon-framer-plain' },
    { name: 'Beaver Builder', icon: 'devicon-wordpress-plain' },
    { name: 'Divi', icon: 'devicon-wordpress-plain' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    { name: 'PHP', icon: 'devicon-php-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
  ];

  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-20 relative overflow-hidden">
      <Stars />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 relative z-10">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-slate-400">Web developer specializing in WordPress, Wix, Shopify, Framer, Beaver Builder, and Divi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">John Rodney Bargayo</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I'm a passionate freelance web developer with extensive experience building beautiful, functional websites and e-commerce platforms. I specialize in WordPress, Wix, Shopify, Framer, Beaver Builder, and Divi to create solutions tailored to your business goals.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I focus on creating elegant, responsive designs that not only look great but also convert visitors into customers. My approach emphasizes user experience, performance optimization, and SEO best practices to ensure your web presence stands out.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you can find me watching movies, hiking, freediving, and meeting with friends. I mostly enjoy spending time at home working on new projects or exploring emerging technologies that excite me.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/411068017_7561810227171334_4227971823188484885_n.jpg-OODEwjqHv6IuuC51YbGSbSRnBoyshS.jpeg"
                alt="John Rodney Bargayo"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-16">
          <h2 className="text-3xl font-bold text-white mb-12">Skills & Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
                <i className={`${skill.icon} colored text-4xl mb-3`}></i>
                <p className="text-slate-300 text-center text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-slate-700 pt-16">
          <h2 className="text-3xl font-bold text-white mb-8">What I Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">WordPress Development</h3>
              <p className="text-slate-400">
                Custom WordPress websites with Beaver Builder, Divi, and other page builders. I create fully functional, SEO-optimized sites that are easy to manage.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">E-Commerce Solutions</h3>
              <p className="text-slate-400">
                Building stunning online stores on Shopify and WooCommerce. I focus on conversion optimization and seamless user experiences.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Web Design & Optimization</h3>
              <p className="text-slate-400">
                Creating responsive, modern designs with Framer and other tools. Every project includes performance optimization and mobile-first design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
