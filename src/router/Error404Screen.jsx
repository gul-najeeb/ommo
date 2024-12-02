import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation, replace with `next/router` if using Next.js
import { notFoundImage } from "../constants";

const Error404Screen = () => {
  const navigate = useNavigate(); // Replace with `useRouter` if using Next.js

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.description}>
          Oops! The page you're looking for doesn't exist in Ommo.
        </p>
        <button
        // onMouseEnter={}
          style={styles.button}
          onClick={() => navigate("/")} // Replace with router.push("/") if using Next.js
        >
          Go Back Home
        </button>
      </div>
      <div style={styles.imageContainer}>
        <img
          src={notFoundImage}
          alt="404 Illustration"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // height: "100vh",
    textAlign: "center",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    padding: "20px",
  },
  content: {
    zIndex: 1,
  },
  title: {
    fontSize: "8rem",
    fontWeight: "bold",
    color: "#0073e6",
    marginBottom: "20px",
    textShadow: "2px 4px 6px rgba(0, 0, 0, 0.2)",
  },
  description: {
    fontSize: "1.5rem",
    color: "#555",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    color: "#fff",
    background: "#0073e6",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s, background 0.3s",
  },
  buttonHover: {
    transform: "scale(1.2)",
    background: "#005bb5",
  },
  imageContainer: {
    marginTop: "0px",
    zIndex: 0,
  },
  image: {
    maxWidth: "100%",
    borderRadius: "12px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default Error404Screen;
