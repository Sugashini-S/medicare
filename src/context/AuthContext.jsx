import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('spondon_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    // In a real app, this would verify OTP via API
    // For now, we simulate a successful login
    const userToSet = {
      ...userData,
      name: userData.name || 'User',
      phone: userData.phone,
      isRegistered: true
    };
    setUser(userToSet);
    setIsAuthenticated(true);
    localStorage.setItem('spondon_user', JSON.stringify(userToSet));
    return true;
  };

  const register = (userData) => {
    const newUser = { 
      ...userData, 
      isRegistered: true,
      membershipActive: true,
      expiryDate: '12 March 2027' // Mock expiry
    };
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('spondon_user', JSON.stringify(newUser));
  };

  const updateProfile = (updatedData) => {
    const newUser = { ...user, ...updatedData };
    setUser(newUser);
    localStorage.setItem('spondon_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('spondon_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register, updateProfile, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

