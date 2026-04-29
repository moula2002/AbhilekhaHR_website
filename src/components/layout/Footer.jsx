import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from '../ui/BrandIcons';
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-24 pb-12 overflow-hidden relative font-inter">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg shadow-white/5">
                <img src={logo} alt="Abhilekha Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-black text-white text-xl tracking-tighter leading-none">ABHILEKHA</span>
                <span className="text-[7px] font-black tracking-[0.3em] uppercase text-[#F29100] mt-1">Information Pvt. Ltd.</span>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed">
              India's trusted HR partner with 20+ years of legacy. Delivering elite recruitment and training solutions across Bangalore, Hyderabad, and Pune.
            </p>

            {/* ✅ Social Links Updated */}
            <div className="flex gap-3">
              <a href="https://in.linkedin.com/company/abhilekha-information-pvt-ltd---india" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#F29100] hover:text-white transition-all duration-300">
                <Linkedin size={16} />
              </a>

              <a href="https://x.com/AbhikelhaInfo" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#F29100] hover:text-white transition-all duration-300">
                <Twitter size={16} />
              </a>

              <a href="https://www.facebook.com/AbhilekhaJobs" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#F29100] hover:text-white transition-all duration-300">
                <Facebook size={16} />
              </a>

              {/* Keeping existing icons but no links provided */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                <Youtube size={16} />
              </a>

              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Our Solutions */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 tracking-tight uppercase">Our Solutions</h4>
            <ul className="space-y-4">
              {["Executive Recruitment", "IT Staffing Solutions", "Management Consulting", "Statutory Compliance", "Corporate Training"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-[#F29100] text-xs font-bold flex items-center gap-2 group transition-colors uppercase tracking-widest">
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-[#F29100]" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 tracking-tight uppercase">Company</h4>
            <ul className="space-y-4">
              {["About Our Legacy", "Join Our Team", "Client Testimonials", "Global Reach", "Quality Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-[#F29100] text-xs font-bold flex items-center gap-2 group transition-colors uppercase tracking-widest">
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-[#F29100]" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 tracking-tight uppercase">Our Offices</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F29100] mt-1" />
                <div>
                  <span className="text-[10px] font-black text-white/40 uppercase">Bangalore</span>
                  <p className="text-white/60 text-[11px]">
                    2nd & 3rd Floor, Surfa Coats, Rajajinagar, Bengaluru - 560010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F29100] mt-1" />
                <div>
                  <span className="text-[10px] font-black text-white/40 uppercase">Hyderabad</span>
                  <p className="text-white/60 text-[11px]">
                    #127, Ameer  Bagh  , Sumitra Nagar Colony, Kukatpally, Hyderabad, Telangana 500072
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F29100] mt-1" />
                <div>
                  <span className="text-[10px] font-black text-white/40 uppercase">Pune</span>
                  <p className="text-white/60 text-[11px]">
                     Office no 504, 5th floor the Stellar Business Hub near New Poona Bakery Marunge road Wakad Pune Maharashtra 411057
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-[9px] font-black uppercase">
            © {currentYear} Abhilekha Information Pvt. Ltd.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-white/30 text-[9px] font-black">Privacy Policy</a>
            <a href="#" className="text-white/30 text-[9px] font-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;