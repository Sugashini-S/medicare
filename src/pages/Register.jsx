import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { CheckCircle, ChevronRight, ChevronLeft, Phone, User } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    houseNo: '',
    street: '',
    city: 'Nagaon',
    state: 'Assam',
    pincode: ''
  });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpError] = useState(false);

  // OTP Timer logic
  useEffect(() => {
    let interval;
    if (step === 3 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Only allow numbers
      const val = value.replace(/\D/g, '');
      if (val.length <= 10) {
        setFormData({ ...formData, [name]: val });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    // Check if all filled
    if (newOtp.every(digit => digit !== '')) {
      const otpCode = newOtp.join('');
      verifyOtp(otpCode);
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const verifyOtp = (code) => {
    if (code.length !== 6) {
      toast.error('Please enter all 6 digits');
      return;
    }

    setIsVerifying(true);
    // Accepting any 6-digit OTP for demo
    setTimeout(() => {
      setIsVerifying(false);
      setStep(4);
      register({
        name: formData.fullName,
        phone: formData.phone,
        address: `${formData.houseNo}, ${formData.street}, ${formData.city}, ${formData.state} - ${formData.pincode}`
      });
      toast.success('OTP verified! ✓');
    }, 1000);
  };

  const resendOtp = () => {
    setTimer(30);
    toast.success('OTP resent successfully!');
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.phone) {
        toast.error('Please fill all required fields');
        return;
      }
      if (formData.phone.length !== 10) {
        toast.error('Please enter a valid 10-digit phone number');
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-dm-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-playfair font-bold text-teal-800 mb-2">
          Join Spondon Healthcare
        </h2>
        <p className="text-center text-gray-600 mb-8">Your doorstep health companion</p>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-teal-50 relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
            <motion.div 
              className="h-full bg-teal-600"
              initial={{ width: '25%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="mb-8 flex justify-between items-center text-xs font-bold text-teal-600 uppercase tracking-wider">
            <span>Step {step} of 4</span>
            <span>{step === 4 ? 'Complete' : step === 3 ? 'Verification' : step === 2 ? 'Address' : 'Personal'}</span>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="text-gray-400" size={18} />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="pl-10 block w-full border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 sm:text-sm py-3 border"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 text-sm font-medium">+91</span>
                      </div>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="pl-12 block w-full border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 sm:text-sm py-3 border"
                        placeholder="00000 00000"
                      />
                    </div>
                  </div>
                  <button
                    onClick={nextStep}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all"
                  >
                    Continue <ChevronRight className="ml-2" size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">House/Flat No</label>
                      <input
                        type="text"
                        name="houseNo"
                        value={formData.houseNo}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 sm:text-sm py-3 border px-4"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 sm:text-sm py-3 border px-4"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Street / Area</label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 sm:text-sm py-3 border px-4"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 sm:text-sm py-3 border px-4 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 sm:text-sm py-3 border px-4 bg-gray-50"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <button
                      onClick={prevStep}
                      className="flex-1 flex justify-center items-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all"
                    >
                      <ChevronLeft className="mr-2" size={18} /> Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="flex-[2] flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none transition-all"
                    >
                      Continue <ChevronRight className="ml-2" size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 mb-4">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">OTP Verification</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    OTP sent to <span className="font-bold text-gray-700">+91 {formData.phone}</span>
                  </p>
                  
                  <motion.div 
                    className="mt-8 flex justify-between gap-2"
                    animate={otpError ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className={`w-12 h-14 text-center text-xl font-bold border-2 rounded-xl focus:ring-teal-500 focus:border-teal-500 outline-none transition-all ${otpError ? 'border-red-500' : 'border-gray-200'}`}
                        autoFocus={index === 0}
                      />
                    ))}
                  </motion.div>

                  {isVerifying ? (
                    <div className="mt-6 flex justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
                    </div>
                  ) : (
                    <div className="mt-8 space-y-4">
                      <p className="text-sm text-gray-500">
                        {timer > 0 ? (
                          `Resend OTP in ${timer}s`
                        ) : (
                          <button 
                            onClick={resendOtp}
                            className="text-teal-600 font-bold hover:underline"
                          >
                            Resend OTP
                          </button>
                        )}
                      </p>
                      <button
                        onClick={prevStep}
                        className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        <ChevronLeft className="mr-1" size={16} /> Back to Address
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                  className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6"
                >
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful! 🎉</h3>
                <p className="text-gray-600 mb-1">
                  Welcome to Spondon Doorstep Healthcare, <span className="font-bold">{formData.fullName}</span>!
                </p>
                <p className="text-teal-700 font-medium mb-4">You can now book our healthcare services</p>
                
                <div className="bg-teal-50 p-4 rounded-xl mb-8 text-sm text-teal-800 text-left border border-teal-100">
                  <p>Our team will contact you at <strong>+91 {formData.phone}</strong> to complete verification.</p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="w-full py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all transform hover:scale-[1.02]"
                  >
                    Go to Dashboard
                  </button>
                  <p className="text-gray-400 text-[10px] mt-4 uppercase tracking-[0.2em] font-bold">Recommended</p>
                  <button
                    onClick={() => navigate('/family-plan')}
                    className="w-full py-3 px-4 border border-teal-600 rounded-xl text-sm font-bold text-teal-600 bg-white hover:bg-teal-50 transition-all"
                  >
                    Interested in our ₹100 Family Plan? Click here
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {step < 4 && (
            <p className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-100">
              Already registered?{' '}
              <Link to="/login" className="text-teal-600 font-bold hover:underline">
                Login here
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
