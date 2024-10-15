import React from "react";
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
} from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
// img

import User1 from "../../../assets/images/user/1.jpg";
import User2 from "../../../assets/images/user/2.jpg";
import User3 from "../../../assets/images/user/3.jpg";
import User4 from "../../../assets/images/user/4.jpg";
import User5 from "../../../assets/images/user/5.jpg";
import User6 from "../../../assets/images/user/6.jpg";
import UnitStatusBadge from "../../../components/shared/badge";
import { toast } from "react-toastify";

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
    ID: 3,
    Driver_Name: "Robert Brown",
    Driver_Rating: 5,

    Truck_ID: "TR789",
    Trailer_ID: "TL890",
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

const Unit = () => {
  const [sortOrderRating, setSortOrderRating] = React.useState("asc");
  const [hoveredCell, setHoveredCell] = React.useState(null);

  const [customers, setCustomers] = React.useState(customers_arr);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [sortOrder, setSortOrder] = React.useState("asc");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [q, setQ] = React.useState("");
  const [itemsPerPage] = React.useState(3); // Set the number of items per page

  const filteredCustomers = React.useMemo(() => {
    return customers.filter((customer) => {
      if (!q) return true; // If there's no query, show all customers
      const query = q.toLowerCase();

      if (!selectedValue) {
        return;
      }
      if (selectedValue) {
        console.log(selectedValue);
        switch (selectedValue.value) {
          case "driverName":
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
  }, [customers, q, selectedValue]);

  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const handleMouseEnter = (cell) => {
    setHoveredCell(cell);
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };
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
      <Container fluid>
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
                    Unit
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
                      <h5 className="font-weight-bold">Unit List</h5>
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
                                <div className="custom-control custom-checkbox custom-control-inline">
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
                              <span>Driver Rating</span>
                              <FaSort />
                            </th>

                            <th scope="col">Truck ID</th>
                            <th scope="col">Trailer ID</th>
                            <th scope="col" className="text-right">
                              Unit Status
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
                                  <td className="pr-0 ">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input m-0"
                                        id="customCheck"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheck"
                                      ></label>
                                    </div>
                                  </td>
                                  <td className="">
                                    <div className="active-project-1 d-flex align-items-center mt-0 ">
                                      <div className="h-avatar is-medium">
                                        <img
                                          className="avatar rounded-circle"
                                          alt="user-icon"
                                          src={User1}
                                        />
                                      </div>
                                      <div className="data-content">
                                        <div>
                                          <Tippy
                                            placement="bottom-end"
                                            interactive
                                            content={
                                              <div>
                                                <p>
                                                  lorem satoheusa ntnhea ao
                                                  ehusaoehuasohuaotehu staoheuta
                                                  euthaoe stahoutehu
                                                  atoheuatoehu ateuhae{" "}
                                                </p>
                                                <Button>show more</Button>
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
                                  <td>{item.Driver_Rating}</td>
                                  <td>{item.Truck_ID}</td>
                                  <td>{item.Trailer_ID}</td>
                                  <td>
                                    <UnitStatusBadge
                                      status={item.Unit_Status}
                                    />
                                  </td>
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
                    <p className="text-align-center">Sorry! No Items Are Found</p>
                  </div>
                )}
              </Col>
            </Row>
            <div
              hidden={q}
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
