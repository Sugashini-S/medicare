import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
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
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            {/* Clean Spondon logo — red heart + ECG line + white cross */}
            <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
              {/* Red heart shape */}
              <path d="M24 40C24 40 3 27 3 13.5C3 7.7 7.7 3 13.5 3C17.2 3 20.4 4.9 22.3 7.8C22.9 8.7 23.5 9.8 24 11C24.5 9.8 25.1 8.7 25.7 7.8C27.6 4.9 30.8 3 34.5 3C40.3 3 45 7.7 45 13.5C45 27 24 40 24 40Z" fill="#DC2626"/>
              {/* White cross — vertical bar */}
              <rect x="21.5" y="6" width="5" height="14" rx="2.5" fill="white"/>
              {/* White cross — horizontal bar */}
              <rect x="15" y="11.5" width="18" height="5" rx="2.5" fill="white"/>
              {/* ECG / heartbeat line across the heart */}
              <path d="M5 22 L11 22 L14 16 L17.5 29 L21 19.5 L23.5 24 L26.5 22 L43 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>

            <div className="flex flex-col leading-none text-left">
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: '1.5rem',
                color: '#0d9488',
                letterSpacing: '0.05em',
                lineHeight: 1.1
              }}>SPONDON</span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: '0.75rem',
                color: '#0f766e',
                letterSpacing: '0.02em',
                lineHeight: 1.4
              }}>Doorstep Healthcare</span>
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
