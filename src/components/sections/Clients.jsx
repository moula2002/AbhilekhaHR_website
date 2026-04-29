import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('https://abhilekha-admin.onrender.com/api/clients');
        const data = await response.json();
        
        if (data && data.length > 0) {
          setClients(data);
          const categories = [...new Set(data.map(c => c.category).filter(Boolean))];
          if (categories.length > 0) {
            setActiveCategory(categories[0]);
          }
        } else {
          setClients([]);
        }
      } catch (error) {
        console.error("Error fetching clients:", error);
        setClients([]);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  return (
    <section id="clients" className="relative py-24 bg-white font-inter overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-blue-600/5 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2"
          >
            Our Ecosystem
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[48px] font-bold text-[#020C1F]"
          >
            Trusted by Leading <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Brands</span> Across <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Industries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-[14px] md:text-[16px] max-w-3xl mx-auto leading-relaxed"
          >
            We are proud to partner with some of the most respected brands and growing enterprises across diverse industries.
          </motion.p>
        </div>

        {/* Category Filter */}
        {!loading && clients.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12"
          >
            {[...new Set(clients.map(c => c.category).filter(Boolean))].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-1 pb-2 text-[15px] md:text-[16px] font-medium transition-colors duration-300 border-b-2 ${
                  activeCategory === category
                    ? 'text-blue-500 border-blue-500'
                    : 'text-slate-600 border-transparent hover:text-blue-500'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Logos Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 items-stretch"
            >
              {loading ? (
                <div className="col-span-full flex flex-col items-center justify-center py-20">
                   <div className="w-10 h-10 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin mb-4" />
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Updating Ecosystem...</p>
                </div>
              ) : clients.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-500 font-medium">
                   No clients available at the moment.
                </div>
              ) : (
                clients.filter(c => c.category === activeCategory).length === 0 ? (
                  <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-500 font-medium">
                     No clients available in this category.
                  </div>
                ) : (
                  clients.filter(c => c.category === activeCategory).map((client, idx) => (
                  <motion.div
                  key={client._id || client.name || idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.02 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-[24px] border border-slate-100 hover:border-blue-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[110px]"
                >
                  {/* Colorful Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-orange-50/0 group-hover:from-blue-50/40 group-hover:to-orange-50/40 rounded-[24px] transition-all duration-500" />

                  <div className="relative z-10 flex flex-col items-center w-full">
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={client.name}
                        className="max-h-[40px] md:max-h-[50px] w-auto transition-all duration-700 object-contain drop-shadow-sm group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-[15px] md:text-[19px] font-black tracking-tight text-slate-800 transition-all text-center uppercase">
                        {client.name}
                      </div>
                    )}
                  </div>

                  {/* Tooltip on Hover */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20">
                    <span className="bg-[#020C1F] text-white text-[10px] py-1.5 px-3 rounded-full whitespace-nowrap shadow-2xl font-bold border border-white/10">
                      {client.name}
                    </span>
                  </div>
                </motion.div>
                ))
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Clients;
