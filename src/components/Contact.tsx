import { motion } from 'motion/react';
import { Mail, Phone, Globe, Send, Linkedin, Github } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'WordPress Development',
    budget: 'Less than $500',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.projectType}`,
          message: `Project Type: ${formData.projectType}\nBudget: ${formData.budget}\n\n${formData.message}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          projectType: 'WordPress Development',
          budget: 'Less than $500',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      if (submitStatus === 'success') {
         setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tighter  uppercase">Let's Build Something Great Together</h2>
          <p className="text-white/60 text-lg">Ready to launch your next website or improve your existing one?</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-[#050505] p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between border-r border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
            <div>
              <h3 className="text-xl font-bold text-white mb-8 tracking-tighter  uppercase">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:mfardeenazam@gmail.com" className="flex items-center space-x-4 text-white/80 hover:text-emerald-400 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-[#050505] flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-white/40 mb-1">Email</span>
                    <span className="font-medium text-sm">mfardeenazam@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+923020555171" className="flex items-center space-x-4 text-white/80 hover:text-emerald-400 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-[#050505] flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-white/40 mb-1">Phone</span>
                    <span className="font-medium text-sm">+92 302 0555171</span>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/m-fardeen-azam-307756277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTDkVZpbhRMOTw3D%2B%2FrF%2FVg%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-white/80 hover:text-emerald-400 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-[#050505] flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-white/40 mb-1">LinkedIn</span>
                    <span className="font-medium text-sm">M. Fardeen Azam</span>
                  </div>
                </a>
                <a href="https://github.com/mfarden" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-white/80 hover:text-emerald-400 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-[#050505] flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50">
                    <Github size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-white/40 mb-1">GitHub</span>
                    <span className="font-medium text-sm">mfarden</span>
                  </div>
                </a>
                
              </div>
            </div>
            
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-8 lg:p-12 pl-8 lg:pl-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-lg font-mono text-sm px-4 py-3">
                    Your message has been sent successfully! I will get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg font-mono text-sm px-4 py-3">
                    Failed to send your message. Please try again or use the email link.
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Full Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white/80 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all appearance-none cursor-pointer font-mono text-sm">
                      <option>WordPress Development</option>
                      <option>WooCommerce Store</option>
                      <option>Website Design</option>
                      <option>SEO/Optimization</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white/80 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all appearance-none cursor-pointer font-mono text-sm">
                      <option>Less than $500</option>
                      <option>$500 - $1000</option>
                      <option>$1000 - $3000</option>
                      <option>More than $3000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Message</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all resize-none font-mono text-sm" placeholder="Tell me about your project..."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className=" inline-flex items-center justify-center px-6 py-3 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all w-full sm:w-auto gap-2ino disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Start Your Project'}
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}
