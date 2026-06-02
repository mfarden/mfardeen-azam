import { motion } from 'motion/react';
import { Award, Calendar, Download, ExternalLink, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/10 p-12 md:p-20 text-center"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-8 text-emerald-500">
               <Award size={64} strokeWidth={1.5} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to build something great?
            </h2>
            
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Currently accepting 2–3 new projects per quarter. Whether you have a complex enterprise system or a greenfield SaaS idea let's talk.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-black font-semibold text-sm rounded-xl hover:bg-emerald-400 transition-all gap-2 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
                <Calendar size={18} />
                <span>Book a Free Call</span>
                <ArrowRight size={18} className="ml-1" />
              </a>
              
              <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/10 bg-transparent text-white font-medium text-sm rounded-xl hover:bg-white/5 transition-all gap-2">
                <Download size={18} className="text-white/60" />
                <span>Download CV</span>
              </a>
              
              <a href="#portfolio" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/10 bg-transparent text-white font-medium text-sm rounded-xl hover:bg-white/5 transition-all gap-2">
                <ExternalLink size={18} className="text-white/60" />
                <span>View Portfolio</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
