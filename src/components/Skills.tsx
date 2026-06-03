import { motion } from 'motion/react';
import { SKILLS } from '../data';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center "
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tighter ">Technical Arsenal</h2>
          <p className="text-white/60 max-w-2xl text-lg m-auto">The tools and technologies I use to build scalable web applications.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(SKILLS).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 flex items-center">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] uppercase font-mono tracking-widest text-white/80 hover:border-emerald-500/50 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
