import React, { useState } from 'react';

const DriverPerformance = () => {
    const [eventType, setEventType] = useState('Accident');
    const [modalShow, setModalShow] = useState(false);

    const styles = {
        container: { padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' },
        header: { fontSize: '24px', fontWeight: 'bold', color: '#0056b3', marginBottom: '20px' },
        row: { display: 'flex', flexWrap: 'wrap', gap: '20px' },
        column: { flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '10px' },
        card: {
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        cardHeader: { fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' },
        cardBody: { marginTop: '10px' },
        button: {
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            textAlign: 'center',
        },
        buttonSecondary: {
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            textAlign: 'center',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            marginBottom: '10px',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '15px',
        },
        th: {
            borderBottom: '2px solid #ddd',
            padding: '10px',
            textAlign: 'left',
            backgroundColor: '#f8f9fa',
        },
        td: { borderBottom: '1px solid #ddd', padding: '10px' },
        badge: { padding: '10px 30px', borderRadius: '4px', color: '#fff', fontSize: '16px' },
        badgeDanger: { backgroundColor: '#dc3545' },
        badgeWarning: { backgroundColor: '#ffc107', color: '#333' },
        badgeInfo: { backgroundColor: '#17a2b8' },
        modal: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            zIndex: 1000,
        },
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
        },
    };

    const handleFilter = () => {
        // Implement filter logic
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>Safety → View Performance for Driver</div>

            {/* Main Content */}
            <div style={styles.row}>
                {/* Left Section: Event List */}
                <div style={styles.column}>
                    <div style={styles.card}>
                        <div style={styles.cardHeader}>Event List</div>
                        <div style={styles.cardBody}>
                            {/* Filters */}
                            <input style={styles.input} placeholder="Driver ID" />
                            <input style={styles.input} placeholder="Truck ID" />
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <input style={styles.input} type="date" />
                                <input style={styles.input} type="date" />
                            </div>
                            <select style={styles.input}>
                                <option>Accident</option>
                                <option>Incident</option>
                                <option>Ticket</option>
                            </select>
                            <button style={styles.button} onClick={handleFilter}>
                                Filter Events
                            </button>
                        </div>
                    </div>

                    {/* Event List Table */}
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Event ID</th>
                                <th style={styles.th}>Truck ID</th>
                                <th style={styles.th}>Event Type</th>
                                <th style={styles.th}>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={styles.td}>101</td>
                                <td style={styles.td}>TX-123</td>
                                <td style={{ ...styles.td, ...styles.badge, ...styles.badgeDanger }}>
                                    Accident
                                </td>
                                <td style={styles.td}>2024-12-01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Right Section */}
                <div style={{ ...styles.column, flex: 2 }}>
                    {/* Performance Stats */}
                    <div style={styles.row}>
                        <div style={styles.card} style={{ flex: 1 }}>
                            <div style={styles.cardBody}>
                                <h5>Accidents</h5>
                                <h3 style={{ color: '#dc3545' }}>5</h3>
                            </div>
                        </div>
                        <div style={styles.card} style={{ flex: 1 }}>
                            <div style={styles.cardBody}>
                                <h5>Incidents</h5>
                                <h3 style={{ color: '#ffc107' }}>12</h3>
                            </div>
                        </div>
                        <div style={styles.card} style={{ flex: 1 }}>
                            <div style={styles.cardBody}>
                                <h5>Tickets</h5>
                                <h3 style={{ color: '#17a2b8' }}>8</h3>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Event Details */}
                    <div style={styles.card}>
                        <div style={styles.cardHeader}>Event Details: {eventType}</div>
                        <div style={styles.cardBody}>
                            {eventType === 'Accident' && (
                                <>
                                    <h6>Accident Details</h6>
                                    <input style={styles.input} placeholder="Accident Date" type="date" />
                                    <button style={styles.buttonSecondary} onClick={() => setModalShow(true)}>
                                        View Documents
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Viewing Documents */}
            {modalShow && (
                <>
                    <div style={styles.overlay} onClick={() => setModalShow(false)} />
                    <div style={styles.modal}>
                        <h5>Documents</h5>
                        <ul>
                            <li><a href="#" target="_blank">Police Report</a></li>
                            <li><a href="#" target="_blank">Drug Test Report</a></li>
                            <li><a href="#" target="_blank">Driver Statement</a></li>
                        </ul>
                        <button style={styles.buttonSecondary} onClick={() => setModalShow(false)}>
                            Close
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default DriverPerformance;
    