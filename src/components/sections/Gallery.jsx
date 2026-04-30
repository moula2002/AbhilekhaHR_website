import React from 'react';
import { motion } from 'framer-motion';

// User provided local gallery images
import gallary1 from '../../assets/images/Gallary 1.png';
import gallary2 from '../../assets/images/Gallary2.png';
import gallary3 from '../../assets/images/Gallary3.png';
import gallary4 from '../../assets/images/gallary4.png';
import gallary5 from '../../assets/images/gallary5.png';

const Gallery = () => {
  const images = [
    { url: gallary1, title: "Our Corporate Office" },
    { url: gallary2, title: "Team at Work" },
    { url: gallary3, title: "Team Celebrations" },
    { url: gallary4, title: "Abhilekha Family" },
    { url: gallary5, title: "Excellence in Action" }
  ];

  // Duplicate images for seamless infinite scroll
  const scrollImages = [...images, ...images, ...images];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
           <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
             Our Culture
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">LIFE AT <span className="text-blue-600">ABHILEKHA</span></h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">Glimpses into our vibrant work environment and the people who make it happen.</p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{
            x: [0, -2250], // Adjust based on total width (450px * 5)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {scrollImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-[300px] md:w-[450px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer flex-shrink-0 group"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                 <span className="text-white font-black text-xl uppercase tracking-widest">{img.title}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
