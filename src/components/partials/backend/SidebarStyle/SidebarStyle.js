import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Accordion, Button } from "react-bootstrap";
import Scrollbar from "smooth-scrollbar";
import { connect } from "react-redux";
import { getDarkMode } from "../../../../store/mode";
import { baseUrl } from "../../../../constants";
//img
import logo from "../../../../../src/assets/images/logo.png";
import { logoutUser } from "../../../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import { FaCogs, FaShieldAlt, FaTruck, FaUserCog, FaClipboardList, FaStore, FaUsers, FaCube, FaFile, FaUser, FaMoneyBill, FaIdBadge, FaCog, FaUsersCog } from "react-icons/fa";
function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const minisidbar = () => {
  document.body.classList.toggle("sidebar-main");
};

const SidebarStyle = (props) => {
  const [tabsInfo, setTabsInfo] = useState({});

  const getTabsInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. User might not be authenticated.");
        return;
      }

      const result = await fetch(baseUrl + "/api/tab/get-tabs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const tabInfo = await result.json();
      setTabsInfo(tabInfo);
    } catch (error) {
      console.error("Error fetching tab info:", error);
    }
  };

  let location = useLocation();

  useEffect(() => {
    getTabsInfo();
  }, []);

  useEffect(() => {
    Scrollbar.init(document.querySelector("#my-scrollbar"));
  }, []);

  const urlParams = new URLSearchParams(window.location.search);
  const sidebar = urlParams.get("sidebar");
  let variant = "";
  if (sidebar !== null) {
    switch (sidebar) {
      case "0":
        variant = "sidebar-dark";
        break;
      case "1":
        variant = "sidebar-light";
        break;
      default:
        variant = "";
        break;
    }
  }

  const [activeMenu, setActiveMenu] = useState(false);
  const [activesubMenu, setSubmenu] = useState(false);
  // Mapping module names to specific icons
  const moduleIcons = {
    Setting: <FaCog />,
    Safety: <FaShieldAlt />,
    Subscription_Carrier: <FaTruck />,
    Accounts: <FaUserCog />,
    Dispatch: <FaClipboardList />,
    Shop: <FaStore />,
    Client: <FaUsers />,
    Unit: <FaCube />,
  };
  // Mapping sub-tab (component) names to icons
  const componentIcons = {
    Role: <FaIdBadge />,
    Document: <FaFile />,
    User: <FaUser />,
    Payment: <FaMoneyBill />,
    Profile: <FaUserCog />,
    Performance: <FaClipboardList />,
  };
  const renderMenu = (tabsData) => {
    // Ensure tabsData is an array before mapping
    if (!Array.isArray(tabsData)) {
      console.error("tabsData is not an array:", tabsData);
      return null;
    }

    return tabsData.map((tab) => {
      const { moduleName, components } = tab;

      return (
        <li className="sidebar-layout" key={moduleName}>
          {/* Module Heading */}
          <div className="d-flex align-items-center">
            <Link
              to={`/${moduleName.toLowerCase()}`}
              className="svg-icon flex-grow-1"
              style={{ marginLeft: "-10px", padding: "15px" }}
            >


              <span className="icon">{moduleIcons[tab.moduleName] || <FaCogs />}</span>

              <span className="ml-2">{moduleName}</span>
            </Link>

            {components && components.length > 0 && (
              <Accordion.Toggle
                as={Button}
                eventKey={moduleName}
                variant="link"
                className="p-0 ml-2"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Accordion.Toggle>
            )}
          </div>

          {components && components.length > 0 && (
            <Accordion.Collapse className="submenu" eventKey={moduleName}>
              <ul className="submenu">
                {components.map((component) => (
                  <li key={component.componentName} style={{ paddingLeft: "20px" }}>
                    <Link
                      to={`/${moduleName.toLowerCase()}/${component.componentName.toLowerCase()}`}
                      className="svg-icon"
                    >
                      {/* Add Icons for Components */}
                      <span className="icon">
                        {componentIcons[component.componentName] || <FaFile />}
                      </span>
                      <span className="ml-2">{component.componentName}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion.Collapse>)}
        </li>
      );
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={`iq-sidebar sidebar-default ${variant}`}>
        <div className="iq-sidebar-logo d-flex align-items-end justify-content-between">
          <Link to="/" className="header-logo">
            <img
              src={logo}
              className={`img-fluid rounded-normal light-logo ${props.darkMode ? "d-none" : ""
                }`}
              style={{ width: "150px", height: "auto", marginLeft: "3px" }}
              alt="logo"
            />
          </Link>
          <div className="side-menu-bt-sidebar-1">
            <svg
              onClick={minisidbar}
              xmlns="http://www.w3.org/2000/svg"
              className="text-light wrapper-menu"
              width="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="data-scrollbar" data-scroll="1" id="my-scrollbar">
          <nav className="iq-sidebar-menu">
            <Accordion
              as="ul"
              id="iq-sidebar-toggle"
              className="side-menu"
              onSelect={(e) => setActiveMenu(e)}
            >
              {/* Static Menu Items */}
              <li className="sidebar-layout">
                <Link to="/" className="svg-icon">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </i>
                  <span className="ml-2">Dashboard</span>
                  <p className="mb-0 w-10 badge badge-pill badge-primary">6</p>
                </Link>
              </li>
              <li className="px-3 pt-3 pb-2">
                <span className="text-uppercase small font-weight-bold">
                  Application
                </span>
              </li>

              {/* Dynamically Rendered Menu Items from API */}
              {tabsInfo.data && tabsInfo.data.tabs && renderMenu(tabsInfo.data.tabs)}
            </Accordion>
          </nav>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(SidebarStyle);
