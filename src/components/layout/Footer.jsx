import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from '../ui/BrandIcons';
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-24 pb-12 overflow-hidden relative font-inter">
      {/* Decorative element */}
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
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Youtube, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#F29100] hover:text-white transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Our Solutions */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 tracking-tight uppercase">Our Solutions</h4>
            <ul className="space-y-4">
              {["Executive Recruitment", "IT Staffing Solutions", "Management Consulting", "Statutory Compliance", "Corporate Training"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-[#F29100] text-xs font-bold flex items-center gap-2 group transition-colors uppercase tracking-widest">
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-[#F29100] transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 tracking-tight uppercase">Company</h4>
            <ul className="space-y-4">
              {["About Our Legacy", "Join Our Team", "Client Testimonials", "Global Reach", "Quality Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-[#F29100] text-xs font-bold flex items-center gap-2 group transition-colors uppercase tracking-widest">
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-[#F29100] transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 tracking-tight uppercase">Our Offices</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F29100] shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Hyderabad</span>
                  <span className="text-white/60 text-[11px] font-medium leading-relaxed">
                    #127, Ameer Bagh, Sumitra Nagar Colony, Kukatpally, Hyderabad - 500072
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F29100] shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Pune</span>
                  <span className="text-white/60 text-[11px] font-medium leading-relaxed">
                    Stellar Business Hub, Office 504, Wakad, Pune - 411057
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.2em]">
              &copy; {currentYear} Abhilekha Information Pvt. Ltd. | ISO 9001:2008 Certified
            </p>
            <p className="text-white/10 text-[8px] font-medium uppercase tracking-widest">
              Bangalore | Hyderabad | Pune | Chennai | PAN INDIA
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


