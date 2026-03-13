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
    const storedUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    let registeredUser = storedUsers.find(u => u.phone === userData.phone);
    
    if (!registeredUser) {
      // For demo, create a dummy user
      registeredUser = {
        phone: userData.phone,
        name: 'User',
        hasFamilyPlan: false,
        isRegistered: true
      };
    }

    const userToSet = {
      ...registeredUser,
      isRegistered: true
    };
    setUser(userToSet);
    setIsAuthenticated(true);
    localStorage.setItem('spondon_user', JSON.stringify(userToSet));
    return { success: true };
  };

  const register = (userData) => {
    const newUser = { 
      ...userData, 
      isRegistered: true,
      hasFamilyPlan: false,
      membershipActive: true,
      expiryDate: '12 March 2027' // Mock expiry
    };

    // Store in general list of registered users
    const storedUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const existingIndex = storedUsers.findIndex(u => u.phone === userData.phone);
    if (existingIndex > -1) {
      storedUsers[existingIndex] = newUser;
    } else {
      storedUsers.push(newUser);
    }
    localStorage.setItem('registered_users', JSON.stringify(storedUsers));

    // Set as current user
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('spondon_user', JSON.stringify(newUser));
  };

  const activateFamilyPlan = () => {
    if (!user) return;
    const updatedUser = { ...user, hasFamilyPlan: true };
    
    // Update current user
    setUser(updatedUser);
    localStorage.setItem('spondon_user', JSON.stringify(updatedUser));
    
    // Update in general list
    const storedUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const updatedUsers = storedUsers.map(u => u.phone === user.phone ? updatedUser : u);
    localStorage.setItem('registered_users', JSON.stringify(updatedUsers));
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
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register, updateProfile, activateFamilyPlan, loading }}>
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

