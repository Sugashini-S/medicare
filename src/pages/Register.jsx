import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, ArrowRight, ShieldCheck, HeartPulse, CheckCircle, CreditCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import OTPModal from '../components/OTPModal';
import logo from '../assets/logo.svg';

const Register = () => {
  const [step, setStep] = useState(1); // 1: Info, 4: Payment
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    address: '', 
    email: '' 
  });
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone.length === 10) {
      setIsOTPModalOpen(true);
    }
  };

  const handleVerifySuccess = () => {
    setIsOTPModalOpen(false);
    setStep(4); // Advance to Payment step
  };

  const handleFinalSubmit = () => {
    register({ ...formData, id: Date.now() });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-20 px-4 md:px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full grid lg:grid-cols-2 bg-background-light rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden border border-border"
      >
        {/* Left Side: Information (Hidden on small mobile if preferred, but let's make it stack) */}
        <div className="hidden lg:flex bg-teal-gradient p-12 flex-col justify-between relative overflow-hidden text-white">
          <div className="relative z-10">
            <Link to="/" className="inline-block mb-12">
              <img src={logo} alt="Spondon Doorstep Healthcare" className="h-10 w-auto brightness-0 invert" />
            </Link>
            
            <h1 className="text-5xl font-bold leading-tight mb-8 font-display">
              Join Our <br />
              Healthcare <br />
              <span className="text-secondary italic">Family</span>
            </h1>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shrink-0 shadow-lg">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Annual Registration</h3>
                  <p className="text-white/70 text-sm">₹100 for 1 year. Covers up to 6 family members.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-white/60 text-sm italic">
            "Quality Care at Your Doorstep" — A Unit of SIMS Multispecial Hospital
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Right Side: Step Content */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-10">
            <img src={logo} alt="Spondon Logo" className="h-8 w-auto" />
          </div>

          {/* Step Indicator */}
          <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2 shrink-0">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                  step === s ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110" : 
                  step > s ? "bg-primary/10 text-primary" : "bg-background-light text-text-muted border border-border"
                )}>
                  {step > s ? <CheckCircle size={14} /> : s}
                </div>
                {s < 4 && <div className={cn("w-6 md:w-10 h-0.5 rounded-full", step > s ? "bg-primary/20" : "bg-border")} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-text-dark mb-2 font-display">Create Account</h2>
                  <p className="text-text-muted">Register today to access doorstep care in Nagaon</p>
                </div>

                <form onSubmit={handleSendOTP} className="space-y-5 text-left">
                  <div className="grid md:grid-cols-2 gap-5 text-left">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 bg-background-light border-2 border-transparent focus:border-primary rounded-2xl transition-all font-medium outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Mobile Number</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold border-r border-border pr-3">+91</span>
                        <input
                          required
                          type="tel"
                          maxLength={10}
                          placeholder="XXXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                          className="w-full pl-16 pr-4 py-4 bg-background-light border-2 border-transparent focus:border-primary rounded-2xl transition-all font-medium outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 bg-background-light border-2 border-transparent focus:border-primary rounded-2xl transition-all font-medium outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Home Address in Nagaon</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Address details..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-6 py-4 bg-background-light border-2 border-transparent focus:border-primary rounded-2xl transition-all font-medium outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-dark-teal text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-6"
                  >
                    <span>Register & Verify OTP</span>
                    <ArrowRight size={20} />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard size={40} />
                </div>
                <h2 className="text-3xl font-bold text-text-dark mb-4 font-display">Membership Payment</h2>
                <p className="text-text-muted mb-8 max-w-sm mx-auto">
                  To activate your doorstep healthcare services, a one-time annual fee of <span className="text-primary font-bold">₹100</span> is required.
                </p>

                <div className="bg-background-light p-6 rounded-[32px] border border-border mb-8 text-left">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-text-dark">Annual Membership</span>
                    <span className="text-sm font-bold text-primary">₹100.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-lg font-bold text-text-dark">Total Due</span>
                    <span className="text-lg font-bold text-primary">₹100.00</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleFinalSubmit}
                    className="w-full bg-primary hover:bg-dark-teal text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Pay Securely</span>
                    <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={handleFinalSubmit}
                    className="w-full py-4 text-primary font-bold hover:bg-primary/5 rounded-2xl transition-all"
                  >
                    Pay at Hospital Later
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-10 text-center text-sm text-text-muted">
            Already registered? <Link to="/login" className="text-primary font-bold hover:underline">Login here</Link>
          </p>
        </div>
      </motion.div>

      <OTPModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        onVerify={handleVerifySuccess}
        phoneNumber={formData.phone}
      />
    </div>
  );
};

// Local cn utility if not available or import error
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default Register;

