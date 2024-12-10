import React, { useState } from "react";

const RecordEvent = () => {
  const [eventType, setEventType] = useState("Accident");
  const [violations, setViolations] = useState([]);

  // Dummy data for dropdowns
  const trucks = ["Truck 101", "Truck 102", "Truck 103"];
  const drivers = ["Driver A", "Driver B", "Driver C"];

  // Handlers
  const handleAddViolation = () => {
    setViolations([
      ...violations,
      { type: "", description: "", points: 0, fine: 0 },
    ]);
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
    //   backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      boxSizing: "border-box",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "100%",
    //   maxWidth: "    ",
      boxSizing: "border-box",
    },
    header: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#0056b3",
      marginBottom: "20px",
      textAlign: "center",
    },
    breadcrumb: {
      marginBottom: "20px",
      color: "#888",
      fontSize: "14px",
      textAlign: "center",
    },
    form: { display: "flex", flexDirection: "column", gap: "20px" },
    input: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      resize: "vertical",
      minHeight: "100px",
    },
    select: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
    fileInput: { display: "block", padding: "10px 0" },
    buttonPrimary: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "4px",
      cursor: "pointer",
      marginRight: "1rem",
    },
    buttonSecondary: {
      backgroundColor: "#6c757d",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "4px",
      cursor: "pointer",
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
        <div style={styles.breadcrumb}>Safety → Record Event</div>

        {/* Form */}
        <form style={styles.form}>
          <select style={styles.select}>
            <option>Select Truck</option>
            {trucks.map((truck, index) => (
              <option key={index}>{truck}</option>
            ))}
          </select>
          <select style={styles.select}>
            <option>Select Driver</option>
            {drivers.map((driver, index) => (
              <option key={index}>{driver}</option>
            ))}
          </select>
          <input type="date" style={styles.input} placeholder="Event Date" />
          <select
            style={styles.select}
            onChange={(e) => setEventType(e.target.value)}
            value={eventType}
          >
            <option>Accident</option>
            <option>Incident</option>
            <option>Ticket</option>
          </select>

          {/* Dynamic Fields */}
          <div style={styles.dynamicSection}>
            {eventType === "Accident" && (
              <>
                <select style={styles.select}>
                  <option>Has Casualties?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <select style={styles.select}>
                  <option>Driver Drug Tested?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <input type="file" style={styles.fileInput} />
                <input type="file" style={styles.fileInput} />
                <input type="file" style={styles.fileInput} />
                <input type="file" style={styles.fileInput} multiple />
                <input type="text" style={styles.input} placeholder="Claim Type" />
                <input
                  type="number"
                  style={styles.input}
                  placeholder="Claim Amount"
                />
              </>
            )}
            {eventType === "Incident" && (
              <>
                <textarea style={styles.textarea} placeholder="Description"></textarea>
                <select style={styles.select}>
                  <option>Incident Type</option>
                  <option>Type A</option>
                  <option>Type B</option>
                </select>
                <input
                  type="number"
                  style={styles.input}
                  placeholder="Invoice Amount"
                />
                <input
                  type="date"
                  style={styles.input}
                  placeholder="Invoice Date"
                />
                <input
                  type="date"
                  style={styles.input}
                  placeholder="Closure Date"
                />
                <input type="file" style={styles.fileInput} multiple />
              </>
            )}
            {eventType === "Ticket" && (
              <>
                <input
                  type="number"
                  style={styles.input}
                  placeholder="Company Fee"
                />
                <input type="file" style={styles.fileInput} />
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
                            value={violation.type}
                            onChange={(e) =>
                              handleViolationChange(index, "type", e.target.value)
                            }
                          />
                        </td>
                        <td style={styles.td}>
                          <textarea
                            style={styles.textarea}
                            value={violation.description}
                            onChange={(e) =>
                              handleViolationChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                          ></textarea>
                        </td>
                        <td style={styles.td}>
                          <input
                            type="number"
                            style={styles.input}
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
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
