import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/constant";

const Footer = () => {
  return (
    <div className="bg-black text-white py-6">
      <div>
        <div className="md:pt-10 md:pb-3 flex justify-between items-center mr-5 md:ml-15 md:mr-40 md:mb-4">
          <div>
            <img className="w-30 md:w-80 h-20" src={LOGO} alt="logo" />
          </div>
          <div className="text-[#ababab]">
            <Link className="px-1.5 md:px-4 hover:underline" to="/about">
              About
            </Link>
            <Link className="px-1.5 md:px-4 hover:underline" to="/about">
              Privacy Policy
            </Link>
            <Link className="px-1.5 md:px-4 hover:underline" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="h-[1px] bg-gray-500 opacity-50 w-11/12 md:w-4/5 mx-auto"></div>
        <div className="w-fit m-auto pt-3 md:pt-5">
          <p className="text-[#ababab] text-sm">
            Crafted by{" "}
            <a
              className="text-white text-sm font-medium hover:underline"
              href="https://linkedin.com/in/shiivxm"
              target="_blank"
            >
              Shivam
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
