import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';

const CreateRole = ({ onClose }) => {
  const [roleName, setRoleName] = useState('');
  const [modules, setModules] = useState([]);
  const [selectedModules, setSelectedModules] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/Get_Modules');  
        setModules(response.data.modules || []);
      } catch (error) {
        setError('Failed to fetch modules. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchModules();
  }, []);

  // Handle module/component selection
  const handleModuleSelection = (moduleId, componentId, accessLevel) => {
    setSelectedModules((prevState) => {
      const newSelection = { ...prevState };

      if (!newSelection[moduleId]) {
        newSelection[moduleId] = {};
      }

      if (componentId) {
        newSelection[moduleId][componentId] = accessLevel || 1;
      } else {
        // Select entire module
        delete newSelection[moduleId]; // Uncheck the entire module
      }

      return newSelection;
    });
  };

  // Submit Role
  const handleSubmit = async () => {
    setError(null);
    setSuccessMessage(null);

    // Validation
    if (!roleName.trim()) {
      setError('Role Name is required.');
      return;
    }
    if (Object.keys(selectedModules).length === 0) {
      setError('Please select at least one module or component.');
      return;
    }

    const payload = {
      Role_Name: roleName,
      Selected_Modules: selectedModules,
    };

    setLoading(true);
    try {
      const response = await axios.post('/api/Create_Role', payload); // Replace with your API endpoint
      setSuccessMessage('Role created successfully!');
      setRoleName('');
      setSelectedModules({});
    } catch (error) {
      setError('Failed to create role. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading && <Spinner animation="border" className="mb-3" />}
        {error && <Alert variant="danger">{error}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}

        {/* Role Name Input */}
        <Form.Group className="mb-4">
          <Form.Label>Role Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter role name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </Form.Group>

        {/* Module and Component Checklist */}
        <h5>Select Modules and Components</h5>
        <div className="module-checklist">
          {modules.map((module) => (
            <div key={module.id} className="mb-3">
              <Form.Check
                type="checkbox"
                label={module.name}
                onChange={(e) =>
                  handleModuleSelection(
                    module.id,
                    null,
                    e.target.checked ? 1 : null
                  )
                }
              />
              <div className="ml-4">
                {module.components.map((component) => (
                  <div key={component.id} className="d-flex align-items-center">
                    <Form.Check
                      type="checkbox"
                      label={component.name}
                      onChange={(e) =>
                        handleModuleSelection(
                          module.id,
                          component.id,
                          e.target.checked ? 1 : null
                        )
                      }
                    />
                    <Form.Control
                      type="number"
                      className="ms-2"
                      style={{ width: '80px' }}
                      min={1}
                      max={2}
                      defaultValue={1}
                      onChange={(e) =>
                        handleModuleSelection(
                          module.id,
                          component.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      disabled={!selectedModules[module.id]?.[component.id]}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Create Role
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateRole;
