import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Users, Award, ShieldCheck, 
  CheckCircle, Video, Activity 
} from 'lucide-react';

const Doctors = () => {
  const doctorBenefits = [
    {
      icon: <Award className="text-primary" />,
      title: "NMC Registered",
      description: "All our medical professionals are registered with the National Medical Commission."
    },
    {
      icon: <ShieldCheck className="text-primary" />,
      title: "SIMS Hospital Panel",
      description: "Direct support and supervision from SIMS Multispecial Hospital, Nagaon."
    },
    {
      icon: <Users className="text-primary" />,
      title: "Specialist Network",
      description: "Access to a wide range of specialists for telemedicine and home consultations."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-4"
          >
            Registered Medical Professionals
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-display"
          >
            Connect with Our <br /> <span className="text-primary italic">Medical Experts</span>
          </motion.h1>
          <p className="text-text-body text-lg leading-relaxed mb-8">
            Spondon Healthcare is supported by a panel of expert doctors from **SIMS Multispecial Hospital, Nagaon**. 
            All our professionals are registered with the National Medical Commission (NMC).
          </p>
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80" 
            alt="Indian doctors and nurses team" 
            className="w-full h-64 object-cover rounded-2xl mb-8 opacity-80 shadow-lg" 
            onError={(e) => { e.target.style.display = 'none' }}
            loading="lazy"
            /* TODO: Replace with Indian healthcare photo when available */
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {doctorBenefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-background-light rounded-3xl border border-border hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">{benefit.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* SIMS Hospital Section */}
        <section className="bg-primary/5 rounded-[40px] p-8 md:p-16 border border-primary/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-display">SIMS Multispecial Hospital Support</h2>
              <p className="text-text-body leading-relaxed mb-8">
                Every doorstep visit is backed by the clinical excellence of SIMS Hospital. 
                In case of complex diagnosis or emergency needs, patients are directly 
                transitioned to our hospital facility for advanced treatment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-bold text-text-dark">
                  <CheckCircle className="text-primary" size={20} />
                  24x7 Critical Care Support
                </li>
                <li className="flex items-center gap-3 font-bold text-text-dark">
                  <CheckCircle className="text-primary" size={20} />
                  Advanced Diagnostic Lab
                </li>
                <li className="flex items-center gap-3 font-bold text-text-dark">
                  <CheckCircle className="text-primary" size={20} />
                  Multi-speciality Consultation
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-border">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope size={40} />
                </div>
                <h3 className="text-2xl font-bold">Expert Consultations</h3>
                <p className="text-text-muted">Book a home visit from our hospital-affiliated doctors today.</p>
                <div className="pt-4">
                  <a href="tel:+919435099908" className="btn-primary inline-block">Call Now: +91 94350 99908</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Doctors;
