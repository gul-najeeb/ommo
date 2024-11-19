import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Card from "../../../components/Card";
import { connect } from "react-redux";
import { getDarkMode } from "../../../store/mode";

//img
import logo from "../../../assets/images/logo.png";
import darklogo from "../../../assets/images/logo-dark.png";

import { Link } from "react-router-dom";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const ChangePassword = (props) => {
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
                  <h3 className="mb-3 text-center">Change Your Password</h3>
                  <p className="text-center small text-secondary mb-3">
                    You can change your password here
                  </p>
                  <Form>
                    <Row>
                      <Col lg="12">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Your New Password
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Your New Password"
                            className="mb-3"
                          />
                          <Form.Label className="text-secondary">
 Confirm Password 
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Confirm Password"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Link to="/" className="btn btn-primary btn-block">
                      Change My Password
                    </Link>
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

export default connect(mapStateToProps)(ChangePassword);
