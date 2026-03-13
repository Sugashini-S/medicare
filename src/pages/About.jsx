import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Award, ShieldCheck, 
  MapPin, CheckCircle, Hospital
} from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
              Our Vision
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-display">
              Quality Care at <br />
              <span className="text-primary italic">Your Doorstep</span>
            </h1>
            <p className="text-text-body text-lg leading-relaxed">
              SPONDON Doorstep Healthcare is a dedicated team of professional doorstep healthcare providers 
              based in Nagaon, Assam. As a unit of <strong>SIMS Multispecial Hospital</strong>, we bring 
              hospital-grade care directly to where you feel most comfortable — your home.
            </p>
            <p className="text-text-muted leading-relaxed">
              We provide preventive, curative, and supportive care in the primary healthcare space. 
              Our mission is to bridge the gap between hospital excellence and last-mile accessibility 
              for families in Nagaon and the surrounding regions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <CheckCircle size={20} />
                </div>
                <span className="font-bold text-text-dark">Professional Staff</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <CheckCircle size={20} />
                </div>
                <span className="font-bold text-text-dark">SIMS Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80" 
                alt="Doctor smiling with patient at home" 
                className="w-full h-80 object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
                loading="lazy"
              />
            </div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -left-10 bg-teal-gradient p-8 rounded-3xl shadow-xl text-white z-10 hidden md:block"
            >
               <ShieldCheck size={40} className="text-secondary mb-4" />
               <p className="font-bold text-xl mb-1">Trusted & Certified</p>
               <p className="text-white/60 text-sm">Nagaon's Premium Choice</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <ValueCard 
            index={0}
            icon={<Target className="text-primary" size={32} />}
            title="Our Mission"
            text="To deliver preventive, curative, and supportive care in the primary healthcare space directly at the patient's home."
          />
          <ValueCard 
            index={1}
            icon={<Award className="text-primary" size={32} />}
            title="Professional Ethics"
            text="We maintain the highest standards of medical privacy, professionalism, and compassionate care for every family."
          />
          <ValueCard 
            index={2}
            icon={<Hospital className="text-primary" size={32} />}
            title="Hospital Support"
            text="Exclusively backed by SIMS Multispecial Hospital Nagaon for specialist support and advanced diagnostics."
          />
        </div>

        {/* Coverage Section */}
        <section className="bg-background-light rounded-[40px] p-8 md:p-16 border border-border overflow-hidden relative">
          <div className="relative z-10">
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1559839914-17aae19cec71?w=600&q=80" 
                alt="Healthcare team group photo" 
                className="w-full h-64 object-cover rounded-2xl shadow-md mb-8"
                onError={(e) => { e.target.style.display = 'none' }}
                loading="lazy"
              />
              <h2 className="text-3xl font-bold text-center text-text-dark font-display">Our Geographical Presence</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm space-y-4"
              >
                <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <MapPin size={24} /> Nagaon Hub
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Our core operations are centered in Nagaon, Assam. We cover all major wards and nearby rural areas 
                  ensuring that professional medical help is just a phone call away for local residents.
                </p>
                <div className="text-sm font-bold text-text-dark pt-2 uppercase tracking-wide">
                  Ward No. 1, Nagaon, Assam
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm space-y-4"
              >
                <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Globe className="text-primary" size={24} /> Beyond Nagaon
                </h3>
                <p className="text-text-muted leading-relaxed">
                  While Nagaon is our headquarters, we extend our network support to patients seeking treatment 
                  in cities like Delhi, Mumbai, Chennai, and Hyderabad by providing trained attendants and coordinators.
                </p>
                <div className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full w-fit font-bold uppercase">Network Support</div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

// Helper components
const ValueCard = ({ icon, title, text, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="p-8 bg-white border border-border rounded-3xl hover:border-primary/20 hover:shadow-lg transition-all"
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-text-dark mb-4">{title}</h3>
    <p className="text-text-muted text-sm leading-relaxed">{text}</p>
  </motion.div>
);

const Globe = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default About;

