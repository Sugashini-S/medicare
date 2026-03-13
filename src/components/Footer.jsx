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
            <img src={logo} alt="Spondon Logo" className="h-10 w-auto" />
            <p className="text-text-dark font-semibold text-sm">
              A Unit of SIMS Multispecial Hospital
            </p>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Professional doorstep healthcare in Nagaon, Assam. We bring quality medical care right to your home.
            </p>
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

