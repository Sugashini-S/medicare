import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, CreditCard, 
  Info, Check, User, Copy, ExternalLink, QrCode, Banknote
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const FamilyPlan = () => {
  const { user, activateFamilyPlan } = useAuth();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('upi');

  const handleCompleteRegistration = () => {
    activateFamilyPlan();
    toast.success('Registration submitted! Our team will contact you to verify payment.');
    setTimeout(() => navigate('/dashboard'), 1500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-dm-sans">
      <div className="max-w-4xl mx-auto">
        {/* User Info Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-teal-100 mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
              <User size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-teal-600 uppercase tracking-wider">Registered Account</p>
              <h4 className="font-bold text-gray-900">{user?.name} ({user?.phone})</h4>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-gray-400 font-medium">Complete your Family Plan registration below</p>
          </div>
        </motion.div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-playfair font-bold text-teal-900 mb-4"
          >
            Spondon Family Health Plan
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-bold shadow-lg mb-4"
          >
            ₹100/year covers up to 6 family members
          </motion.div>
          <p className="text-teal-700 font-medium">Renewal at just ₹75/year</p>
        </div>

        {/* Payment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: UPI */}
          <div 
            onClick={() => setSelectedOption('upi')}
            className={`cursor-pointer bg-white rounded-3xl p-6 shadow-sm border-2 transition-all hover:translate-y-[-4px] ${
              selectedOption === 'upi' ? 'border-teal-600 shadow-teal-900/10' : 'border-transparent hover:border-teal-200'
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-teal-50 rounded-2xl text-teal-600">
                <Smartphone size={24} />
              </div>
              <span className="bg-teal-100 text-teal-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                ✨ Most Popular
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Pay via UPI</h3>
            <p className="text-sm text-gray-500 mb-6">Unified Payments Interface (PhonePe / GPay / Paytm)</p>
            
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  readOnly 
                  value="spondondoorstep@upi" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-4 pr-12 text-sm font-bold text-teal-600"
                />
                <button 
                  onClick={(e) => { e.stopPropagation(); copyToClipboard('spondondoorstep@upi'); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-teal-600 hover:bg-teal-50 rounded-lg"
                >
                  <Copy size={16} />
                </button>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); handleCompleteRegistration(); }}
                className="w-full bg-teal-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-teal-900/20 hover:bg-teal-700 transition-all"
              >
                Pay ₹100
              </button>
            </div>
          </div>

          {/* Card 2: QR Code */}
          <div 
            onClick={() => setSelectedOption('qr')}
            className={`cursor-pointer bg-white rounded-3xl p-6 shadow-sm border-2 transition-all hover:translate-y-[-4px] ${
              selectedOption === 'qr' ? 'border-teal-600 shadow-teal-900/10' : 'border-transparent hover:border-teal-200'
            }`}
          >
            <div className="p-3 bg-teal-50 rounded-2xl text-teal-600 inline-block mb-6">
              <QrCode size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Scan QR Code</h3>
            
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square max-w-[140px] border-4 border-dashed border-teal-100 rounded-2xl flex flex-col items-center justify-center p-4 mb-4">
                <QrCode size={48} className="text-teal-200 mb-2" />
                <p className="text-[10px] font-bold text-teal-300 text-center uppercase tracking-widest leading-tight">
                  Scan to Pay ₹100
                </p>
              </div>
              <p className="text-xs text-center text-gray-500 font-medium">Scan with any UPI app</p>
              <div className="flex gap-2 mt-4">
                <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-md text-gray-500 font-bold">GPay</span>
                <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-md text-gray-500 font-bold">PhonePe</span>
                <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-md text-gray-500 font-bold">Paytm</span>
              </div>
            </div>
          </div>

          {/* Card 3: Bank Transfer */}
          <div 
            onClick={() => setSelectedOption('neft')}
            className={`cursor-pointer bg-white rounded-3xl p-6 shadow-sm border-2 transition-all hover:translate-y-[-4px] ${
              selectedOption === 'neft' ? 'border-teal-600 shadow-teal-900/10' : 'border-transparent hover:border-teal-200'
            }`}
          >
            <div className="p-3 bg-teal-50 rounded-2xl text-teal-600 inline-block mb-6">
              <CreditCard size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bank Transfer (NEFT)</h3>
            <p className="text-sm text-gray-500 mb-4">Direct transfer to our account</p>
            
            <button 
              onClick={(e) => { e.stopPropagation(); window.open('https://wa.me/919435099908', '_blank'); }}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl shadow-md transition-all mb-4"
            >
              Get details on WhatsApp <ExternalLink size={16} />
            </button>

            <div className="space-y-2 border-t border-gray-50 pt-4">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Bank Name</span>
                <span className="text-gray-900 font-bold">---</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Account No</span>
                <span className="text-gray-900 font-bold">---</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">IFSC</span>
                <span className="text-gray-900 font-bold">---</span>
              </div>
            </div>
          </div>

          {/* Card 4: Cash */}
          <div 
            onClick={() => setSelectedOption('cash')}
            className={`cursor-pointer bg-white rounded-3xl p-6 shadow-sm border-2 transition-all hover:translate-y-[-4px] ${
              selectedOption === 'cash' ? 'border-teal-600 shadow-teal-900/10' : 'border-transparent hover:border-teal-200'
            }`}
          >
            <div className="p-3 bg-teal-50 rounded-2xl text-teal-600 inline-block mb-6">
              <Banknote size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Pay via Cash</h3>
            <p className="text-sm text-gray-500 mb-6">Pay during our representative's first visit</p>
            
            <div className="bg-teal-50/50 p-4 rounded-2xl border border-teal-50 mb-4">
              <p className="text-xs font-bold text-teal-800 flex items-center gap-2 mb-1">
                📍 Head Office
              </p>
              <p className="text-xs text-teal-700">BSNL Admin Building, Nagaon</p>
            </div>

            <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-xl text-orange-700 text-[10px] font-bold uppercase tracking-wider">
              <Info size={14} className="shrink-0" />
              Always collect a receipt ⚠️
            </div>
          </div>
        </div>

        {/* Footer Submit */}
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-sm font-medium text-gray-500 mb-6">
            After payment, click the button below to complete your registration
          </p>
          <button 
            onClick={handleCompleteRegistration}
            className="w-full max-w-md mx-auto flex items-center justify-center gap-3 bg-teal-600 text-white font-bold py-5 rounded-3xl shadow-2xl shadow-teal-900/30 hover:bg-teal-700 transition-all transform hover:scale-[1.02]"
          >
            Complete Registration <Check size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyPlan;
