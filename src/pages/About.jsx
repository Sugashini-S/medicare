import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Award, MapPin, 
  Phone, Mail, Clock, Send, Globe,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../utils/cn';

const About = () => {
  const locations = [
    { city: "Chennai", address: "123 Health Ave, Heart City, TN 600001", phone: "+91 44 2829 0000" },
    { city: "Coimbatore", address: "45 Care Road, West Hills, TN 641001", phone: "+91 422 231 0000" },
    { city: "Madurai", address: "8 Mercy Street, South End, TN 625001", phone: "+91 452 248 0000" },
    { city: "Trichy", address: "12 Wellness Blvd, Central Square, TN 620001", phone: "+91 431 276 0000" }
  ];

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-accent/10 rounded-full text-accent font-bold text-xs uppercase tracking-widest">
              Our Journey
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              A Legacy of <span className="text-accent underline decoration-primary/10 decoration-8 underline-offset-8">Compassionate</span> Healthcare.
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              Founded in 1999, MediCare Hospital has grown from a specialized clinic to one of Tamil Nadu's 
              most prestigious healthcare institutions. We combine world-class medical expertise with 
              innovative technology to deliver personalized patient care.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 pt-4">
              <Stat mini to="25+" label="Years of Trust" />
              <Stat mini to="5M+" label="Patients Healed" />
              <Stat mini to="500+" label="Beds Capacity" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[60px] overflow-hidden border-8 border-white shadow-2xl skew-y-3">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Hospital Interior" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Absolute badge */}
            <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-[32px] shadow-2xl text-white z-10">
               <Award size={48} className="text-accent mb-4" />
               <p className="font-bold text-lg">NABH Gold Certified</p>
               <p className="text-white/40 text-xs">Since 2012</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <Card 
            icon={<Target className="text-accent" />}
            title="Our Mission"
            text="To deliver exceptional clinical outcomes and provide a superior patient experience through continuous innovation and compassion."
          />
          <Card 
            icon={<Globe className="text-primary" />}
            title="Our Vision"
            text="To be the most trusted healthcare brand across South India, recognized for our commitment to quality and ethical medical practices."
          />
        </div>

        {/* Locations */}
        <div className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary tracking-tight">Our Presence in Tamil Nadu</h2>
            <p className="text-text-muted max-w-xl mx-auto">We are present in major cities to bring healthcare closer to you.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, idx) => (
              <motion.div
                key={loc.city}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-50 flex flex-col items-start gap-6 group"
              >
                <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{loc.city}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{loc.address}</p>
                  <p className="text-sm font-bold text-primary">{loc.phone}</p>
                </div>
                <button className="mt-auto flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
                  Get Directions
                  <ArrowUpRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary tracking-tight">Get in Touch</h2>
            <p className="text-text-muted text-lg">
              Have questions or need assistance? Our team is here to help you 24/7.
            </p>
            
            <div className="space-y-6">
              <ContactInfo icon={<Phone />} title="Emergency" text="1800-419-1066" />
              <ContactInfo icon={<Mail />} title="Email Us" text="care@medicare.com" />
              <ContactInfo icon={<Clock />} title="Working Hours" text="OPD: 8 AM - 8 PM (Mon-Sat)" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-[50px] shadow-2xl shadow-primary/5 border border-gray-50"
            >
              <form className="grid sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-medium" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-medium" />
                 </div>
                 <div className="sm:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Message</label>
                    <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-medium resize-none"></textarea>
                 </div>
                 <button className="sm:col-span-2 w-full py-5 bg-primary hover:bg-primary-light text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20">
                    <Send size={20} />
                    Send Message
                 </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const Stat = ({ mini, to, label }) => (
  <div className="space-y-1">
    <p className={cn("font-black text-primary", mini ? "text-3xl" : "text-4xl")}>{to}</p>
    <p className="text-xs font-bold text-text-muted uppercase tracking-widest leading-tight">{label}</p>
  </div>
);

const Card = ({ icon, title, text }) => (
  <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-50 flex flex-col gap-6 group hover:border-accent/10 transition-all duration-500">
    <div className="w-16 h-16 bg-surface rounded-[20px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <div className="space-y-2">
      <h3 className="text-2xl font-bold text-primary">{title}</h3>
      <p className="text-text-muted leading-relaxed">{text}</p>
    </div>
  </div>
);

const ContactInfo = ({ icon, title, text }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg shadow-accent/5 border border-gray-50">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">{title}</p>
      <p className="text-primary font-bold text-lg">{text}</p>
    </div>
  </div>
);

export default About;
