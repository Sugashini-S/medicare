import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
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
    login({ phone, id: Date.now(), name: 'User' });
    setIsOTPModalOpen(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-20 px-4 md:px-6 flex items-center justify-center">
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-12 relative border border-border"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex flex-col items-center gap-2 mb-8 group">
            <svg width="48" height="48" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
              <path d="M21 38C21 38 4 27 4 14.5C4 8.7 8.7 4 14.5 4C17.5 4 20.2 5.3 21 6.5C21.8 5.3 24.5 4 27.5 4C33.3 4 38 8.7 38 14.5C38 27 21 38 21 38Z" fill="#e53e3e"/>
              <path d="M6 21 L11 21 L13.5 15 L17 27 L20.5 18 L23 23 L26 21 L36 21" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <rect x="19" y="5" width="4" height="13" rx="2" fill="white" opacity="0.9"/>
              <rect x="13.5" y="10.5" width="15" height="4" rx="2" fill="white" opacity="0.9"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-2xl text-primary tracking-tighter">SPONDON</span>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Doorstep Healthcare</span>
            </div>
          </Link>
          
          <h2 className="text-3xl font-bold text-text-dark mb-2 font-display">Welcome Back</h2>
          <p className="text-text-muted font-medium">Enter your registered mobile number</p>
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
                className="w-full pl-16 pr-4 py-4 bg-background-light border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl transition-all duration-300 font-bold text-lg outline-none"
                autoFocus
              />
            </div>
          </div>

          <m.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-primary hover:bg-dark-teal text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3"
          >
            <span>Get OTP</span>
            <ArrowRight size={22} />
          </m.button>
        </form>

        <div className="mt-8 p-6 bg-primary/5 rounded-3xl border border-primary/10 flex items-start gap-4">
          <div className="bg-white p-2 rounded-xl shadow-sm border border-border">
            <ShieldCheck className="text-secondary" size={20} />
          </div>
          <p className="text-xs text-text-muted leading-relaxed font-medium">
            Safety first. We use secure OTP-based login to protect your healthcare records and family privacy.
          </p>
        </div>

        <p className="mt-10 text-center text-text-muted font-medium">
          New to Spondon? <Link to="/register" className="text-primary font-bold hover:underline">Register Now</Link>
        </p>

        {/* Decorations */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      </m.div>

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
