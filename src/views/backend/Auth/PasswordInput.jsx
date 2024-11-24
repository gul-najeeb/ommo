import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div style={{ position: "relative", width: "250px" }}>
      {/* Password Input Field */}
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      {/* Sliding Icons with Scale and Skew Animation */}
      <div
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          width: "24px",
          height: "24px",
          overflow: "hidden", // Ensures icons outside the box aren't visible
        }}
      >
        {/* FaEye Icon */}
        <div
          style={{
            position: "absolute",
            top: showPassword ? "-40px" : "0px", // Slide up for hiding
            opacity: showPassword ? 0 : 1, // Fade out when sliding out
            transform: showPassword
              ? "scale(1.0) skewY(-50deg)" // Shrink and skew for hiding
              : "scaleY(1.06) skewY(0deg)", // Restore to normal size
            transition: "all 0.3s ease", // Smooth animation for all properties
          }}
        >
          <FaEye style={{ fontSize: "24px", color: "#5d5d5d" }} />
        </div>

        {/* FaEyeSlash Icon */}
        <div
          style={{
            position: "absolute",
            top: showPassword ? "0px" : "40px", // Slide in from bottom
            opacity: showPassword ? 1 : 0, // Fade in when sliding in
            transform: showPassword
              ? "scale(1) skewY(0deg)" // Restore to normal size for showing
              : "scale(0.7) skewY(-10deg)", // Shrink and skew when hiding
            transition: "all 0.3s ease", // Smooth animation for all properties
          }}
        >
          <FaEyeSlash style={{ fontSize: "24px", color: "gray" }} />
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
