import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Users, Award, ShieldCheck, 
  ArrowRight, Phone, Video, 
  Activity, Beaker, Baby, HeartPulse 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const departments = [
    {
      title: "General Physicians",
      description: "Primary care specialists for common illnesses, fever, lifestyle diseases, and regular health checkups.",
      icon: <Stethoscope size={32} />
    },
    {
      title: "Pediatricians",
      description: "Specialized care for infants, children, and adolescents at the comfort of your home.",
      icon: <Baby size={32} />
    },
    {
      title: "Geriatric Specialists",
      description: "Elderly care experts focused on managing multiple health conditions and age-related issues.",
      icon: <HeartPulse size={32} />
    },
    {
      title: "Critical Care",
      description: "Post-hospitalization support and management of chronically ill patients by trained specialists.",
      icon: <Activity size={32} />
    },
    {
      title: "Diagnostic Experts",
      description: "Consultation based on home-collected lab reports and preventive health screens.",
      icon: <Beaker size={32} />
    },
    {
      title: "Tele-Specialists",
      description: "Direct video access to senior specialists from SIMS Multispecial Hospital Nagaon.",
      icon: <Video size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-primary font-bold text-sm mb-4"
          >
            <ShieldCheck size={18} />
            Professional & Certified Specialists
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Connect with Our <br /> <span className="text-primary italic">Medical Experts</span>
          </motion.h1>
          <p className="text-text-body text-lg leading-relaxed mb-8">
            Spondon Healthcare is supported by a panel of expert doctors from **SIMS Multispecial Hospital, Nagaon**. 
            All our professionals are registered with the National Medical Commission (NMC).
          </p>
          <img 
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&q=80" 
            alt="Doctors Team" 
            className="w-full h-64 object-cover rounded-2xl mb-8 opacity-80 shadow-lg" 
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-background-light p-8 rounded-3xl border-2 border-transparent hover:border-primary/10 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                {dept.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3 leading-tight">{dept.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {dept.description}
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                <Users size={14} /> SIMS Certified
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-[40px] p-8 md:p-16 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                Consultation Ready? 
              </h2>
              <p className="text-text-body mb-8">
                Request a doctor visit or a tele-consultation session. Our care coordinator 
                will screen your needs and schedule the best specialist for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointments" className="btn-primary flex items-center justify-center gap-2">
                  Request Consultation <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline flex items-center justify-center gap-2">
                  Talk to Coordinator <Phone size={18} />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs text-text-muted font-bold uppercase tracking-widest">Support</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-1">NMC</div>
                <div className="text-xs text-text-muted font-bold uppercase tracking-widest">Verified</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-xs text-text-muted font-bold uppercase tracking-widest">Professionals</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-1">SIMS</div>
                <div className="text-xs text-text-muted font-bold uppercase tracking-widest">Partner</div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Reminder */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-secondary/10 px-6 py-3 rounded-2xl text-secondary border border-secondary/20">
            <Award size={20} />
            <span className="font-bold">Register today for ₹100/year to access priority consultation</span>
            <Link to="/register" className="underline font-black hover:text-primary transition-colors">Join Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;

