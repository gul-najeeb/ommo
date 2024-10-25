import React, { createContext, useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Create the Auth Context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Auth state
  const [loading, setLoading] = useState(true); // Loading state to handle auth check
  const navigate = useNavigate();

  // Function to simulate login (replace with actual logic)
  const login = () => {
    return new Promise((resolve, reject) => {
      const success = true; // Change to actual login logic
      if (success) {
        localStorage.setItem("token", "example-token"); // Store token in localStorage
        setIsAuthenticated(true);
        resolve();
        navigate("/"); // Redirect to home page on successful login
      } else {
        reject(new Error("Login failed"));
        navigate("/auth/sign-in"); // Redirect to login on failure
      }
    });
  };

  // Function to log out the user
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/auth/sign-in"); // Redirect to login page on logout
  };

  // Effect to check authentication status when the app mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/auth/sign-in"); // Redirect to sign-in if no token found
    }
    setLoading(false); // Set loading to false after checking auth status
  }, [navigate]);

  // Show a loading screen or nothing while checking auth status
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {" "}
        <Spinner animation="grow" variant="light" size={"lg"} />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
