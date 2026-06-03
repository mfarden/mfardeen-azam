import { motion } from 'motion/react';
import { EXPERIENCE, WHY_CHOOSE_ME } from '../data';
import { CheckCircle2, Briefcase, FileText, Calendar } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <FileText size={14} /> Work History
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-4">Career Timeline</h2>
          <p className="text-white/60 text-lg font-light max-w-2xl m-auto">
            3+ years of building web solutions. From passionate developer to trusted full-stack WordPress expert.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-[23px] top-12 bottom-0 w-[2px] bg-white/10"></div>

          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-row gap-6 md:gap-8 mb-12 last:mb-0"
            >
              {/* Icon */}
              <div className="relative z-10 w-12 h-12 shrink-0 rounded-full border border-emerald-500/30 bg-[#050505] flex items-center justify-center text-emerald-500 mt-1">
                <Briefcase size={20} />
              </div>

              {/* Card */}
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    {index === 0 && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[10px] uppercase font-bold tracking-widest text-emerald-400 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Current Role
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{exp.role}</h3>
                    <div className="text-emerald-400 font-medium">{exp.company}</div>
                  </div>

                  <div className="flex flex-col items-start md:items-end shrink-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 rounded-lg text-white/80 text-sm mb-1">
                      <Calendar size={14} className="text-white/40" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0"></div>
                      <span className="text-white/70 text-sm leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-8 border-t border-white/10 pt-6">
                  {exp.technologies?.map(tech => (
                    <span key={tech} className="px-3 py-1 border border-white/10 bg-white/5 rounded-md text-[10px] uppercase tracking-widest text-white/50 font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me section repositioned to the bottom */}
        <div className="mt-24 pt-20 border-t border-white/10">
          <h2 className="text-3xl font-black mb-10 text-white tracking-tighter italic uppercase text-center">Why Choose Me?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {WHY_CHOOSE_ME.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-4 hover:border-emerald-500/30 transition-colors"
              >
                <CheckCircle2 className="text-emerald-500 shrink-0" size={28} />
                <span className="text-[10px] text-white/80 uppercase tracking-widest leading-relaxed font-bold">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

