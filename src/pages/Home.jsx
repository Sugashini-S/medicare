import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, X, Clock, HelpCircle, 
  MapPin, Phone, Stethoscope, Video, Activity, 
  Beaker, Baby, ShoppingBag, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [showPromo, setShowPromo] = useState(true);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-12 md:py-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-bold text-sm tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              🏥 Doorstep Healthcare — Nagaon, Assam
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Healthcare That <br />
              Comes <span className="text-primary italic">To You</span>
            </h1>
            
            <p className="text-lg text-text-body max-w-xl">
              We are a team of professional doorstep healthcare providers in Nagaon, Assam. 
              Our services include preventive, curative and supportive care in the primary healthcare space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/appointments" className="btn-primary flex items-center justify-center gap-2 group">
                Book a Service
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link to="/register" className="btn-outline flex items-center justify-center gap-2">
                Register — ₹100/year
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <TrustBadge icon={<Check size={16} />} text="8AM–8PM Service" />
              <TrustBadge icon={<Check size={16} />} text="Covers 6 Family Members" />
              <TrustBadge icon={<Check size={16} />} text="Certified Professionals" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Nurse home visit" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Soft teal gradient background */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Floating Registration Promo Banner */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-4 right-4 md:left-auto md:right-8 z-50 max-w-md"
          >
            <div className="bg-teal-gradient p-6 rounded-2xl text-white shadow-2xl relative border-2 border-white/20">
              <button 
                onClick={() => setShowPromo(false)}
                className="absolute top-4 right-4 hover:bg-white/10 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white/20 p-2 rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">📋 Register Your Family Today</h3>
                  <p className="text-white/80 text-sm">₹100 for 1 year registration</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-secondary" /> Covers up to 6 family members
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-secondary" /> Renewal charges: ₹75/year
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-secondary" /> Services available after registration
                </li>
              </ul>
              
              <Link 
                to="/register" 
                className="block w-full text-center bg-secondary hover:bg-opacity-90 text-white font-bold py-3 rounded-xl transition-all shadow-lg animate-pulse"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Section */}
      <section className="bg-background-light section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Comprehensive home healthcare tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Stethoscope className="text-primary" size={32} />}
              title="Doctor Visit at Home"
              description="Our doctors come to your home for consultation and treatment"
            />
            <ServiceCard 
              icon={<Video className="text-primary" size={32} />}
              title="Telemedicine Consultation"
              description="Video consultation with doctors from the comfort of your home"
            />
            <ServiceCard 
              icon={<Activity className="text-primary" size={32} />}
              title="Nursing Care"
              description="24×7 trained nursing services at your doorstep"
            />
            <ServiceCard 
              icon={<Beaker className="text-primary" size={32} />}
              title="Home Lab Collection"
              description="Lab technicians collect samples at home, reports delivered to you"
            />
            <ServiceCard 
              icon={<Baby className="text-primary" size={32} />}
              title="Mother & Child Care"
              description="Comprehensive postpartum and newborn care at home"
            />
            <ServiceCard 
              icon={<ShoppingBag className="text-primary" size={32} />}
              title="Doorstep Pharmacy"
              description="Medicines and medical equipment delivered to your door"
            />
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="text-primary font-bold hover:underline flex items-center justify-center gap-1">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepItem 
              number="1"
              title="Register"
              description="Fill out the form with your name, address, email and mobile number"
            />
            <StepItem 
              number="2"
              title="Provide Patient Information"
              description="Enter the patient's name, age, gender, medical condition, required care and location"
            />
            <StepItem 
              number="3"
              title="Care Coordinator Review"
              description="Our Care Coordinator reviews needs and creates a personalized care plan"
            />
            <StepItem 
              number="4"
              title="Schedule Care"
              description="We schedule a qualified healthcare professional to visit your home"
            />
          </div>
        </div>
      </section>

      {/* Service Hours Notice */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="container-custom">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Clock size={32} />
                <h3 className="text-2xl font-bold">Service Hours Notice</h3>
              </div>
              <p className="text-text-body font-medium max-w-xl">
                Our services are available from <span className="font-bold underline decoration-primary decoration-2">8AM to 8PM</span> only. 
                Services are for registered persons/families only.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <div className="flex items-center gap-2 text-red-600 font-bold px-4 py-2 bg-red-50 rounded-lg">
                <ShieldCheck size={18} />
                Not an emergency service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Coverage */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Where We Serve</h2>
            <p className="text-text-muted italic">Professional healthcare in Nagaon and beyond</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-8 bg-white rounded-3xl shadow-lg border-2 border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <MapPin /> Nagaon, Assam
              </h3>
              <p className="text-text-body leading-relaxed mb-6">
                Our primary location and full-service hub. We provide comprehensive doorstep care across all major areas of Nagaon.
              </p>
              <div className="flex items-center gap-2 text-text-muted font-bold text-sm">
                <Check className="text-primary" /> Multi-speciality SIMS Support
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white/60 rounded-2xl flex justify-between items-center border border-border">
                <span className="font-bold">Other Locations Covered</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">Delhi, Mumbai, Chennai, Hyderabad</span>
              </div>
              <div className="p-6 bg-white/60 rounded-2xl border border-border">
                <p className="text-sm text-text-muted">
                  <span className="font-bold text-text-dark">Note:</span> Patients seeking treatment outside Assam will be provided with trained attendants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const TrustBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-text-muted font-semibold text-sm">
    <div className="text-primary">{icon}</div>
    {text}
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-lg border border-border hover:border-primary/20 transition-all duration-300"
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-text-dark mb-4">{title}</h3>
    <p className="text-text-muted text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const StepItem = ({ number, title, description }) => (
  <div className="relative space-y-4">
    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-primary/20">
      {number}
    </div>
    <h3 className="text-xl font-bold text-text-dark">{title}</h3>
    <p className="text-text-muted text-sm px-4">{description}</p>
  </div>
);

export default Home;

