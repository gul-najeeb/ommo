import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import { connect } from "react-redux";
import { getDarkMode } from "../../../store/mode";
import { Link, useNavigate } from "react-router-dom";
import { generateOtp } from "../../../services/auth";

//img
import logo from "../../../assets/images/logo.png";
import darklogo from "../../../assets/images/logo-dark.png";
import { toast } from "react-toastify";
import { ENDCODED_USER, OTP_ID } from "../../../constants";
import { encryptObjectToQueryParam } from "../../../utils/crypto";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const RecoverPassword = (props) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerateOtp = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state
    setMessage(""); // Reset message

    try {
      // Call the generateOtp function
      // console.log(email)
      // return;
      const response = await generateOtp(email, null, 'ForgetPassword');
      console.log(response)
       
      const encryptedUser = encryptObjectToQueryParam({Email:email});
      // console.log(data, queryParams);
      // navigate("/auth/verify-otp?__u=" + encryptedUser + '');
      if(response?.otp_id){
        navigate(`/auth/verify-otp?${ENDCODED_USER}=${encryptedUser}&${OTP_ID}=${response?.otp_id}&isForgotPassword=true`);
      }
      toast.success('Successfully Sent Otp')
      // setMessage("OTP sent successfully! Please check your email.");
    } catch (error) {
      // setMessage("Failed to send OTP, Please try again.");
      toast.error("Error while sending OTP")
      console.error("Error:", error.response);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <section className="login-content">
        <Container className="h-100">
          <Row className="align-items-center justify-content-center h-100">
            <Col md="5">
              <Card className="p-5">
                <Card.Body>
                  <div className="auth-logo">
                    <img
                      src={logo}
                      className={`img-fluid  rounded-normal  ${
                        !props.darkMode ? "d-none" : ""
                      }`}
                      alt="logo"
                    />
                    <img
                      src={darklogo}
                      className={`img-fluid  rounded-normal  ${
                        props.darkMode ? "d-none" : ""
                      }`}
                      alt="logo"
                    />
                  </div>
                  <h3 className="mb-3 text-center">Reset Password</h3>
                  <p className="text-center small text-secondary mb-3">
                    You can reset your password here
                  </p>
                  <Form onSubmit={handleGenerateOtp}>
                    <Row>
                      <Col lg="12">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      className="btn btn-primary btn-block"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Reset Your Password"}
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
    </>
  );
};

export default connect(mapStateToProps)(RecoverPassword);
