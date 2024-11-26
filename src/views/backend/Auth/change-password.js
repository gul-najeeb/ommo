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

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}


const ChangePassword = () => {
  const location =useLocation()
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const newPassword = watch("newPassword");
  const n = useNavigate()

  const onSubmit = async ({ newPassword }) => {
    setLoading(true);
    setMessage("");
    try {
      await changePassword(id, newPassword );
      toast.success("Successfully Changed Your Password")
      

      setMessage("Password changed successfully!");
      setTimeout(() => {
        
        window.location.href = "/auth/sign-in"
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
                    
                  <Form.Group className="mt-3">
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
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                    {errors.newPassword && (
                      <small className="text-danger">
                        {errors.newPassword.message}
                      </small>
                    )}
                  </Form.Group>

                  <Form.Group className="mt-3">
                    <Form.Label className="text-secondary">
                      Confirm New Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm new password"
                      {...register("confirmPassword", {
                        validate: (value) =>
                          value === newPassword ||
                          "Passwords do not match",
                      })}
                    />
                    {errors.confirmPassword && (
                      <small className="text-danger">
                        {errors.confirmPassword.message}
                      </small>
                    )}
                  </Form.Group>

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
