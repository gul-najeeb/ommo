import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const SearchBox = () => {
  const [field, setField] = useState("Field 1");
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    alert(`Searching for "${searchText}" in ${field}`);
  };

  return (
    <Form style={styles.form}>
      <InputGroup style={{ ...styles.inputGroup }}>
        <select
          style={{
            ...styles.dropdown,
            ...{ color: "gray", fontSize: "0.8rem", paddingLeft: '0.3rem', cursor: "pointer" },
          }}
        >
          <option style={{ color: "gray", fontSize: "0.8rem", cursor: "pointer" }}>Select</option>
          <option style={{ color: "gray", fontSize: "0.8rem", cursor: "pointer" }}>Field 1</option>
          <option style={{ color: "gray", fontSize: "0.8rem", cursor: "pointer" }}>Field 2</option>
          <option style={{ color: "gray", fontSize: "0.8rem", cursor: "pointer" }}>Field 3</option>
        </select>
        <FormControl
          placeholder="Search text..."
          aria-label="Search text"
          aria-describedby="basic-addon2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.input}
        />

        <Button variant="primary" onClick={handleSearch} style={styles.button}>
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

// Inline styling
const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  inputGroup: {
    width: "400px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  dropdown: {
    border: "none",
    borderRadius: "30px 0 0 30px",
    borderColor: "#ced4da",
    fontSize: "1rem",
  },
  input: {
    borderRadius: "0",
    borderLeft: "none",
    fontSize: "1rem",
  },
  button: {
    borderRadius: "0 30px 30px 0",
    fontSize: "1rem",
  },
};

export default SearchBox;
