import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Table, Spinner } from 'react-bootstrap';
import { FaAngleRight, FaArrowRight, FaEdit } from 'react-icons/fa';
import Switch from 'react-switch';
import axios from 'axios';
import { axiosInstance } from '../../../services';
const myUsers = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phone: '+1-555-123-4567',
    role_name: 'Admin',
    status: true, // Toggle status (active/inactive)
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    phone: '+1-555-987-6543',
    role_name: 'Manager',
    status: false,
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    phone: '+1-555-567-1234',
    role_name: 'Employee',
    status: true,
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    phone: '+1-555-444-5555',
    role_name: 'Admin',
    status: false,
  },
  {
    id: 5,
    name: 'Edward Stark',
    email: 'edward.stark@example.com',
    phone: '+1-555-777-8888',
    role_name: 'Manager',
    status: true,
  },
];

const UserSettingsComponent = () => {
  const [users, setUsers] = useState(myUsers);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', phone: '', role_name: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch users from Get_Users API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axiosInstance.get('/api/role/get-roles', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }); // Replace with your API endpoint
        console.log(response.data, ' SS')
       } catch (err) {
        // setError('Failed to fetch users. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle toggle for user status
  const handleToggleStatus = async (index) => {
    const updatedUsers = [...users];
    const user = updatedUsers[index];
    const newStatus = !user.status;

    try {
      // await axios.post('/api/Post_Update_Status', { id: user.id, status: newStatus }); // Replace with your API endpoint
      updatedUsers[index].status = newStatus;
      setUsers(updatedUsers);
    } catch (err) {
      alert('Failed to update status. Please try again.');
    }
  };

  // Handle showing Add/Edit modal
  const handleShowModal = (index = null) => {
    if (index !== null) {
      setEditingIndex(index);
      setUserData(users[index]);
    } else {
      setEditingIndex(null);
      setUserData({ name: '', email: '', phone: '', role_name: '' });
    }
    setShowModal(true);
  };

  // Handle saving user data
  const handleSaveUser = async () => {
    try {
      if (editingIndex !== null) {
        // Edit existing user
        const response = await axios.put(`/api/Edit_User/${userData.id}`, userData); // Replace with your API endpoint
        const updatedUsers = [...users];
        updatedUsers[editingIndex] = response.data;
        setUsers(updatedUsers);
      } else {
        // Add new user
        const response = await axios.post('/api/Add_User', userData); // Replace with your API endpoint
        setUsers([...users, response.data]);
      }
      setShowModal(false);
    } catch (err) {
      alert('Failed to save user. Please try again.');
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Settings <FaAngleRight/> Users</h4>
        {/* <h5>Users</h5> */}
        <Button variant="primary" onClick={() => handleShowModal()}>
          Add User
        </Button>
      </div>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <div className="text-center text-danger">{error}</div>
      ) : (
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {users.length > 0 ? (
              
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role_name}</td>
                  <td>
                    <Switch
                      onChange={() => handleToggleStatus(index)}
                      checked={user.status}
                      onColor="#4CAF50"
                      offColor="#F44336"
                    />
                  </td>
                  <td>
                    <FaEdit
                      style={{ cursor: 'pointer' }}
                      color="blue"
                      onClick={() => handleShowModal(index)}
                      className="me-2"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}

      {/* Modal for Add/Edit User */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingIndex !== null ? 'Edit User' : 'Add User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter user email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user phone"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user role"
                value={userData.role_name}
                onChange={(e) =>
                  setUserData({ ...userData, role_name: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserSettingsComponent;
