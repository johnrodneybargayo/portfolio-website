import Navigation from '@/app/components/Navigation';
import Hero from '@/app/components/Hero';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Navigation />
      <Hero />
      <Footer />
    </main>
  );
}
