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
    login({ phone, id: Date.now(), name: 'User' }); // Mocking name for now
    setIsOTPModalOpen(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-background-light rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden p-6 md:p-12 relative border border-border"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <Phone className="text-primary w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-text-dark mb-2 font-display">Welcome Back</h2>
          <p className="text-text-muted">Enter your registered mobile number</p>
        </div>

        <form onSubmit={handleSendOTP} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Mobile Number</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold border-r border-border pr-3">+91</span>
              <input
                type="tel"
                required
                maxLength={10}
                placeholder="XXXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                className="w-full pl-16 pr-4 py-4 bg-white border-2 border-transparent focus:border-primary rounded-2xl transition-all duration-300 font-medium outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-dark-teal text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Get OTP</span>
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4 py-4 px-6 bg-white rounded-2xl border border-border">
          <ShieldCheck className="text-secondary" size={24} />
          <p className="text-xs text-text-muted leading-tight">
            Safety first. We use OTP-based login to protect your health records.
          </p>
        </div>

        <p className="mt-10 text-center text-text-muted">
          New to Spondon? <Link to="/register" className="text-primary font-bold hover:underline">Register Now</Link>
        </p>

        {/* Global style for font-display */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
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
