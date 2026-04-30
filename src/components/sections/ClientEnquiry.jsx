import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, MapPin, Loader2, Globe, Shield, Users } from 'lucide-react';
import partnershipBanner from '../../assets/images/partnership_banner.jpg';

const ClientEnquiry = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const services = [
    "Executive Search",
    "Professional Staffing and Recruitment",
    "Recruitment Process Outsourcing",
    "Payroll and Statutory Compliance Services",
    "Re-Badging",
    "Captive Support",
    "BOT",
    "Global Capability Centre (GCC)",
    "Augmentation",
    "Others"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.company,
          source: formData.service,
          message: formData.message,
          subject: `Client Enquiry: ${formData.service} from ${formData.company}`
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 font-inter">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={partnershipBanner} 
            className="w-full h-full object-cover opacity-40 grayscale-[0.5]" 
            alt="Partnership" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase"
          >
            Partner With <span className="text-[#D97706]">Abhilekha</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Tell us about your requirements and our experts will design a customized solution for your business.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white p-12 rounded-[2.5rem] shadow-xl text-center space-y-6"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Enquiry Received!</h2>
            <p className="text-slate-500 text-lg">Thank you for reaching out. Our business development team will contact you within 24 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-[#D97706] transition-all"
            >
              Send Another Enquiry
            </button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Contact Info & Benefits */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 leading-tight">Why top companies <br/><span className="text-[#D97706]">trust us?</span></h2>
                
                <div className="space-y-6">
                  {[
                    { icon: Globe, title: "Pan-India Presence", desc: "Local expertise with national reach for all your HR needs." },
                    { icon: Shield, title: "Compliance Gurus", desc: "100% statutory compliance and zero-risk payroll management." },
                    { icon: Users, title: "Niche Talent Access", desc: "Deep networks in IT and specialized Non-IT sectors." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#D97706] shrink-0">
                        <benefit.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+918023400510" className="flex items-center gap-4 text-slate-600 hover:text-[#D97706] transition-colors group">
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-orange-50"><Phone size={18} /></div>
                    <span className="font-semibold">+91 80 2340 0510</span>
                  </a>
                  <a href="mailto:info@abhilekha.com" className="flex items-center gap-4 text-slate-600 hover:text-[#D97706] transition-colors group">
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-orange-50"><Mail size={18} /></div>
                    <span className="font-semibold">info@abhilekha.com</span>
                  </a>
                  <div className="flex items-start gap-4 text-slate-600">
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0"><MapPin size={18} /></div>
                    <span className="font-semibold leading-snug text-sm">#48, 2nd floor, 11th Cross, 3rd Main, Prashanth Nagar, Bengaluru - 560 079</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:border-[#D97706] outline-none transition-all font-medium" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Work Email *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:border-[#D97706] outline-none transition-all font-medium" 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Contact Number *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:border-[#D97706] outline-none transition-all font-medium" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Company Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:border-[#D97706] outline-none transition-all font-medium" 
                      placeholder="Acme Inc." 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Service Required *</label>
                  <select 
                    required 
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:border-[#D97706] outline-none transition-all font-medium appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Brief Requirement *</label>
                  <textarea 
                    required 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:border-[#D97706] outline-none transition-all font-medium resize-none" 
                    placeholder="Tell us about your project or staffing needs..." 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#D97706] transition-all shadow-xl shadow-slate-200 disabled:opacity-50 flex items-center justify-center gap-3 text-lg"
                >
                  {loading ? <><Loader2 className="animate-spin" size={24} /> Processing...</> : <><Send size={20} /> Submit Enquiry</>}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientEnquiry;
