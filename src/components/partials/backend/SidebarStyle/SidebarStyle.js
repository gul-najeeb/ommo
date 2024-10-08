import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Accordion, Button } from 'react-bootstrap';
import Scrollbar from 'smooth-scrollbar';
import { connect } from 'react-redux';
import { getDarkMode } from '../../../../store/mode';

//img
import logo from '../../../../../src/assets/images/logo.png';

function mapStateToProps(state) {
    return {
        darkMode: getDarkMode(state),
    };
}

const minisidbar = () => {
    document.body.classList.toggle('sidebar-main');
};



const SidebarStyle = (props) => {
    
    const [tabsInfo, setTabsInfo] = useState({});
    
    const getTabsInfo = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found. User might not be authenticated.');
                return;
            }

            const result = await fetch('http://localhost:5055/api/tab/get-tabs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const tabInfo = await result.json();
            setTabsInfo(tabInfo);
        } catch (error) {
            console.error('Error fetching tab info:', error);
        }
    };

    let location = useLocation();
    
    useEffect(() => {
        getTabsInfo();
    }, []);

    useEffect(() => {
        Scrollbar.init(document.querySelector('#my-scrollbar'));
    }, []);

    const urlParams = new URLSearchParams(window.location.search);
    const sidebar = urlParams.get('sidebar');
    let variant = '';
    if (sidebar !== null) {
        switch (sidebar) {
            case '0':
                variant = 'sidebar-dark';
                break;
            case '1':
                variant = 'sidebar-light';
                break;
            default:
                variant = '';
                break;
        }
    }

    
    const [activeMenu, setActiveMenu] = useState(false);
    const [activesubMenu, setSubmenu] = useState(false);

    const renderMenu = (menuData, basePath = '') => {
        return Object.keys(menuData || {}).map((menuKey) => {
            const subMenu = menuData[menuKey];

            return (
                <li className="sidebar-layout" key={menuKey}>
                  <div className="d-flex align-items-center">
                    {/* Link to the main menu path */}
                    <Link to={`/${basePath}${menuKey.toLowerCase()}`} className="svg-icon flex-grow-1" style={{ marginLeft: '-10px', padding: '15px' }}>
                      <span className="ml-2">{menuKey}</span> {/* Main menu link */}
                    </Link>
              
                    {/* Only show the arrow if there are subcategories */}
                    {subMenu.length > 0 && (
                      <Accordion.Toggle
                        as={Button}
                        eventKey={menuKey}
                        variant="link"
                        className="p-0 ml-2"
                        onClick={(e) => e.stopPropagation()} // Prevents the main link from being clicked when the arrow is clicked
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
              
                  {/* Submenu items */}
                  {subMenu.length > 0 && (
                    <Accordion.Collapse className="submenu" eventKey={menuKey}>
                      <ul className="submenu">
                        {subMenu.map((item) => (
                          <li key={item} style={{ paddingLeft: '20px' }}> {/* Add padding to move subcategories to the right */}
                            <Link
                              to={`/${basePath}${item.toLowerCase()}`} // Dynamic link for subcategories
                              className="svg-icon"
                            >
                              <i>
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
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                  />
                                </svg>
                              </i>
                              <span className="ml-2">{item}</span> {/* Submenu item text */}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Collapse>
                  )}
                </li>
              );
              
              
              
            })
        };

    return (
        <>
            <div className={`iq-sidebar sidebar-default ${variant}`}>
                <div className="iq-sidebar-logo d-flex align-items-end justify-content-between">
                    <Link to="/" className="header-logo">
                        <img
                            src={logo}
                            className={`img-fluid rounded-normal light-logo ${props.darkMode ? 'd-none' : ''}`}
                            style={{ width: '150px', height: 'auto', marginLeft: '3px' }}
                            alt="logo"
                        />
                    </Link>
                    <div className="side-menu-bt-sidebar-1">
                        <svg onClick={minisidbar} xmlns="http://www.w3.org/2000/svg" className="text-light wrapper-menu" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className="data-scrollbar" data-scroll="1" id="my-scrollbar">
                    <nav className="iq-sidebar-menu">
                        <Accordion as="ul" id="iq-sidebar-toggle" className="side-menu" onSelect={(e) => setActiveMenu(e)}>
                            {/* Static Menu Items */}
                            <li className="sidebar-layout">
                                <Link to="/" className="svg-icon">
                                    <i className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </i>
                                    <span className="ml-2">Dashboard</span>
                                    <p className="mb-0 w-10 badge badge-pill badge-primary">6</p>
                                </Link>
                            </li>
                            <li className="px-3 pt-3 pb-2">
                                <span className="text-uppercase small font-weight-bold">Application</span>
                            </li>

                            {/* Dynamically Rendered Menu Items from API */}
                            {renderMenu(tabsInfo)}
                        </Accordion>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default connect(mapStateToProps)(SidebarStyle);
