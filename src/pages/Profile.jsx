import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Mail, Phone, MapPin, Calendar, Users, Droplets, Save, Edit2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../utils/cn';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    city: user?.city || 'Chennai',
    dob: user?.dob || '',
    gender: user?.gender || 'Male',
    bloodGroup: user?.bloodGroup || 'O+',
    phone: user?.phone || ''
  });

  const cities = ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Other'];
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  const genders = ['Male', 'Female', 'Other'];

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Profile Header */}
        <div className="bg-white rounded-[40px] shadow-2xl shadow-primary/5 p-8 md:p-12 mb-8 border border-gray-50 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Avatar Section */}
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center text-5xl md:text-6xl font-black text-white shadow-2xl">
                {formData.name[0] || 'U'}
              </div>
              <button className="absolute bottom-2 right-2 p-3 bg-accent text-primary rounded-full shadow-lg hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-white">
                <Camera size={20} />
              </button>
            </div>

            {/* Basic Info */}
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <h1 className="text-4xl font-black text-primary tracking-tight">
                  {formData.name}
                </h1>
                <div className="flex justify-center md:justify-start">
                  <span className="px-4 py-1 bg-success/10 text-success rounded-full text-xs font-bold uppercase tracking-widest border border-success/20">
                    Patient Account
                  </span>
                </div>
              </div>
              <p className="text-text-muted text-lg font-medium">+91 {formData.phone}</p>
            </div>

            {/* Edit Toggle */}
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className={cn(
                "px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl",
                isEditing 
                  ? "bg-success text-white hover:bg-green-600 shadow-success/20" 
                  : "bg-primary text-white hover:bg-primary-light shadow-primary/20"
              )}
            >
              {isEditing ? (
                <><Save size={20} /> Save Changes</>
              ) : (
                <><Edit2 size={20} /> Edit Profile</>
              )}
            </button>
          </div>

          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </div>

        {/* Profile Details Form */}
        <div className="bg-white rounded-[40px] shadow-2xl shadow-primary/5 p-8 md:p-12 border border-gray-50">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                <Edit2 size={12} /> Full Name
              </label>
              <input
                disabled={!isEditing}
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-bold text-primary disabled:opacity-70"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                <Mail size={12} /> Email Address
              </label>
              <input
                disabled={!isEditing}
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-bold text-primary disabled:opacity-70"
              />
            </div>

            {/* Phone (Read Only) */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1 inline-flex items-center gap-2 text-text-muted">
                <Phone size={12} /> Mobile Number (Permanent)
              </label>
              <input
                disabled
                type="tel"
                value={formData.phone}
                className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent font-bold text-gray-400 cursor-not-allowed"
              />
            </div>

            {/* City */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                <MapPin size={12} /> Current City
              </label>
              <select
                disabled={!isEditing}
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-bold text-primary disabled:opacity-70 appearance-none"
              >
                {cities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                <Calendar size={12} /> Date of Birth
              </label>
              <input
                disabled={!isEditing}
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-bold text-primary disabled:opacity-70"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                <Users size={12} /> Gender
              </label>
              <select
                disabled={!isEditing}
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-bold text-primary disabled:opacity-70 appearance-none"
              >
                {genders.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            {/* Blood Group */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1 inline-flex items-center gap-2">
                <Droplets size={12} /> Blood Group
              </label>
              <select
                disabled={!isEditing}
                value={formData.bloodGroup}
                onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                className="w-full px-6 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all font-bold text-primary disabled:opacity-70 appearance-none"
              >
                {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
              </select>
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
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-success text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[100] font-bold"
          >
            <CheckCircle2 size={24} />
            Profile updated successfully ✓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
