import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../../../components/Card";
import { connect } from "react-redux";
import { getDarkMode } from "../../../store/mode";
import { ToastContainer, toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

//img
import logo from "../../../assets/images/logo.png";
import darklogo from "../../../assets/images/logo-dark.png";
import { baseUrl } from "../../../constants";

 
function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

{/* <Pages */}
const CreateUser = (props) => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const _companyId = queryParams.get('companyId');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [status, setStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imgFile, setImgFile] = useState(null)
  const [profileImagePreview, setProfileImagePreview] = useState(null);

  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUsername(location.state.username || "");
      setEmail(location.state.email || "");
      setPhone(location.state.phone || "");
      setCompanyId(_companyId || "");
      setRoleId(location.state.roleId || "");
    }
  }, [location.state]);

  const onSubmit = async (data) => {
    // return;
    const formData = new FormData();
    formData.append("Username", 'username');
    formData.append("Email", email);
    formData.append("Phone", phone);
    formData.append("Password", data.password);
    formData.append("CompanyId", companyId);
    formData.append("RoleId", 1);
    formData.append("Status", "Active" || '');
    formData.append("profileImageUrl", imgFile);
    console.log(imgFile, profileImagePreview)

    try {
      const result = await fetch(baseUrl+"/api/user/create-user", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const responseData = await result.json();
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        toast.success(responseData.message);
        // navigate("/auth/sign-in");
      }
    } catch (error) {
      toast.error("An error occurred during user creation.");
    }
  };

  // Watch for password field to match in confirm password validation
  const password = watch("password");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file)
      setProfileImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <section className="login-content">
        <ToastContainer position="bottom-center" autoClose={5000} />
        <Container className="h-100">
          <Row className="align-items-center justify-content-center h-100">
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
                  <h3 className="mb-3 mt-n3 text-uppercase small font-weight-bold text-center">
                    Create your user now.
                  </h3>

                  {/* Profile Image Preview */}
                  <div className="text-center mb-4">
                    {profileImagePreview ? (
                      <img
                        src={profileImagePreview}
                        alt=""
                        className="rounded-circle"
                        style={{
                          width: "140px",
                          height: "140px",
                          cursor: "pointer",

                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center"
                        style={{ width: "140px", height: "140px" }}
                      >
                        <span className="text-secondary">Your Profile</span>
                      </div>
                    )}
                  </div>

                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Password
                          </Form.Label>
                          <InputGroup>
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter Password"
                              isInvalid={!!errors.password}
                              {...register("password", {
                                required: "Password is required",
                                minLength: {
                                  value: 8,
                                  message:
                                    "Password must be at least 8 characters",
                                },
                                // pattern: {
                                //   value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                                //   message:
                                //     "Must include uppercase, lowercase, number, and special character",
                                // },
                              })}
                            />
                            <InputGroup.Text
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </InputGroup.Text>
                          </InputGroup>
                          {errors.password && (
                            <small className="text-danger d-block mt-1">
                              {errors.password.message}
                            </small>
                          )}
                        </Form.Group>
                      </Col>

                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Confirm Password
                          </Form.Label>
                          <InputGroup>
                            <Form.Control
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm Password"
                              isInvalid={!!errors.confirmPassword}
                              {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) =>
                                  value === password ||
                                  "Passwords do not match",
                              })}
                            />
                            <InputGroup.Text
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </InputGroup.Text>
                          </InputGroup>
                          {errors.confirmPassword && (
                            <small className="text-danger d-block mt-1">
                              {errors.confirmPassword.message}
                            </small>
                          )}
                        </Form.Group>
                      </Col>

                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Profile Photo Upload
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <Controller
                              name="profileImage"
                              control={control}
                              rules={
                                {
                                  // required: "Profile image is required",
                                }
                              }
                              render={({ field }) => (
                                <Form.Control
                                  {...field}
                                  type="file"
                                  onChange={handleFileChange}
                                  isInvalid={!!errors.profileImage}
                                />
                              )}
                            />
                            {errors.profileImage && (
                              <small className="text-danger d-block mt-1">
                                {errors.profileImage.message}
                              </small>
                            )}
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      className="btn btn-primary btn-block mt-2"
                      type="submit"
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
