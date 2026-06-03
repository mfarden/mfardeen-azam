import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { ExperienceSection } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <ExperienceSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
