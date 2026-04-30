import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Industry Images
import manufacturingImg from '../../assets/images/img_36184299.jpg';
import automotiveImg from '../../assets/images/img_39d73c4c.jpg';
import itImg from '../../assets/images/img_b535f1f6.jpg';
import infrastructureImg from '../../assets/images/img_f851db86.jpg';
import engineeringImg from '../../assets/images/engineering_vertical.jpg';
import constructionImg from '../../assets/images/construction_vertical.jpg';
import energyImg from '../../assets/images/energy_vertical.jpg';
import travelImg from '../../assets/images/travel_vertical.jpg';
import marketingImg from '../../assets/images/marketing_vertical.jpg';
import financeImg from '../../assets/images/finance_vertical.jpg';
import hospitalityImg from '../../assets/images/hospitality_vertical.jpg';
import logisticsImg from '../../assets/images/img_b2fad0d2.jpg';
import retailImg from '../../assets/images/img_0146ed96.jpg';

const verticals = [
  { title: "Manufacturing", image: manufacturingImg },
  { title: "Automotive", image: automotiveImg },
  { title: "Engineering", image: engineeringImg },
  { title: "Construction", image: constructionImg },
  { title: "Oil & Energy", image: energyImg },
  { title: "Logistics", image: logisticsImg },
  { title: "Retail", image: retailImg },
  { title: "Travel & Tourism", image: travelImg },
  { title: "Infrastructure", image: infrastructureImg },
  { title: "Marketing & Sales", image: marketingImg },
  { title: "Networking", image: itImg },
  { title: "Telecom", image: automotiveImg },
  { title: "IT", image: itImg },
  { title: "Media & Advertisement", image: marketingImg },
  { title: "Finance & Accounts", image: financeImg },
  { title: "Pharmacy", image: hospitalityImg },
  { title: "Clinical Research", image: engineeringImg },
  { title: "Hospitality", image: hospitalityImg },
  { title: "Biotechnology", image: itImg },
  { title: "Healthcare", image: hospitalityImg }
];

const VerticalCircle = ({ vertical, onMouseEnter, onMouseLeave }) => (
  <div 
    className="mx-12 flex flex-col items-center group cursor-pointer shrink-0 transition-all duration-500"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="w-40 h-40 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center transition-all duration-700 relative overflow-hidden z-10 group-hover:shadow-[0_25px_60px_-15px_rgba(37,99,235,0.4)] group-hover:border-blue-500">
       {/* Background Image */}
       <img 
         src={vertical.image} 
         alt={vertical.title}
         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.6]" 
       />
       <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors duration-500" />
    </div>
    <span className="mt-8 text-[11px] font-black text-slate-400 group-hover:text-blue-600 transition-all duration-500 uppercase tracking-[0.2em] text-center max-w-[150px] leading-tight">
      {vertical.title}
    </span>
  </div>
);

const Verticals = () => {
  const scrollRef = useRef(null);
  const requestRef = useRef();
  const [isPaused, setIsPaused] = useState(false);

  const animate = () => {
    if (scrollRef.current && !isPaused) {
      scrollRef.current.scrollLeft += 1.2; // Slower, smoother speed
      
      // Infinite loop logic: Reset scroll if it reaches 1/3 of total width (since we triple the list)
      if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth / 3)) {
        scrollRef.current.scrollLeft = 0;
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="verticals" className="py-24 bg-white overflow-hidden font-inter border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* About Verticals Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-10"
           >
              <div>
                 <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                    SECTOR WE CATER
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    Industry <span className="text-blue-600">Specialisations</span>
                 </h2>
                 <p className="text-slate-500 text-lg leading-relaxed">
                    We recognize that each industry has its own nuances in terms of management style, hiring practices and compensation norms. To provide clients with specialized search solutions, Abhilekha has developed deep expertise across 20+ diverse economic sectors.
                 </p>
              </div>

              <div className="flex justify-center gap-16 md:gap-32">
                 <div className="space-y-2">
                    <h4 className="text-4xl font-black text-slate-900">20+</h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Global Verticals</p>
                 </div>
                 <div className="space-y-2">
                    <h4 className="text-4xl font-black text-slate-900">100%</h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Domain Focus</p>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* Interactive Marquee Container */}
        <div className="relative flex items-center group px-4 overflow-visible">
          {/* Functional Left Arrow - Always Visible */}
          <button 
            onClick={() => handleManualScroll('left')}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute left-0 lg:left-4 z-50 w-16 h-16 bg-blue-600 rounded-full shadow-[0_15px_35px_-12px_rgba(37,99,235,0.4)] flex items-center justify-center text-white hover:scale-110 transition-all border-4 border-white cursor-pointer"
          >
             <ChevronLeft size={32} strokeWidth={2.5} />
          </button>

          <div 
            ref={scrollRef}
            className="relative flex overflow-x-hidden select-none w-full scroll-smooth no-scrollbar"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex py-20 items-center">
              {/* Triple the list to ensure seamless infinite scrolling */}
              {[...verticals, ...verticals, ...verticals].map((v, idx) => (
                <VerticalCircle 
                  key={idx} 
                  vertical={v} 
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                />
              ))}
            </div>
          </div>

          {/* Functional Right Arrow - Always Visible */}
          <button 
            onClick={() => handleManualScroll('right')}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute right-0 lg:right-4 z-50 w-16 h-16 bg-blue-600 rounded-full shadow-[0_15px_35px_-12px_rgba(37,99,235,0.4)] flex items-center justify-center text-white hover:scale-110 transition-all border-4 border-white cursor-pointer"
          >
             <ChevronRight size={32} strokeWidth={2.5} />
          </button>

          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent z-20 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default Verticals;
