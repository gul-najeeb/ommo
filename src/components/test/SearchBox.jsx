import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, InputGroup, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';

const SearchBox = () => {
    const [field, setField] = useState("Field 1");
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        alert(`Searching for "${searchText}" in ${field}`);
    };

    return (
        <Form style={styles.form}>
            <InputGroup style={{...styles.inputGroup}}>
                <Dropdown >
                    <Dropdown.Toggle
                        //   variant="p"
                         variant="primary"
                        id="dropdown-basicu"
                        // title={field}
                        //  onSelect={(e) => setField(e)}
                        style={styles.dropdown}
                    >
                        Select</Dropdown.Toggle>
                    <Dropdown.Menu>
                        
                        <Dropdown.Item eventKey="Field 1">Field 1</Dropdown.Item>
                        <Dropdown.Item eventKey="Field 2">Field 2</Dropdown.Item>
                        <Dropdown.Item eventKey="Field 3">Field 3</Dropdown.Item>
                        <Dropdown.Item eventKey="Field 4">Field 4</Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
    inputGroup: {
        width: '400px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    dropdown: {
        borderRadius: '30px 0 0 30px',
        borderColor: '#ced4da',
        fontSize: '1rem',
    },
    input: {
        borderRadius: '0',
        borderLeft: 'none',
        fontSize: '1rem',
    },
    button: {
        borderRadius: '0 30px 30px 0',
        fontSize: '1rem',
    },
};

export default SearchBox;
