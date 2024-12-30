import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../services";
import { toast } from "react-toastify";

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
      Driver_ID: 23,
      Driver_Name: "Bob Smith",
      Status: "Pending",
      Rating: 3.8,
    },    {
      Driver_ID: 21,
      Driver_Name: "Bob Smith",
      Status: "Pending",
      Rating: 3.8,
    },
    {
      Driver_ID: 11,
      Driver_Name: "Bob Smith",
      Status: "Pending",
      Rating: 3.8,
    },
    {
      Driver_ID: 25,
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

  useEffect(() => {
      axiosInstance.get('/api/driver/list', {headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }}).then(
        _ => {

          // 
        }
      ).catch(_ => toast.error(_.message))
  }, [])
  
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
              <div style={styles.driverInfoContainer}>
  <h2 style={styles.sectionTitle}>Driver Information</h2>
  <div style={styles.driverCard}>
    <div style={styles.cardHeader}>
      <img
        src="https://via.placeholder.com/100"
        alt="Driver"
        style={styles.driverImage}
      />
      <h3 style={styles.driverName}>John Doe</h3>
      <p style={styles.driverStatus}>Status: Active</p>
    </div>
    <div style={styles.cardBody}>
      <p style={styles.infoItem}>
        <strong>Employment Type:</strong> Full-Time
      </p>
      <p style={styles.infoItem}>
        <strong>CDL License Number:</strong> 12345678
      </p>
      <p style={styles.infoItem}>
        <strong>Address:</strong> 123 Main St, Springfield, USA
      </p>
      <p style={styles.infoItem}>
        <strong>License State:</strong> California
      </p>
      <p style={styles.infoItem}>
        <strong>Email:</strong> johndoe@example.com
      </p>
      <p style={styles.infoItem}>
        <strong>Phone Number:</strong> (123) 456-7890
      </p>
      <p style={styles.infoItem}>
        <strong>Experience:</strong> 8 Years
      </p>
      <p style={styles.infoItem}>
        <strong>Performance Rating:</strong> 4.7/5
      </p>
      <p style={styles.infoItem}>
        <strong>Special Skills:</strong> Hazmat Transport, Defensive Driving
      </p>
      <p style={styles.infoItem}>
        <strong>Hiring Status:</strong> Hired
      </p>
    </div>
    <div style={styles.documentTableContainer}>
  <h3 style={styles.tableTitle}>Document List</h3>
  <table className="table table-bordered  table-hover">
    <thead className="">
      <tr>
        <th>Document Name</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Driver License</td>
        <td style={{ color: "green" }}>Active</td>
        <td>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => alert("Viewing Driver License")}
          >
            View
          </button>
        </td>
      </tr>
      <tr>
        <td>Medical Certificate</td>
        <td style={{ color: "green" }}>Active</td>
        <td>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => alert("Viewing Medical Certificate")}
          >
            View
          </button>
        </td>
      </tr>
      <tr>
        <td>Background Check</td>
        <td style={{ color: "red" }}>Pending</td>
        <td>
          <button className="btn btn-secondary btn-sm" disabled>
            View
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    <div style={styles.cardFooter}>
      <button style={styles.viewPerformanceButton}>
        <Link to="/driver-performance" style={{color: 'white'}}>Driver Performance</Link>
      </button>
      <button style={styles.editDetailsButton}>Edit Details</button>
    </div>
  </div>
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
  driverInfoContainer: {
    margin: "20px",
    padding: "20px",
    // backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#343a40",
  },
  driverCard: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  cardHeader: {
    textAlign: "center",
    marginBottom: "20px",
  },
  driverImage: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  driverName: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  driverStatus: {
    fontSize: "16px",
    color: "#28a745",
  },
  cardBody: {
    lineHeight: "1.6",
    color: "#495057",
  },
  infoItem: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  viewPerformanceButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  editDetailsButton: {
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  documentTableContainer: {
    marginTop: "20px",
    padding: "20px",
    // backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  tableTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
    textAlign: "left",
    color: "#343a40",
  },
};

export default SafetyScreen;
