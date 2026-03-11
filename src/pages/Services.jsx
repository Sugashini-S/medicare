import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Activity, Beaker, Syringe, 
  Shield, Scissors, CheckCircle2, ArrowRight,
  PhoneCall, Zap
} from 'lucide-react';
import { services, healthPackages } from '../data/mockData';

const ICON_MAP = {
  Stethoscope: <Stethoscope />,
  Activity: <Activity />,
  Beaker: <Beaker />,
  Syringe: <Syringe />,
  Shield: <Shield />,
  Scissors: <Scissors />
};

const Services = () => {
  return (
    <div className="min-h-screen bg-surface pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold text-accent uppercase tracking-[0.3em]"
          >
            Care & Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight"
          >
            Our World-Class <br /> <span className="text-accent underline decoration-primary/10 transition-all decoration-8 underline-offset-8">Medical Services</span>
          </motion.h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From basic diagnostics to advanced surgical procedures, we provide comprehensive 
            healthcare solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-10 rounded-[40px] shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 border border-gray-50 flex flex-col items-start text-left"
            >
              <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-8">
                {React.cloneElement(ICON_MAP[service.icon], { size: 32 })}
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-8">
                {service.description}
              </p>
              <button className="mt-auto flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group/btn">
                <span>Learn More</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Health Packages Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-primary tracking-tight">Health Packages</h2>
              <p className="text-text-muted max-w-xl">
                Preventive healthcare is the best medicine. Choose a package that fits your lifestyle.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthPackages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl flex flex-col group relative overflow-hidden"
              >
                {/* Popular Tag */}
                {pkg.tag === 'Popular' && (
                  <div className="absolute top-0 right-0 bg-accent text-white py-1.5 px-6 rounded-bl-3xl text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    Best Value
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-primary mb-2 mt-4">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-primary">₹{pkg.price}</span>
                  <span className="text-text-muted text-xs font-bold uppercase tracking-widest">/ one time</span>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-text-primary leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 bg-surface group-hover:bg-primary group-hover:text-white text-primary font-bold rounded-2xl transition-all duration-300">
                  Select Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emergency Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-primary rounded-[40px] p-8 md:p-16 relative overflow-hidden text-white"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-error/20 rounded-full text-error font-bold text-xs uppercase tracking-widest animate-pulse">
                <Zap size={14} fill="currentColor" />
                Emergency 24x7
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Critical Care When You <br /> Need It The Most.
              </h2>
              <p className="text-white/60 text-lg max-w-xl">
                Our emergency response team is available 24/7. Immediate medical assistance is just a phone call away.
              </p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center">
                 <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-2">Emergency Number</p>
                 <a href="tel:1800-419-1066" className="text-3xl md:text-5xl font-black text-white hover:text-accent transition-colors flex items-center gap-4">
                   <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                     <PhoneCall size={32} className="text-accent" />
                   </div>
                   1800-419-1066
                 </a>
              </div>
            </div>
          </div>
          {/* Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
