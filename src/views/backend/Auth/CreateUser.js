import React, { useState } from "react";
import { Container, Col, Row, Button, Form, InputGroup } from "react-bootstrap";
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

const CreateUser = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [userType, setUserType] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [error , setError] = useState(null);
  const navigate = useNavigate();

  const handleCreateUser = async () => {
    let item = { username, email, phone, password, companyId, roleId, userType, profileImage };

    try {
      let result = await fetch("http://localhost:5055/api/user/create-user", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });

      result = await result.json();
      console.log("Create User result:", result);

      if (result.success) {
        navigate("/dashboard");
      } else {
        setError("User not created.");
      }
    } catch (error) {
      console.error("Error during creating a user:", error);
      setError("An error occurred during user creation. Please try again.");
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
                      className={`img-fluid  rounded-normal  ${!props.darkMode ? "d-none" : ""}`}
                      alt="logo"
                    />
                    <img
                      src={darklogo}
                      className={`img-fluid  rounded-normal  ${props.darkMode ? "d-none" : ""}`}
                      alt="logo"
                    />
                  </div>
                  <h3 className="mb-3 font-weight-bold text-center">Create User</h3>
                  <div className="mb-5">
                    <p className="line-around text-secondary mb-0">
                      <span className="line-around-1">Enter user details</span>
                    </p>
                  </div>
                  <Form>
                    <Row>
                      <Col lg="12">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Username
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Username"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Phone
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Phone Number"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </Form.Group>
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
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Company ID
                          </Form.Label>
                          <Form.Control
                            type="name"
                            placeholder="Enter Company ID"
                            onChange={(e) => setCompanyId(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Role ID
                          </Form.Label>
                          <Form.Control
                            type="name"
                            placeholder="Enter Role ID"
                            onChange={(e) => setRoleId(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            User Type
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter User Type"
                            onChange={(e) => setUserType(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                      <Form>
                      <Form.Label className="text-secondary">
                            Profile Photo Upload
                          </Form.Label>
      
        <Row className="justify-content-center">
          
          <Col xs="auto">
            <InputGroup className="mb-3 d-flex justify-content-center align-items-center">
              {/* Hidden File Input */}
              
              <Form.Control 
                type="file" 
                id="inputGroupFile04" 
                aria-describedby="inputGroupFileAddon04" 
                className="d-none"
              />
              {/* Label styled like a button */}
              <label 
                htmlFor="inputGroupFile04" 
                className="btn btn-outline-secondary"
                style={{ marginRight: '10px', padding: '10px 20px', height: '50px', display: 'inline-box', marginTop: '8px', marginLeft: '-25px' }}
              >
                Choose file
              </label>
              {/* Upload Button */}
              <Button 
                variant="outline-secondary" 
                id="inputGroupFileAddon04" 
                style={{ padding: '10px 30px', height: '50px', display: 'inline-block' }}
                onClick={(e) => setProfileImage(e.target.value)}
              >
                Upload
              </Button>
            </InputGroup>
          </Col>
        </Row>
      
    </Form>
                      </Col>
                    </Row>
                    {/* Display error message if login fails */}
                    {error && <p className="text-danger">{error}</p>}

                    {/* Remove <Link> and replace it with Button */}
                    <Button
                      className="btn btn-primary btn-block mt--1"
                      onClick={handleCreateUser}
                    >
                      Log In with Email/Phone
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
