import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, ShieldCheck, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

const DoctorCard = ({ doctor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 flex flex-col h-full group"
    >
      {/* Top Section with Image & Status Badge */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <div className={cn(
            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border",
            doctor.available 
              ? "bg-success/20 text-success border-success/20" 
              : "bg-error/20 text-error border-error/20"
          )}>
            {doctor.available ? '● Available Today' : '○ Resuming Tomorrow'}
          </div>
        </div>
        {doctor.verified && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-xl text-primary shadow-lg border border-white/20">
            <ShieldCheck size={20} fill="#0a2463" className="text-white" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-extrabold text-primary leading-tight group-hover:text-accent transition-colors">
              {doctor.name}
            </h3>
            <p className="text-sm font-bold text-accent uppercase tracking-[0.1em] mt-1">
              {doctor.specialty}
            </p>
          </div>
          <div className="bg-warning/10 text-warning px-2 py-1 rounded-lg flex items-center gap-1 font-black text-sm">
            <Star size={14} fill="currentColor" />
            {doctor.rating}
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-text-muted text-sm font-medium">
            <Clock size={16} className="text-primary/40" />
            <span>{doctor.experience} Experience</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-sm font-medium">
            <MapPin size={16} className="text-primary/40" />
            <span>{doctor.location}, Tamil Nadu</span>
          </div>
        </div>

        {/* Pricing & Booking */}
        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Consultation Fee</p>
            <p className="text-xl font-black text-primary">₹{doctor.fee}</p>
          </div>
          <Link
            to="/appointments"
            className="flex items-center gap-2 bg-primary group-hover:bg-accent text-white px-6 py-3 rounded-2xl font-bold transform hover:-translate-x-1 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            <span>Book Now</span>
            <Calendar size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
