import React, { useState, useRef, useEffect, useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import ThemeBtn from "./ThemeBtn";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { isAuthorizedContext } from "../../contexts/UserContext";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

const Header = () => {
  const dropdownRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    
  const {isAuthorized, setisAuthorized, user, setUser} = useContext(isAuthorizedContext);

  // Logout
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/v1/logout`, {
        withCredentials: true
      });
      console.log(response)
      toast.success(response.data.message);
      setUser()
      setisAuthorized(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <nav className="sticky top-0 z-30 bg-[#DFD0B8] px-3 py-3 flex justify-between items-center dark:bg-[#153448]">
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
              <NavLink to="/" className="text-[#153448] dark:text-[#DFD0B8] font-bold">
                Home
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/about"
                className="text-[#153448] dark:text-[#DFD0B8] font-bold"
              >
                About
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/create-post"
                className="text-[#153448] dark:text-[#DFD0B8] font-bold"
              >
                Create a Post
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/contact"
                className="text-[#153448] dark:text-[#DFD0B8] font-bold"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {
            isAuthorized ? 
            <>
              <div className="flex gap-4 items-center h-full">
                <div ref={dropdownRef} onClick={toggleDropdown} className="relative">
                    <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
                        {/* <h4 className='text-2xl'>{user && user.name ? user.name.charAt(0) : ""}</h4> */}
                        <h4 className='text-2xl'>A</h4>
                    </div>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-[#153448] dark:bg-[#DFD0B8] p-3 rounded-md shadow-lg z-10">
                            <ul className=''>
                                <li className='flex items-center gap-2 cursor-pointer font-bold text-[18px] dark:text-[#153448] px-4 py-2 text-white hover:bg-gray-100 dark:hover:bg-[#153448] dark:hover:text-[#DFD0B8] hover:text-[#153448] w-full text-left'>
                                <CgProfile /> <span>Profile</span>
                                </li>
                                <li className='flex items-center gap-2 cursor-pointer font-bold text-[18px] dark:text-[#153448] px-4 py-2 text-white hover:bg-gray-100 dark:hover:bg-[#153448] dark:hover:text-[#DFD0B8] hover:text-[#153448] w-full text-left' onClick={handleLogout}>
                                <IoLogOutOutline /> <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
              </div>
            </> : 
            <>
              <div className="flex gap-4">
                  <Link to={"/login"} className={`px-4 py-2 rounded-md bg-[#153448] dark:bg-[#DFD0B8] dark:text-[#153448] text-white font-semibold hover:bg-[#d52634ce] focus:outline-none focus:bg-[#D52636]`}>Login</Link>
                  <Link to={"/signup"} className={`px-4 py-2 rounded-md bg-[#153448] dark:bg-[#DFD0B8] dark:text-[#153448] text-white font-semibold hover:bg-[#d52634ce] focus:outline-none focus:bg-[#D52636]`}>Signup</Link>
              </div>
            </>
          }
          <ThemeBtn/>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed lg:hidden top-0 w-full h-full z-50 bg-[#0000004b] transition-all duration-300 ${
          sidebarOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`relative w-[250px] h-full px-[1rem] py-[6rem] bg-[#DFD0B8] dark:bg-[#153448] transition-transform duration-300 transform ${
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
                className="block text-white mb-3 dark:text-[#153448] bg-[#153448] dark:bg-[#DFD0B8] py-2 px-4 w-full rounded-md font-medium hover:bg-[#40679E]"
                onClick={() => sidebarOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/about"
                className="text-[#153448] py-2 px-4 dark:text-[#DFD0B8] font-bold"
              >
                About
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/create-post"
                className="text-[#153448] py-2 px-4 dark:text-[#DFD0B8] font-bold"
              >
                Create a Post
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/contact"
                className="text-[#153448] py-2 px-4 dark:text-[#DFD0B8] font-bold"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Toaster/>
  </>
  )
};
export default Header;