import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import { connect } from "react-redux";
import { getDarkMode } from "../../../store/mode";

//img
import logo from "../../../assets/images/logo.png";
import darklogo from "../../../assets/images/logo-dark.png";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const SignUp = (props) => {
  const [Name, setname] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [MCNumber, setMcNumber] = useState("");
  const [CompanyType, setCompanyType] = useState("");
  
  const handleSignUp = async () => {
    let item = { Name, Email, Address, Phone, MCNumber, CompanyType };

    try {
      let result = await fetch("http://${baseUrl}/api/company/create-company", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });

      result = await result.json();
      console.log("Signup result:", result);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <>
      <section className="login-content">
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
                  <h3 className="mb-3 font-weight-bold text-center">
                    Getting Started
                  </h3>
                  <p className="text-center text-secondary mb-4">
                    Choose your social media to create account
                  </p>
                  <div className="social-btn d-flex justify-content-around align-items-center mb-4">
                    <Button variant="btn btn-outline-light">
                      {/* Social Media Icons */}
                    </Button>
                    <Button variant="btn btn-outline-light">
                      {/* Social Media Icons */}
                    </Button>
                    <Button variant="btn btn-outline-light">
                      {/* Social Media Icons */}
                    </Button>
                  </div>
                  <div className="mb-5">
                    <p className="line-around text-secondary mb-0">
                      <span className="line-around-1">
                        or register with email
                      </span>
                    </p>
                  </div>
                  <Form>
                    <Row>
                      <Col lg="12">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Name
                          </Form.Label>
                          <Form.Control
                            className="form-control"
                            type="name"
                            placeholder="Enter Name"
                            onChange={(e) => setname(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Email
                          </Form.Label>
                          <Form.Control
                            className="form-control"
                            type="email"
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Address
                          </Form.Label>
                          <Form.Control
                            className="form-control"
                            type="name"
                            placeholder="Enter Phone Number"
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Phone
                          </Form.Label>
                          <Form.Control
                            className="form-control"
                            type="name"
                            placeholder="Enter Password"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            MCNumber
                          </Form.Label>
                          <Form.Control
                            className="form-control"
                            type="name"
                            placeholder="Enter Company ID"
                            onChange={(e) => setMcNumber(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Company Type
                          </Form.Label>
                          <Form.Control
                            className="form-control"
                            type="name"
                            placeholder="Enter Company ID"
                            onChange={(e) => setCompanyType(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      {/* <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            User Type
                          </Form.Label>
                          <Form.Control
                            className="form-control"
                            type="name"
                            placeholder="Enter Company ID"
                            onChange={(e) => setUserType(e.target.value)}
                          />
                        </Form.Group>
                      </Col> */}
                      <Col lg="12" className="mt-2">
                        <Form.Check className="form-check-inline">
                          <div className="custom-control custom-checkbox custom-control-inline mb-3">
                            <Form.Check.Input
                              type="checkbox"
                              className="custom-control-input m-0"
                              id="inlineCheckbox1"
                            />
                            <Form.Check.Label
                              className="custom-control-label pl-2"
                              htmlFor="inlineCheckbox1"
                            >
                              I agree to the{" "}
                              <Link to="terms-of-service.html">
                                Terms of Service{" "}
                              </Link>{" "}
                              and{" "}
                              <Link to="privacy-policy.html">
                                Privacy Policy
                              </Link>
                            </Form.Check.Label>
                          </div>
                        </Form.Check>
                      </Col>
                    </Row>
                    <Button
                      onClick={handleSignUp}
                      className="btn btn-primary btn-block mt-2"
                    >
                      Create Account
                    </Button>
                    <div className="col-lg-12 mt-3">
                      <p className="mb-0 text-center">
                        Do you have an account?{" "}
                        <Link to="/auth/sign-in">Sign In</Link>
                      </p>
                    </div>
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

export default connect(mapStateToProps)(SignUp);
