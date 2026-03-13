import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Calendar as CalendarIcon, Clock, CheckCircle,
  ArrowRight, ArrowLeft, Search, Star, MapPin,
  Sparkles, LayoutDashboard, Stethoscope, Video, 
  Baby, Activity, Beaker, Pill
} from 'lucide-react';
import { toast } from 'react-hot-toast';

const Appointments = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: null,
    date: '',
    time: 'Morning (8AM - 12PM)',
    patientName: '',
    patientPhone: '',
    address: '',
    symptoms: ''
  });

  const services = [
    { id: 'visit', title: 'Doctor Visit at Home', icon: <Stethoscope />, fee: '500-1000' },
    { id: 'tele', title: 'Tele-Consultation', icon: <Video />, fee: '300-500' },
    { id: 'nursing', title: 'Nursing Care', icon: <Activity />, fee: 'Varies' },
    { id: 'lab', title: 'Home Lab Collection', icon: <Beaker />, fee: 'As per test' },
    { id: 'child', title: 'Mother & Child Care', icon: <Baby />, fee: 'Varies' },
    { id: 'pharmacy', title: 'Pharmacy Delivery', icon: <Pill />, fee: 'Medicine cost' },
  ];

  const timeSlots = [
    'Morning (8AM - 12PM)',
    'Afternoon (12PM - 4PM)',
    'Evening (4PM - 8PM)',
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const steps = [
    { title: 'Service', icon: <Stethoscope /> },
    { title: 'Schedule', icon: <CalendarIcon /> },
    { title: 'Details', icon: <User /> },
    { title: 'Confirm', icon: <CheckCircle /> }
  ];

  const handleSubmit = () => {
    toast.success('Service request submitted! Our coordinator will call you shortly.');
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="container-custom max-w-5xl">
        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex justify-between items-center relative max-w-2xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0" />
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0"
              initial={{ width: '0%' }}
              animate={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((s, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
                <motion.div
                  animate={{
                    backgroundColor: step > idx + 1 ? '#0d9488' : step === idx + 1 ? '#0d9488' : '#e2e8f0',
                    scale: step === idx + 1 ? 1.1 : 1
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all"
                >
                  {step > idx + 1 ? <CheckCircle size={20} /> : idx + 1}
                </motion.div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${step >= idx + 1 ? 'text-primary' : 'text-text-muted'}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-background-light rounded-[40px] shadow-sm border border-border min-h-[500px] overflow-hidden relative">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12 text-center"
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-text-dark mb-2">Select Doorstep Service</h2>
                  <p className="text-text-muted">What care do you need today?</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setBookingData({ ...bookingData, service });
                        handleNext();
                      }}
                      className={`p-6 rounded-3xl border-2 text-left transition-all group ${
                        bookingData.service?.id === service.id
                          ? "border-primary bg-white shadow-lg"
                          : "border-transparent bg-white hover:border-primary/20"
                      }`}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        {service.icon}
                      </div>
                      <h4 className="font-bold text-text-dark mb-1">{service.title}</h4>
                      <p className="text-xs text-text-muted">Est. Fee: {service.fee}</p>
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
                  <button onClick={handleBack} className="p-3 bg-white border border-border rounded-full hover:bg-background-light transition-colors">
                    <ArrowLeft size={24} className="text-primary" />
                  </button>
                  <div>
                    <h2 className="text-3xl font-bold text-text-dark">Select Schedule</h2>
                    <p className="text-text-muted">Preferred timing for {bookingData.service?.title}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1 block">Preferred Date</label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full p-4 bg-white rounded-2xl border-2 border-transparent focus:border-primary transition-all font-bold outline-none"
                    />
                  </div>

                  <div className="space-y-6">
                    <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1 block">Preferred Window</label>
                    <div className="grid gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setBookingData({ ...bookingData, time: slot })}
                          className={`p-4 rounded-xl font-bold text-sm text-left transition-all border-2 ${
                            bookingData.time === slot
                              ? "bg-primary border-primary text-white shadow-md"
                              : "bg-white border-transparent text-text-muted hover:border-primary/20"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex justify-end">
                  <button
                    disabled={!bookingData.date}
                    onClick={handleNext}
                    className="btn-primary flex items-center gap-2 disabled:opacity-50"
                  >
                    Continue <ArrowRight size={20} />
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
                  <button onClick={handleBack} className="p-3 bg-white border border-border rounded-full hover:bg-background-light transition-colors">
                    <ArrowLeft size={24} className="text-primary" />
                  </button>
                  <h2 className="text-3xl font-bold text-text-dark font-display">Patient Information</h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-12 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Patient Full Name</label>
                        <input
                          autoFocus
                          type="text"
                          placeholder="Name of person needing care"
                          value={bookingData.patientName}
                          onChange={(e) => setBookingData({ ...bookingData, patientName: e.target.value })}
                          className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-primary transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Contact Phone</label>
                        <input
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={bookingData.patientPhone}
                          onChange={(e) => setBookingData({ ...bookingData, patientPhone: e.target.value })}
                          className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-primary transition-all outline-none"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Full Address in Nagaon</label>
                      <textarea
                        rows={2}
                        placeholder="House no, Area, Ward no, Nagaon..."
                        value={bookingData.address}
                        onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                        className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-primary transition-all outline-none resize-none"
                      ></textarea>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Describe symptoms / Needs (Optional)</label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Fever for 2 days, Nursing for wound dressing..."
                        value={bookingData.symptoms}
                        onChange={(e) => setBookingData({ ...bookingData, symptoms: e.target.value })}
                        className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-primary transition-all outline-none resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex justify-between items-center border-t border-border pt-8">
                  <div className="hidden md:block">
                    <p className="text-xs text-text-muted font-bold uppercase tracking-widest">Selected Service</p>
                    <p className="text-primary font-bold">{bookingData.service?.title}</p>
                  </div>
                  <button
                    disabled={!bookingData.patientName || !bookingData.patientPhone || !bookingData.address}
                    onClick={handleSubmit}
                    className="btn-primary px-12 disabled:opacity-50"
                  >
                    Submit Request
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 md:p-20 flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-8">
                  <CheckCircle size={60} />
                </div>

                <h2 className="text-4xl font-bold text-text-dark mb-4 font-display">Request Submitted!</h2>
                <p className="text-text-muted text-lg max-w-sm mb-12 leading-relaxed">
                  Your request for **{bookingData.service?.title}** has been received. 
                  Our care coordinator will call you within 15-30 minutes to confirm.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="btn-primary px-8 flex items-center gap-2"
                  >
                    <LayoutDashboard size={20} />
                    View Status
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="btn-outline px-8"
                  >
                    Return Home
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Note */}
        {step < 4 && (
          <p className="mt-8 text-center text-sm text-text-muted italic">
            Note: Actual fees may vary based on the specific requirements and distance from Nagaon hub. 
            All payments are collected after the service.
          </p>
        )}
      </div>
    </div>
  );
};

export default Appointments;

