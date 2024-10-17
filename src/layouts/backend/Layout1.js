import React from "react";

// react-router
import { Outlet } from "react-router-dom";

// Partials
import HeaderStyle1 from "../../components/partials/backend/HeaderStyle/HeaderStyle1";
import SidebarStyle from "../../components/partials/backend/SidebarStyle/SidebarStyle";
import FooterStyle from "../../components/partials/backend/FooterStyle/FooterStyle";
import { AuthProvider } from "../../context/auth.context";

// Router Component
// import Layout1Route from "../../router/layout1-route";

const Layout1 = () => {
  return (
    <>
      <AuthProvider>
        <div className="wrapper">
          <HeaderStyle1 />
          <SidebarStyle />
          <div className="content-page">
            <Outlet />
          </div>
        </div>
        <FooterStyle />
      </AuthProvider>
    </>
  );
};

export default Layout1;
