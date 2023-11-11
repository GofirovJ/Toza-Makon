import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import StickyChat from "../StickyChat";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Toza makon</title>
      </Head>
      <Navbar />
      {children}
      <StickyChat />
      <Footer />
    </>
  );
};

export default Layout;
