import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import { connect } from "react-redux";
import { getDarkMode } from "../../../store/mode";
import { toast, ToastContainer } from "react-toastify";

//img
import logo from "../../../assets/images/logo.png";
import darklogo from "../../../assets/images/logo-dark.png";
import { baseUrl } from "../../../constants";
import PasswordInput from "./PasswordInput";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const SignIn = (props) => {
  const [EmailOrPhone, setEmailOrPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => setShowPassword(!showPassword);


  const getTabsInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. User might not be authenticated.");
        return;
      }

      const result = await fetch(baseUrl+"/api/tab/get-tabs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const tabInfo = await result.json();
      console.log("Tab info:", tabInfo);
    } catch (error) {
      console.error("Error fetching tab info:", error);
    }
  };

  const getUserInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. User might not be authenticated.");
        return;
      }

      const result = await fetch(
        baseUrl + "/api/user/get-user-info",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userInfo = await result.json();
      console.log("User info:", userInfo);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  // add get User Info http://localhost:5055/api/user/get-user-info

  const handleSignIn = async () => {
    let item = { emailOrPhone: EmailOrPhone, password: Password };

    try {
      let result = await fetch(baseUrl + "/api/auth/login", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      result = await result.json();
      console.log("Signin result:", result);

      if (result?.token || result?.Success) {
        console.log(result);
        // return;
        localStorage.setItem("token", result.token);
        localStorage.setItem("refreshToken", result.refreshToken);

        toast.success("Login successful.");

        setTimeout(() => {
          navigate("/");
          getTabsInfo();
          getUserInfo();
        }, 1500);
      } else {
        toast.error("Invalid credentials.");
      }
    } catch (error) {
      console.error("Error during signin:", error);
      setError("An error occurred during sign in. Please try again.");
    }
  };

  return (
    <>
      <section className="login-content " style={{ overflow: "scroll" }}>
        <Container className="h-100">
          <Row className="align-items-center justify-content-center h-100">
            <Col md="5">
              <Card className="p-3">
                <Card.Body>
                  <div className="auth-logo">
                    <img
                      src={logo}
                      className={`img-fluid  rounded-normal  ${!props.darkMode ? "d-none" : ""
                        }`}
                      alt="logo"
                    />
                    <img
                      src={darklogo}
                      className={`img-fluid  rounded-normal  ${props.darkMode ? "d-none" : ""
                        }`}
                      alt="logo"
                    />
                  </div>
                  <h3 className="mb-3 mt-n3 text-uppercase font-weight-bold text-center">
                    SIGN IN
                  </h3>
                  <p className="mt-n3 text-center text-uppercase small mb-4">
                    Log in to your company account to continue
                  </p>
                  <div className="social-btn d-flex justify-content-around align-items-center mb-4">
                    <Button variant="btn btn-outline-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="88.428 12.828 107.543 207.085"
                      >
                        <path
                          d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
                          fill="#3c5a9a"
                        />
                      </svg>
                    </Button>
                    <Button variant="btn btn-outline-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 256 262"
                        preserveAspectRatio="xMidYMid"
                      >
                        <path
                          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                          fill="#4285F4"
                        />
                        <path
                          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                          fill="#34A853"
                        />
                        <path
                          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                          fill="#FBBC05"
                        />
                        <path
                          d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                          fill="#EB4335"
                        />
                      </svg>
                    </Button>
                    <Button variant="btn btn-outline-light">
                      <svg
                        width="20"
                        height="20"
                        viewBox="328 355 335 276"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570A  70,  70 0 0 1 370, 523A  70,  70 0 0 0 401, 521A  70,  70 0 0 1 344, 455A  70,  70 0 0 0 372, 460A  70,  70 0 0 1 354, 370A 195, 195 0 0 0 495, 442A  67,  67 0 0 1 611, 380A 117, 117 0 0 0 654, 363A  65,  65 0 0 1 623, 401A 117, 117 0 0 0 662, 390A  65,  65 0 0 1 630, 425Z"
                          fill="#3BA9EE"
                        />
                      </svg>
                    </Button>
                  </div>
                  <div className="mb-5">
                    <p className="line-around text-secondary mb-0">
                      <span className="line-around-1">or login with email</span>
                    </p>
                  </div>
                  <Form>
                    <Row>
                      <Col lg="12">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Email or Phone
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Email/Phone"
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group style={{ position: 'relative' }}>
                          <div className="d-flex justify-content-between align-items-center">
                            <Form.Label className="text-secondary">
                              Password
                            </Form.Label>
                            <Form.Label>
                              <Link to="/auth/recoverpw">Forgot Password?</Link>
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
                              type={showPassword ? "text" : "password"}
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
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
            top: showPassword ? "-40px" : "0px", // Slide up for hiding
            opacity: showPassword ? 0 : 1, // Fade out when sliding out
            transform: showPassword
              ? "scale(1.0) skewY(-50deg)" // Shrink and skew for hiding
              : "scaleY(1.06) skewY(0deg)", // Restore to normal size
            transition: "all 0.3s ease", // Smooth animation for all properties
          }}
        >
          <FaEye style={{ fontSize: "22px", color: "#5d5d5d" }} />
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
          <FaEyeSlash style={{ fontSize: "22px", color: "gray" }} />
        </div>
      </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    {error && <p className="text-danger">{error}</p>}

                    <Button
                      className="btn btn-primary btn-block mt-2"
                      onClick={handleSignIn}
                    >
                      Log In with Email/Phone
                    </Button>
                     <ToastContainer
                      position="bottom-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
{/* <PasswordInput/> */}
                    <Col lg="12" className="mt-3">
                      <p className="mb-0 text-center">
                        Don't have a company?{" "}
                        <Link to="/auth/registeration">
                          Create Company Account.
                        </Link>
                      </p>
                    </Col>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default connect(mapStateToProps)(SignIn);
