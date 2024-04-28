import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import ThemeBtn from "./ThemeBtn";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showWeHere, setShowWeHere] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#1B3C73] px-3 py-3 flex justify-between items-center dark:bg-red-700">
        <div className="flex items-center gap-4">
          <IoMenu
            className="text-3xl text-white cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          />
          <div className="text-white">
            <NavLink to="/">
              <img src={logo} className="w-[70px]" alt="logo" />
            </NavLink>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <ul className="flex gap-[2rem] text-white">
            <li className="text-lg relative py-4">
              <NavLink to="/" className={showDropdown ? "text-[#FF9146]" : ""}>
                Home
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/about"
                className={showDropdown ? "text-[#FF9146]" : ""}
              >
                About
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/create-post"
                className={showDropdown ? "text-[#FF9146]" : ""}
              >
                Create a Post
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/contact"
                className={showDropdown ? "text-[#FF9146]" : ""}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-[0.5rem] sm:gap-[1rem]">
            <li className="bg-[#FF9416] p-[5px] md:p-[7px] md:text-xl cursor-pointer border-[#FF9416] border-[2px] hover:bg-transparent rounded-md text-white">
              <Link
                to="https://www.instagram.com/upflairs_pvt_ltd/"
                target="_blank"
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="bg-[#FF9416] p-[5px] md:p-[7px] md:text-xl cursor-pointer border-[#FF9416] border-[2px] hover:bg-transparent rounded-md text-white">
              <Link to="https://www.youtube.com/@upflairs6521" target="_blank">
                <FaYoutube />
              </Link>
            </li>
            <li className="bg-[#FF9416] p-[5px] md:p-[7px] md:text-xl cursor-pointer border-[#FF9416] border-[2px] hover:bg-transparent rounded-md text-white">
              <Link
                to="https://www.linkedin.com/company/upflairs/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <ThemeBtn/>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed lg:hidden top-0 w-full h-full z-40 bg-[#0000004b] transition-all duration-300 ${
          sidebarOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`relative w-[250px] h-full px-[1rem] py-[6rem] bg-white transition-transform duration-300 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-[1rem] left-[1rem] text-2xl cursor-pointer bg-[#003366] text-white p-[3px]"
            onClick={toggleSidebar}
          >
            <IoMdClose />
          </button>

          <ul>
            <li>
              <NavLink
                to="/"
                className="block text-white bg-[#003366] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#40679E]"
                onClick={() => sidebarOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className=" text-white bg-[#003366] mb-3 py-2 pl-4 pr-2 w-full rounded-md font-medium ">
              <div className="flex items-center justify-between">
                <NavLink>We are here</NavLink>
                <button
                  className="border-white border-2 p-1"
                  onClick={() => {
                    setShowWeHere((val) => !val);
                  }}
                >
                  <IoIosArrowDown />
                </button>
              </div>
              
            </li>
            <li className=" text-white bg-[#003366] mb-3 py-2 pl-4 pr-2 w-full rounded-md font-medium ">
              <div className="flex items-center justify-between">
                <NavLink to="/courses">Courses</NavLink>
                <button
                  className="border-white border-2 p-1"
                  onClick={() => {
                    setShowDropdown((val) => !val);
                  }}
                >
                  <IoIosArrowDown />
                </button>
              </div>
            </li>
            <li>
              <NavLink
                to="https://summers.upflairs.com/"
                className="block text-white bg-[#003366] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#40679E]"
                onClick={() => setSidebarOpen(false)}
              >
                Summer Internship
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block text-white bg-[#003366] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#40679E]"
                onClick={() => setSidebarOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  </>
  )
};
export default Header;