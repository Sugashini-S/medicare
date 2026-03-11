import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Linkedin, Youtube, 
  MapPin, Phone, Mail, Instagram,
  Stethoscope, Download
} from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: "About MediCare",
      links: [
        "About Us", "Contact Us", "Careers", "News & Media",
        "Hospital Policies", "Corporate Governance", "Investors", "Privacy Policy"
      ]
    },
    {
      title: "Services",
      links: [
        "Doctor Appointment", "Lab Tests", "Pharmacy", "Teleconsultation",
        "Surgery", "Home Care", "Ambulance", "International Patients"
      ]
    },
    {
      title: "Top Specialties",
      links: [
        "Cardiology", "Dermatology", "Neurology", "Gastroenterology",
        "Oncology", "Orthopedics", "Gynecology", "Pediatrics"
      ]
    },
    {
      title: "Health Resources",
      links: [
        "Symptoms Checker", "Health Blogs", "Medicine Directory", "Hospital Directory",
        "Specialty Directory", "Doctor Directory", "Vaccination Schedule", "First Aid"
      ]
    }
  ];

  return (
    <footer className="bg-[#0a1628] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-accent mb-6 uppercase tracking-wider text-sm">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Logo, App & Social */}
        <div className="grid md:grid-cols-3 gap-12 items-start py-12 border-t border-white/10 border-b border-white/10 mb-8">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors">
                <Stethoscope className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tighter text-white leading-none">
                  MediCare
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase leading-none mt-1">
                  Hospital
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Providing premium healthcare services with compassion and innovation. Your health is our priority.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Youtube size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-white mb-6">Contact Info</h3>
            <div className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm">123 Health Ave, Heart City, Tamil Nadu 600001</p>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm">+91 1800-419-1066 (Toll Free)</p>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm">support@medicare.com</p>
            </div>
          </div>

          {/* App Download */}
          <div className="space-y-6">
            <h3 className="font-bold text-white mb-6">Get MediCare App</h3>
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                  <Download className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-500">Download on the</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                  <Download className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-500">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Accreditations */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} MediCare Hospital. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <span>NMC Accredited</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full my-auto" />
            <span>NABH Certified</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full my-auto" />
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <Link
    to="#"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
  >
    {icon}
  </Link>
);

export default Footer;
