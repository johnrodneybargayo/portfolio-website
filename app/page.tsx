import Hero from '@/app/components/Hero';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Hero />
      <Footer />
    </main>
  );
}
