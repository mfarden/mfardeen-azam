import { motion } from 'motion/react';
import { SERVICES } from '../data';

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tighter ">Our Services</h2>
          <p className="text-white/60 max-w-2xl text-lg m-auto">Delivering tailored, high-performance web solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-400 text-white/50 transition-colors">
                    <Icon size={28} />
                  </div>
                  <span className="text-white/20 font-mono text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight ">{service.title}</h3>
                  <p className="text-[10px] text-white/50 uppercase font-mono tracking-widest leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
