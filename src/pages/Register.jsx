import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Phone, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import OTPModal from '../components/OTPModal';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
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
    register({ ...formData, id: Date.now() });
    setIsOTPModalOpen(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full grid md:grid-cols-2 bg-white rounded-[40px] shadow-2xl overflow-hidden"
      >
        {/* Left Side: Branding/Visual */}
        <div className="hidden md:flex bg-primary p-12 flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
                <HeartPulse className="text-white w-8 h-8" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tighter">MediCare</span>
            </div>
            
            <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
              Start Your <br />
              <span className="text-accent underline decoration-4 underline-offset-8">Health Journey</span> <br />
              With Us.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              Join 50K+ patients who trust MediCare for their family's healthcare needs.
            </p>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Safe & Secure</p>
                <p className="text-white/40 text-xs">Your data is always protected</p>
              </div>
            </div>
          </div>

          {/* Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-primary mb-2">Create Account</h2>
            <p className="text-text-muted">Enter your details to get started</p>
          </div>

          <form onSubmit={handleSendOTP} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-surface border-2 border-transparent focus:border-accent focus:bg-white rounded-2xl transition-all duration-300 font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Mobile Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                <span className="absolute left-12 top-1/2 -translate-y-1/2 text-primary font-bold border-r border-gray-200 pr-3">+91</span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="XXXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                  className="w-full pl-24 pr-4 py-4 bg-surface border-2 border-transparent focus:border-accent focus:bg-white rounded-2xl transition-all duration-300 font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-light text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Send OTP</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <p className="mt-8 text-center text-text-muted">
            Already have an account? <Link to="/login" className="text-accent font-bold hover:underline">Login</Link>
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

export default Register;
