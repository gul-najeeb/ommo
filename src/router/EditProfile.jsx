import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../services";
// import { axiosInstance } from  services";

const UpdateUserScreen = ({ userId }) => {
  const [userData, setUserData] = useState({
    userId: "",
    userName: "",
    emailOrPhone: "",
    roleId: "",
  });
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  // Fetch roles on page load
  useEffect(() => {
    const fetchRoles = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/api/Get_Roles", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setRoles(response.data.roles || []);
      } catch (err) {
        setError("Failed to fetch roles. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(`/api/Get_User/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserData({
          userId: response.data.userId || "",
          userName: response.data.userName || "",
          emailOrPhone: response.data.emailOrPhone || "",
          roleId: response.data.roleId || "",
        });
      } catch (err) {
        setError("Failed to fetch user details. Please try again.");
      }
    };

    fetchRoles();
    fetchUserData();
  }, [userId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle update submission
  const handleUpdate = async () => {
    setError(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      const payload = {
        User_id: userData.userId,
        User_name: userData.userName || null,
        EmailOrPhone: userData.emailOrPhone || null,
        Role_ID: userData.roleId || null,
      };

      const response = await axiosInstance.post("/api/Update_User", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setSuccessMessage("User updated successfully!");
      setTimeout(() => navigate("/settings/users"), 1500); // Redirect to Users page
    } catch (err) {
      setError("Failed to update user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Update User</h2>

      {loading && <Spinner animation="border" className="d-block mx-auto mb-3" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      <Form>
        {/* Hidden User ID */}
        <Form.Group>
          <Form.Control type="hidden" value={userData.userId} />
        </Form.Group>

        {/* User Name */}
        <Form.Group className="mb-3">
          <Form.Label className="font-weight-bold">User Name</Form.Label>
          <Form.Control
            type="text"
            name="userName"
            value={userData.userName}
            onChange={handleChange}
            placeholder="Enter user's name"
          />
        </Form.Group>

        {/* Email/Phone */}
        <Form.Group className="mb-3">
          <Form.Label className="font-weight-bold">Email/Phone</Form.Label>
          <Form.Control
            type="text"
            name="emailOrPhone"
            value={userData.emailOrPhone}
            onChange={handleChange}
            placeholder="Enter email or phone"
          />
        </Form.Group>

        {/* Role ID */}
        <Form.Group className="mb-3">
          <Form.Label className="font-weight-bold">Role</Form.Label>
          <Form.Control
            as="select"
            name="roleId"
            value={userData.roleId}
            onChange={handleChange}
          >
            <option value="">Select a role</option>
            {roles.map((role) => (
              <option key={role.roleId} value={role.roleId}>
                {role.roleName}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-4">
          <Button variant="secondary" onClick={() => navigate("/settings/users")}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => setShowConfirmation(true)}
          >
            Update User
          </Button>
        </div>
      </Form>

      {/* Confirmation Modal */}
      <Modal
        show={showConfirmation}
        onHide={() => setShowConfirmation(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to update this user's details?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowConfirmation(false);
              handleUpdate();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateUserScreen;
