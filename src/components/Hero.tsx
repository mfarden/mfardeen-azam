import { motion } from 'motion/react';
import { Github, Mail, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#050505] min-h-screen flex items-center">
      {/* Background Huge FA Text */}
      <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-[45%] text-[15rem] md:text-[25rem] lg:text-[40rem] font-black leading-none text-white/[0.02] pointer-events-none select-none z-0 tracking-tighter">
        FA
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-[2px] h-3 bg-emerald-500"></div>
            <span className="text-emerald-500 text-[10px] uppercase font-mono tracking-widest font-bold">PORTFOLIO MANIFEST {new Date().getFullYear()}</span>
          </div>
          
          <h1 className="text-6xl sm:text-8xl lg:text-[130px] font-black tracking-tighter mb-10 leading-[0.85] uppercase flex flex-col">
            <span className="text-white">PRECISION</span>
            <span className="text-white/20">DIGITAL GEAR.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mb-8 leading-relaxed font-light">
            Building scalable digital solutions with <span className="text-white font-medium">high-performance frontend architecture</span> and custom WordPress engineering.
          </p>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 w-full">
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <a href="#services" className="px-6 py-3 border border-white/20 text-white font-bold uppercase text-[10px]   hover:text-emerald-500 tracking-widest hover:border-emerald-500 transition-all">
                INITIALIZE SERVICES
              </a>
             
               <a href="/M.Fardeen_Azam_CV.pdf" download="M.Fardeen_Azam_CV.pdf" className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all w-full sm:w-auto gap-2">
                <Download size={14} />
                DOWNLOAD CV
              </a>
            </div>

            <div className="flex flex-col gap-3 w-full lg:w-auto border-l border-white/10 pl-6">
               <h3 className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 mb-3 font-bold">SOCIAL FEED</h3>
               <a href="https://github.com/mfarden" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs text-white/60 hover:text-white transition-colors">
                  <Github size={14} className="opacity-50" />
                  github.com/fardeen-azam
               </a>
               <a href="mailto:mfardeenazam@gmail.com" className="flex items-center gap-3 text-xs text-white/60 hover:text-white transition-colors">
                  <Mail size={14} className="opacity-50" />
                  mfardeenazam@gmail.com
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
