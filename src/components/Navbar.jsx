import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, LogOut, Calendar, FileText, 
  ShoppingBag, CreditCard, Users, HelpCircle, ChevronRight,
  Stethoscope, User
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountPanelOpen, setIsAccountPanelOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Doctors', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
          isScrolled || isMobileMenuOpen ? 'glass shadow-lg py-3' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors duration-300">
              <Stethoscope className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-2xl font-extrabold tracking-tighter leading-none transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>
                MediCare
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase leading-none mt-1">
                Hospital
              </span>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative text-sm font-semibold transition-colors duration-200 hover:text-accent',
                  location.pathname === link.path ? 'text-accent' : (isScrolled ? 'text-gray-700' : 'text-white')
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <button
                onClick={() => setIsAccountPanelOpen(true)}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg hover:ring-4 hover:ring-accent/20 transition-all duration-300"
              >
                {user?.name?.[0] || 'U'}
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className={cn(
                    "px-6 py-2 text-sm font-bold transition-colors duration-200 hover:text-accent",
                    isScrolled ? "text-gray-700" : "text-white"
                  )}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 text-sm font-bold bg-primary text-white rounded-full hover:bg-primary-light transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-primary/20"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Account Slide-out Panel */}
      <AnimatePresence>
        {isAccountPanelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAccountPanelOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-[70] p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-primary">My Account</h2>
                <button
                  onClick={() => setIsAccountPanelOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-text-muted" />
                </button>
              </div>

              <Link 
                to="/profile"
                onClick={() => setIsAccountPanelOpen(false)}
                className="flex items-center gap-4 mb-8 p-4 bg-surface rounded-2xl hover:bg-gray-100 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold group-hover:ring-4 group-hover:ring-accent/20 transition-all">
                  {user?.name?.[0] || 'U'}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">{user?.name || 'User'}</h3>
                  <p className="text-text-muted text-sm">+91 {user?.phone || 'XXXXXXXXXX'}</p>
                </div>
              </Link>

              <div className="flex flex-col gap-1 flex-1">
                <AccountLink icon={<User />} label="My Profile" to="/profile" onClick={() => setIsAccountPanelOpen(false)} />
                <AccountLink icon={<Calendar />} label="My Appointments" to="/dashboard#appointments" onClick={() => setIsAccountPanelOpen(false)} />
                <AccountLink icon={<FileText />} label="Health Records" to="/dashboard#records" onClick={() => setIsAccountPanelOpen(false)} />
                <AccountLink icon={<ShoppingBag />} label="My Orders" to="/dashboard#orders" onClick={() => setIsAccountPanelOpen(false)} />
                <AccountLink icon={<CreditCard />} label="Transactions & Payments" to="/dashboard#payments" onClick={() => setIsAccountPanelOpen(false)} />
                <AccountLink icon={<Users />} label="Manage Family Members" to="/dashboard#family" onClick={() => setIsAccountPanelOpen(false)} />
                <div className="h-px bg-gray-100 my-4" />
                <AccountLink icon={<HelpCircle />} label="Need Help" to="/about#contact" />
              </div>

              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="mt-auto flex items-center justify-between p-4 text-error font-bold hover:bg-error/5 rounded-2xl transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </div>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLogoutConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLogoutConfirm(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white p-8 rounded-[40px] shadow-2xl max-w-sm w-full text-center"
            >
              <div className="w-16 h-16 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto mb-6">
                <LogOut size={32} />
              </div>
              <h3 className="text-2xl font-black text-primary mb-2">Logout Confirmation</h3>
              <p className="text-text-muted mb-8 font-medium">Are you sure you want to logout? You'll need to login again to access your records.</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="flex-1 py-4 bg-surface text-primary font-bold rounded-2xl hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    logout();
                    setShowLogoutConfirm(false);
                    setIsAccountPanelOpen(false);
                  }}
                  className="flex-1 py-4 bg-error text-white font-bold rounded-2xl hover:bg-red-600 transition-colors shadow-lg shadow-error/20"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[64px] bg-white z-40 p-6 md:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-primary hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
              {!isAuthenticated && (
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-center rounded-xl border border-primary text-primary font-bold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-center rounded-xl bg-primary text-white font-bold"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const AccountLink = ({ icon, label, to, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center justify-between p-4 rounded-2xl hover:bg-surface group transition-all duration-200"
  >
    <div className="flex items-center gap-3">
      <span className="text-primary group-hover:text-accent transition-colors duration-200">
        {React.cloneElement(icon, { size: 20 })}
      </span>
      <span className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
        {label}
      </span>
    </div>
    <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors duration-200" />
  </Link>
);

export default Navbar;
