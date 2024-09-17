import React from "react";

// react-router
import { Outlet } from "react-router-dom";

const BlankLayout = () => {
  return (
    <>
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default BlankLayout;
