import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const storedUser = localStorage.getItem(`user_${email}`);
    
    if (!storedUser) {
      throw new Error('No account found. Please sign up first.');
    }
    
    const userData = JSON.parse(storedUser);
    if (userData.password === password) {
      setUser({ email, name: userData.name, id: userData.id });
      localStorage.setItem('user', JSON.stringify({ email, name: userData.name, id: userData.id }));
      return true;
    }
    
    throw new Error('Wrong password');
  };

  const signup = (name, email, password) => {
    const existingUser = localStorage.getItem(`user_${email}`);
    if (existingUser) {
      throw new Error('User already exists. Please login.');
    }
    
    const newUser = { name, email, password, id: Date.now() };
    localStorage.setItem(`user_${email}`, JSON.stringify(newUser));
    setUser({ email, name, id: newUser.id });
    localStorage.setItem('user', JSON.stringify({ email, name, id: newUser.id }));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};