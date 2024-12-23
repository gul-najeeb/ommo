import React, { useEffect } from "react";
import "./unit.css";
import { FaSort } from "react-icons/fa";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Tippy from "@tippyjs/react";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  Pagination,
  DropdownButton,
  NavDropdown,
} from "react-bootstrap";
import Card from "../../../components/Card";
import { Link, redirect, useNavigate } from "react-router-dom";
// img

import User1 from "../../../assets/images/user/1.jpg";
import UnitStatusBadge from "../../../components/shared/badge";
import { toast } from "react-toastify";
import { getUnitInfo } from "../../../services/units";
import useThrottle from "../../../hooks/useThrottle";
import useForm from "../../../hooks/useForm";
import axios from "axios";

const dropdownItems = [
  { label: "By Driver Name", value: "driverName" },
  // { label: "By Rating", value: "rating" },
  { label: "By Truck ID", value: "truckId" },
  { label: "Trailer ID", value: "trailerId" },
  // { label: "By Unit Status", value: "unitStatus" },
];

const customers_arr = [
  {
    ID: 1,

    Driver_Name: "John Doe",
    Driver_Rating: 4,
    Truck_ID: "TR123",
    img: User1,
    Trailer_ID: "TL567",
    Unit_Status: "Active",
  },
  {
    ID: 2,
    Driver_Name: "Jane Smith",
    Driver_Rating: 3,
    Truck_ID: "TR456",
    Trailer_ID: "TL678",
    Unit_Status: "Pending",
  },
  {
    ID: 12,
    Driver_Name: "Smith John",
    Driver_Rating: 4,
    Truck_ID: "TR116",
    Trailer_ID: "TL666",
    Unit_Status: "Pending",
  },
  {
    ID: 123,
    Driver_Name: "Malve Smith",
    Driver_Rating: 3,
    Truck_ID: "TR111",
    Trailer_ID: "TL166",
    Unit_Status: "Pending",
  },
  {
    ID: 132,
    Driver_Name: "George Brown",
    Driver_Rating: 2,
    Truck_ID: "TR121",
    Trailer_ID: "TL121",
    Unit_Status: "Active",
  },
  {
    ID: 212,
    Driver_Name: "Johnson",
    Driver_Rating: 3,
    Truck_ID: "TR999",
    Trailer_ID: "TL986",
    Unit_Status: "Active",
  },
  {
    ID: 12,
    Driver_Name: "Micke Johnson",
    Driver_Rating: 1,
    Truck_ID: "TR999",
    Trailer_ID: "TL986",
    Unit_Status: "Active",
  },
  {
    ID: 3,
    Driver_Name: "Robert Brown",
    Driver_Rating: 5,
    Truck_ID: "TR789",
    Trailer_ID: "TL890",
    Unit_Status: "IDLE",
  },
  {
    ID: 15,
    Driver_Name: "Michal",
    Driver_Rating: 5,
    Truck_ID: "TR755",
    Trailer_ID: "TL888",
    Unit_Status: "IDLE",
  },
  {
    ID: 215,
    Driver_Name: "Faraday",
    Driver_Rating: 3,
    Truck_ID: "TR711",
    Trailer_ID: "TL858",
    Unit_Status: "IDLE",
  },
  {
    ID: 4,
    Driver_Name: "Emily Johnson",
    Driver_Rating: 2,
    Truck_ID: "TR101",
    Trailer_ID: "TL911",
    Unit_Status: "Active",
  },
];

/**
 * This component represents a Unit list with sorting functionalities and search capabilities.
 * It displays a table of customers with options to search, sort by name or rating, and navigate through pages.
 */
const Unit = () => {
  const [sortOrderRating, setSortOrderRating] = React.useState("asc");
  const [sortTruckId, setSortTruckId] = React.useState("asc");
  const [sortTrailerId, setSortTrailerId] = React.useState("asc");
  const [hoveredCell, setHoveredCell] = React.useState(null);
  const [selectedStatus, setSelectedStatus] = React.useState("All"); // Default status

  const handleSelectStatus = (status) => {
    setSelectedStatus(status); // Update the selected status
  };
  // // will be usefull when performing actions
  // const {
  //   values,
  //   errors,
  //   handleChange: handleInputChange,
  //   handleSubmit,
  // } = useForm({ name: "", email: "" }, (values) => {
  //   const errors = {};
  //   if (!values.name) errors.name = "Name is required";
  //   if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Email is invalid";
  //   return errors;
  // });

  const [customers, setCustomers] = React.useState(customers_arr);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [sortOrder, setSortOrder] = React.useState("asc");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [q, setQ] = React.useState(""); // search Query
  const [itemsPerPage] = React.useState(4); // Set the number of items per page

  const nav = useNavigate();
  // -- most important part (reusable hook to fetch the data from the server)
  // const { data, loading, error, execute } = useAsync(getUnitInfo, []); // most important (we'll configure after database-conn)

  useEffect(() => {
    async function fetchData() {
      // i wanna make fetch request
      try {
        const token = localStorage.getItem("token");
        // if (!token) {
        //   nav("/auth/sign-in");
        // }
        const res = await fetch(
          "http://localhost:5055/api/units/get-unit-info/?status=Active",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        console.log("HAHA", data);
      } catch (error) {}
    }
    fetchData();
  }, []);

  const filteredCustomers = React.useMemo(() => {
    return customers.filter((customer) => {
      if (selectedStatus !== "All") {
        return customer.Unit_Status === selectedStatus;
      }

      if (!q) return true; // If there's no query, show all customers
      const query = q.toLowerCase();

      if (!selectedValue) {
        return;
      }
      if (selectedValue) {
        console.log(selectedValue);
        switch (selectedValue.value) {
          case "driverName":
            // call
            return customer.Driver_Name.toLowerCase().includes(query);

          case "trailerId":
            console.log("traailer");
            return customer.Trailer_ID.toLowerCase().includes(query);

          case "truckId":
            console.log("truck");
            return customer.Truck_ID.toLowerCase().includes(query);
        }
      }
      return false;
    });
  }, [customers, q, selectedValue, selectedStatus]);

  // TODO! for now, will be useful queryng to actual db
  // const throttledQuery = useThrottle(q, 300); // Throttle input changes

  const handleChange = (e) => {
    // setQuery(e.target.value);
  };

  const totalPages = Math.ceil(customers.length / itemsPerPage);

  /**
   * Sets the hovered cell state to the provided cell.
   */
  const handleMouseEnter = (cell) => {
    setHoveredCell(cell);
  };

  /**
   * Resets the hovered cell state back to null
   */
  const handleMouseLeave = () => {
    setHoveredCell(null);
  };
  /**
   * Sorts the customers by name in either ascending or descending order.
   * If the customers are currently sorted in ascending order, they will be
   * sorted in descending order, and vice versa.
   * @function
   */
  const sortCustomersByName = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sortedCustomers = [...customers].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.Driver_Name.localeCompare(b.Driver_Name);
      } else {
        return b.Driver_Name.localeCompare(a.Driver_Name);
      }
    });
    setCustomers(sortedCustomers);
    setSortOrder(newSortOrder);
  };
  /**
   * Sorts the customers by rating in either ascending or descending order.
   * If the customers are currently sorted in ascending order, they will be
   * sorted in descending order, and vice versa.
   * @function
   */

  const sortCustomersByRating = () => {
    const newSortOrder = sortOrderRating === "asc" ? "desc" : "asc";
    const sortedCustomers = [...customers].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.Driver_Rating - b.Driver_Rating;
      } else {
        return b.Driver_Rating - a.Driver_Rating;
      }
    });
    setCustomers(sortedCustomers);
    setSortOrderRating(newSortOrder);
  };
  const sortByTruckId = () => {
    const newSortOrder = sortTruckId === "asc" ? "desc" : "asc"; // Toggle sorting direction

    // Sort based on the numeric part of the Truck_ID (ignore the "TR" prefix)
    const sorted = [...customers].sort((a, b) => {
      const numA = parseInt(a.Truck_ID.replace("TR", ""), 10);
      const numB = parseInt(b.Truck_ID.replace("TR", ""), 10);

      return newSortOrder === "asc" ? numA - numB : numB - numA;
    });
    setCustomers(sorted); // Update the sorted data
    setSortTruckId(newSortOrder); // T
  };
  const sortByTrailerId = () => {
    const newSortOrder = sortTrailerId === "asc" ? "desc" : "asc"; // Toggle sorting direction

    // Sort based on the numeric part of the Truck_ID (ignore the "TR" prefix)
    const sorted = [...customers].sort((a, b) => {
      const numA = parseInt(a.Trailer_ID.replace("TL", ""), 10);
      const numB = parseInt(b.Trailer_ID.replace("TL", ""), 10);

      return newSortOrder === "asc" ? numA - numB : numB - numA;
    });
    setCustomers(sorted); // Update the sorted data
    setSortTrailerId(newSortOrder); // T
  };
  /**
   * Handles the selection of a dropdown item in the dropdown component.
   * This function is passed as a prop to the dropdown component and is
   * called whenever an item is selected. It updates the selectedValue state
   * to the value of the selected item and logs the selected value to the
   * console.
   * @param {string} value The value of the selected item.
   */
  const handleSelect = (value) => {
    setSelectedValue(value);
    console.log(`Selected: ${value}`);
  };

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Slice the customers array for the current page
  const currentCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Container   fluid>
        <Row>
          <Col lg="12">
            <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
              <div className="d-flex align-items-center justify-content-between">
                <Tooltip
                  title="Welcome to React"
                  position="bottom"
                  trigger="hover"
                >
                  <p>Click here to show popup</p>
                  <h4
                    className="font-weight-bold "
                    style={{ background: "red" }}
                  >
                    Drivers
                  </h4>
                </Tooltip>
              </div>
              <div className="create-workform">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="modal-product-search d-flex">
                    <Form className="mr-3 position-relative">
                      <Form.Group className="d-flex mb-0">
                        <Form.Control
                          type="text"
                          onChange={(e) => {
                            e.preventDefault();
                            if (selectedValue) {
                              setQ(e.currentTarget.value);

                              return;
                            }
                            toast.error("Kindly, Select an option");
                          }}
                          value={q}
                          className="mr-2 form-control"
                          id="exampleInputText"
                          placeholder="Search Customer"
                        />
                        <Link to="#" className="search-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </Link>

                        <Dropdown>
                          <Dropdown.Toggle
                            size="sm"
                            variant="primary"
                            id="dropdown-basic"
                          >
                            {selectedValue
                              ? "Search " + selectedValue.label
                              : "Select an option"}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {dropdownItems.map((item) => (
                              <Dropdown.Item
                                key={item.value}
                                onClick={() => {
                                  handleSelect(item);
                                }}
                              >
                                {item.label}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>{" "}
                        </Dropdown>
                      </Form.Group>
                    </Form>
                    <Link
                      to="/customer-add"
                      className="btn btn-primary position-relative d-flex align-items-center justify-content-between"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                        width="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Add Unit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Row>
              <Col lg="12">
                <Card className="card-block card-stretch">
                  <Card.Body className="p-0">
                    <div className="d-flex justify-content-between align-items-center p-3">
                      <h5 className="font-weight-bold">Drivers List</h5>
                      <Button variant="btn btn-secondary btn-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1"
                          width="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Export
                      </Button>
                    </div>
                    <div className="table-responsive">
                      <table className="table data-table mb-0">
                        <thead className="table-color-heading">
                          <tr className="">
                            <th scope="col" className="pr-0 w-01">
                              <div className="d-flex justify-content-start align-items-end mb-1 ">
                                {/* <div className="custom-control custom-checkbox custom-control-inline">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input m-0"
                                    id="customCheck1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customCheck1"
                                  ></label>
                                </div>
                              */}
                              </div>
                            </th>
                            <th
                              scope="col"
                              style={{ cursor: "pointer" }}
                              onClick={sortCustomersByName}
                            >
                              <span>Driver Name</span>
                              <FaSort />
                            </th>
                            <th
                              scope="col"
                              style={{
                                cursor: "pointer",
                              }}
                              onClick={sortCustomersByRating}
                            >
                              <span> Rating</span>
                              <FaSort />
                            </th>

                            <th
                              scope="col"
                              style={{ cursor: "pointer" }}
                              onClick={() => sortByTruckId()}
                            >
                              Truck {sortTruckId === "asc" ? " ↑" : " ↓"}
                            </th>
                            <th
                              scope="col"
                              style={{ cursor: "pointer" }}
                              onClick={() => sortByTrailerId()}
                            >
                              {" "}
                              Trailer  {sortTrailerId === "asc" ? " ↑" : " ↓"}
                            </th>
                            <th scope="col" className="text-right">
                              <NavDropdown
                                id="dropdown-status"
                                title={`Unit Status: ${selectedStatus}`} // Show selected status
                                onSelect={handleSelectStatus} // Handle status selection
                                variant="outline-secondary"
                                style={{
                                  backgroundColor: "white",
                                  color: "black",
                                }}
                              >
                                <NavDropdown.Item eventKey="All">
                                  All
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="Active">
                                  Active
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="IDLE">
                                  IDLE
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="Pending">
                                  Pending
                                </NavDropdown.Item>
                              </NavDropdown>
                            </th>
                            <th scope="col" className="text-right">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentCustomers.length !== 0
                            ? currentCustomers.map((item) => (
                                <tr
                                  key={item.des}
                                  className="white-space-no-wrap"
                                >
                                  <td className="pr-0 "></td>

                                  {/* Driver Name with Tooltip */}
                                  <td className="">
                                    <div className="active-project-1 d-flex align-items-center mt-0 ">
                                      <div className="h-avatar is-medium">
                                        {/* You can add an avatar image here */}
                                      </div>
                                      <div className="data-content">
                                        <div>
                                          <Tippy
                                            placement="right-end"
                                            interactive
                                            content={
                                              <div>
                                                <p>
                                                  Driver Name:{" "}
                                                  {item?.Driver_Name}
                                                </p>
                                                <p>Driver Type: Full-Time</p>
                                                <p>Status: Active</p>
                                                <p>License Number: D00123</p>
                                                <p>License State: CA</p>
                                                <p>Email: com@gmail.com</p>
                                                <p>Phone: +3434453467</p>
                                                <p>Current Mode: Driving</p>
                                                <p>Rating: 4.6</p>
                                              </div>
                                            }
                                          >
                                            <span className="font-weight-bold">
                                              {item.Driver_Name}
                                            </span>
                                          </Tippy>
                                        </div>
                                        <p className="m-0 text-secondary small"></p>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Driver Rating */}
                                  <td>{item.Driver_Rating}</td>

                                  {/* Truck ID with Tooltip */}
                                  <td>
                                    <Tippy
                                      placement="right-end"
                                      interactive
                                      content={
                                        <div>
                                          <p>Truck Brand: Ford</p>
                                          <p>Model: F-150</p>
                                          <p>Year: 2017</p>
                                          <p>License Plate State: CA </p>
                                          <p>Status: Active </p>
                                          <p>Rating: 4.5</p>
                                          <p>Mileage: 10 MPG </p>
                                          <p>Odometer: 120,000 miles</p>

                                          <p>VIN: ABC1234567XYZ</p>
                                          <p>Fuel Type: Diesel</p>
                                        </div>
                                      }
                                    >
                                      <span>{item.Truck_ID}</span>
                                    </Tippy>
                                  </td>

                                  {/* Trailer ID with Tooltip */}
                                  <td>
                                    <Tippy
                                      placement="right-end"
                                      interactive
                                      content={
                                        <div>
                                          <p>Status: IDLE</p>
                                          <p>Rating: 3.2</p>
                                          <p>Plate Number: PLATE4567</p>
                                          <p>VIN Code: TRL789456123</p>
                                          <p>Brand: Wabash </p>
                                        </div>
                                      }
                                    >
                                      <span>{item.Trailer_ID}</span>
                                    </Tippy>
                                  </td>

                                  {/* Unit Status */}
                                  <td className="d-flex justify-content-center align-items-center"> 
                                    <UnitStatusBadge
                                      status={item.Unit_Status}
                                    />
                                  </td>

                                  {/* Action Buttons (View, Edit, Delete) */}
                                  <td>
                                    <div className="d-flex justify-content-end align-items-center">
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>View</Tooltip>}
                                      >
                                        <Link className="" to="/customer-view">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-secondary"
                                            width="20"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                          </svg>
                                        </Link>
                                      </OverlayTrigger>

                                      <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>Edit</Tooltip>}
                                      >
                                        <Link className="" to="/customer-edit">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-secondary mx-4"
                                            width="20"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                            />
                                          </svg>
                                        </Link>
                                      </OverlayTrigger>

                                      <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>Delete</Tooltip>}
                                      >
                                        <Link
                                          className="badge bg-danger"
                                          to="#"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                          </svg>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </Card.Body>
                </Card>

                {currentCustomers.length === 0 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p className="text-align-center">
                      Sorry! No Items Are Found
                    </p>
                  </div>
                )}
              </Col>
            </Row>
            <div
              hidden={q || selectedStatus !== "All"}
              style={{
                marginTop: "auto",
                display: "flex",
                listStyle: "none",
                justifyContent: "space-between",
              }}
            >
              <Button onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </Button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <Button onClick={nextPage} disabled={currentPage === totalPages}>
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Unit;
