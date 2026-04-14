import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-orange-warm/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading text-slate-50 mb-4">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-slate-400 font-light max-w-2xl mx-auto">
            Ready to secure your legacy? Connect with our luxury real estate advisors for exclusive project details and site visits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-slate-300">
          
          {/* Contact Info */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="md:col-span-4 space-y-8">
            <div className="glass-panel p-8 rounded-xl h-full border border-white/5 bg-slate-900/50">
               <h3 className="text-2xl font-heading text-slate-50 mb-8">Contact Information</h3>
               
               <div className="space-y-6">
                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0 mr-4 text-gold">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-1">Corporate Office</h4>
                      <p className="text-sm text-slate-400">Premium Business Hub,<br/>Cityscape Avenue, India</p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0 mr-4 text-gold">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-1">Phone</h4>
                      <p className="text-sm text-slate-400">+91 98765 43210</p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0 mr-4 text-gold">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-1">Email</h4>
                      <p className="text-sm text-slate-400">invest@vytlaestates.com</p>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="md:col-span-8">
             <div className="glass-panel p-8 md:p-10 rounded-xl relative border-t-2 border-t-gold/40">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold pl-1">Your Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-gold/50 focus:bg-slate-900 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold pl-1">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-gold/50 focus:bg-slate-900 transition-colors"
                        placeholder="+91 ...."
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold pl-1">Project of Interest</label>
                      <select className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-gold/50 focus:bg-slate-900 transition-colors appearance-none">
                        <option>Seethamma Talli (Phase 1 & 2)</option>
                        <option>Shridi Nagar</option>
                        <option>General Inquiry</option>
                      </select>
                  </div>

                  <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold pl-1">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-gold/50 focus:bg-slate-900 transition-colors resize-none"
                        placeholder="I'm interested in..."
                      ></textarea>
                  </div>

                  <button className="w-full bg-gold text-slate-950 font-semibold text-lg py-4 rounded-lg hover:bg-gold-hover transition-colors flex justify-center items-center group mt-4">
                    Send Inquiry
                    <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
