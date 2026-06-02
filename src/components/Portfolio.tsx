import { motion } from 'motion/react';
import { PORTFOLIO } from '../data';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tighter italic">Featured Projects</h2>
          <p className="text-white/60 text-lg">A selection of my recent works across different industries and project scopes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors"
            >
              <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center p-6 pb-0">
                 {/* Abstract visual representation instead of missing images */}
                 <div className="w-full h-full rounded-t-xl bg-[#050505] border border-white/10 border-b-0 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 origin-bottom">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-50 block"></div>
                    <span className="text-emerald-500/20 font-bold text-4xl tracking-tighter uppercase italic">{project.category}</span>
                 </div>
              </div>
              <div className="p-6 relative">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-2 italic underline decoration-emerald-500 decoration-2 underline-offset-4 font-serif">{project.title}</h3>
                <p className="text-white/50 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <a href="#" className="inline-flex items-center text-xs font-bold text-white uppercase tracking-widest hover:text-emerald-400 transition-colors">
                  View Project <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
