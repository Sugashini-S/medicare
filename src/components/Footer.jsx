import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, MessageCircle, 
  MapPin, Phone, Mail, Clock
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              {/* Clean Spondon logo — red heart + ECG line + white cross */}
              <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                <path d="M24 40C24 40 3 27 3 13.5C3 7.7 7.7 3 13.5 3C17.2 3 20.4 4.9 22.3 7.8C22.9 8.7 23.5 9.8 24 11C24.5 9.8 25.1 8.7 25.7 7.8C27.6 4.9 30.8 3 34.5 3C40.3 3 45 7.7 45 13.5C45 27 24 40 24 40Z" fill="#DC2626"/>
                <rect x="21.5" y="6" width="5" height="14" rx="2.5" fill="white"/>
                <rect x="15" y="11.5" width="18" height="5" rx="2.5" fill="white"/>
                <path d="M5 22 L11 22 L14 16 L17.5 29 L21 19.5 L23.5 24 L26.5 22 L43 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>

              <div className="flex flex-col leading-none">
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  color: '#0d9488',
                  letterSpacing: '0.05em',
                  lineHeight: 1.1
                }}>SPONDON</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  color: '#0f766e',
                  letterSpacing: '0.02em',
                  lineHeight: 1.4
                }}>Doorstep Healthcare</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.58rem',
                  color: '#6b7280',
                  lineHeight: 1.4
                }}>A Unit of SIMS Multispecial Hospital</span>
              </div>
            </Link>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={20} />} href="https://facebook.com" />
              <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com" />
              <SocialIcon icon={<MessageCircle size={20} />} href="https://wa.me/919435099908" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-text-dark text-lg mb-6">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Doctors', path: '/doctors' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Book Appointment', path: '/appointments' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-text-body font-medium hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h3 className="font-playfair font-bold text-text-dark text-lg mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <ContactItem 
                icon={<MapPin className="text-primary" size={20} />}
                text="BSNL Admin Building, Ground Floor, infront of Nowgong University, Nagaon, Assam - 782011"
              />
              <ContactItem 
                icon={<Phone className="text-primary" size={20} />}
                text="94350 99908 | 94350 99909"
              />
              <ContactItem 
                icon={<MessageCircle className="text-primary" size={20} />}
                text="WhatsApp: 94350 99908"
              />
              <ContactItem 
                icon={<Mail className="text-primary" size={20} />}
                text="Spondonthealthcarenagaon@gmail.com"
              />
              <ContactItem 
                icon={<Clock className="text-primary" size={20} />}
                text="Services: 8AM – 8PM only"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Spondon Doorstep Healthcare. All rights reserved.
          </p>
          <div className="px-4 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-red-100">
            Not an emergency service
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-lg bg-background-light text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
  >
    {icon}
  </a>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 shrink-0">{icon}</div>
    <p className="text-sm font-medium text-text-body leading-relaxed">{text}</p>
  </div>
);

export default Footer;

