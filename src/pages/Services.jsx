import React from 'react';
import { motion } from 'framer-motion';
import {
  Stethoscope, Video, Activity, Beaker,
  Baby, ShoppingBag, Clock, ShieldCheck,
  CheckCircle, ArrowRight, Truck, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const coreServices = [
    {
      id: 1,
      icon: <Stethoscope size={32} />,
      title: "Doctor Visit at Home",
      description: "Our qualified doctors come to your home for consultation, diagnosis, and treatment planning, saving you the stress of travel.",
      features: ["Physical examination", "Prescription management", "Post-hospitalization follow-up"],
      image: "https://images.pexels.com/photos/7653120/pexels-photo-7653120.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 2,
      icon: <Video size={32} />,
      title: "OPD / Telemedicine Consultation",
      description: "Access OPD services including diagnostics, radiology checks and doctor consultations from home. A Health Buddy sets up your video call with the doctor.",
      features: ["Specialist consultation", "E-prescriptions", "Instant medical advice"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80"
      /* TODO: Replace with Indian healthcare photo when available */
    },
    {
      id: 3,
      icon: <Activity size={32} />,
      title: "Nursing Care (24x7)",
      description: "Experienced nurses available for 24x7 care, including injections, wound dressing, and critical monitoring at home.",
      features: ["24x7 Post-operative care", "Geriatric care", "Infusion services"],
      image: "https://images.pexels.com/photos/6129688/pexels-photo-6129688.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 4,
      icon: <Activity size={32} />,
      title: "Physiotherapy & Rehabilitation",
      description: "Professional physiotherapists provide massage and exercises to help you recover mobility and strength at home.",
      features: ["Post-stroke rehab", "Joint pain relief", "Sports injury recovery"],
      image: "https://images.pexels.com/photos/5793697/pexels-photo-5793697.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 5,
      icon: <Users size={32} />,
      title: "Bedside Caregiver",
      description: "Trained attendants to help bedridden or elderly patients with daily activities and basic medical needs.",
      features: ["Personal hygiene help", "Medication reminders", "Mobility support"],
      image: "https://images.pexels.com/photos/6010792/pexels-photo-6010792.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 6,
      icon: <Baby size={32} />,
      title: "Mother & Child Care",
      description: "Comprehensive care for new mothers and babies, including lactation support and infant health monitoring.",
      features: ["Postpartum support", "Neonatal care", "Vaccination guidance"],
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&q=80"
    },
    {
      id: 7,
      icon: <Beaker size={32} />,
      title: "Home Sample Collection",
      description: "We collaborate with top certified labs. Our technicians collect samples at home including ECG, blood tests and RTPCR. Reports delivered digitally.",
      features: [
        "ECG at home with online doctor opinion",
        "Lab sample collection at home",
        "RTPCR tests at home"
      ],
      badge: "🏠 At Home Service",
      image: "https://images.pexels.com/photos/7659683/pexels-photo-7659683.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 8,
      icon: <ShoppingBag size={32} />,
      title: "Doorstep Pharmacy",
      description: "Get discounted pharmacy services at your doorstep. All medicines and medical equipment including urine bags, catheters, walkers and air mattresses delivered.",
      features: [
        "💊 Discounted medicines delivered home",
        "🛏️ Urine bags, catheters, walkers, air mattress",
        "Quick delivery across Nagaon"
      ],
      badge: "💰 Discounted Prices",
      image: "https://images.pexels.com/photos/5910949/pexels-photo-5910949.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 9,
      icon: <Truck size={32} />,
      title: "Ambulance",
      description: "Emergency ambulance services for critical patient transport to SIMS hospital or other facilities.",
      features: ["24x7 Emergency line", "Oxygen support", "Trained paramedics"],
      image: "https://images.pexels.com/photos/5364345/pexels-photo-5364345.jpeg?auto=compress&cs=tinysrgb&w=500"
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
            className="text-4xl md:text-6xl font-bold mb-6 font-display"
          >
            Our Doorstep <span className="text-primary italic">Services</span>
          </motion.h1>
          <p className="text-text-body text-lg max-w-2xl mx-auto leading-relaxed">
            Professional healthcare delivered to your door. We combine medical expertise
            with the convenience of your home environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {coreServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-background-light rounded-3xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {service.badge && (
                <div className="absolute top-4 right-4 z-10 bg-teal-600 px-3 py-1 rounded-full text-white text-xs font-bold shadow-md">
                  {service.badge}
                </div>
              )}
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.target.style.display = 'none' }}
                  loading="lazy"
                />
              </div>
              <div className="p-8">
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
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <Link to="/appointments" className="flex items-center gap-2 text-primary font-bold text-sm group/btn">
                    Book This Service
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Hours notice */}
        <section className="bg-teal-gradient rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Clock size={40} className="text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold font-display uppercase tracking-tight">Standard Timing</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Our doorstep services are available from 8:00 AM to 8:00 PM daily.
                Please note that we are not an emergency service. For critical emergencies,
                please visit SIMS Multispecial Hospital immediately.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+919435099908"
                  className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all shadow-lg"
                >
                  Contact Support
                </motion.a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="text-secondary" /> Registration Benefits
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Annual registration for only ₹100</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Covers up to 6 family members under one plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Priority booking for all doorstep services</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        </section>
      </div>
    </motion.div>
  );
};

export default Services;


