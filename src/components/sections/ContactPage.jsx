import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

const ContactPage = () => {
  const locations = [
    {
      city: "Bangalore (Head Office)",
      address: "#640, 46th 'A' Cross, 3rd Block, Rajajinagar, Bangalore - 560 010",
      phone: "080-23507705 / 23148132",
      email: "hr@abhilekha.com",
    },
    {
      city: "Hyderabad Office",
      address: "#127, Ameer Bagh, Sumitra Nagar Colony, Kukatpally, Hyderabad, Telangana 500072",
      phone: "+91 40-2345678",
      email: "hyd@abhilekha.com",
    },
    {
      city: "Pune Office",
      address: "Office no 504, 5th floor the Stellar Business Hub near New Poona Bakery Marunge road Wakad Pune Maharashtra 411057",
      phone: "+91 20-4567890",
      email: "pune@abhilekha.com",
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-[#24345c] min-h-screen font-outfit relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F29100]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Locations */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F29100]/10 border border-[#F29100]/20 rounded-full mb-6">
                <Globe size={14} className="text-[#F29100]" />
                <span className="text-[#F29100] text-[10px] font-black uppercase tracking-[0.2em]">Our Presence Across India</span>
              </div>
              <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
                OUR <span className="text-[#F29100] italic underline decoration-white/10">LOCATIONS</span>
              </h2>
              <p className="text-white/60 text-lg">Visit us at any of our regional branches.</p>
            </div>

            <div className="space-y-6">
              {locations.map((loc, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#D4B56F] rounded-xl flex items-center justify-center shadow-lg">
                      <MapPin className="text-slate-900" size={20} />
                    </div>
                    <h3 className="text-[#D4B56F] text-2xl font-black uppercase tracking-tighter">{loc.city}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mb-2">Address</p>
                      <p className="text-white text-lg font-bold leading-relaxed">{loc.address}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                      <div>
                        <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mb-1">Phone</p>
                        <p className="text-white font-bold text-sm">{loc.phone}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mb-1">Email</p>
                        <p className="text-white font-bold text-sm">{loc.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.4)] border border-white/10">
            <h2 className="text-slate-900 text-3xl font-black mb-4 tracking-tighter uppercase">
              SEND US A <span className="text-[#F29100]">MESSAGE</span>
            </h2>
            <p className="text-slate-400 font-medium mb-10">We usually respond within 2 business hours.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl outline-none focus:border-[#D4B56F] transition-all text-slate-900 font-bold"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl outline-none focus:border-[#D4B56F] transition-all text-slate-900 font-bold"
                    placeholder="Company Ltd"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email ID</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl outline-none focus:border-[#D4B56F] transition-all text-slate-900 font-bold"
                    placeholder="hr@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl outline-none focus:border-[#D4B56F] transition-all text-slate-900 font-bold"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-6 rounded-2xl outline-none focus:border-[#D4B56F] transition-all text-slate-900 font-bold min-h-[180px] resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#F29100] hover:bg-slate-900 hover:text-white text-slate-900 font-black py-5 rounded-2xl text-xl transition-all shadow-xl shadow-[#F29100]/20 flex items-center justify-center gap-3 group"
              >
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
