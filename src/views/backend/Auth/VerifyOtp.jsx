import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { generateOtp } from "../../../services/auth";
// import { generateOtp } from "../../../services/auth";

const OTPVerify = () => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // Array to store 6 digits
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(60); // 3 minutes in seconds
  const [otpExpired, setOtpExpired] = useState(false);
  const inputs = useRef([]); // Ref to control focus of input boxes

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setOtpExpired(true); // Set OTP as expired when countdown finishes
    }
  }, [timeRemaining]);

  // Handle input change for each box
  const handleChange = (element, index) => {
    const value = element.value;
    if (/^\d*$/.test(value)) {
      // Only allow numbers
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input box
      if (value && index < 5) {
        inputs.current[index + 1].focus();
      }
    }
  };

  // Handle keyboard events (backspace, delete)
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus(); // Move to previous box on backspace
    }
  };

  // Handle OTP verification on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // verifyOtp()
    generateOtp("codeonlinesource@gmail.com", "+923333333333")
      .then((_) => console.log(_, " otp,"))
      .catch((_) => console.log(_, " otp,"));
    // generateOtp;
    const enteredOtp = otp.join("");
    console.log("OTP entered:", enteredOtp);
    if (otpExpired) {
      setErrorMessage("The OTP has expired. Please request a new one.");
      return;
    }
    if (enteredOtp.length !== 6) {
      setErrorMessage("Please enter a complete 6-digit OTP.");
    } else {
      setValidated(true);
      console.log("OTP submitted:", enteredOtp);
    }
  };

  const handleResendOTP = () => {
    setOtp(new Array(6).fill("")); // Reset OTP boxes
    setErrorMessage("");
    setTimeRemaining(60); // Reset timer
    setOtpExpired(false); // Reset expired status
    inputs.current[0].focus(); // Focus on the first input
    alert("OTP resent!"); // Simulate OTP resend
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row
        className="shadow p-4 rounded"
        style={{ backgroundColor: "#fff", maxWidth: "400px", width: "100%" }}
      >
        <Col>
          <h3 className="text-center mb-4">OTP Verification</h3>

          {validated && (
            <>
              <Alert variant="success" className="text-center">
                OTP verified successfully
              </Alert>
              <Link
                to="/auth/account-created"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button style={{ display: "flex", alignItems: "center" }}>
                  <span>Proceed Further</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    style={{ height: 18, marginLeft: 5, width: 18 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Button>
              </Link>
            </>
          )}

          {!validated && (
            <>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="otp" className="text-center">
                  <div className="d-flex justify-content-between">
                    {otp.map((data, index) => (
                      <>
                        <Form.Control
                          key={index}
                          type="text"
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          maxLength="1"
                          ref={(el) => (inputs.current[index] = el)}
                          placeholder="_"
                          style={{
                            padding: 0,
                            width: "40px",
                            height: "50px",
                            textAlign: "center",
                            borderWidth: 2,
                            color: "black",
                            fontSize: "20px",
                            marginRight: "8px",
                          }}
                          className="otp-input"
                          disabled={otpExpired} // Disable inputs if OTP has expired
                        />
                      </>
                    ))}
                  </div>
                  {errorMessage && (
                    <div className="text-danger mt-2">{errorMessage}</div>
                  )}
                </Form.Group>

                <Button
                  className="mt-3"
                  variant="primary"
                  type="submit"
                  style={{ width: "100%" }}
                  disabled={otpExpired}
                >
                  Verify OTP
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <p>
                  Didn’t receive the code?{" "}
                  <Button variant="link" onClick={handleResendOTP}>
                    Resend
                  </Button>
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="mt-3 text-center">
                {!otpExpired ? (
                  <p>
                    <span>Time Remaining: </span>{" "}
                    <i style={{ color: "#ff0000", fontWeight: "semibold" }}>
                      {formatTime(timeRemaining)}
                    </i>
                  </p>
                ) : (
                  <Alert variant="danger">
                    OTP expired. Please resend to get a new code.
                  </Alert>
                )}
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default OTPVerify;
