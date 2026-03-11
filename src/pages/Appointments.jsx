import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Calendar as CalendarIcon, Clock, CheckCircle2, 
  ArrowRight, ArrowLeft, Search, Star, MapPin,
  Sparkles, LayoutDashboard
} from 'lucide-react';
import { doctors } from '../data/mockData';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';

const Appointments = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    doctor: null,
    date: '',
    time: '',
    patientName: '',
    patientPhone: '',
    reason: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const steps = [
    { title: 'Select Doctor', icon: <User /> },
    { title: 'Schedule', icon: <CalendarIcon /> },
    { title: 'Confirm', icon: <CheckCircle2 /> }
  ];

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex justify-between items-center relative max-w-2xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />
            <motion.div 
              className="absolute top-1/2 left-0 h-1 bg-accent -translate-y-1/2 z-0"
              initial={{ width: '0%' }}
              animate={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
            {steps.map((s, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
                <motion.div
                  animate={{ 
                    backgroundColor: step > idx + 1 ? '#00b4d8' : step === idx + 1 ? '#0a2463' : '#e5e7eb',
                    scale: step === idx + 1 ? 1.2 : 1
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-colors"
                >
                  {step > idx + 1 ? <CheckCircle2 size={20} /> : idx + 1}
                </motion.div>
                <span className={cn(
                  "text-xs font-bold uppercase tracking-wider",
                  step === idx + 1 ? "text-primary" : "text-text-muted"
                )}>{s.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[40px] shadow-2xl shadow-primary/5 min-h-[500px] border border-gray-50 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                  <h2 className="text-3xl font-extrabold text-primary tracking-tight">Step 1: Choose Your Doctor</h2>
                  <div className="relative group w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input 
                      type="text" 
                      placeholder="Doctor name or specialty..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-surface rounded-xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDoctors.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setBookingData({ ...bookingData, doctor: doc });
                        handleNext();
                      }}
                      className={cn(
                        "p-6 rounded-[32px] border-2 text-left transition-all duration-300 group",
                        bookingData.doctor?.id === doc.id 
                          ? "border-accent bg-accent/5 ring-4 ring-accent/10" 
                          : "border-gray-50 hover:border-gray-200 bg-white"
                      )}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <img src={doc.image} alt={doc.name} className="w-14 h-14 rounded-2xl object-cover" />
                        <div>
                          <h4 className="font-bold text-primary group-hover:text-accent transition-colors">{doc.name}</h4>
                          <p className="text-xs font-bold text-accent uppercase tracking-widest">{doc.specialty}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-text-muted">
                        <div className="flex items-center gap-1 font-bold">
                          <Star size={12} className="text-warning" fill="currentColor" />
                          {doc.rating}
                        </div>
                        <span className="font-bold text-primary">₹{doc.fee}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <div className="flex items-center gap-6 mb-12">
                   <button onClick={handleBack} className="p-3 bg-surface rounded-full hover:bg-gray-100 transition-colors">
                      <ArrowLeft size={24} className="text-primary" />
                   </button>
                   <div>
                      <h2 className="text-3xl font-extrabold text-primary tracking-tight">Step 2: Pick Schedule</h2>
                      <p className="text-text-muted">Available slots for {bookingData.doctor?.name}</p>
                   </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6 text-left">
                     <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                        <CalendarIcon size={14} />
                        Select Date
                     </label>
                     <input 
                       type="date" 
                       value={bookingData.date}
                       onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                       className="w-full p-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-bold text-primary"
                     />
                     
                     <div className="p-6 bg-surface rounded-[32px] border border-gray-100 mt-8">
                       <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                         <MapPin size={18} className="text-accent" />
                         Clinic Location
                       </h4>
                       <p className="text-sm text-text-muted leading-relaxed">
                         MediCare Premium Clinic, 5th Floor, Block A, <br />
                         {bookingData.doctor?.location}, Tamil Nadu
                       </p>
                     </div>
                  </div>

                  <div className="space-y-6">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                        <Clock size={14} />
                        Choose Time Slot
                     </label>
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {timeSlots.map((slot) => (
                           <button
                             key={slot}
                             onClick={() => setBookingData({ ...bookingData, time: slot })}
                             className={cn(
                               "py-3 rounded-xl font-bold text-sm transition-all duration-200 border-2",
                               bookingData.time === slot
                                 ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                                 : "bg-white border-gray-100 text-text-muted hover:border-accent/40"
                             )}
                           >
                              {slot}
                           </button>
                        ))}
                     </div>
                  </div>
                </div>

                <div className="mt-12 flex justify-end">
                   <button
                     disabled={!bookingData.date || !bookingData.time}
                     onClick={handleNext}
                     className="px-10 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-light transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-primary/20"
                   >
                     Continue to Confirm
                     <ArrowRight size={20} />
                   </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <div className="flex items-center gap-6 mb-12">
                   <button onClick={handleBack} className="p-3 bg-surface rounded-full hover:bg-gray-100 transition-colors">
                      <ArrowLeft size={24} className="text-primary" />
                   </button>
                   <div>
                      <h2 className="text-3xl font-extrabold text-primary tracking-tight">Step 3: Patient Details</h2>
                      <p className="text-text-muted">Review and confirm your medical appointment</p>
                   </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                   <div className="lg:col-span-7 space-y-8 text-left">
                      <div className="grid sm:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Patient Name</label>
                            <input 
                              type="text" 
                              placeholder="Full Name"
                              value={bookingData.patientName}
                              onChange={(e) => setBookingData({ ...bookingData, patientName: e.target.value })}
                              className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-medium" 
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Mobile Number</label>
                            <input 
                              type="tel" 
                              placeholder="10-digit phone"
                              value={bookingData.patientPhone}
                              onChange={(e) => setBookingData({ ...bookingData, patientPhone: e.target.value })}
                              className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-medium" 
                            />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Reason for consultation</label>
                         <textarea 
                           rows={3} 
                           placeholder="Describe your health issue briefly..."
                           value={bookingData.reason}
                           onChange={(e) => setBookingData({ ...bookingData, reason: e.target.value })}
                           className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-medium resize-none"
                         ></textarea>
                      </div>
                   </div>

                   <div className="lg:col-span-5">
                      <div className="bg-surface rounded-[32px] p-8 border border-gray-100 flex flex-col items-center">
                         <h4 className="font-bold text-primary mb-8 underline decoration-accent/20 underline-offset-8">Appointment Summary</h4>
                         <div className="w-full space-y-6">
                            <SummaryItem label="Doctor" value={bookingData.doctor?.name} />
                            <SummaryItem label="Specialty" value={bookingData.doctor?.specialty} />
                            <SummaryItem label="Date" value={bookingData.date} />
                            <SummaryItem label="Time" value={bookingData.time} />
                            <div className="h-px bg-gray-200" />
                            <div className="flex justify-between items-center text-primary">
                               <span className="font-bold">Consultation Fee</span>
                               <span className="text-2xl font-black">₹{bookingData.doctor?.fee}</span>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="mt-12 flex justify-end">
                   <button
                     disabled={!bookingData.patientName || !bookingData.patientPhone}
                     onClick={handleNext}
                     className="px-12 py-5 bg-accent text-primary rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-accent/20 group"
                   >
                     Confirm & Book
                     <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
                   </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 md:p-20 flex flex-col items-center justify-center text-center"
              >
                <motion.div
                   initial={{ scale: 0 }}
                   animate={{ scale: [0, 1.2, 1] }}
                   transition={{ type: 'spring', damping: 10, delay: 0.2 }}
                   className="w-32 h-32 bg-success/10 text-success rounded-full flex items-center justify-center mb-10"
                >
                   <CheckCircle2 size={80} strokeWidth={2.5} />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Confirmed!</h2>
                <p className="text-text-muted text-lg max-w-sm mb-12">
                   Your appointment has been successfully booked. 
                   Appointment ID: <span className="text-primary font-bold">#APP{Math.floor(Math.random()*100000)}</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                   <button
                      onClick={() => navigate('/dashboard')}
                      className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-light transition-all shadow-xl shadow-primary/20"
                   >
                      <LayoutDashboard size={20} />
                      Go to Dashboard
                   </button>
                   <button
                      onClick={() => navigate('/')}
                      className="px-8 py-4 bg-white text-primary border-2 border-primary/10 rounded-2xl font-bold hover:bg-surface transition-all"
                   >
                      Return Home
                   </button>
                </div>

                {/* Decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-success/10 rounded-full blur-[100px]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const SummaryItem = ({ label, value }) => (
  <div className="flex justify-between items-start">
    <span className="text-xs font-bold text-text-muted uppercase tracking-widest">{label}</span>
    <span className="text-sm font-bold text-primary max-w-[150px] text-right">{value || "Not selected"}</span>
  </div>
);

export default Appointments;
