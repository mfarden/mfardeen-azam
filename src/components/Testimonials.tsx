import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 bg-white/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white tracking-tighter uppercase">Client Feedback</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#050505] p-8 rounded-2xl border border-white/10 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={48} />
              <p className="text-white/80 relative z-10 leading-relaxed mb-8 text-lg font-serif italic mt-4">"{testimonial.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50 font-bold uppercase border border-white/10">
                  {testimonial.client.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs">{testimonial.client}</h4>
                  <span className="text-emerald-500 text-[10px] font-mono tracking-widest uppercase">Verified Client</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
