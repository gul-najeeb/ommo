import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';

const CustomersComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ]);
  const [customerData, setCustomerData] = useState({ name: '', email: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleShowModal = () => {
    setShowModal(true);
    setCustomerData({ name: '', email: '' });
    setEditingIndex(null);
  };

  const handleEditCustomer = (index) => {
    setEditingIndex(index);
    setCustomerData(customers[index]);
    setShowModal(true);
  };

  const handleDeleteCustomer = (index) => {
    const updatedCustomers = [...customers];
    updatedCustomers.splice(index, 1);
    setCustomers(updatedCustomers);
  };

  const handleSaveCustomer = () => {
    if (editingIndex !== null) {
      const updatedCustomers = [...customers];
      updatedCustomers[editingIndex] = customerData;
      setCustomers(updatedCustomers);
    } else {
      setCustomers([...customers, { ...customerData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Customers</h4>
        <Button variant="primary" onClick={handleShowModal}>
          Add Customer
        </Button>
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer, index) => (
              <tr key={customer.id}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>Hotel Inn</td>

                <td className=''> 
                    <FaEye  style={{cursor: 'pointer' }} className='mr-2' color="gray" /> 
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2 mr-2"
                    onClick={() => handleEditCustomer(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteCustomer(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal for Add/Edit Customer */}
      <Modal show={showModal} className='rounded-lg' onHide={() => setShowModal(false)}>
        <Modal.Header className="bg-primary  " closeButton>
          <Modal.Title>
            {editingIndex !== null ? 'Edit Customer' : 'Add Customer'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter customer name"
                value={customerData.name}
                onChange={(e) =>
                  setCustomerData({ ...customerData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter customer email"
                value={customerData.email}
                onChange={(e) =>
                  setCustomerData({ ...customerData, email: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveCustomer}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomersComponent;
