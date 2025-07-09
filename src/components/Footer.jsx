import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="h-40 flex justify-between items-center mx-40">
        <div>
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="text-[#ababab]">
          <Link to="/about">About</Link>
          <Link to="/about">Privacy Policy</Link>
          <Link to="/about">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
