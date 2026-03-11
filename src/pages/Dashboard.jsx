import React from 'react';
import { motion } from 'framer-motion';
import { 
  History, Calendar, FileText, Pill, 
  Plus, ChevronRight, User, Sparkles,
  Heart, Droplets, TrendingUp
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { appointmentHistory, healthRecords } from '../data/mockData';
import { cn } from '../utils/cn';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-extrabold text-primary tracking-tight"
            >
              Hello, <span className="text-accent underline decoration-primary/5 decoration-8 underline-offset-8">{user?.name || 'User'}</span>!
            </motion.h1>
            <p className="text-text-muted text-lg mt-2 font-medium">Here's an overview of your health status.</p>
          </div>
          <button className="px-6 py-3 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-light transition-all">
            <Plus size={20} />
            Add Medical Record
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <DashboardStatCard icon={<Calendar />} label="Upcoming" value="02" color="primary" />
          <DashboardStatCard icon={<History />} label="Completed" value="14" color="accent" />
          <DashboardStatCard icon={<FileText />} label="Lab Reports" value="08" color="success" />
          <DashboardStatCard icon={<Pill />} label="Prescriptions" value="12" color="warning" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content: Appointments & Records */}
          <div className="lg:col-span-8 space-y-12">
            {/* Appointments Section */}
            <section className="bg-white p-8 rounded-[40px] shadow-2xl shadow-primary/5 border border-gray-50">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-extrabold text-primary tracking-tight">My Appointments</h3>
                  <button className="text-sm font-bold text-accent hover:underline">View All</button>
               </div>
               
               <div className="space-y-6">
                 {appointmentHistory.map((app) => (
                   <div key={app.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-surface rounded-[32px] border border-gray-50 hover:border-accent/10 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-4 sm:mb-0">
                         <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                            <Calendar size={20} />
                         </div>
                         <div>
                            <p className="font-bold text-primary">{app.doctor}</p>
                            <p className="text-xs text-text-muted font-medium uppercase tracking-widest">{app.date} • {app.time}</p>
                         </div>
                      </div>
                      <div className="flex items-center justify-between sm:gap-8">
                         <span className={cn(
                           "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                           app.status === 'Upcoming' ? "bg-accent/10 text-accent" : "bg-success/10 text-success"
                         )}>
                           {app.status}
                         </span>
                         <button className="p-2 hover:bg-gray-200 rounded-full transition-colors text-text-muted">
                            <ChevronRight size={20} />
                         </button>
                      </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* Health Records Section */}
            <section className="bg-white p-8 rounded-[40px] shadow-2xl shadow-primary/5 border border-gray-50">
               <h3 className="text-2xl font-extrabold text-primary tracking-tight mb-10">Health Records</h3>
               <div className="overflow-x-auto">
                 <table className="w-full">
                   <thead>
                     <tr className="text-left border-b border-gray-100">
                       <th className="pb-6 text-xs font-bold text-text-muted uppercase tracking-[0.2em] pl-4">Test Name</th>
                       <th className="pb-6 text-xs font-bold text-text-muted uppercase tracking-[0.2em]">Date</th>
                       <th className="pb-6 text-xs font-bold text-text-muted uppercase tracking-[0.2em]">Result Status</th>
                       <th className="pb-6 pr-4"></th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50">
                     {healthRecords.map((record) => (
                       <tr key={record.id} className="group hover:bg-surface/50 transition-colors">
                         <td className="py-6 pl-4 font-bold text-primary">{record.test}</td>
                         <td className="py-6 text-sm font-medium text-text-muted">{record.date}</td>
                         <td className="py-6">
                            <span className={cn(
                              "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border",
                              record.status === 'Normal' ? "text-success border-success/20 bg-success/5" : "text-warning border-warning/20 bg-warning/5"
                            )}>
                              {record.status}
                            </span>
                         </td>
                         <td className="py-6 pr-4 text-right">
                            <button className="text-accent hover:text-primary transition-colors">
                              <FileText size={18} />
                            </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </section>
          </div>

          {/* Sidebar Area: Vitals & Family */}
          <div className="lg:col-span-4 space-y-8">
             {/* Vitals Section */}
             <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <VitalCard 
                  icon={<Heart className="text-error" fill="currentColor" opacity={0.2} />}
                  label="Blood Pressure"
                  value="120/80"
                  unit="mmHg"
                  status="Excellent"
                  trend="+2% Normal"
                  color="error"
                />
                <VitalCard 
                  icon={<Droplets className="text-primary" fill="currentColor" opacity={0.2} />}
                  label="Blood Glucose"
                  value="94"
                  unit="mg/dL"
                  status="Normal"
                  trend="-5% Fasting"
                  color="primary"
                />
             </div>

             {/* Family Members */}
             <section className="bg-primary rounded-[40px] p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="text-xl font-extrabold mb-8 flex justify-between items-center tracking-tight">
                     Family Members
                     <Plus size={20} className="text-accent cursor-pointer hover:rotate-90 transition-all" />
                   </h3>
                   <div className="space-y-6">
                      <MemberItem name="Sarah Swamy" relation="Spouse" />
                      <MemberItem name="Arjun Swamy" relation="Son" />
                   </div>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
             </section>

             {/* Ad/Promo */}
             <div className="bg-accent rounded-[40px] p-8 text-primary relative overflow-hidden group">
                <Sparkles className="absolute top-4 right-4 text-white opacity-20 group-hover:scale-150 transition-transform duration-700" size={60} />
                <h4 className="text-2xl font-black leading-tight mb-4 pr-12">Upgrade to Care+ Plan</h4>
                <p className="text-sm font-bold text-white/80 mb-6">Unlimited teleconsultations & free lab pickup.</p>
                <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:scale-105 transition-all">
                  Get Started
                  <TrendingUp size={18} />
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardStatCard = ({ icon, label, value, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-[32px] shadow-xl border border-gray-50 flex items-center gap-4 transition-all"
  >
    <div className={cn(
      "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0",
      color === 'primary' ? 'bg-primary/5 text-primary' : 
      color === 'accent' ? 'bg-accent/5 text-accent' : 
      color === 'success' ? 'bg-success/5 text-success' : 'bg-warning/5 text-warning'
    )}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <p className="text-2xl font-black text-primary">{value}</p>
      <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">{label}</p>
    </div>
  </motion.div>
);

const VitalCard = ({ icon, label, value, unit, status, trend, color }) => (
  <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-50 space-y-6">
     <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center">
           {icon}
        </div>
        <div className="text-right">
           <span className="text-[10px] font-black uppercase tracking-widest text-success px-2 py-1 bg-success/5 rounded-md">{status}</span>
        </div>
     </div>
     <div>
        <h4 className="text-sm font-bold text-text-muted mb-1">{label}</h4>
        <div className="flex items-baseline gap-1">
           <span className="text-3xl font-black text-primary">{value}</span>
           <span className="text-xs font-bold text-text-muted uppercase">{unit}</span>
        </div>
     </div>
     <p className="text-xs font-bold text-primary flex items-center gap-1">
        <TrendingUp size={14} className="text-success" />
        {trend}
     </p>
  </div>
);

const MemberItem = ({ name, relation }) => (
  <div className="flex items-center gap-4 group cursor-pointer">
     <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-white group-hover:text-primary transition-all">
        <User size={20} />
     </div>
     <div>
        <p className="font-bold text-white text-sm">{name}</p>
        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{relation}</p>
     </div>
  </div>
);

export default Dashboard;
