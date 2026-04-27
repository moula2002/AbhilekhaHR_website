import React from 'react';
import localImageGallery1 from '../../assets/images/img_6090d824.jpg';
import localImageGallery2 from '../../assets/images/img_03f95955.jpg';
import localImageGallery3 from '../../assets/images/img_831c5fb1.jpg';
import localImageGallery4 from '../../assets/images/img_e2fda545.jpg';
import localImageGallery5 from '../../assets/images/img_6a20b781.jpg';
import localImageGallery6 from '../../assets/images/img_398e43cb.jpg';

const Gallery = () => {
  const images = [
    { url: localImageGallery1, title: "Team Collaboration" },
    { url: localImageGallery4, title: "Strategy Meeting" },
    { url: localImageGallery2, title: "Work Culture" },
    { url: localImageGallery5, title: "Office Environment" },
    { url: localImageGallery6, title: "Leadership" },
    { url: localImageGallery3, title: "Celebrations" }
  ];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <div className="inline-block px-4 py-1.5 bg-accent/5 text-accent rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
             Our Culture
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">LIFE AT <span className="text-accent">ABHILEKHA</span></h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">Glimpses into our vibrant work environment and the people who make it happen.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
           {images.map((img, idx) => (
             <div key={idx} className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-lg cursor-pointer">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                   <span className="text-white font-black text-xl uppercase tracking-widest">{img.title}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
