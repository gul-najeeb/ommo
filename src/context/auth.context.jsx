import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the Auth Context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage the auth state
  const navigate = useNavigate();

  // Login function (you can replace this with real authentication logic)
  const login = () => {
    setIsAuthenticated(true);
    navigate("/"); // Redirect to home or desired page after login
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
  };
  useEffect(() => {
    if (!isAuthenticated) {
      // navigate("/auth/sign-in");
    }
  }, [navigate, isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
