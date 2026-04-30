import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Facebook, X, Instagram, Linkedin, Youtube } from '../ui/BrandIcons';
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

            {/* ✅ Social Links with Brand Colors */}
            <div className="flex gap-3">
              <a href="https://in.linkedin.com/company/abhilekha-information-pvt-ltd---india" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                <Linkedin size={16} />
              </a>

              <a href="https://x.com/AbhikelhaInfo" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                <X size={16} />
              </a>

              <a href="https://www.facebook.com/AbhilekhaJobs" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#1877f2] hover:bg-[#1877f2] hover:text-white transition-all duration-300">
                <Facebook size={16} />
              </a>

              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#ff0000] hover:bg-[#ff0000] hover:text-white transition-all duration-300">
                <Youtube size={16} />
              </a>

              <a href="https://www.instagram.com/popular/abhilekha-information-pvt-ltd/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#e4405f] hover:bg-[#e4405f] hover:text-white transition-all duration-300">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Our Solutions */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 tracking-tight uppercase">Our Solutions</h4>
            <ul className="space-y-4">
              {[
                { name: "IT Recruitment", to: "/it-recruitment" },
                { name: "Non-IT Recruitment", to: "/non-it-recruitment" },
                { name: "IT Staffing", to: "/it-staffing" },
                { name: "Training Programmes", to: "/training-programmes" },
                { name: "Training & Development", to: "/training-development" },
                { name: "Industry Verticals", to: "/industry-verticals" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-white/40 hover:text-[#F29100] text-xs font-bold flex items-center gap-2 group transition-colors uppercase tracking-widest">
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-[#F29100]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 tracking-tight uppercase">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", to: "/about" },
                { name: "Candidates", to: "/candidates" },
                { name: "Jobs Opening", to: "/careers" },
                { name: "Client Enquiry", to: "/client-enquiry" },
                { name: "Contact Us", to: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-white/40 hover:text-[#F29100] text-xs font-bold flex items-center gap-2 group transition-colors uppercase tracking-widest">
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-[#F29100]" />
                    {link.name}
                  </Link>
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
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-white/30 text-[9px] font-black uppercase">
              © {currentYear} Abhilekha Information Pvt. Ltd.
            </p>
            <span className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />
            <p className="text-white/30 text-[9px] font-black uppercase">
              Developed by <span className="text-[#F29100]">INNOMATRICS TECHNOLOGIES</span>
            </p>
          </div>

          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-white/30 text-[9px] font-black uppercase">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/30 text-[9px] font-black uppercase">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;