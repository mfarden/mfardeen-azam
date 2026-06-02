import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black text-xl">FA</div>
          <span className="text-xl font-medium tracking-tight text-white hidden sm:block">M. Fardeen Azam</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="text-[10px] uppercase tracking-widest text-white/50 hover:text-emerald-400 transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="px-6 py-3 border border-white/20 text-white font-bold uppercase text-[10px] tracking-widest hover:border-emerald-500 transition-all">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white/50 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-2xl"
        >
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-white/50 hover:text-emerald-400 py-2 border-b border-white/10 uppercase tracking-widest text-xs">
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
