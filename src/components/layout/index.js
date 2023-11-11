import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import StickyChat from "../StickyChat";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <StickyChat />
      <Footer />
    </>
  );
};

export default Layout;
