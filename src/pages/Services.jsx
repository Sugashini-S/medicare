import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Video, Activity, Beaker, 
  Baby, ShoppingBag, Clock, ShieldCheck,
  CheckCircle2, ArrowRight, MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const coreServices = [
    {
      id: 1,
      icon: <Stethoscope size={32} />,
      title: "Doctor Visit at Home",
      description: "Our qualified doctors come to your home for consultation, diagnosis, and treatment planning, saving you the stress of travel.",
      features: ["Physical examination", "Prescription management", "Post-hospitalization follow-up"]
    },
    {
      id: 2,
      icon: <Video size={32} />,
      title: "Telemedicine Consultation",
      description: "Connect with specialist doctors via video call from your home. Ideal for follow-ups and non-emergency consultations.",
      features: ["Specialist consultation", "E-prescriptions", "Instant medical advice"]
    },
    {
      id: 3,
      icon: <Activity size={32} />,
      title: "Nursing Care",
      description: "Experienced nurses available for short-term and long-term care, including injections, wound dressing, and monitoring.",
      features: ["Post-operative care", "Geriatric care", "Infusion services"]
    },
    {
      id: 4,
      icon: <Beaker size={32} />,
      title: "Home Lab Collection",
      description: "Professional lab technicians visit your home to collect samples. Reports are delivered digitally or physically.",
      features: ["Blood & urine tests", "Full body checkup", "NMC verified labs"]
    },
    {
      id: 5,
      icon: <Baby size={32} />,
      title: "Mother & Child Care",
      description: "Comprehensive care for new mothers and babies, including lactation support and infant health monitoring.",
      features: ["Postpartum support", "Neonatal care", "Vaccination guidance"]
    },
    {
      id: 6,
      icon: <ShoppingBag size={32} />,
      title: "Doorstep Pharmacy",
      description: "Order medicines and medical equipment. We ensure quick delivery to your doorstep in Nagaon.",
      features: ["Prescription medicines", "Healthcare essentials", "Equipment rental"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-4"
          >
            A Unit of SIMS Multispecial Hospital
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
          >
            Our Doorstep <span className="text-primary italic">Services</span>
          </motion.h1>
          <p className="text-text-body text-lg max-w-2xl mx-auto leading-relaxed">
            Professional healthcare delivered to your door. We combine medical expertise 
            with the convenience of your home environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {coreServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background-light p-8 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm text-text-body font-medium">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/appointments" className="flex items-center gap-2 text-primary font-bold text-sm group/btn">
                Book This Service
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service Hours notice */}
        <section className="bg-teal-gradient rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Clock size={40} className="text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold">Standard Timing</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Our doorstep services are available from 8:00 AM to 8:00 PM daily. 
                Please note that we are not an emergency service. For critical emergencies, 
                please visit SIMS Multispecial Hospital immediately.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="tel:+911234567890" className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all">
                  Contact Support
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="text-secondary" /> Registration Benefits
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Annual registration for only ₹100</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Covers up to 6 family members under one plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Priority booking for all doorstep services</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        </section>
      </div>
    </div>
  );
};

export default Services;

