import React, { useState } from "react";
import { Container, Col, Row, Form, Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
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
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneOrEmail, setPhoneOrEmail] = useState("");
  const [CompanyType, setCompanyType] = useState(""); // To track Carrier or Dispatch
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleSignUp = async (event) => {
    event.preventDefault();
  
    let item = { Name, Address, PhoneOrEmail, CompanyType };
  
    try {
      let result = await fetch("http://localhost:5055/api/company/create-company", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });
  
      result = await result.json();
      console.log("Signup result:", result);
  
      if (result.authorized) {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred during sign up. Please try again.");
    }
  };

  const handleCompanyType = (type) => {
    setCompanyType(type); // Set the company type to either 'Carrier' or 'Dispatch'
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
                    Choose your social media to create company
                  </p>
                  <div className="social-btn d-flex justify-content-around align-items-center mb-4">
                    {/* Social buttons */}
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
                            onChange={(e) => setName(e.target.value)}
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
                            placeholder="Enter Address"
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Phone/Email
                          </Form.Label>
                          <Form.Control
                            className="form-control"
                            type="name"
                            placeholder="Enter Phone"
                            onChange={(e) => setPhoneOrEmail(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Label className="text-secondary">
                          Select Company Type
                        </Form.Label>
                        <ButtonGroup className="d-flex justify-content-center"> 
                          <Button
                            style={{ transition: 'all 0.3s', color: '#007bff', border: '1px solid #78d421' }} 
                            variant="button btn button-icon bg-white text-primary"
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = '#007bff';
                              e.target.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = '#fff';
                              e.target.style.color = '#007bff';
                            }}
                            onClick={() => handleCompanyType('Carrier')} // Set to Carrier
                            target="_blank"
                          >
                            Carrier
                          </Button>
                          <Button
                            style={{ transition: 'all 0.3s', color: '#007bff', border: '1px solid #78d421' }}
                            variant="button btn button-icon bg-white text-primary"
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = '#007bff';
                              e.target.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = '#fff';
                              e.target.style.color = '#007bff';
                            }}
                            onClick={() => handleCompanyType('Dispatch')} // Set to Dispatch
                            target="_blank"
                          >
                            Dispatch
                          </Button>
                        </ButtonGroup>
                      </Col>

                      {/* Conditionally render MC Number input if company type is Carrier */}
                      {CompanyType === 'Carrier' && (
                        <Col lg="12" className="mt-2">
                          <Form.Group>
                            <Form.Label className="text-secondary">
                              MC Number
                            </Form.Label>
                            <Form.Control
                              className="form-control"
                              type="text"
                              placeholder="Enter MC Number"
                            />
                          </Form.Group>
                        </Col>
                      )}

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
                      type="button"
                      onClick={handleSignUp}
                      className="btn btn-primary btn-block mt-2"
                    >
                      Create Company
                    </Button>

                    <div className="col-lg-12 mt-3">
                      <p className="mb-0 text-center">
                        Already have a company?{" "}
                        <Link to="/auth/sign-in">Sign In.</Link>
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