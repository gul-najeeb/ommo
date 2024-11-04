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
import { Link, useNavigate } from "react-router-dom";
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
import { encryptObjectToQueryParam } from "../../../utils/crypto";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const EmailPhone = (props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();
  // get query params

  const queryParams = new URLSearchParams(window.location.search);
  const onSubmit = async (data) => {
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      const encryptedUser = encryptObjectToQueryParam(data);
      console.log(data, queryParams);
      navigate("/auth/verify-otp?__u=" + encryptedUser);
    }, 1000);
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
                      src={props.darkMode ? darklogo : logo}
                      className="img-fluid rounded-normal"
                      alt="logo"
                    />
                  </div>
                  <h3 className="mb-3 mt-n3 text-uppercase font-weight-bold text-center">
                    Getting Started
                  </h3>
                  <p className="mt-n3 text-center text-uppercase small mb-4">
                    Choose your social media to create company
                  </p>

                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Phone
                          </Form.Label>
                          <Controller
                            name="Phone"
                            control={control}
                            rules={{ required: "Phone is required" }}
                            render={({ field }) => (
                              <Form.Control
                                {...field}
                                type="text"
                                placeholder="Enter Phone"
                                isInvalid={!!errors.Phone}
                              />
                            )}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.Phone?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Email
                          </Form.Label>
                          <Controller
                            name="Email"
                            control={control}
                            rules={{
                              required: "Email is required",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format",
                              },
                            }}
                            render={({ field }) => (
                              <Form.Control
                                {...field}
                                type="email"
                                placeholder="Enter Email"
                                isInvalid={!!errors.Email}
                              />
                            )}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.Email?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      type="submit"
                      disabled={busy}
                      className="btn d-flex justify-content-center align-items-center gap-3 btn-primary btn-block mt-2"
                    >
                      <span>{busy ? "Proceeding..." : "Proceed Continue"}</span>
                      {busy && (
                        <Spinner
                          style={{ marginLeft: "6px" }}
                          animation="border"
                          variant="light"
                          size="sm"
                        />
                      )}
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

export default connect(mapStateToProps)(EmailPhone);
