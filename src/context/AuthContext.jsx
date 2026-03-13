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

  const login = (phone) => {
    // In a real app, this would verify OTP
    // For now, we fetch user by phone or create a mock session
    const storedUser = localStorage.getItem('spondon_user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.phone === phone) {
        setIsAuthenticated(true);
        return true;
      }
    }
    return false;
  };

  const register = (userData) => {
    const newUser = { ...userData, isRegistered: true };
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

