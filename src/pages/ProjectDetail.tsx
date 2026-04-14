import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Navigation, FileDown, Layers, MapPin } from 'lucide-react';

// Mock database for the two projects
const projectData: Record<string, any> = {
  'seethamma-talli': {
    name: 'Seethamma Talli',
    subtitle: 'Premium residential layouts in an expanding corridor.',
    heroImage: '/assets/Seethamma-talli/PHASE-1-IMAGES/img10.jpeg',
    phases: ['Phase 1 completed', 'Phase 2 booking open'],
    description: 'Seethamma Talli offers a harmonious blend of nature and modern infrastructure. Designed meticulously to provide a premium lifestyle, this layout is an exceptional investment opportunity with rapidly appreciating land value.',
    sitePlanImage: '/assets/Seethamma-talli/SITE-PLANNING/site-planning-image.jpeg',
    pdfUrl: '/assets/Seethamma-talli/SITE-PLANNING-PDF/site-planning-pdf.pdf',
    galleries: [
      {
        title: 'Phase 1',
        images: [
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img1.jpeg',
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img2.jpeg',
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img3.jpeg',
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img4.jpeg',
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img5.jpeg',
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img6.jpeg',
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img7.jpeg',
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img8.jpeg',
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img9.jpeg',
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img10.jpeg',
          '/assets/Seethamma-talli/PHASE-1-IMAGES/img11.jpeg',
        ]
      },
      {
        title: 'Phase 2',
        images: [
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img1.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img2.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img3.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img4.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img5.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img6.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img7.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img8.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img9.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img10.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img11.jpeg',
          '/assets/Seethamma-talli/PHASE-2-IMAGES/img12.jpeg',
        ]
      }
    ],
    amenities: ['100ft & 40ft CC Roads', 'Underground Drainage', 'Electricity with Street Lights', 'Children\'s Play Area', 'Avenue Plantation', '24/7 Security'],
  },
  'shridi-nagar': {
    name: 'Shridi Nagar',
    subtitle: 'Exclusive premium plots set in a serene environment.',
    heroImage: '/assets/Shridi-nagar/IMAGES/img1.jpeg',
    phases: ['Phase 1 New Launch'],
    description: 'Shridi Nagar is conceptualized for those who seek tranquility without compromising on connectivity. A perfect place to build your dream home or secure your wealth in a fast-growing locale.',
    sitePlanImage: '/assets/Shridi-nagar/SITE-PLAN/site-planning-image.jpeg',
    pdfUrl: '/assets/Shridi-nagar/SITE-PLANPDF/site-planning-pdf.pdf',
    galleries: [
      {
        title: 'Gallery',
        images: [
          '/assets/Shridi-nagar/IMAGES/img1.jpeg',
        ]
      }
    ],
    amenities: ['Clear Title & Spot Registration', 'Gated Community', 'Water Facility', 'Vastu Compliant', 'Parks & Greenery'],
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div className="h-screen flex items-center justify-center text-slate-50">Project not found.</div>;
  }

  return (
    <div className="w-full pb-24">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Full screen preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-6 right-6 text-slate-300 hover:text-white bg-slate-900/50 p-2 rounded-full backdrop-blur-md border border-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Detail Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-4">
              {project.phases.map((phase: string, idx: number) => (
                <span key={idx} className="px-3 py-1 rounded-sm bg-gold/20 text-gold text-xs font-bold uppercase tracking-wider border border-gold/30">
                  {phase}
                </span>
              ))}
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-heading text-slate-50 mb-4">
              {project.name}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-300 max-w-2xl font-light">
              {project.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About & Amenities Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: About */}
            <div className="lg:col-span-7">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-3xl font-heading text-slate-50 mb-6 flex items-center">
                  <Layers className="text-gold mr-3" /> About the Project
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="glass-panel p-6 rounded-xl inline-block">
                  <h3 className="text-xl font-heading text-slate-50 mb-4 items-center flex">
                    <MapPin className="text-gold mr-2" size={20} /> Location Highlights
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-slate-300 text-sm">
                      <Navigation size={16} className="text-slate-500 mr-2 mt-0.5" /> High Highway Accessibility
                    </li>
                    <li className="flex items-start text-slate-300 text-sm">
                      <Navigation size={16} className="text-slate-500 mr-2 mt-0.5" /> Close to upcoming commercial hubs
                    </li>
                    <li className="flex items-start text-slate-300 text-sm">
                      <Navigation size={16} className="text-slate-500 mr-2 mt-0.5" /> Surrounded by educational institutions
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right: Amenities */}
            <div className="lg:col-span-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass-panel p-8 rounded-xl h-full border-t border-gold/20">
                <h2 className="text-2xl font-heading text-slate-50 mb-6">Premium Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.amenities.map((amenity: string, idx: number) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center p-3 rounded bg-white/5 border border-white/5 hover:border-gold/30 transition-colors"
                    >
                      <CheckCircle2 className="text-gold shrink-0 mr-3" size={20} />
                      <span className="text-sm text-slate-200">{amenity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Plan Section */}
      <section className="py-20 bg-slate-900 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading text-slate-50 mb-4">Master <span className="text-gold">Plan</span></h2>
              <p className="text-slate-400">Detailed site layout and plot distributions.</p>
            </div>
            
            <a 
              href={project.pdfUrl} 
              target="_blank" 
              rel="noreferrer"
              className="mt-6 md:mt-0 flex items-center px-6 py-3 bg-white/10 hover:bg-gold hover:text-slate-950 transition-colors border border-white/20 rounded text-sm text-slate-50"
            >
              <FileDown size={18} className="mr-2" /> Download Brochure
            </a>
          </motion.div>

          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="relative rounded-2xl overflow-hidden border border-white/10 glass shadow-2xl group"
          >
             <div className="w-full h-full overflow-auto bg-slate-800">
                <img 
                  src={project.sitePlanImage} 
                  alt="Site Plan Map" 
                  className="w-full object-contain hover:scale-105 transition-transform duration-[1.5s] ease-out min-w-[800px]"
                />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-4xl font-heading text-slate-50 mb-12 text-center">
            Project <span className="text-gold">Gallery</span>
          </motion.h2>

          <div>
            {project.galleries.map((gallery: any, gIdx: number) => (
              <div key={gIdx} className="mb-16 last:mb-0">
                <h3 className="text-2xl font-heading text-gold mb-8 border-b border-white/5 pb-2 inline-block">{gallery.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {gallery.images.map((imgUrl: string, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      onClick={() => setSelectedImage(imgUrl)}
                      className="relative h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden bg-slate-800 group cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                      <img 
                        src={imgUrl} 
                        alt={`${project.name} ${gallery.title} - ${idx+1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
