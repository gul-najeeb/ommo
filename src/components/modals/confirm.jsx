import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, onHide, title, body, footer }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title || 'Default Title'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body || 'Default body content.'}</Modal.Body>
      <Modal.Footer>
        {footer || (
          <>
            <Button variant="secondary" onClick={onHide}>Close</Button>
            <Button variant="primary" onClick={onHide}>Save Changes</Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
