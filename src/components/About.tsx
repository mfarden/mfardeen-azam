import { motion } from 'motion/react';
import { ABOUT } from '../data';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold uppercase font-mono tracking-widest mb-6">
              About Me
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-white tracking-tighter uppercase ">
              Core Professionalism
            </h2>

            <div className="border-l border-emerald-500/30 pl-6 space-y-6 mb-12">
              <p className="text-lg text-white/70 leading-relaxed font-light">
                Hi, I'm <strong className="text-white font-medium">M. Fardeen Azam</strong>, a Full Stack WordPress Developer specializing in custom WordPress development, Elementor, WooCommerce, website optimization, and API integrations.
              </p>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                I help businesses transform ideas into powerful digital experiences through modern, scalable, and user-friendly websites. I focus on delivering <span className="text-emerald-400 font-medium">fast, optimized, and visually engaging</span> experiences.
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/50 mb-4 font-bold">
                Vision Strategy
              </h3>
              <blockquote className="text-lg italic text-white/40 leading-relaxed font-serif">
                "I aim to build innovative digital experiences that not only look great but also solve real-world problems through continuous learning and creative engineering."
              </blockquote>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">3+</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-white/40 font-bold">Experience Years</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-white/40 font-bold">Successful Builds</div>
              </div>
            </div>

            {/* Matrix */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-br-[2rem]">
              <h3 className="text-[10px] uppercase font-mono tracking-[0.2em] text-emerald-400 mb-6 font-bold">
                Core Focus Matrix
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                {[
                  "WordPress",
                  "Custom UI/UX",
                  "Performance",
                  "API Integrations",
                  "Elementor",
                  "WooCommerce"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={14} />
                    <span className="text-xs font-mono text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
