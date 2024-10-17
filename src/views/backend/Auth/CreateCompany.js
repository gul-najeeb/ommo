import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import { connect } from "react-redux";
import { getDarkMode } from "../../../store/mode";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

//img
import logo from "../../../assets/images/logo.png";
import darklogo from "../../../assets/images/logo-dark.png";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const CreateCompany = (props) => {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [CompanyType, setCompanyType] = useState("");
  const [CategoryType, setCategoryType] = useState("1");
  const [MCNumber, setMcNumber] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCreateCompany = async (event) => {
    event.preventDefault();

    let item = {
      Name,
      Address,
      Phone,
      Email,
      CompanyType,
      CategoryType,
      MCNumber,
    };

    try {
      let response = await fetch(
        "http://localhost:5055/api/company/create-company",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      let result = await response.json();
      console.log("Signup result:", result);

      if (
        result.message ||
        result.status === "success" ||
        result.statusCode === 200
      ) {
        toast.success("Company created successfully.");

        setTimeout(() => {
          navigate("/auth/create-user", {
            state: {
              username: item.Name,
              email: item.Email,
              phone: item.Phone,
              companyId: result.companyId,
              roleId: result.roleId,
            },
          });
        }, 1500);
      } else {
        toast.error(result.message || "Company not created.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred during sign up. Please try again.");
      toast.error("An error occurred during sign up.");
    }
  };

  const handleCompanyType = (type) => {
    setCompanyType(type);
  };

  return (
    <>
      <section
        className="login-content"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Container
          className="h-100"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Row className="align-items-center justify-content-center w-100">
            <Col md="5">
              <Card className="p-3">
                <Card.Body>
                  <div className="auth-logo text-center">
                    <img
                      src={logo}
                      className={`img-fluid rounded-normal ${
                        !props.darkMode ? "d-none" : ""
                      }`}
                      alt="logo"
                    />
                    <img
                      src={darklogo}
                      className={`img-fluid rounded-normal ${
                        props.darkMode ? "d-none" : ""
                      }`}
                      alt="logo"
                    />
                  </div>
                  <h3 className="mb-3 mt-n3 text-uppercase font-weight-bold text-center">
                    Getting Started
                  </h3>
                  <p className="mt-n3 text-center text-uppercase small mb-4">
                    Choose your social media to create company
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
                  <div className="mb-10">
                    <p className="mt-n3 text-center text-uppercase small mb-2">
                      Choose your social media to create company
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
                          <Form.Label
                            onClick={() => {
                              // navigation
                            }}
                            className="text-secondary"
                          >
                            Phone
                          </Form.Label>
                          <Form.Control
                            className="form-control"
                            type="name"
                            placeholder="Enter Phone"
                            onChange={(e) => setPhone(e.target.value)}
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
                            type="name"
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Label className="text-secondary">
                          Select Company Type
                        </Form.Label>
                        <ButtonGroup className="d-flex justify-content-center">
                          <Button
                            style={{
                              transition: "all 0.3s",
                              color: "#007bff",
                              border: "1px solid #78d421",
                            }}
                            variant="button btn button-icon bg-white text-primary"
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#007bff";
                              e.target.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "#fff";
                              e.target.style.color = "#007bff";
                            }}
                            onClick={() => handleCompanyType(1)}
                            target="_blank"
                          >
                            Carrier
                          </Button>
                          <Button
                            style={{
                              transition: "all 0.3s",
                              color: "#007bff",
                              border: "1px solid #78d421",
                            }}
                            variant="button btn button-icon bg-white text-primary"
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#007bff";
                              e.target.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "#fff";
                              e.target.style.color = "#007bff";
                            }}
                            onClick={() => handleCompanyType(2)}
                            target="_blank"
                          >
                            Dispatch
                          </Button>
                        </ButtonGroup>
                      </Col>
                      {CompanyType === 1 && (
                        <Col lg="12" className="mt-2">
                          <Form.Group>
                            <Form.Label className="text-secondary">
                              MC Number
                            </Form.Label>
                            <Form.Control
                              className="form-control"
                              type="text"
                              placeholder="Enter MC Number"
                              onChange={(e) => setMcNumber(e.target.value)}
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
                      onClick={handleCreateCompany}
                      className="btn btn-primary btn-block mt-2"
                    >
                      Create Company
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

export default connect(mapStateToProps)(CreateCompany);
