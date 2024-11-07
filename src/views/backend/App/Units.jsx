import React, { useMemo, useState } from "react";
const upArrow = "▲"; // Upward arrow for ascending order
const downArrow = "▼"; // Downward arrow for descending order
const defaultArrow = "△"; // Placeholder arrow (unselected or default state)

const data = [
  {
    id: "101",
    title: "Zam Johnson",
    subtitle: "Sunset Blvd, Los Angeles, CA, 90028",
    name: "ALICE JOHNSON",
    speed: "45 MPH",
  },
  {
    id: "102",
    title: "Michael Smith",
    subtitle: "Michigan Ave, Chicago, IL, 60611",
    name: "MICHAEL SMITH",
    speed: "55 MPH",
  },
  {
    id: "103",
    title: "Emma Brown",
    subtitle: "Broadway, New York, NY, 10036",
    name: "EMMA BROWN",
    speed: "65 MPH",
  },
  {
    id: "104",
    title: "Liam Wilson",
    subtitle: "Ocean Dr, Miami Beach, FL, 33139",
    name: "LIAM WILSON",
    speed: "30 MPH",
  },
  {
    id: "105",
    title: "Sophia Davis",
    subtitle: "Las Vegas Blvd, Las Vegas, NV, 89109",
    name: "SOPHIA DAVIS",
    speed: "72 MPH",
  },
];

const StatusBadge = ({ speed }) => {
  const speedValue = parseInt(speed); // Convert speed to number

  // Determine badge color based on speed
  let badgeStyle = {};
  if (speedValue < 20) {
    badgeStyle = {
      backgroundColor: "rgba(135, 206, 250, 0.2)",
      color: "#1E90FF",
    }; // Light blue
  } else if (speedValue < 40) {
    badgeStyle = {
      backgroundColor: "rgba(144, 238, 144, 0.2)",
      color: "#32CD32",
    }; // Light green
  } else if (speedValue < 60) {
    badgeStyle = {
      backgroundColor: "rgba(255, 255, 102, 0.2)",
      color: "#FFD700",
    }; // Light yellow
  } else if (speedValue < 80) {
    badgeStyle = {
      backgroundColor: "rgba(255, 165, 0, 0.2)",
      color: "#FFA500",
    }; // Light orange
  } else {
    badgeStyle = { backgroundColor: "rgba(255, 69, 0, 0.2)", color: "#FF4500" }; // Light red
  }

  return (
    <span
      style={{
        ...badgeStyle,
        padding: "4px 8px",
        borderRadius: "12px",
        fontSize: "0.85rem",
        fontWeight: "bold",
        display: "inline-block",
      }}
    >
      {speed}
    </span>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0",
    color: "#333",
  },
  sidebar: {
    width: "36%",
    backgroundColor: "#fff",
    borderRight: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
  },
  sidebarHeader: {
    padding: "16px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f8f8f8",
  },
  searchInput: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  filters: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "#555",
  },
  filterButton: {
    background: "none",
    border: "none",
    color: "#555",
    cursor: "pointer",
  },
  itemList: {
    flexGrow: 1,
    overflowY: "auto",
    padding: "16px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "8px",
    transition: "box-shadow 0.3s",
  },
  itemHover: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  itemId: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#666",
    marginRight: "16px",
  },
  itemDetails: {
    flexGrow: 1,
  },
  itemTitle: {
    fontWeight: "bold",
    color: "#333",
    fontSize: "14px",
  },
  itemSubtitle: {
    fontSize: "12px",
    color: "#777",
    marginTop: "4px",
  },
  itemName: {
    fontSize: "12px",
    color: "#777",
    marginTop: "4px",
  },
  itemSpeed: {
    fontWeight: "bold",
    fontSize: "12px",
    width: "5rem",
    color: "#28a745",
    padding: "0.6rem 1rem ",
    borderRadius: "12px",
    backgroundColor: "#28a74520",
  },
  mapContainer: {
    flexGrow: 1,
    borderRadius: "4%",
    backgroundColor: "#e0e0e0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    fontSize: "20px",
    fontWeight: "bold",
  },
};

const AssetItem = ({ id, title, subtitle, name, speed }) => (
  <div
    style={{
      ...styles.item,
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.boxShadow = styles.itemHover.boxShadow)
    }
    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
  >
    <div style={styles.itemDetails}>
      <div style={styles.itemTitle}>
        {id} {title}
      </div>
      <div style={styles.itemSubtitle}>{subtitle}</div>
      <div style={styles.itemName}>{name}</div>
    </div>
    <StatusBadge speed={speed} />
  </div>
);

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null); // Tag filter
  const [inRiskZone, setInRiskZone] = useState(false); // Risk Zone filter
  const [sortOption, setSortOption] = useState(null); // Sorting

  // Function to clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag(null);
    setInRiskZone(false);
    setSortOption(null);
  };
  // Memoized filtered data based on current filters and search query
  const filteredData = useMemo(() => {
    return data
      .filter((item) =>
        // Search filter
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(
        (item) =>
          // Tag filter
          !selectedTag || item.tags?.includes(selectedTag)
      )
      .filter(
        (item) =>
          // Risk zone filter
          !inRiskZone || item.isInRiskZone === inRiskZone
      )
      .sort((a, b) => {
        // Sorting logic
        if (!sortOption) return 0;
        if (sortOption === "speed") {
          // Extract numbers from speed strings and sort by speed
          const speedA = parseInt(a.speed);
          const speedB = parseInt(b.speed);
          return speedB - speedA;
        }
        if (sortOption === "title") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [searchQuery, selectedTag, inRiskZone, sortOption]);

  return (
    <div style={styles.sidebar}>
      {/* Search and Filters */}
      <div style={styles.sidebarHeader}>
        <input
          type="text"
          placeholder="Search assets"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
        <div style={styles.filters}>
           
          <button
            style={styles.filterButton}
            onClick={() =>
              setSortOption(sortOption === "title" ? null : "title")
            }
          >
            Sort by Title {sortOption === "title" ? downArrow : defaultArrow}
          </button>
          <button
            style={styles.filterButton}
            onClick={() =>
              setSortOption(sortOption === "speed" ? null : "speed")
            }
          >
            Sort by Speed {sortOption === "speed" ? downArrow : defaultArrow}
          </button>
          <button
            style={{
              ...styles.filterButton,
              opacity: searchQuery || sortOption ? 1 : 0.5,
            }}
            onClick={() => clearFilters()}
          >
            Clear
          </button>
        </div>
      </div>

      {/* List of Items */}
      <div style={styles.itemList}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <AssetItem
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              name={item.name}
              speed={item.speed}
            />
          ))
        ) : (
          <h4 style={{ textAlign: "center" }}>No Data Found</h4>
        )}
      </div>
    </div>
  );
};
const MapContainer = () => (
  <div style={styles.mapContainer}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.567442469831!2d68.36501541086709!3d25.385809677496585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f025e2ab29%3A0x53b3fc1dd75b7bdb!2sHyder%20Chowk%20Round%20About%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730994126008!5m2!1sen!2s"
      width="100%"
      height="100%"
      style={{ border: 1, borderRadius: "4%" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

const Units = () => (
  <div style={styles.container}>
    <Sidebar />
    <MapContainer />
  </div>
);

export default Units;
