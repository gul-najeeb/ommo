import axios from "axios";
import { axiosInstance } from "..";
import { baseUrl } from "../../constants";

export const generateOtpSignup = async (email) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/otp/generate-otp-signup?receiver=${encodeURIComponent(email)}`,
      {},  
      {
        headers: {
          'Accept': '*/*',  
        },
      }
    );
    console.log('OTP Response:', response.data);
    return response.data; // Return the response data for further use
  } catch (error) {
    console.error('Error generating OTP:', error);
    throw error; // Propagate the error to be handled by the caller
  }
};
 

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
// Function to verify OTP
export const changePassword = async (identifier, newPassword) => {
  try {
    const response = await axiosInstance.post("/api/user/forget-password", {
      identifier,
      newPassword,
    });
    return response.data; // Handle the response as needed
  } catch (error) {
    console.error("Error changing password OTP:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

// Function to generate OTP
export const generateOtp = async (email, phoneNumber, sub = null) => {
  try {
    let data = null;
    if(sub){

      data = {
        receiver: email,
        phoneNumber: phoneNumber,
        subject: sub 
        
      }
    }else{
      
      data = {
        receiver: email,
        phoneNumber: phoneNumber,        
      }

    }
    const response = await axiosInstance.post("/api/otp/generate", data);
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
