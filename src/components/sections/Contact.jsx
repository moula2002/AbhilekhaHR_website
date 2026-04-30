import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from '../ui/BrandIcons';
import { cn } from '../../lib/utils';
import localImageContact1 from '../../assets/images/img_df00f7ba.jpg';

const Contact = () => {
  const [activeLocation, setActiveLocation] = useState('Bangalore');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
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
      city: "Bangalore",
      image: localImageContact1,
      address: "2nd & 3rd Floor, Surfa Coats, No. 640, 46th A Cross Rd, 3rd Block, Rajajinagar, Bengaluru, Karnataka 560010",
      phones: ["+91 80 2340 0510"],
      emails: ["hr@abhilekha.com"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden font-outfit">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <div className="inline-block px-4 py-1.5 bg-slate-900/5 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
             Head Office
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">OUR <span className="text-[#F29100]">LOCATION</span></h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">Visit our corporate headquarters in Bangalore for direct consultations.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Location Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
               <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={locations[0].image} 
                    alt="Bangalore Head Office" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
               </div>
               <div className="p-10 space-y-8 relative z-10">
                  <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Corporate Office</p>
                        <p className="text-white text-lg font-medium leading-relaxed">{locations[0].address}</p>
                      </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                           <Phone className="text-[#F29100]" size={24} />
                        </div>
                        <div>
                           <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Phones</p>
                           {locations[0].phones.map(p => (
                             <p key={p} className="text-white font-bold">{p}</p>
                           ))}
                        </div>
                     </div>
                     <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                           <Mail className="text-[#F29100]" size={24} />
                        </div>
                        <div>
                           <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Emails</p>
                           {locations[0].emails.map(e => (
                             <p key={e} className="text-white font-bold">{e}</p>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-5">
             <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl sticky top-24">
                <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Enquire Now</h3>
                
                {submitStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 mx-auto text-green-500" />
                    <h4 className="text-xl font-bold">Thank You!</h4>
                    <p>Your message has been sent successfully. We will get back to you soon.</p>
                    <button 
                      onClick={() => setSubmitStatus('idle')}
                      className="mt-4 px-6 py-2 bg-green-100 hover:bg-green-200 rounded-xl font-bold transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                     {submitStatus === 'error' && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100">
                          Failed to send message. Please try again.
                        </div>
                     )}
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-slate-900/20 transition-all text-slate-900 font-bold" 
                          placeholder="Your Name" 
                        />
                     </div>
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                           <input 
                             type="email" 
                             name="email"
                             required
                             value={formData.email}
                             onChange={handleInputChange}
                             className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-slate-900/20 transition-all text-slate-900 font-bold" 
                             placeholder="Email" 
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                           <input 
                             type="tel" 
                             name="phone"
                             value={formData.phone}
                             onChange={handleInputChange}
                             className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-slate-900/20 transition-all text-slate-900 font-bold" 
                             placeholder="Phone" 
                           />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                        <textarea 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-slate-900/20 transition-all text-slate-900 font-bold min-h-[120px] resize-none" 
                          placeholder="How can we help?" 
                        />
                     </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 hover:bg-[#F29100] text-white font-black py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                         {isSubmitting ? 'Sending...' : 'Submit Enquiry'} 
                         {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </button>
                  </form>
                )}

                <div className="mt-12 pt-10 border-t border-slate-100">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 text-center">Follow Our Success</p>
                   <div className="flex justify-center gap-6">
                      {[Linkedin, Instagram, Twitter, Facebook, Youtube].map((Icon, idx) => (
                        <a key={idx} href="#" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                           <Icon size={20} />
                        </a>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
