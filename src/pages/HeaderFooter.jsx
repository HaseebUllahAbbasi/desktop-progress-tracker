import React, { ReactNode } from "react";
import AppNavbar from "../components/Navbar.jsx";

const HeaderFooter = ({ children }) => {
  return (
    <>
      <AppNavbar />
      {children}
    </>
  );
};

export default HeaderFooter;
