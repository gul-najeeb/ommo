import React, { useState } from "react";

const RecordEvent = () => {
  const [eventType, setEventType] = useState("Accident");
  const [violations, setViolations] = useState([]);

  // Dummy data for dropdowns
  const trucks = ["Truck 101", "Truck 102", "Truck 103"];
  const drivers = ["Driver A", "Driver B", "Driver C"];

  // Handlers
  const handleAddViolation = () => {
    setViolations([...violations, { type: "", description: "", points: 0, fine: 0 }]);
  };

  const handleRemoveViolation = (index) => {
    const updatedViolations = violations.filter((_, i) => i !== index);
    setViolations(updatedViolations);
  };

  const handleViolationChange = (index, field, value) => {
    const updatedViolations = violations.map((violation, i) =>
      i === index ? { ...violation, [field]: value } : violation
    );
    setViolations(updatedViolations);
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      // backgroundColor: "#f5f7fa",
      minHeight: "100vh",
    },
    card: {
      // backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "8px",
      // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "960px",
    },
    header: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#4a4a4a",
      marginBottom: "5px",
    },
    breadcrumb: {
      marginBottom: "20px",
      color: "#888",
      fontSize: "16px",
    },
    label: {
      marginTop: 'rem',
      marginBottom: '2rem',
      fontWeight: "600",
      color: "#4a4a4a",
      marginBottom: "5px",
    },
    form: { display: "flex", flexDirection: "column", gap: "15px" },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      resize: "vertical",
    },
    select: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
    fileInput: {
      display: "block",
      padding: "10px 0",
    },
    buttonPrimary: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "600",
    },
    buttonSecondary: {
      backgroundColor: "#6c757d",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "600",
    },
    dynamicSection: {
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      marginTop: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "15px",
    },
    th: {
      borderBottom: "2px solid #ddd",
      padding: "10px",
      textAlign: "left",
      backgroundColor: "#f8f9fa",
    },
    td: { borderBottom: "1px solid #ddd", padding: "10px" },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>Record Event</div>
        <div style={styles.breadcrumb}>Capture the details of safety events during driving</div>

        {/* Form */}
        <form style={styles.form}>
          <div>
            <label style={styles.label}>Truck</label>
            <select style={styles.select}>
              <option value="">Select Truck</option>
              {trucks.map((truck, index) => (
                <option key={index}>{truck}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label}>Driver</label>
            <select style={styles.select}>
              <option value="">Select Driver</option>
              {drivers.map((driver, index) => (
                <option key={index}>{driver}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label}>Event Date</label>
            <input type="date" style={styles.input} />
          </div>

          <div>
            <label style={styles.label}>Event Type</label>
            <select
              style={styles.select}
              onChange={(e) => setEventType(e.target.value)}
              value={eventType}
            >
              <option>Accident</option>
              <option>Incident</option>
              <option>Ticket</option>
            </select>
          </div>

          {/* Dynamic Fields */}
          <div style={styles.dynamicSection}>
            {eventType === "Accident" && (
              <>
                <label style={styles.label}>Casualties</label>
                <select style={styles.select}>
                  <option value="">Has Casualties?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>

                <label style={styles.label}>Driver Drug Tested</label>
                <select style={styles.select}>
                  <option value="">Driver Drug Tested?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>

                <label style={styles.label}>Upload Photos</label>
                <input type="file" style={styles.fileInput} multiple />

                <label style={styles.label}>Claim Type</label>
                <input type="text" style={styles.input} placeholder="Enter claim type" />

                <label style={styles.label}>Claim Amount</label>
                <input type="number" style={styles.input} placeholder="Enter claim amount" />
              </>
            )}
            {eventType === "Incident" && (
              <>
                <label style={styles.label}>Description</label>
                <textarea style={styles.textarea} placeholder="Enter incident description"></textarea>

                <label style={styles.label}>Incident Type</label>
                <select style={styles.select}>
                  <option value="">Select incident type</option>
                  <option>Type A</option>
                  <option>Type B</option>
                </select>

                <label style={styles.label}>Invoice Amount</label>
                <input
                  type="number"
                  style={styles.input}
                  placeholder="Enter invoice amount"
                />

                <label style={styles.label}>Invoice Date</label>
                <input type="date" style={styles.input} />

                <label style={styles.label}>Closure Date</label>
                <input type="date" style={styles.input} />

                <label style={styles.label}>Upload Files</label>
                <input type="file" style={styles.fileInput} multiple />
              </>
            )}
            {eventType === "Ticket" && (
              <>
                <label style={styles.label}>Company Fee</label>
                <input
                  type="number"
                  style={styles.input}
                  placeholder="Enter company fee"
                />

                <label style={styles.label}>Upload Supporting Documents</label>
                <input type="file" style={styles.fileInput} multiple />

                <label style={styles.label}>Violations</label>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Violation Type</th>
                      <th style={styles.th}>Description</th>
                      <th style={styles.th}>Points</th>
                      <th style={styles.th}>Fine</th>
                      <th style={styles.th}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {violations.map((violation, index) => (
                      <tr key={index}>
                        <td style={styles.td}>
                          <input
                            type="text"
                            style={styles.input}
                            placeholder="Enter violation type"
                            value={violation.type}
                            onChange={(e) =>
                              handleViolationChange(index, "type", e.target.value)
                            }
                          />
                        </td>
                        <td style={styles.td}>
                          <input
                            type="text"
                            style={styles.input}
                            placeholder="Enter description"
                            value={violation.description}
                            onChange={(e) =>
                              handleViolationChange(index, "description", e.target.value)
                            }
                          />
                        </td>
                        <td style={styles.td}>
                          <input
                            type="number"
                            style={styles.input}
                            placeholder="Enter points"
                            value={violation.points}
                            onChange={(e) =>
                              handleViolationChange(index, "points", e.target.value)
                            }
                          />
                        </td>
                        <td style={styles.td}>
                          <input
                            type="number"
                            style={styles.input}
                            placeholder="Enter fine"
                            value={violation.fine}
                            onChange={(e) =>
                              handleViolationChange(index, "fine", e.target.value)
                            }
                          />
                        </td>
                        <td style={styles.td}>
                          <button
                            style={styles.buttonSecondary}
                            onClick={() => handleRemoveViolation(index)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  style={{ ...styles.buttonPrimary, marginTop: "10px" }}
                  onClick={handleAddViolation}
                  type="button"
                >
                  Add Violation
                </button>
              </>
            )}
          </div>

          {/* Submit and Cancel Buttons */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <button style={styles.buttonPrimary} type="submit">
              Record Event
            </button>
            <button
              style={styles.buttonSecondary}
              type="button"
              onClick={() => console.log("Cancel")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordEvent;
