import { motion } from 'motion/react';
import { EXPERIENCE, WHY_CHOOSE_ME } from '../data';
import { CheckCircle2, Briefcase, FileText } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full bg-neutral-50 dark:bg-[#050505]">
      {/* Header section (non-sticky) */}
     <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <FileText size={14} /> Work History
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase  mb-4">Career Timeline</h2>
          <p className="text-white/60 text-lg font-light max-w-2xl m-auto">
            3+ years of building web solutions. From passionate developer to trusted full-stack WordPress expert.
          </p>
        </div>


      {/* Sticky sections container */}
      <div className="relative w-full">
        {EXPERIENCE.map((exp, index) => (
          <div 
            key={index}
            className="sticky top-[72px] min-h-[70vh] flex flex-col justify-center border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] px-6 py-16 md:py-24 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
              
              {/* Left Column: Title & HUGE number */}
              <div className="lg:w-1/3 shrink-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tighter uppercase leading-none break-words">
                    {exp.company}
                  </h3>
                </div>
                <div className="text-8xl md:text-[10rem] font-black leading-none text-black/5 dark:text-white/5 mt-4 lg:mt-16">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Middle/Right Column: Role Details */}
              <div className="lg:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={28} className="text-neutral-900 dark:text-white opacity-40 shrink-0" />
                  <h4 className="text-3xl lg:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight">
                    {exp.role}
                  </h4>
                </div>
                
                <div className="inline-block px-4 py-2 bg-black/5 dark:bg-white/10 rounded-lg text-neutral-900 dark:text-white text-sm font-mono font-bold mb-10 w-fit">
                  {exp.period}
                </div>

                <ul className="space-y-6">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-4 text-xl lg:text-1xl text-neutral-800 dark:text-white/90 leading-tight font-medium">
                      <div className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-white/30 mt-3 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-black/10 dark:border-white/10">
                  {exp.technologies?.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-white/50 dark:bg-black/20 rounded-full text-xs font-bold tracking-widest text-neutral-900 dark:text-white/80 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Me section repositioned below the cards */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-neutral-900 dark:text-white tracking-tighter  uppercase text-center">
          Why Choose Me?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {WHY_CHOOSE_ME.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-100 dark:bg-white/5 p-4 rounded-xl border border-neutral-200 dark:border-white/10 flex flex-col items-center text-center space-y-3 hover:border-emerald-500/30 transition-colors"
            >
              <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
              <span className="text-[10px] text-neutral-900 dark:text-white/80 uppercase tracking-widest leading-relaxed font-bold">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

