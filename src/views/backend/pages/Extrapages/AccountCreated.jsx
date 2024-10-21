import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AccountCreated = () => {
  const [isHovered, setIsHovered] = useState(false);
  const nav = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <span style={styles.checkmark}>&#10004;</span>
      </div>
      <h2 style={styles.heading}>Account Created</h2>
      <p style={styles.text}>
        Your account has been successfully created. Please sign in to continue.
      </p>
      <Link to="/auth/sign-in" 
        // href="#"
        style={{
          ...styles.button,
          backgroundColor: isHovered ? '#0056b3' : '#007bff',
          boxShadow: isHovered ? '0 5px 15px rgba(0, 91, 187, 0.4)' : 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Sign In
      </Link>
    </div>
  );
};

// Inline styles using JS object
const styles = {
  container: {
    
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    padding: '50px 30px',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '520px',
    margin: '140px auto 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxHeight: '700px',
  },
  iconContainer: {
    width: '55px',
    height: '55px',
    backgroundColor: '#28a745', // Green circle
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow around the icon
    marginBottom: '20px',
  },
  checkmark: {
    fontSize: '30px',
    color: 'white', // White checkmark inside the green circle
  },
  heading: {
    fontSize: '26px',
    color: '#333',
    marginTop: '20px',
    marginBottom: '10px',
    fontWeight: '600',
  },
  text: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.6',
    maxWidth: '320px', // Prevent overly wide text blocks
  },
  button: {
    display: 'inline-block',
    padding: '12px 25px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007bff',
    borderRadius: '8px',
    textDecoration: 'none',
    boxShadow: 'none', // Default shadow off
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  },
};

export default AccountCreated;
