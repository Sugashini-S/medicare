import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShoppingBag, Calendar, Beaker, ShieldCheck,
  Stethoscope, Heart, Pill, Activity, Users, Star,
  Download, ChevronRight, Brain, Baby, Bone, Smile, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doctors, specialties, testimonials } from '../data/mockData';
import CountUp from '../components/CountUp';
import { cn } from '../utils/cn';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-primary flex items-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-light/30 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-accent font-bold text-sm tracking-wide"
            >
              <Heart size={16} fill="currentColor" />
              Serving Tamil Nadu for over 25 Years
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-white drop-shadow-sm">
              Your Health, <br />
              <span className="text-accent">In Trusted Hands.</span>
            </h1>
            
            <p className="text-lg text-white/60 max-w-xl leading-relaxed">
              Experience world-class healthcare with the most advanced technology and compassionate care. 
              Book appointments, buy medicines, and manage your health records all in one place.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/appointments"
                className="px-8 py-4 bg-accent hover:bg-white hover:text-primary text-primary font-extrabold rounded-2xl shadow-xl shadow-accent/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
              >
                Book Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/doctors"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-extrabold rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300"
              >
                Find Doctors
              </Link>
            </div>

            {/* Floating Icons */}
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden xl:block space-y-12">
              <FloatingIcon icon={<Stethoscope />} delay={0} />
              <FloatingIcon icon={<Pill />} delay={1.5} />
              <FloatingIcon icon={<Activity />} delay={3} />
            </div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full"
          >
            <div className="relative z-10 rounded-2xl md:rounded-[60px] overflow-hidden border-4 md:border-8 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Hospital" 
                className="w-full h-full max-h-[300px] md:max-h-none object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            </div>
            
            {/* Stats Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[32px] shadow-2xl z-20 flex items-center gap-4 border border-gray-100"
            >
              <div className="w-12 h-12 bg-success/20 text-success rounded-full flex items-center justify-center">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-primary leading-none">4.9/5</p>
                <p className="text-sm font-medium text-text-muted mt-1">Patient Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-t border-white/10 py-8 z-20">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem to={50000} suffix="+" label="Satisfied Patients" />
            <StatItem to={200} suffix="+" label="Expert Doctors" />
            <StatItem to={25} suffix="+" label="Specialties" />
            <StatItem to={98} suffix="%" label="Success Rate" />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 px-6 bg-surface">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickActionCard 
              icon={<ShoppingBag className="text-accent" />}
              title="Buy Medicines"
              subtitle="Essentials & More"
              footer="2HR Delivery"
              color="accent"
              to="/services"
            />
            <QuickActionCard 
              icon={<Calendar className="text-primary" />}
              title="Doctor Appointment"
              subtitle="Expert Consultations"
              footer="Book Now"
              color="primary"
              to="/doctors"
            />
            <QuickActionCard 
              icon={<Beaker className="text-warning" />}
              title="Lab Tests"
              subtitle="Diagnostic Services"
              footer="At Home Collection"
              color="warning"
              to="/services"
            />
            <QuickActionCard 
              icon={<ShieldCheck className="text-success" />}
              title="Health Insurance"
              subtitle="Secure Your Future"
              footer="Explore Plans"
              color="success"
              to="/services"
            />
          </div>
        </div>
      </section>

      {/* Specialty Grid */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-none">
                Browse by Specialty
              </h2>
              <p className="text-lg text-text-muted max-w-xl">
                Choose from our wide range of medical departments with specialized care for every need.
              </p>
            </div>
            <Link to="/doctors" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              View All Specialties
              <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
            {specialties.map((s, idx) => (
              <SpecialtyCard key={idx} iconName={s.icon} name={s.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors Section - Partial Reveal */}
      <section className="py-24 px-6 bg-surface relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-none">
                Featured Doctors
              </h2>
              <p className="text-lg text-text-muted max-w-xl">
                Consult with our top-rated especialistas from the comfort of your home.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {doctors.slice(0, 3).map((doc) => (
              <div key={doc.id} className={cn("relative", !isAuthenticated && "blur-[8px] opacity-40 pointer-events-none transition-all duration-700")}>
                <DoctorCardSummary doctor={doc} />
              </div>
            ))}
            
            {!isAuthenticated && (
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white/80 backdrop-blur-xl p-10 rounded-[40px] shadow-2xl border border-white text-center max-w-sm"
                >
                  <Users className="mx-auto text-primary mb-6" size={48} />
                  <h3 className="text-2xl font-bold text-primary mb-3">Login to View Doctors</h3>
                  <p className="text-text-muted mb-8 leading-relaxed">
                    Get access to 200+ top-rated especialistas across Tamil Nadu.
                  </p>
                  <Link 
                    to="/login"
                    className="block w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-light transition-all shadow-xl shadow-primary/20"
                  >
                    Login Now
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/doctors" className="px-12 py-4 bg-white text-primary border-2 border-primary/10 rounded-2xl font-extrabold hover:border-accent hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                View All Doctors
                <ChevronRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* Health Package Banner */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="rounded-[40px] bg-accent relative overflow-hidden p-8 md:p-16 text-white group"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
                >
                  Special Offer
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                  Full Body Checkup <br />
                  Starting from <span className="text-primary tracking-tighter">₹999</span>
                </h2>
                <ul className="space-y-4 mb-10">
                  <ListItem text="60+ Essential Health Parameters" />
                  <ListItem text="Home Sample Collection across Chennai" />
                  <ListItem text="NMC Verified Lab Reports in 24 Hours" />
                </ul>
                <button className="px-10 py-5 bg-white text-accent font-extrabold rounded-2xl shadow-2xl shadow-accent/20 hover:bg-primary hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                  Book Package Now
                </button>
              </div>
              <div className="relative hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Doctor" 
                  className="rounded-[40px] w-full aspect-square object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 rounded-[40px] border-[20px] border-white/10" />
              </div>
            </div>
            {/* Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3" />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">What Our Patients Say</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Real stories from people who trusted MediCare for their healthcare journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* App Download Banner */}
      <section className="py-24 px-6 bg-primary relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
               <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                 Manage Your Health <br />
                 On The Go with <span className="text-accent underline decoration-white/20 underline-offset-8">MediCare App.</span>
               </h2>
               <p className="text-white/60 text-lg leading-relaxed max-w-md">
                 Download our mobile app to book appointments, order medicines, and view reports instantly.
               </p>
               <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-accent transition-colors">
                    <Download size={20} />
                    App Store
                  </button>
                  <button className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors">
                    <Download size={20} />
                    Google Play
                  </button>
               </div>
            </div>
            <div className="relative hidden lg:flex justify-center">
               <motion.div
                 initial={{ y: 100 }}
                 whileInView={{ y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="relative w-72 h-[500px] bg-gray-900 rounded-[3rem] border-[10px] border-white/10 overflow-hidden shadow-2xl"
               >
                 <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 flex justify-center">
                    <div className="w-20 h-4 bg-gray-800 rounded-b-xl" />
                 </div>
                 <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400&h=800" className="w-full h-full object-cover" alt="App screen" />
               </motion.div>
               {/* Decorative App elements */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                 className="absolute -left-10 top-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
               >
                 <div className="w-10 h-10 bg-success/10 text-success rounded-full flex items-center justify-center">
                    <Activity size={20} />
                 </div>
                 <span className="text-primary font-bold text-sm">Vital Checked</span>
               </motion.div>
            </div>
          </div>
        </div>
        {/* Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/30 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </section>
    </div>
  );
};

// Helper Components
const StatItem = ({ to, suffix, label }) => (
  <div className="text-center space-y-1">
    <div className="text-3xl md:text-5xl font-black text-white">
      <CountUp to={to} suffix={suffix} />
    </div>
    <div className="text-xs md:text-sm font-bold text-white/40 uppercase tracking-widest">{label}</div>
  </div>
);

const FloatingIcon = ({ icon, delay }) => (
  <motion.div
    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
    transition={{ repeat: Infinity, duration: 4, delay, ease: "easeInOut" }}
    className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center text-accent/60 shadow-lg"
  >
    {React.cloneElement(icon, { size: 32 })}
  </motion.div>
);

const QuickActionCard = ({ icon, title, subtitle, footer, color, to }) => (
  <Link to={to} className="group relative bg-white p-8 rounded-[32px] shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
    <div className={cn("absolute left-0 top-0 bottom-0 w-0 group-hover:w-2 transition-all duration-300", 
      color === 'accent' ? 'bg-accent' : 
      color === 'primary' ? 'bg-primary' : 
      color === 'warning' ? 'bg-warning' : 'bg-success'
    )} />
    <div className="relative z-10 space-y-6">
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-50 group-hover:scale-110 transition-transform duration-300")}>
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <div>
        <h3 className="text-xl font-extrabold text-primary mb-1">{title}</h3>
        <p className="text-sm text-text-muted">{subtitle}</p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-primary group-hover:text-accent font-bold transition-colors">
        <span className="text-sm">{footer}</span>
        <ArrowRight size={18} className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
    </div>
  </Link>
);

const SpecialtyCard = ({ iconName, name }) => {
  const Icon = {
    Heart, Sparkles, Brain, Baby, Bone, Users, Stethoscope, Smile
  }[iconName] || Activity;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-surface p-6 rounded-3xl border border-transparent hover:border-accent/10 hover:bg-accent/5 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 text-center group flex flex-col items-center"
    >
      <div className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300 mb-4">
        <Icon size={40} strokeWidth={2.5} />
      </div>
      <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{name}</h3>
    </motion.div>
  );
};

const DoctorCardSummary = ({ doctor }) => (
  <div className="bg-white p-6 rounded-[32px] shadow-xl border border-gray-50 group transition-all duration-500 hover:shadow-2xl">
    <div className="flex gap-4 mb-6">
      <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-2xl object-cover" />
      <div>
        <h3 className="font-bold text-primary text-xl">{doctor.name}</h3>
        <p className="text-accent font-semibold text-sm">{doctor.specialty}</p>
        <p className="text-text-muted text-xs mt-1 font-medium">{doctor.experience} experience</p>
      </div>
    </div>
    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
      <div className="flex items-center gap-1 text-warning font-bold">
        <Star size={16} fill="currentColor" />
        <span>{doctor.rating}</span>
      </div>
      <span className="text-primary font-bold">₹{doctor.fee}</span>
    </div>
    <Link to="/appointments" className="w-full mt-6 py-3 bg-surface hover:bg-primary hover:text-white rounded-xl text-primary font-bold text-center transition-all duration-300 inline-block">
      Consult Now
    </Link>
  </div>
);

const ListItem = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
      <CheckCircle2 size={12} className="text-white" />
    </div>
    <span className="text-sm font-medium text-white/80">{text}</span>
  </div>
);

const CheckCircle2 = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 6L9 17L4 12" />
  </svg>
);

const TestimonialCard = ({ t }) => (
  <div className="bg-surface p-8 rounded-[40px] shadow-xl border border-gray-100 flex flex-col justify-between">
    <div>
      <div className="flex gap-1 text-warning mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill={i < t.rating ? "currentColor" : "none"} />
        ))}
      </div>
      <p className="text-lg text-primary font-medium italic leading-relaxed mb-8">"{t.text}"</p>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
        {t.name[0]}
      </div>
      <div>
        <p className="font-bold text-primary">{t.name}</p>
        <p className="text-xs text-text-muted">{t.location}</p>
      </div>
    </div>
  </div>
);

export default Home;
