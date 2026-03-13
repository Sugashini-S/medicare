import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4 ${
          isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Spondon Logo" className="h-10 w-auto" />
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-semibold transition-colors duration-200 hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-text-body'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/appointments"
                  className="btn-primary py-2 px-5 text-sm"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User size={18} />
                  </div>
                  <span>{user?.name?.split(' ')[0] || 'Dashboard'}</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-text-muted hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/appointments"
                  className="btn-primary py-2 px-5 text-sm"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/login"
                  className="text-text-body font-semibold hover:text-primary transition-colors px-4 py-2"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 top-[72px] bg-white z-40 p-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-bold ${
                    location.pathname === link.path ? 'text-primary' : 'text-text-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              {isAuthenticated ? (
                <div className="flex flex-col gap-4">
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-xl font-bold text-text-dark"
                  >
                    My Dashboard <ChevronRight />
                  </Link>
                  <Link
                    to="/appointments"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary text-center"
                  >
                    Book Appointment
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-red-500 font-bold text-xl"
                  >
                    <LogOut /> Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <Link
                    to="/appointments"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary text-center"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-center rounded-xl border-2 border-primary text-primary font-bold"
                  >
                    Login
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

export default Navbar;

