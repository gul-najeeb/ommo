import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { changePassword } from "../../../services/auth";
import { connect } from "react-redux";
import { getDarkMode } from "../../../store/mode";

//img
import logo from "../../../assets/images/logo.png";
import darklogo from "../../../assets/images/logo-dark.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ENDCODED_USER } from "../../../constants";
import { decryptQueryParamToObject } from "../../../utils/crypto";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}


const ChangePassword = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const { Email } = decryptQueryParamToObject(queryParams.get(ENDCODED_USER));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordVisibleC, setPasswordVisibleC] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const newPassword = watch("newPassword");
  const n = useNavigate()

  // const [passwordVisible, setpasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const togglePasswordVisibilityC = () => setPasswordVisibleC(!passwordVisibleC);


  const onSubmit = async ({ newPassword }) => {
    setLoading(true);
    setMessage("");
    try {
      await changePassword(Email, newPassword);
      toast.success("Successfully Changed Your Password")


      setMessage("Password changed successfully!");
      setTimeout(() => {

        window.location.replace("/auth/sign-in")
      }, 800);

    } catch (error) {
      setMessage("Failed to change password. Please try again.");
      console.error("Error changing password:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="change-password-content">
      <Container className="h-100 mt-4 pt-4">
        <Row className="align-items-center justify-content-center h-100">
          <Col md="5">
            <Card className="p-5">
              <Card.Body>
                <h3 className="mb-3 text-center">Change Password</h3>
                <p className="text-center small text-secondary mb-4">
                  Enter your identifier, OTP, and a new password.
                </p>
                <Form onSubmit={handleSubmit(onSubmit)}>

                  {/* <Form.Group className="mt-3">
                    <Form.Label className="text-secondary">
                      New Password
                    </Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Enter new password"
                        {...register("newPassword", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                      />
                      <span
                        className="input-group-text"
                        style={{ cursor: "pointer" }}
                        onClick={() => setPasswordVisible((prev) => !prev)}
                      >
                        {passwordVisible ? <FaEye /> : <FaEyeSlash/>}
                      </span>
                    </div>
                    {errors.newPassword && (
                      <small className="text-danger">
                        {errors.newPassword.message}
                      </small>
                    )}
                  </Form.Group> */}

                  <Form.Group style={{ position: 'relative' }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Label className="text-secondary">
                        Password
                      </Form.Label>
                     
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <Form.Control
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Password"
                        {...register("newPassword", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                        // onChange={(e) => setPasswordVisible(e.target.value)}

                      />
                    </div>
                    <div
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "70%",
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
                          top: passwordVisible ? "-40px" : "0px", // Slide up for hiding
                          opacity: passwordVisible ? 0 : 1, // Fade out when sliding out
                          transform: passwordVisible
                            ? "scale(1.0) skewY(-50deg)" // Shrink and skew for hiding
                            : "scaleY(1.06) skewY(0deg)", // Restore to normal size
                          transition: "all 0.3s ease", // Smooth animation for all properties
                        }}
                      >
                        <FaEyeSlash style={{ fontSize: "22px", color: "gray" }} />
                      </div>

                      {/* FaEyeSlash Icon */}
                      <div
                        style={{
                          position: "absolute",
                          top: passwordVisible ? "0px" : "40px", // Slide in from bottom
                          opacity: passwordVisible ? 1 : 0, // Fade in when sliding in
                          transform: passwordVisible
                            ? "scale(1) skewY(0deg)" // Restore to normal size for showing
                            : "scale(0.7) skewY(-10deg)", // Shrink and skew when hiding
                          transition: "all 0.3s ease", // Smooth animation for all properties
                        }}
                      >
                        <FaEye style={{ fontSize: "22px", color: "#5d5d5d" }} />
                      </div>
                    </div>
                  </Form.Group>
                    {errors.newPassword && (
                      <p style={{marginTop: '-0.8rem'}} className=" text-danger">
                        {errors.newPassword.message}
                      </p>
                    )}
                  <Form.Group style={{ position: 'relative' }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Label className="text-secondary">
                      Confirm  Password
                      </Form.Label>
                     
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <Form.Control
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Confirm new password"
                        {...register("confirmPassword", {
                          validate: (value) =>
                            value === newPassword ||
                            "Passwords do not match",
                        })}
                        // onChange={(e) => setPasswordVisible(e.target.value)}

                      />
                    </div>
                    <div
                      onClick={togglePasswordVisibilityC}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "70%",
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
                          top: passwordVisibleC ? "-40px" : "0px", // Slide up for hiding
                          opacity: passwordVisibleC ? 0 : 1, // Fade out when sliding out
                          transform: passwordVisibleC
                            ? "scale(1.0) skewY(-50deg)" // Shrink and skew for hiding
                            : "scaleY(1.06) skewY(0deg)", // Restore to normal size
                          transition: "all 0.3s ease", // Smooth animation for all properties
                        }}
                      >
                        <FaEyeSlash style={{ fontSize: "22px", color: "gray" }} />
                      </div>

                      {/* FaEyeSlash Icon */}
                      <div
                        style={{
                          position: "absolute",
                          top: passwordVisibleC ? "0px" : "40px", // Slide in from bottom
                          opacity: passwordVisibleC ? 1 : 0, // Fade in when sliding in
                          transform: passwordVisibleC
                            ? "scale(1) skewY(0deg)" // Restore to normal size for showing
                            : "scale(0.7) skewY(-10deg)", // Shrink and skew when hiding
                          transition: "all 0.3s ease", // Smooth animation for all properties
                        }}
                      >
                        <FaEye style={{ fontSize: "22px", color: "#5d5d5d" }} />
                      </div>
                    </div>
                  </Form.Group>
                    {errors.confirmPassword && (
                      <p style={{marginTop: '-0.8rem'}} className=" text-danger">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  {/* <Form.Group className="mt-3">
                    <Form.Label className="text-secondary">
                      Confirm New Password
                    </Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type="password"
                        placeholder="Confirm new password"
                        {...register("confirmPassword", {
                          validate: (value) =>
                            value === newPassword ||
                            "Passwords do not match",
                        })}
                      />
                      <span
                        className="input-group-text"
                        style={{ cursor: "pointer" }}
                        onClick={() => setPasswordVisibleC((prev) => !prev)}
                      >
                        {passwordVisibleC ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </div>
                    {errors.confirmPassword && (
                      <small className="text-danger">
                        {errors.confirmPassword.message}
                      </small>
                    )}
                  </Form.Group> */}

                  <Button
                    className="btn btn-primary btn-block mt-4"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Changing..." : "Change Password"}
                  </Button>
                </Form>
                {message && (
                  <p className="text-center mt-3 small text-info">{message}</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default connect(mapStateToProps)(ChangePassword);
