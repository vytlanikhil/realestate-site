import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Map, Clock } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center -mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* using fallback image if specific asset unavailable, or use one of the images copied to public */}
          <div className="absolute inset-0 bg-slate-950/60 z-10"></div>
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="/assets/Seethamma-talli/PHASE-1-IMAGES/img4.jpeg"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block px-4 py-1.5 glass rounded-full text-gold text-sm font-medium tracking-widest mb-6 uppercase"
          >
            Premium Land Layouts
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-slate-50 mb-6 max-w-5xl leading-tight"
          >
            Invest in Land. <br />
            <span className="premium-gradient-text">Invest in Legacy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 font-light"
          >
            Secure your future with meticulously planned, highly appreciating premium plotted developments.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-8 py-4 bg-gold text-slate-950 font-medium rounded hover:bg-gold-hover transition-colors flex items-center justify-center group"
            >
              Explore Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <Link
               to="/contact"
               className="px-8 py-4 glass text-slate-50 font-medium rounded hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-900 border-y border-white/5 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center py-4">
              <Map className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-heading text-slate-50 mb-2">Prime Locations</h3>
              <p className="text-sm text-slate-400 max-w-xs">Strategically selected for maximum appreciation and connectivity.</p>
            </div>
            <div className="flex flex-col items-center py-4">
              <ShieldCheck className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-heading text-slate-50 mb-2">100% Clear Title</h3>
              <p className="text-sm text-slate-400 max-w-xs">Fully legal, hassle-free registration with transparent documentation.</p>
            </div>
            <div className="flex flex-col items-center py-4">
              <Clock className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-heading text-slate-50 mb-2">Rapid Development</h3>
              <p className="text-sm text-slate-400 max-w-xs">Fast-paced execution with premium amenities and infrastructure ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 -skew-x-12 transform origin-top-right z-0"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading text-slate-50 mb-4">
              Featured <span className="text-gold">Projects</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gold rounded"></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project Card 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="group relative rounded-xl overflow-hidden glass-panel"
            >
              <div className="relative h-80 md:h-96 overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="/assets/Seethamma-talli/PHASE-1-IMAGES/img10.jpeg" 
                  alt="Seethamma Talli" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 relative z-20 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent -mt-24 pt-24 transition-transform duration-300">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gold mb-2 block">Phase 1 & 2</span>
                    <h3 className="text-3xl font-heading text-slate-50">Seethamma Talli</h3>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 text-sm line-clamp-2">
                  Premium residential layouts featuring top-tier amenities, lush green landscapes, and seamless connectivity.
                </p>
                <Link to="/project/seethamma-talli" className="inline-flex items-center text-gold font-medium group/link">
                  View Project Details
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="group relative rounded-xl overflow-hidden glass-panel"
            >
              <div className="relative h-80 md:h-96 overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="/assets/Shridi-nagar/IMAGES/img1.jpeg" 
                  alt="Shridi Nagar" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 relative z-20 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent -mt-24 pt-24 transition-transform duration-300">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-warm mb-2 block">New Launch</span>
                    <h3 className="text-3xl font-heading text-slate-50">Shridi Nagar</h3>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 text-sm line-clamp-2">
                  Exclusive premium plots set in a serene environment. Designed for those who value peace and privacy.
                </p>
                <Link to="/project/shridi-nagar" className="inline-flex items-center text-gold font-medium group/link">
                  View Project Details
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
