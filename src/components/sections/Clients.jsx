import React from 'react';

const itClients = [
  { name: "L&T Technologies", color: "text-[#00529B]" },
  { name: "Tech Mahindra", color: "text-[#E31937]" },
  { name: "Accenture", color: "text-[#A100FF]" },
  { name: "HTC Global", color: "text-[#004C91]" },
  { name: "Axiscades", color: "text-[#005A9C]" },
  { name: "Vector Informatik", color: "text-[#E30613]" },
  { name: "SLK Software", color: "text-[#009639]" },
  { name: "Toshiba Software", color: "text-[#FF0000]" },
  { name: "Tismotech", color: "text-[#F15A24]" },
  { name: "Actalent", color: "text-[#007AC3]" },
  { name: "Solar Industries", color: "text-[#FDC300]" }
];

const nonItClients = [
  { name: "Musashi Auto Parts", color: "text-[#BE0027]" },
  { name: "Cataler India", color: "text-[#004A99]" },
  { name: "Hitachi Astemo", color: "text-[#D71920]" },
  { name: "Excedy Clutch", color: "text-[#0054A6]" },
  { name: "Aisin Automotive", color: "text-[#004899]" },
  { name: "Bando India", color: "text-[#E60012]" },
  { name: "Dynamatic Tech", color: "text-[#0054A6]" },
  { name: "Magellan Aerospace", color: "text-[#004C91]" },
  { name: "Recaero Aerospace", color: "text-[#0054A6]" },
  { name: "Danfoss", color: "text-[#E31E24]" },
  { name: "DMG Mori", color: "text-[#000000]" },
  { name: "Makino India", color: "text-[#D20000]" },
  { name: "Indic EMS", color: "text-[#0054A6]" }
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-white overflow-hidden font-outfit border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-2">
            Trusted by <span className="text-accent">Industry Leaders</span>
          </h2>
          <div className="h-1.5 w-32 bg-accent mx-auto rounded-full" />
        </div>
      </div>

      <div className="space-y-12">
        {/* IT Clients Marquee */}
        <div className="relative flex overflow-x-hidden group">
          <div className="py-4 animate-marquee flex whitespace-nowrap gap-16 items-center">
            {[...itClients, ...itClients].map((client, idx) => (
              <div key={idx} className="flex items-center gap-16">
                <span className={`text-4xl md:text-5xl font-black tracking-tighter ${client.color} opacity-60 hover:opacity-100 transition-opacity cursor-default uppercase`}>
                  {client.name}
                </span>
                <div className="w-2 h-2 bg-slate-200 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Non-IT Clients Marquee (Reverse or different speed) */}
        <div className="relative flex overflow-x-hidden group">
          <div className="py-4 animate-marquee-reverse flex whitespace-nowrap gap-16 items-center">
            {[...nonItClients, ...nonItClients].map((client, idx) => (
              <div key={idx} className="flex items-center gap-16">
                <span className={`text-4xl md:text-5xl font-black tracking-tighter ${client.color} opacity-60 hover:opacity-100 transition-opacity cursor-default uppercase`}>
                  {client.name}
                </span>
                <div className="w-2 h-2 bg-slate-200 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Static Summary Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Total Network of 200+ Global Partners</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {itClients.slice(0, 3).map((c, i) => (
             <div key={i} className="flex justify-center items-center text-xl font-black">{c.name}</div>
           ))}
           {nonItClients.slice(0, 3).map((c, i) => (
             <div key={i} className="flex justify-center items-center text-xl font-black">{c.name}</div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
