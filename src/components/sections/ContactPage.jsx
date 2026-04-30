import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, Building, Home, Map, X } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from '../ui/BrandIcons';
import { cn } from '../../lib/utils';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', companyName: '', email: '', phone: '', message: '', source: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [showMap, setShowMap] = useState(false);

  const MapModal = () => (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowMap(false)} />
      <div className="relative bg-white w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        <button 
          onClick={() => setShowMap(false)}
          className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 transition-colors z-10"
        >
          <X className="text-slate-900" size={24} />
        </button>
        <div className="aspect-video w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.749260646749!2d77.5545767!3d12.987882699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8cffffffff%3A0xce538e969aae15db!2sAbhilekha%20Information%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1777529971408!5m2!1sen!2sin" 
            className="w-full h-full border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: formData.companyName ? `New Contact from ${formData.name} at ${formData.companyName}` : `New Contact from ${formData.name}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', companyName: '', email: '', phone: '', message: '', source: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const locations = [
    {
      city: "Bangalore (Head Office)",
      icon: Home,
      address: "2nd & 3rd Floor, Surfa Coats, No. 640, 46th A Cross Rd, 3rd Block, Rajajinagar, Bengaluru, Karnataka 560010",
      phone: "+91 80 2340 0510",
      email: "info@abhilekha.com",
    },
    {
      city: "Hyderabad Office",
      icon: Building,
      address: "#127, Ameer Bagh, Sumitra Nagar Colony, Kukatpally, Hyderabad, Telangana 500072",
      phone: "+91 80 2340 0510",
      email: "info@abhilekha.com",
    },
    {
      city: "Pune Office",
      icon: Map,
      address: "Office no 504, 5th floor the Stellar Business Hub near New Poona Bakery Marunge road Wakad Pune Maharashtra 411057",
      phone: "+91 80 2340 0510",
      email: "info@abhilekha.com",
    }
  ];

  return (
    <div className="font-outfit">
      {showMap && <MapModal />}
      {/* Section 1: Contact Form & Info */}
      <div className="pt-48 pb-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] shadow-sm p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left Column: Contact Info */}
              <div className="space-y-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Contact Us</h2>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#EBF5FF] rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="text-[#3B82F6]" size={28} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1">Phone Number</p>
                      <p className="text-slate-900 text-xl font-bold">+91 80 2340 0510</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#EBF5FF] rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="text-[#3B82F6]" size={28} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1">Email</p>
                      <p className="text-slate-900 text-xl font-bold">info@abhilekha.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#EBF5FF] rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="text-[#3B82F6]" size={28} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1">Corporate Office</p>
                      <p className="text-slate-900 text-xl font-bold leading-snug">2nd & 3rd Floor, Surfa Coats, No. 640, 46th A Cross Rd, 3rd Block, Rajajinagar, Bengaluru, Karnataka 560010</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <p className="text-slate-900 font-bold mb-6">Follow Us</p>
                  <div className="flex gap-4">
                    <a href="https://in.linkedin.com/company/abhilekha-information-pvt-ltd---india" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110">
                      <Linkedin size={18} fill="currentColor" />
                    </a>
                    <a href="https://x.com/AbhikelhaInfo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white transition-transform hover:scale-110">
                      <Twitter size={18} />
                    </a>
                    <a href="https://www.facebook.com/AbhilekhaJobs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110">
                      <Facebook size={18} fill="currentColor" />
                    </a>
                    <a href="https://www.instagram.com/popular/abhilekha-information-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="space-y-10">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Get in Touch</h2>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {submitStatus === 'success' ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-3xl text-center space-y-4">
                      <CheckCircle2 className="w-16 h-16 mx-auto text-green-500" />
                      <h4 className="text-2xl font-bold">Thank You!</h4>
                      <p>Your message has been sent successfully.</p>
                      <button onClick={() => setSubmitStatus('idle')} className="mt-4 px-8 py-3 bg-slate-900 text-white rounded-full font-bold transition-all">Send Another</button>
                    </div>
                  ) : (
                    <>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-slate-400 transition-all text-slate-900 font-medium placeholder:text-slate-400"
                      />
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="PhoneNo."
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-slate-400 transition-all text-slate-900 font-medium placeholder:text-slate-400"
                      />
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-slate-400 transition-all text-slate-900 font-medium placeholder:text-slate-400"
                      />
                      <div className="relative">
                        <select 
                          name="source"
                          value={formData.source}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-slate-400 transition-all text-slate-900 font-medium appearance-none cursor-pointer"
                        >
                          <option value="" disabled>How did you hear about us?</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Search Engine">Search Engine</option>
                          <option value="Referral">Referral</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                      <textarea 
                        name="message"
                        placeholder="Leave us a Message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-6 outline-none focus:border-slate-400 transition-all text-slate-900 font-medium min-h-[160px] resize-none placeholder:text-slate-400"
                      ></textarea>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-[#1A1A1A] hover:bg-black text-white font-bold py-4 px-12 rounded-full transition-all text-lg disabled:opacity-70"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Our Offices */}
      <div className="py-24 bg-[#0F4C81]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-white text-5xl font-bold tracking-tight">Our offices</h2>
            <p className="text-white/80 text-lg max-w-4xl mx-auto font-medium">
              Combined with our role as trusted advisors for Indian professionals translates into our core capability - Building careers. Building Organisations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((loc, idx) => {
              const Icon = loc.icon;
              return (
                <div key={idx} className="bg-white rounded-[2rem] p-10 flex flex-col items-start text-left shadow-xl">
                  <div className="mb-6 text-slate-900">
                    <Icon size={64} strokeWidth={1} />
                  </div>
                  <h3 className="text-slate-900 text-2xl font-bold mb-4 tracking-tight">{loc.city}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">
                    {loc.address}
                  </p>
                  <button 
                    onClick={() => setShowMap(true)}
                    className="text-[#3B82F6] font-bold underline underline-offset-4 mb-8 hover:text-[#2563EB] transition-colors"
                  >
                    View Map
                  </button>
                  
                  <div className="w-full pt-8 border-t border-slate-100 mt-auto">
                    <p className="text-slate-900 font-bold mb-3 uppercase text-xs tracking-widest">Contact</p>
                    <p className="text-slate-600 font-medium mb-1">T: {loc.phone}</p>
                    <p className="text-slate-600 font-medium">E: {loc.email}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
