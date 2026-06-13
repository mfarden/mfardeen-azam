import {Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="text-xl font-bold text-white mb-2 block tracking-tight">M. Fardeen Azam</span>
          <p className="text-white/40 text-[10px] uppercase font-mono tracking-widest">© {new Date().getFullYear()}  All Rights Reserved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6 md:mb-0">
           <a href="#home" className="text-white/50 hover:text-emerald-400 text-[10px] uppercase tracking-widest transition-colors font-bold">Home</a>
           <a href="#about" className="text-white/50 hover:text-emerald-400 text-[10px] uppercase tracking-widest transition-colors font-bold">About</a>
           <a href="#services" className="text-white/50 hover:text-emerald-400 text-[10px] uppercase tracking-widest transition-colors font-bold">Services</a>
           <a href="#skills" className="text-white/50 hover:text-emerald-400 text-[10px] uppercase tracking-widest transition-colors font-bold">Skills</a>
        </div>
        
        <div className="flex space-x-4">
          <a href="tel:+923020555171" className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:border-emerald-500 hover:text-emerald-400 transition-colors">
            <Phone size={18} />
          </a>
            <a href="mailto:mfardeenazam@gmail.com" className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:border-emerald-500 hover:text-emerald-400 transition-colors">
            <Mail size={18} />
          </a>
          <a href="https://www.linkedin.com/in/m-fardeen-azam-307756277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTDkVZpbhRMOTw3D%2B%2FrF%2FVg%3D%3D" className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:border-emerald-500 hover:text-emerald-400 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/mfarden" className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:border-emerald-500 hover:text-emerald-400 transition-colors">
            <Github size={18} />
          </a>
           
          {/* Custom paths for Upwork/Fiverr can go here, using arbitrary text/icons for now */}
        </div>
      </div>
    </footer>
  );
}
