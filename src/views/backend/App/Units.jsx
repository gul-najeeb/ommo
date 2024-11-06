import React from 'react';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
  sidebar: {
    width: '36%',
    backgroundColor: '#fff',
    borderRight: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
  },
  sidebarHeader: {
    padding: '16px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#f8f8f8',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  filters: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#555',
  },
  filterButton: {
    background: 'none',
    border: 'none',
    color: '#555',
    cursor: 'pointer',
  },
  itemList: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '16px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '8px',
    transition: 'box-shadow 0.3s',
  },
  itemHover: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  itemId: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#666',
    marginRight: '16px',
  },
  itemDetails: {
    flexGrow: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: '14px',
  },
  itemSubtitle: {
    fontSize: '12px',
    color: '#777',
    marginTop: '4px',
  },
  itemName: {
    fontSize: '12px',
    color: '#777',
    marginTop: '4px',
  },
  itemSpeed: {
    fontWeight: 'bold',
    fontSize: '12px',
    width:"5rem",
     color: '#28a745',
    padding: '0.6rem 1rem ',
    borderRadius: '12px',
    backgroundColor: "#28a74520",
  },
  mapContainer: {
    flexGrow: 1,
    borderRadius: '12px',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '20px',
    fontWeight: 'bold',
  },
};

const AssetItem = ({ id, title, subtitle, name, speed }) => (
  <div
    style={{
      ...styles.item,
    }}
    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = styles.itemHover.boxShadow)}
    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
  >
     <div style={styles.itemDetails}>
      <div style={styles.itemTitle}>{id} {title}</div>
      <div style={styles.itemSubtitle}>{subtitle}</div>
      <div style={styles.itemName}>{name}</div>
    </div>
    <div style={styles.itemSpeed}>{speed}</div>
  </div>
);

const Sidebar = () => (
  <div style={styles.sidebar}>
    {/* Search and Filters */}
    <div style={styles.sidebarHeader}>
      <input
        type="text"
        placeholder="Search assets"
        style={styles.searchInput}
      />
      <div style={styles.filters}>
        <button style={styles.filterButton}>Tags</button>
        <button style={styles.filterButton}>More</button>
        <button style={styles.filterButton}>In Risk Zone</button>
      </div>
    </div>

    {/* List of Items */}
    <div style={styles.itemList}>
      <AssetItem
        id="084"
        title="Max Yovogang"
        subtitle="Lyndon B Johnson Freeway, Dallas, TX, 75237"
        name="YOVOGANG TCHIOGO"
        speed="32 MPH"
      />
      <AssetItem
        id="134"
        title="Sadi Bresolin"
        subtitle="South Palo Verde Road, Tucson, AZ, 85756"
        name="SADI BRESOLIN"
        speed="70 MPH"
      />
      <AssetItem
        id="134"
        title="Sadi Bresolin"
        subtitle="South Palo Verde Road, Tucson, AZ, 85756"
        name="SADI BRESOLIN"
        speed="70 MPH"
      />
      <AssetItem
        id="134"
        title="Sadi Bresolin"
        subtitle="South Palo Verde Road, Tucson, AZ, 85756"
        name="SADI BRESOLIN"
        speed="70 MPH"
      />
      <AssetItem
        id="134"
        title="Sadi Bresolin"
        subtitle="South Palo Verde Road, Tucson, AZ, 85756"
        name="SADI BRESOLIN"
        speed="70 MPH"
      />
      <AssetItem
        id="134"
        title="Sadi Bresolin"
        subtitle="South Palo Verde Road, Tucson, AZ, 85756"
        name="SADI BRESOLIN"
        speed="70 MPH"
      />
      <AssetItem
        id="134"
        title="Sadi Bresolin"
        subtitle="South Palo Verde Road, Tucson, AZ, 85756"
        name="SADI BRESOLIN"
        speed="70 MPH"
      />
      <AssetItem
        id="136"
        title="Josh Cooper"
        subtitle="I-85; US 29, Kings Mountain, NC, 28073"
        name="JOSHUA COOPER"
        speed="63 MPH"
      />
      {/* Add more <AssetItem /> components as needed */}
    </div>
  </div>
);

const MapContainer = () => (
  <div style={styles.mapContainer}>
    Map will go here  
  </div>
);

const Units = () => (
  <div style={styles.container}>
    <Sidebar />
    <MapContainer />
  </div>
);

export default Units;
