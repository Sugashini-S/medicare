import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, X } from 'lucide-react';
import { doctors, specialties } from '../data/mockData';
import DoctorCard from '../components/DoctorCard';
import { cn } from '../utils/cn';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const locations = ['All', 'Chennai', 'Coimbatore', 'Madurai', 'Trichy'];

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
      const matchesLocation = selectedLocation === 'All' || doc.location === selectedLocation;
      return matchesSearch && matchesSpecialty && matchesLocation;
    });
  }, [searchTerm, selectedSpecialty, selectedLocation]);

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight"
          >
            Find Our Experts
          </motion.h1>
          <p className="text-text-muted text-lg max-w-2xl">
            Choose from 200+ top-rated especialistas across Tamil Nadu. All our doctors are NMC/MCI verified.
          </p>
        </div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 md:p-8 rounded-[40px] shadow-2xl shadow-primary/5 flex flex-col gap-8 mb-16 border border-gray-50"
        >
          <div className="grid lg:grid-cols-12 gap-6 items-end">
            {/* Search Input */}
            <div className="lg:col-span-5 space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Search Doctor</label>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="name, specialty, or condition..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all duration-300 font-medium"
                />
              </div>
            </div>

            {/* Specialty Selector */}
            <div className="lg:col-span-3 space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Specialty</label>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" size={20} />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-surface rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white transition-all duration-300 font-medium appearance-none"
                >
                  <option value="All">All Specialties</option>
                  {specialties.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            <div className="lg:col-span-4 flex items-center justify-end">
              {(searchTerm || selectedSpecialty !== 'All' || selectedLocation !== 'All') && (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSpecialty('All');
                    setSelectedLocation('All');
                  }}
                  className="flex items-center gap-2 text-primary font-bold hover:text-error transition-colors px-4 py-2"
                >
                  <X size={18} />
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Location Pills */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest ml-1">
              <MapPin size={14} />
              Preferred Location
            </div>
            <div className="flex flex-wrap gap-2">
              {locations.map(loc => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl font-bold transition-all duration-300 border-2",
                    selectedLocation === loc 
                      ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105" 
                      : "bg-white border-gray-100 text-text-muted hover:border-accent/40"
                  )}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doc, idx) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center bg-white rounded-[40px] border-2 border-dashed border-gray-100"
          >
            <div className="max-w-xs mx-auto">
              <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-text-muted" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">No Doctors Found</h3>
              <p className="text-text-muted">Try adjusting your filters to find what you're looking for.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
