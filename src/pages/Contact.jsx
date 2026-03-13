import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, 
  MessageSquare, Send, CheckCircle 
} from 'lucide-react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! Our care coordinator will reach out soon.');
    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-display"
          >
            Get in <span className="text-primary italic">Touch</span>
          </motion.h1>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Have questions about our doorstep services? Our team in Nagaon is here to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-background-light p-8 rounded-3xl space-y-8">
              <ContactMethod 
                icon={<Phone className="text-primary" />}
                title="Phone & WhatsApp"
                text="+91 94350 99908 / +91 94350 99909"
                description="Call or message us for immediate assistance (8AM–8PM)."
              />
              <ContactMethod 
                icon={<Mail className="text-primary" />}
                title="Email Support"
                text="Spondonthealthcarenagaon@gmail.com"
                description="We'll respond to your inquiry within 24 hours."
              />
              <ContactMethod 
                icon={<MapPin className="text-primary" />}
                title="Our Location"
                text="BSNL Admin Building, Ground Floor, Nagaon, Assam - 782011"
                description="Visit us at our headquarters in front of Nowgong University."
              />
              <ContactMethod 
                icon={<Clock className="text-primary" />}
                title="Service Hours"
                text="8:00 AM – 8:00 PM"
                description="Standard doorstep visits and consultations."
              />
            </div>

            {/* Emergency Notice */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-red-50 border-2 border-red-100 p-6 rounded-3xl"
            >
              <div className="flex items-start gap-4">
                <div className="bg-red-500 text-white p-2 rounded-lg">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-red-900 mb-1 uppercase tracking-tight">Not an Emergency Service</h4>
                  <p className="text-red-700 text-sm">
                    For life-threatening emergencies, please visit SIMS Hospital Nagaon or dial emergency numbers immediately.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-primary/5 border border-border"
            >
              <h2 className="text-2xl font-bold mb-8 font-display">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 bg-background-light rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      className="w-full px-6 py-4 bg-background-light rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Service Required</label>
                  <select className="w-full px-6 py-4 bg-background-light rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none appearance-none font-medium">
                    <option>Doctor Visit at Home</option>
                    <option>Telemedicine Consultation</option>
                    <option>Nursing Care</option>
                    <option>Home Lab Collection</option>
                    <option>Mother & Child Care</option>
                    <option>Doorstep Pharmacy</option>
                    <option>Other / Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    required
                    rows={4} 
                    placeholder="How can we help you today?" 
                    className="w-full px-6 py-4 bg-background-light rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-primary hover:bg-dark-teal text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20"
                >
                  <Send size={20} />
                  Send Inquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ContactMethod = ({ icon, title, text, description }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-border shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-text-dark text-lg mb-0.5">{title}</h4>
      <p className="text-primary font-bold mb-1 break-words">{text}</p>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default Contact;
