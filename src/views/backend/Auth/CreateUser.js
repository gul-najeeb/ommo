import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Card from "../../../components/Card";
import { connect } from "react-redux";
import { getDarkMode } from "../../../store/mode";
import { ToastContainer, toast } from "react-toastify";

//img
import logo from "../../../assets/images/logo.png";
import darklogo from "../../../assets/images/logo-dark.png";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const CreateUser = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [status, setStatus] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUsername(location.state.username || "");
      setEmail(location.state.email || "");
      setPhone(location.state.phone || "");
      setCompanyId(location.state.companyId || "");
      setRoleId(location.state.roleId || "");
    }
  }, [location.state]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes

    if (file) {
      if (!allowedTypes.includes(file.type)) {
        toast.error("Invalid file type. Please upload a JPG or PNG image.");
        setProfileImage(null);
        return;
      }
      if (file.size > maxSize) {
        toast.error("File size exceeds 2MB. Please upload a smaller image.");
        setProfileImage(null);
        return;
      }
      setProfileImage(file);
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return false;
    }
    if (!/[0-9]/.test(password)) {
      toast.error("Password must contain at least one number.");
      return false;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      toast.error(
        "Password must contain at least one special character (!@#$%^&*)."
      );
      return false;
    }
    return true;
  };

  const handleCreateUser = async () => {
    setError(null);

    if (!validatePassword(password)) return;
    if (!profileImage) {
      toast.error("Profile image is required.");
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("companyId", companyId);
    formData.append("roleId", roleId);
    formData.append("status", status);
    formData.append("profileImageUrl", profileImage);

    try {
      let result = await fetch("http://localhost:5055/api/user/create-user", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      result = await result.json();
      if (result?.error) {
        toast.error(result.error);
        return;
      }

      if (result.message) {
        toast.success(result.message);
        navigate("/auth/sign-in");
      } else {
        toast.error(result.errors.profileImageUrl?.at(0));
      }
    } catch (error) {
      console.error("Error during user creation:", error);
      setError("An error occurred during user creation. Please try again.");
    }
  };

  return (
    <>
      <section className="login-content">
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
        <Container className="h-100">
          <Row className="align-items-center justify-content-center h-100">
            <Col md="5">
              <Card className="p-3">
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
                  <h3 className="mb-3 mt-n3 text-uppercase small font-weight-bold text-center">
                    Your company was successfully created.
                  </h3>
                  <h3 className="mb-3 mt-n3 text-uppercase small font-weight-bold text-center">
                    Create your user now.
                  </h3>
                  <div className="mb-5">
                    <p className="line-around text-secondary mb-0">
                      <span className="line-around-1 text-uppercase small">
                        Enter user details
                      </span>
                    </p>
                  </div>
                  <Form>
                    <Row>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Password
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Profile Photo Upload
                          </Form.Label>
                          <InputGroup className="mb-3 d-flex justify-content-center align-items-center">
                            <Form.Control
                              type="file"
                              id="inputGroupFile04"
                              aria-describedby="inputGroupFileAddon04"
                              onChange={handleFileChange}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Error message */}
                    {error && <p className="text-danger">{error}</p>}

                    <Button
                      className="btn btn-primary btn-block mt--1"
                      onClick={handleCreateUser}
                    >
                      Create User
                    </Button>
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

export default connect(mapStateToProps)(CreateUser);
