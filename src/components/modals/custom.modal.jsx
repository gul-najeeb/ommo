// App.jsx
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CustomModal from './CustomModal';

const App = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showOkay, setShowOkay] = useState(false);

  const handleConfirm = () => {
    console.log('Confirmed!');
    setShowConfirm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    setShowForm(false);
  };

  const formContent = (
    <>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
    </>
  );

  return (
    <div>
      <Button onClick={() => setShowConfirm(true)}>Show Confirm Modal</Button>
      <Button onClick={() => setShowForm(true)}>Show Form Modal</Button>
      <Button onClick={() => setShowOkay(true)}>Show Okay Modal</Button>

      <CustomModal
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        title="Confirm Action"
        body="Are you sure you want to proceed?"
        type="confirm"
        onConfirm={handleConfirm}
      />

      <CustomModal
        show={showForm}
        onHide={() => setShowForm(false)}
        title="Fill Form"
        type="form"
        onSubmit={handleSubmit}
        formContent={formContent}
      />

      <CustomModal
        show={showOkay}
        onHide={() => setShowOkay(false)}
        title="Information"
        body="This is an okay modal."
        type="okay"
      />
    </div>
  );
};

export default App;

