import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '../utils/cn';

const OTPModal = ({ isOpen, onClose, onVerify, phoneNumber }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (isOpen && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [isOpen]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    if (otp.some(digit => !digit)) return;

    setIsVerifying(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsVerifying(false);
    setIsVerified(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    onVerify();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 overflow-hidden"
            >
              {isVerified ? (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ type: 'spring', damping: 12 }}
                    className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-primary mb-2">Verified!</h2>
                  <p className="text-text-muted">Account creation in progress...</p>
                </motion.div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-primary">Verify OTP</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <X size={20} className="text-text-muted" />
                    </button>
                  </div>

                  <p className="text-text-muted mb-8 leading-relaxed">
                    We've sent a 6-digit code to <span className="text-primary font-bold">+91 {phoneNumber}</span>.
                    Enter it below to continue.
                  </p>

                  <div className="flex justify-between gap-2 mb-10">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={el => inputRefs.current[index] = el}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={e => handleChange(index, e.target.value)}
                        onKeyDown={e => handleKeyDown(index, e)}
                        className="w-12 h-14 border-2 border-gray-100 bg-surface rounded-xl text-center text-2xl font-bold text-primary focus:border-accent focus:ring-0 transition-all duration-200"
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleVerify}
                    disabled={otp.some(digit => !digit) || isVerifying}
                    className={cn(
                      "w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2",
                      otp.some(digit => !digit) || isVerifying
                        ? "bg-gray-200 cursor-not-allowed"
                        : "bg-primary hover:bg-primary-light shadow-lg shadow-primary/20"
                    )}
                  >
                    {isVerifying ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Verifying...
                      </>
                    ) : (
                      "Verify & Continue"
                    )}
                  </button>

                  <p className="text-center mt-6 text-sm text-text-muted">
                    Didn't receive code? <button className="text-accent font-bold hover:underline">Resend OTP</button>
                  </p>
                </>
              )}

              {/* Background Decorations */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OTPModal;
