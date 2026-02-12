'use client';

import Footer from '@/app/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const skills = [
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Next.js', icon: 'devicon-nextjs-original' },
    { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
  ];

  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-slate-400">Fullstack developer crafting elegant digital solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">John Rodney Bargayo</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I'm a passionate freelance fullstack web developer with several years of experience building responsive, high-performance web applications. I specialize in modern JavaScript frameworks and have a strong background in both frontend and backend development.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I love creating elegant solutions to complex problems and staying updated with the latest web technologies. My approach combines clean code practices with a focus on user experience and performance.
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
              <h3 className="text-xl font-bold text-white mb-4">Frontend Development</h3>
              <p className="text-slate-400">
                Building responsive, accessible, and performant user interfaces using React, Vue.js, Next.js, and modern CSS frameworks.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Backend Development</h3>
              <p className="text-slate-400">
                Creating robust server-side applications with Node.js, Express, and various databases to power your web applications.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Full Stack Solutions</h3>
              <p className="text-slate-400">
                Delivering complete web solutions from conception to deployment, ensuring scalability, security, and optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
