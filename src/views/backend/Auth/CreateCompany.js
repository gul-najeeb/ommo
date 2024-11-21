import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Spinner,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import { connect } from "react-redux";
import { getDarkMode } from "../../../store/mode";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useForm, Controller } from "react-hook-form";

//img
import logo from "../../../assets/images/logo.png";
import darklogo from "../../../assets/images/logo-dark.png";
import { baseUrl } from "../../../constants";
import { decryptQueryParamToObject } from "../../../utils/crypto";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const CreateCompany = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [busy, setBusy] = useState(false);
  const [CompanyType, setCompanyType] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve Email and Phone from query parameters
  const queryParams = new URLSearchParams(location.search);
  const param1 = queryParams.get("__u");
  const { Email } = decryptQueryParamToObject(param1);
  
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  const handleCreateCompany = async (data) => {
    const item = {
      ...data,
      CompanyType,
      [isValidEmail(Email)? 'Email' : 'Phone']: Email // If Email is valid, key will be 'Email', else 'Phone'
      // Phone, // Phone from query params
    };

    // Validate CompanyType
    if (!CompanyType) {
      toast.error("Company Type is required");
      return;
    }

    try {
      setBusy(true);
      const response = await fetch(`${baseUrl}/api/company/create-company`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const result = await response.json();

      // toast.success("Your Company Successfully Created");
      console.log(result);
      if (result?.message) {
        toast.success(result?.message ?? "Your Company Successfully Created");
// console.log(result)
//         return;
        setTimeout(() => {
          navigate(`/auth/create-user?companyId=${result?.data?.companyId}&roleId=${result?.roleId}`, {
            state: {
              username: item.Name,
              email: item.Email,
              phone: item.Phone,
              companyId: result?.data?.companyId,
              roleId: result.roleId,
            },
          });
        }, 1500);
      } else {
        toast.error(result?.errors?.Email[0] || result?.title || result?.error);
      }
    } catch (error) {
      setBusy(false);
      toast.error("An error occurred during sign up.");
    } finally {
      setBusy(false);
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
                      className={`img-fluid rounded-normal ${!props.darkMode ? "d-none" : ""
                        }`}
                      alt="logo"
                    />
                    <img
                      src={darklogo}
                      className={`img-fluid rounded-normal ${props.darkMode ? "d-none" : ""
                        }`}
                      alt="logo"
                    />
                  </div>
                  <h3 className="mb-3 mt-n3 text-uppercase font-weight-bold text-center">
                    Getting Started
                  </h3>
                  <Form onSubmit={handleSubmit(handleCreateCompany)}>
                    <Row>
                      <Col lg="12">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Name
                          </Form.Label>
                          <Controller
                            name="Name"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                              <Form.Control
                                {...field}
                                type="text"
                                isInvalid={!!errors.Name}
                                placeholder="Enter Name"
                              />
                            )}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.Name?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Address
                          </Form.Label>
                          <Controller
                            name="Address"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Address is required" }}
                            render={({ field }) => (
                              <Form.Control
                                {...field}
                                isInvalid={!!errors.Address}
                                type="text"
                                placeholder="Enter Address"
                              />
                            )}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.Address?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                      {/* <Form.Group>
                          <Form.Label className="text-secondary">
                            Phone
                          </Form.Label>
                          <Controller
                            name="Phone"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Phone is required" }}
                            render={({ field }) => (
                              <Form.Control
                                {...field}
                                type="text"
                                isInvalid={!!errors.Phone}
                                placeholder="Enter Your Phone"
                              />
                            )}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.Phone?.message}
                          </Form.Control.Feedback>
                        </Form.Group> */}
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Email or Phone
                          </Form.Label>
                          <Form.Control type="text" value={Email} readOnly />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Label className="text-secondary">
                          Select Your Company Type
                        </Form.Label>
                        <ButtonGroup className="d-flex justify-content-center">
                          <Button
                            variant={
                              CompanyType === 1 ? "primary" : "outline-primary"
                            }
                            onClick={() => handleCompanyType(1)}
                          >
                            Carrier
                          </Button>
                          <Button
                            variant={
                              CompanyType === 2 ? "primary" : "outline-primary"
                            }
                            onClick={() => handleCompanyType(2)}
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
                            <Controller
                              name="MCNumber"
                              control={control}
                              defaultValue=""
                              rules={{
                                required: "MC Number is required",
                                pattern: {
                                  value: /^[a-zA-Z0-9]{6,}$/,
                                  message:
                                    "MC Number must be at least 6 alphanumeric characters",
                                },
                              }}
                              render={({ field }) => (
                                <Form.Control
                                  {...field}
                                  type="text"
                                  isInvalid={!!errors.MCNumber}
                                  placeholder="Enter MC Number"
                                />
                              )}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.MCNumber?.message}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      )}
                    </Row>
                    <Button
                      type="submit"
                      className="btn btn-primary btn-block mt-2"
                      disabled={busy}
                    >
                      {busy ? "Creating..." : "Create Company"}
                      {busy && <Spinner animation="border" size="sm" />}
                    </Button>
                    <ToastContainer position="bottom-center" autoClose={5000} />
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
