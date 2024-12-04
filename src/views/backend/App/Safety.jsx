import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SafetyScreen = () => {
  // Sample Data for Drivers List
  const driversList = [
    {
      Driver_ID: 1,
      Driver_Name: "Alice Johnson",
      Status: "Active",
      Rating: 4.5,
    },
    {
      Driver_ID: 2,
      Driver_Name: "Bob Smith",
      Status: "Pending",
      Rating: 3.8,
    },
    {
      Driver_ID: 3,
      Driver_Name: "Charlie Brown",
      Status: "Inactive",
      Rating: 4.2,
    },
  ];

  const [selectedDriver, setSelectedDriver] = useState(null);
  const [searchText, setSearchText] = useState(""); // State for search input
  const [ratingFilter, setRatingFilter] = useState("all"); // State for rating filter

  const handleDriverSelect = (driverId) => {
    // Simulate fetching data based on driver ID
    const selected = driversList.find((driver) => driver.Driver_ID === driverId);
    setSelectedDriver(selected);
  };

  const nav = useNavigate();

  // Filter drivers based on search text and rating
  const filteredDrivers = driversList.filter((driver) => {
    const matchesSearch =
      driver.Driver_Name.toLowerCase().includes(searchText.toLowerCase());
    const matchesRating =
      ratingFilter === "all" || driver.Rating >= parseFloat(ratingFilter);
    return matchesSearch && matchesRating;
  });

  return (
    <div style={styles.container}>
      {/* Hire Driver Button */}
      <div style={styles.header}>
        <h1 style={styles.title}>Safety Screen</h1>
        <button
          style={styles.hireButton}
          onClick={() => nav("/hire-driver")}
        >
          Hire Driver
        </button>
      </div>

      <div style={styles.content}>
        {/* Left Section: Drivers List */}
        <div style={styles.leftSection}>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Drivers"
            style={styles.searchInput}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {/* Rating Filter */}
          <div style={styles.dropdown}>
            <select
              style={styles.select}
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
              <option value="all">All Ratings</option>
              <option value="4.0">4.0 & above</option>
              <option value="3.5">3.5 & above</option>
            </select>
          </div>

          {/* Driver List */}
          <div style={styles.driverList}>
            {filteredDrivers.length > 0 ? (
              filteredDrivers.map((driver) => (
                <div
                  key={driver.Driver_ID}
                  style={styles.driverCard}
                  onClick={() => handleDriverSelect(driver.Driver_ID)}
                >
                  <h4 style={styles.driverName}>{driver.Driver_Name}</h4>
                  <p style={styles.driverStatus}>
                    Status: {driver.Status} | Rating: {driver.Rating}
                  </p>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", color: "#999" }}>
                No drivers match your filters.
              </p>
            )}
          </div>
        </div>

        {/* Right Section: Driver Details */}
        <div style={styles.rightSection}>
          {selectedDriver ? (
            <>
              {/* Driver Information */}
              <div style={styles.driverInfo}>
                <h2 style={styles.sectionTitle}>Driver Information</h2>
                {Object.entries(selectedDriver).map(([key, value]) => (
                  <p key={key} style={styles.infoItem}>
                    <strong>{key.replace(/_/g, " ")}:</strong> {value}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <p style={styles.placeholder}>Select a driver to view details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Styles (no changes here)
const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
    padding: "20px",
    maxWidth: "1200px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  hireButton: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  content: {
    display: "flex",
    gap: "20px",
  },
  leftSection: {
    flex: "1",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  searchInput: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  dropdown: {
    marginBottom: "15px",
  },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  driverList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  driverCard: {
    padding: "10px",
    backgroundColor: "#f1f1f1",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  driverName: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  driverStatus: {
    fontSize: "14px",
    color: "#555",
  },
  rightSection: {
    flex: "2",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  placeholder: {
    textAlign: "center",
    color: "#555",
    fontSize: "16px",
  },
};

export default SafetyScreen;
