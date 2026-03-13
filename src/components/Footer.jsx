import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, MessageCircle, 
  MapPin, Phone, Mail, Clock
} from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                <path d="M21 38C21 38 4 27 4 14.5C4 8.7 8.7 4 14.5 4C17.5 4 20.2 5.3 21 6.5C21.8 5.3 24.5 4 27.5 4C33.3 4 38 8.7 38 14.5C38 27 21 38 21 38Z" fill="#e53e3e"/>
                <path d="M6 21 L11 21 L13.5 15 L17 27 L20.5 18 L23 23 L26 21 L36 21" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <rect x="19" y="5" width="4" height="13" rx="2" fill="white" opacity="0.9"/>
                <rect x="13.5" y="10.5" width="15" height="4" rx="2" fill="white" opacity="0.9"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-2xl text-primary tracking-tighter">SPONDON</span>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Doorstep Healthcare</span>
                <span className="text-[9px] font-medium text-text-muted/60 mt-1">A Unit of SIMS Multispecial Hospital</span>
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

