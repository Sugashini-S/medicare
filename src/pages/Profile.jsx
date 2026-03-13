import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Mail, Phone, MapPin, Calendar, Users, Droplets, Save, Edit2, CheckCircle, ShieldCheck, Home } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../utils/cn';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    address: user?.address || 'Nagaon, Assam',
    phone: user?.phone || ''
  });

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="container-custom max-w-4xl">
        {/* Profile Header */}
        <div className="bg-background-light rounded-[40px] p-8 md:p-12 mb-8 border border-border relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Avatar Section */}
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full flex items-center justify-center text-5xl md:text-6xl font-black text-primary border-4 border-white shadow-xl">
                {formData.name[0] || 'U'}
              </div>
              <button className="absolute bottom-2 right-2 p-3 bg-secondary text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                <Camera size={20} />
              </button>
            </div>

            {/* Basic Info */}
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <h1 className="text-4xl font-bold text-text-dark font-display">
                  {formData.name}
                </h1>
                <div className="flex justify-center md:justify-start">
                  <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/20 flex items-center gap-2">
                    <ShieldCheck size={14} />
                    Active Member
                  </span>
                </div>
              </div>
              <p className="text-text-muted font-medium">+91 {formData.phone}</p>
            </div>

            {/* Edit Toggle */}
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className={cn(
                "px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl",
                isEditing 
                  ? "bg-secondary text-white hover:bg-dark-teal" 
                  : "bg-primary text-white hover:bg-dark-teal shadow-primary/20"
              )}
            >
              {isEditing ? (
                <><Save size={20} /> Save Changes</>
              ) : (
                <><Edit2 size={20} /> Edit Profile</>
              )}
            </button>
          </div>
        </div>

        {/* Profile Details Form */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 border border-border shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                  Full Name
                </label>
                <input
                  disabled={!isEditing}
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-background-light rounded-2xl border-2 border-transparent focus:border-primary transition-all font-bold text-text-dark disabled:opacity-70"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                  <Mail size={12} /> Email Address
                </label>
                <input
                  disabled={!isEditing}
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-background-light rounded-2xl border-2 border-transparent focus:border-primary transition-all font-bold text-text-dark disabled:opacity-70"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-dark uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                  <Home size={12} /> Home Address (Nagaon)
                </label>
                <textarea
                  disabled={!isEditing}
                  rows={4}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-6 py-4 bg-background-light rounded-2xl border-2 border-transparent focus:border-primary transition-all font-bold text-text-dark disabled:opacity-70 resize-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-primary/5 rounded-[32px] border border-primary/10">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
              <ShieldCheck size={20} />
              Membership Benefits
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <CheckCircle size={16} className="text-primary" />
                Access to 24/7 Care Coordinator
              </div>
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <CheckCircle size={16} className="text-primary" />
                Free Home Lab Collection
              </div>
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <CheckCircle size={16} className="text-primary" />
                Wait-time reduced to 30 mins
              </div>
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <CheckCircle size={16} className="text-primary" />
                Up to 6 family members covered
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[100] font-bold"
          >
            <CheckCircle size={24} />
            Profile updated successfully
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
