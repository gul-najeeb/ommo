import React from 'react';

const UnitStatusBadge = ({ status }) => {
  let styles = {
    display: 'inline-block',
    padding: '3px 10px',
    borderRadius: '12px',
    color: 'white',
    // opacity: 0.8,
    fontWeight: 'bold',
  };

  switch (status) {
    case 'Active':
      styles.backgroundColor = 'green'; // Green
      break;
    case 'IDLE':
      styles.backgroundColor = 'red';   // Red
      break;
    case 'Pending':
      styles.backgroundColor = 'orange'; // Orange
      break;
    default:
      styles.backgroundColor = 'gray';   // Default color
  }

  return <span style={styles}>{status}</span>;
};

export default UnitStatusBadge;
