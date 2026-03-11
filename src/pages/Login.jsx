import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import OTPModal from '../components/OTPModal';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      setIsOTPModalOpen(true);
    }
  };

  const handleVerifySuccess = () => {
    // In a real app, we'd verify the phone against a DB
    login({ phone, id: Date.now() });
    setIsOTPModalOpen(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-12 relative"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary/5 rounded-2xl mb-6">
            <HeartPulse className="text-primary w-8 h-8" />
          </div>
          <h2 className="text-3xl font-extrabold text-primary mb-2">Welcome Back</h2>
          <p className="text-text-muted">Login to access your health portal</p>
        </div>

        <form onSubmit={handleSendOTP} className="space-y-6">
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
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
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

        <div className="mt-8 flex items-center gap-4 py-4 px-6 bg-surface rounded-2xl border border-gray-100">
          <ShieldCheck className="text-accent" size={24} />
          <p className="text-xs text-text-muted leading-tight">
            We'll send a one-time password to your mobile number to keep your account secure.
          </p>
        </div>

        <p className="mt-10 text-center text-text-muted">
          New here? <Link to="/register" className="text-accent font-bold hover:underline">Create an account</Link>
        </p>

        {/* Decorations */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
      </motion.div>

      <OTPModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        onVerify={handleVerifySuccess}
        phoneNumber={phone}
      />
    </div>
  );
};

export default Login;
