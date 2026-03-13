import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Plus, User, 
  ShieldCheck, Clock, PhoneCall, MapPin, CheckCircle, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  
  // Mock data for Spondon
  const membership = {
    status: 'Active', // or 'Pending Payment'
    expiryDate: '12 March 2027',
    familyCount: 3,
    maxFamily: 6
  };

  const activeRequests = [
    {
      id: 'REQ-882',
      service: 'Doctor Visit at Home',
      status: 'In Progress',
      time: 'Today, 2:00 PM - 4:00 PM',
      professional: 'Dr. Swapan Mahanta'
    },
    {
      id: 'REQ-721',
      service: 'Home Lab Collection',
      status: 'Assigned',
      time: 'Tomorrow, 9:00 AM',
      professional: 'Coordinator Assigned'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="container-custom">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-5xl font-bold text-text-dark font-display"
            >
              Welcome, <span className="text-primary underline decoration-primary/10 decoration-8 underline-offset-8 italic">{user?.name || 'User'}</span>
            </motion.h1>
            <p className="text-text-muted mt-3 font-medium">Manage your doorstep healthcare and family records in Nagaon.</p>
          </div>
          <Link to="/appointments" className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            Request New Service
          </Link>
        </div>

        {/* Membership Banner */}
        <div className="mb-12">
          {!user?.hasFamilyPlan ? (
            <div className="bg-white border-2 border-teal-600 rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-xl shadow-teal-900/5 group hover:shadow-teal-900/10 transition-all">
              <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 text-teal-600">
                    <ShieldCheck size={16} />
                    Upgrade Available
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-teal-900">
                    Upgrade to <span className="text-primary italic">Family Plan</span>
                  </h2>
                  <p className="text-gray-600 max-w-md font-medium">
                    Cover up to 6 family members for just ₹100/year. Priority care and 24/7 support for your loved ones.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link 
                    to="/family-plan" 
                    className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:bg-dark-teal transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group"
                  >
                    Get Family Plan <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform" />
            </div>
          ) : (
            <div className="bg-teal-gradient rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                    <ShieldCheck size={16} className="text-secondary" />
                    Family Plan Active ✓
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                    Your Membership is <span className="text-secondary italic">Active</span>
                  </h2>
                  <p className="text-white/80 max-w-md">
                     Valid until <span className="text-white font-bold">{membership.expiryDate}</span>. 
                     Covers up to {membership.maxFamily} permitted family members.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-background-light transition-all shadow-xl">
                    Manage Family
                  </button>
                </div>
              </div>
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content: Active Requests */}
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-background-light p-8 md:p-12 rounded-[40px] border border-border">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-bold text-text-dark font-display">Active Service Requests</h3>
                  <Link to="/history" className="text-sm font-bold text-primary hover:underline">View History</Link>
               </div>
               
               <div className="space-y-6">
                 {activeRequests.map((req) => (
                   <div key={req.id} className="bg-white p-6 rounded-3xl border border-border hover:border-primary/20 transition-all group">
                      <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex gap-4">
                          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                            <Clock size={28} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{req.id}</span>
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                req.status === 'In Progress' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'
                              }`}>
                                {req.status}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-text-dark mb-1">{req.service}</h4>
                            <p className="text-sm text-text-muted flex items-center gap-2">
                              <Calendar size={14} /> {req.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 bg-background-light p-4 rounded-2xl border border-border">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <User size={18} />
                          </div>
                          <div className="text-xs">
                            <p className="text-text-muted font-medium">Professional</p>
                            <p className="font-bold text-text-dark">{req.professional}</p>
                          </div>
                        </div>
                      </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* Support Call */}
            <div className="bg-secondary/5 border-2 border-dashed border-secondary/20 p-8 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-secondary text-white rounded-3xl flex items-center justify-center shadow-lg shadow-secondary/20">
                  <PhoneCall size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-dark">Need Immediate Assistance?</h4>
                  <p className="text-text-muted">Our care coordinator is just a call away for emergencies in Nagaon.</p>
                </div>
              </div>
              <a href="tel:+919706368307" className="bg-secondary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all whitespace-nowrap">
                Call +91 97063 68307
              </a>
            </div>
          </div>

          {/* Sidebar Area: Family & Info */}
          <div className="lg:col-span-4 space-y-8">
             {/* Family Members Card */}
             <section className="bg-white rounded-[40px] p-8 border border-border shadow-sm">
                <h3 className="text-xl font-bold text-text-dark mb-8 flex justify-between items-center font-display">
                  Family Members
                  <button className="text-primary hover:bg-primary/5 p-2 rounded-xl transition-all">
                    <Plus size={20} />
                  </button>
                </h3>
                <div className="space-y-6">
                   <DashboardMemberItem name={user?.name} relation="Primary User" />
                   <DashboardMemberItem name="Kamala Devi" relation="Mother" />
                   <DashboardMemberItem name="Rahul Sharma" relation="Self (Patient)" />
                </div>
             </section>

             {/* Nagaon Coverage Info */}
             <div className="bg-background-light rounded-[40px] p-8 border border-border relative overflow-hidden group">
                <MapPin className="absolute top-4 right-4 text-primary opacity-10" size={60} />
                <h4 className="text-xl font-bold text-text-dark mb-4">City Coverage</h4>
                <p className="text-sm text-text-muted mb-6">
                  Providing verified medical care across **Nagaon, Assam**. 
                  Affiliated with SIMS Multispecial Hospital.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                  <CheckCircle size={16} />
                  Verified Doorstep Provider
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardMemberItem = ({ name, relation }) => (
  <div className="flex items-center gap-4 p-2 hover:bg-background-light rounded-2xl transition-all cursor-pointer">
     <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center">
        <User size={20} />
     </div>
     <div>
        <p className="font-bold text-text-dark text-sm">{name || 'Member'}</p>
        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{relation}</p>
     </div>
  </div>
);

export default Dashboard;
