import React from "react";

// react-router
import { Outlet } from "react-router-dom";

// Partials
import HeaderStyle1 from "../../components/partials/backend/HeaderStyle/HeaderStyle1";
import SidebarStyle from "../../components/partials/backend/SidebarStyle/SidebarStyle";
import FooterStyle from "../../components/partials/backend/FooterStyle/FooterStyle";

// Router Component
// import Layout1Route from "../../router/layout1-route";

const Layout1 = () => {
  return (
    <>
      <div className="wrapper">
        <HeaderStyle1 />
        <SidebarStyle />
        <div className="content-page">
          <Outlet />
        </div>
      </div>
      <FooterStyle />
    </>
  );
};

export default Layout1;
