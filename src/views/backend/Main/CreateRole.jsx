import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { axiosInstance } from '../../../services';

const CreateRoleScreen = () => {
  const [roleName, setRoleName] = useState('');
  const [modules, setModules] = useState([
    {
      id: 1,
      name: "User Management",
      components: [
        { id: 101, name: "Create User" },
        { id: 102, name: "Edit User" },
        { id: 103, name: "Delete User" }
      ]
    },
    {
      id: 2,
      name: "Reporting",
      components: [
        { id: 201, name: "View Reports" },
        { id: 202, name: "Export Reports" }
      ]
    }
  ]);
  const [selectedModules, setSelectedModules] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Fetch modules and components on page load
  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/api/module/modules/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
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
        // Select or deselect entire module (if no component ID)
        if (Object.keys(newSelection[moduleId]).length > 0) {
          delete newSelection[moduleId];
        } else {
          newSelection[moduleId] = {};
        }
      }

      return newSelection;
    });
  };

  // Submit Role
  const handleSubmit = async () => {
    console.log(selectedModules);
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
    const modulesPayload = Object.keys(selectedModules).map((moduleId) => {
      const components = Object.keys(selectedModules[moduleId]).map((componentId) => ({
        componentId: parseInt(componentId, 10), // Convert to number
        accessLevel: selectedModules[moduleId][componentId], // Access level for the component
      }));
  
      return {
        moduleId: parseInt(moduleId, 10), // Convert to number
        accessLevel: components.length ? 1 : 0, // Assuming module access level is 1 if it has selected components
        components,
      };
    });
    const payload = {
      roleName: roleName,
      companyId: 0,
      modules: modulesPayload,
    };
    
    console.log(payload, ' haha')
    // return 0;

    setLoading(true);
    try {
      const response = await axiosInstance.post('/api/role/create-role/', payload, {headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }});
      setSuccessMessage('Role created successfully!');
      setRoleName('');
      setSelectedModules({});
    } catch (error) {
      setError('Failed to create role. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if(loading){
    return <div className='d-flex justify-content-center align-items-center ' style={{height: '100vh'}}>

     <Spinner animation="grow" color='white' className="mb-3 m-auto" />
    </div>
  }
  return (
    <div className="container  mt-4">
      <h2>Create Role</h2>
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
      <div className="module-checklist" style={{
        height: '24rem',
        overflow: 'scroll'
      }}>
        {modules.map((module) => (
          <div key={module.moduleId} className="mb-3">
            <Form.Check
              type="checkbox"
              label={module.moduleName}
              onChange={(e) =>
                handleModuleSelection(
                  module.moduleId,
                  null,
                  e.target.checked ? 1 : null
                )
              }
            />
            <div className="ml-4 pl-1">
              {module.components.map((component) => (
                <div key={component.componentId} className="d-flex mt-2 align-items-center">
                  <Form.Check
                    type="checkbox"
                    label={component.componentName}
                    onChange={(e) =>
                      handleModuleSelection(
                        module.moduleId,
                        component.componentId,
                        e.target.checked ? 1 : null
                      )
                    }
                    disabled={!selectedModules[module.moduleId]} // Disable if module is not selected
                  />
                  <Form.Control
                    type="number"
                    className="ml-2 py-0"
                    style={{ width: '80px' }}
                    min={1}
                    max={2}
                    defaultValue={1}
                    onChange={(e) =>
                      handleModuleSelection(
                        module.moduleId,
                        component.componentId,
                        parseInt(e.target.value, 10)
                      )
                    }
                    disabled={!selectedModules[module.moduleId]?.[component.componentId]} // Enable only if the component is selected
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4">
        <Button variant="primary" onClick={handleSubmit}>
          Create Role
        </Button>
      </div>
    </div>
  );
};

export default CreateRoleScreen;
