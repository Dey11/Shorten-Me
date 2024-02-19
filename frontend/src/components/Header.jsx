import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";

const Header = () => {
  useEffect(async () => {
    const response = await axios.post(
      "http://localhost:3000/auth/profile",
      {},
      { withCredentials: true }
    );
    console.log(response);
  }, []);

  return (
    <div className="w-full bg-[#295b5c] rounded-b-sm ">
      <nav className=" 2xl:max-w-[1400px] mx-auto pt-3 pb-4 text-[#b0dfda] 2xl:text-md">
        <ul className="grid 2xl:grid-cols-12 grid-cols-4 text-center gap-2">
          <li className=" hover:text-[#d4f3f0] hover:bg-[#396365] ">
            <Link to="/"> Home </Link>
          </li>
          <li className="hover:text-[#d4f3f0] hover:bg-[#396365]">
            <Link to="/shorten">Shorten Me!</Link>
          </li>
          <li className="hover:text-[#d4f3f0] hover:bg-[#396365] 2xl:col-start-11 ">
            <Link to="/signup"> Sign Up</Link>
          </li>
          <li className="hover:text-[#d4f3f0] hover:bg-[#396365] 2xl:col-start-12">
            <Link to="/login"> Login </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
