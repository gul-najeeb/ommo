import React, { useState } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Alert,
  ListGroup,
} from "react-bootstrap";

const HireDriver = () => {
  const [formData, setFormData] = useState({
    Driver_Name: "",
    Driver_Last_Name: "",
    Employment_Type: "",
    CDL_License_Number: "",
    Address: "",
    Status: "",
    Hiring_Status: "",
    License_State: "",
    Email: "",
    Phone_Number: "",
    Rating: "",
  });

  const [fileUploads, setFileUploads] = useState([]);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFileUploads([...fileUploads, newFile]);
    }
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/_/g, " ")} is required`;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted Successfully", formData, fileUploads);
      alert("Driver hired successfully!");
    }
  };

  return (
    <Container className="py-5">
      <Card className="shadow-lg p-4">
        <Card.Header as="h2" className="text-center text-primary">
          Hire Driver
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              {Object.keys(formData).map((key, index) => (
                <Col md={6} key={index} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      {key.replace(/_/g, " ")}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                      isInvalid={!!errors[key]}
                      placeholder={`Enter ${key.replace(/_/g, " ")}`}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors[key]}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              ))}
            </Row>

            {/* File Upload Section */}
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Upload Documents</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileUpload}
                className="border-secondary"
              />
              {fileUploads.length > 0 && (
                <ListGroup className="mt-2">
                  {fileUploads.map((file, index) => (
                    <ListGroup.Item key={index} className="d-flex align-items-center">
                      <span className="me-auto">{file.name}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Form.Group>

            {/* Submit Button */}
            <div className="d-grid">
              <Button
                variant="primary"
                size="lg"
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#007bff",
                  border: "none",
                  transition: "0.2s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }
              >
                Hire Driver
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HireDriver;
