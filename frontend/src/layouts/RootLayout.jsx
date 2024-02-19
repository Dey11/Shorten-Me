import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <main className=" bg-gradient-to-r from-[#b0dfda] to-[#76dacf] h-full text-[#244a4b] font-medium font-sans">
      <div className="">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default RootLayout;
