import React, { useState, useEffect } from "react";
import {
  Card,
  Form,
  Row,
  Col,
  Button,
  Modal,
  Spinner,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegBuilding, FaSave, FaRedo } from "react-icons/fa";
import { fetchCompany, updateCompanyProfile } from "../../../services/company";
import { toast } from "react-toastify";

const CompanyProfile = () => {
  const [companyData, setCompanyData] = useState({});
  const [editableData, setEditableData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  // Fetch Company Profile Data
  const fetchCompanyProfile = async () => {
    setLoading(true);

    try {
        
        const data = await fetchCompany()
        // console.log(res)
        // const data = {};
        
      if (data) {
        setCompanyData(data);
        setEditableData({
          name: data.name || "",
          address: data.address || "",
        //   phone: data.phone || "",
          contact: data.contact || "",
          userCount: data?.userCount,
          companyType: data?.companyType,
          categoryType: data?.categoryType	,
          createdAt: data?.createdAt	
        //   website: data.website || "",
        //   contact_person: data.contact_person || "",
        });
      } else {
        setAlert({
          show: true,
          message: "Failed to fetch company data.",
          variant: "danger",
        });
      }
    } catch (error) {
      setAlert({ show: true, message: "Error fetching data.", variant: "danger" });
    } finally {
      setLoading(false);
    }
  };

  // Update Company Profile
  const handleUpdate = async () => {
      console.log(editableData)
      setLoading('button')
      const res = await updateCompanyProfile({
          name: editableData?.name,
          ...(isValidEmail(editableData?.contact) ? {email: editableData?.contact}: {phone:editableData?.contact}),
          address: editableData?.address
        });
        setLoading(false)
        console.log(res)
        toast.error(res?.response?.data?.message || 'Server Error')
        setShowModal(false);

    
  };

  // Handle Field Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  useEffect(() => {
    fetchCompanyProfile();
  }, []);

  return (
    <div className="container mt-2">
     
      {/* Card Wrapper */}
      <Card border="none" className="">
        <Card.Header className=" text-white d-flex align-items-center">
          {/* <FaRegBuilding size={20} color="gray" className="" /> */}
          <h5 className="mb-0 m-auto text-primary " style={{fontSize: 30}}>Company Profile Settings</h5>
        </Card.Header>
        <Card.Body>
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
              <p>Loading...</p>
            </div>
          ) : (
            <Form>
              {/* Editable Fields */}
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={editableData.name}
                      onChange={handleChange}
                      placeholder="Enter company name"
                    />
                  </Form.Group>
                </Col>
                
               
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email Or Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="contact"
                      value={editableData.contact}
                      onChange={handleChange}
                      placeholder="Enter email address"
                    />
                  </Form.Group>
                </Col>

              </Row>

              <Row className="mb-3">
               
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="address"
                      value={editableData.address}
                      onChange={handleChange}
                      placeholder="Enter company address"
                      rows={2}
                    />

                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Created At</Form.Label>
                    <Form.Control
                      type="text"
                      value={companyData.createdAt || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>
                 
               
              </Row>

            <Row className="mb-3">
            <Col md={6}>
                  <Form.Group>
                    <Form.Label>Category Type</Form.Label>
                    <Form.Control
                      type="text"
                      name="categoryType"
                      value={ editableData?.categoryType}
                    //   contentEditable={false}
                    readOnly
                    //   value={}
                      onChange={handleChange}
                    //   placeholder="Enter phone number"
                    />
                  </Form.Group>
                </Col>  
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Company Type</Form.Label>
                    <Form.Control
                      type="text"
                      value={companyData.companyType || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>
            </Row>
              <Row className="mb-3">
              <Col md={6}>
                  <Form.Group>
                    <Form.Label>User Count</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={ editableData?.userCount}
                    //   contentEditable={false}
                    readOnly
                    //   value={}
                      onChange={handleChange}
                    //   placeholder="Enter phone number"
                    />
                  </Form.Group>
                </Col>  
               
              
              </Row>

              {/* Non-Editable Fields */}
              <Row>
               
                
              </Row>

              {/* Buttons */}
              <div className="text-end mt-4">
                <Button   variant="secondary" className="mr-2" onClick={fetchCompanyProfile}>
                  <FaRedo className="mb-1" size={14} /> Reset
                </Button>
                <Button variant="primary" onClick={() => setShowModal(true)}>
                  <FaSave className="mb-1" /> Save
                </Button>
              </div>
            </Form>
          )}
        </Card.Body>
      </Card>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to update the company profile?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button disabled ={'button' == loading} variant="primary" onClick={handleUpdate}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CompanyProfile;
