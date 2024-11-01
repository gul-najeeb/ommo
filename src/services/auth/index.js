import { axiosInstance } from "..";

// Function to verify OTP
export const verifyOtp = async (otpId, otpNumber) => {
  try {
    const response = await axiosInstance.post("/api/otp/verify", {
      otpId: otpId,
      otpNumber: otpNumber,
    });
    return response.data; // Handle the response as needed
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

// Function to generate OTP
export const generateOtp = async (email, phoneNumber) => {
  try {
    const response = await axiosInstance.post("/api/otp/generate", {
      email: email,
      phoneNumber: phoneNumber,
    });
    return response.data; // Handle the response as needed
  } catch (error) {
    console.error("Error generating OTP:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.post(
      "/api/auth/logout",
      { refreshToken: localStorage.getItem("refreshToken") },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Logout successful:", response.data);
  } catch (error) {
    console.error(
      "Error logging out:",
      error.response ? error.response.data : error.message
    );
  }
};

// Call the function to log out
logoutUser();
