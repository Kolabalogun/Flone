import React, { useEffect, useRef, useState } from "react";
import LOGO from "../components/LOGO.png";
import { FaSearch, FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Navbar({ search, searchF, handleSearch }) {
  const [showSearch, setShowSearch] = useState(false);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="container mx-auto max-w-7xl navbar relative">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle ">
            <FaBars size={24} color="white" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black  rounded-box w-52"
          >
            <li>
              <Link className="text-lg" to="/">
                Homepage
              </Link>
            </li>
            <li>
              <Link className="text-lg" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-lg" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {showSearch && windowSize[0] < 500 ? (
        <div
          className={` ${
            windowSize[0] < 500 ? "navbar-start " : "navbar-center"
          }`}
        >
          <img className=" w-14 cursor-pointer" src={LOGO} alt="logo" />
        </div>
      ) : (
        <div className="navbar-center">
          <Link to="/">
            <img className=" w-64 cursor-pointer" src={LOGO} alt="logo" />
          </Link>
        </div>
      )}

      <div
        className={`navbar-end ${
          showSearch && windowSize[0] < 500 && "w-[150%]"
        } `}
      >
        {showSearch && (
          <input
            type="text"
            placeholder="search"
            className="py-3 px-4 sm:w-[60%] w-[150%] outline-none bg-white rounded-full"
            value={search}
            onChange={(e) => searchF(e.target.value)}
          />
        )}

        <button
          onClick={() => {
            setShowSearch(!showSearch);
            handleSearch();
          }}
          className="btn btn-ghost btn-circle bg-[#26dbe7] absolute "
        >
          <FaSearch size={22} color="white" />
        </button>
      </div>
    </div>

    // <nav>
    //   <div className=" grid ">
    //     <div className="navbar px-10  ">
    //       <div className="navbar-start ">
    //         <div className="dropdown">
    //           <label className="">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className=" w-10"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="white"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M4 6h16M4 12h16M4 18h7"
    //               />
    //             </svg>
    //           </label>
    //         </div>
    //       </div>
    //       <div className="navbar-center  ">
    //         <a className="w-52">
    //           {" "}
    //           <img src={logo} alt="" />
    //         </a>
    //       </div>
    //       <div className="navbar-end">
    //         <button className="btn btn-ghost btn-circle">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-8"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    /* <div className="flex items-center justify-between py-0 px-10">
        <div className="">
          <label className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>

        <div>
          <div className="w-48 object-cover">
            {" "}
            <img src={logo} className="" alt="" />
          </div>
        </div>

        <div className="relative flex gap-x-2 items-center">
          <p className="" onClick={() => { setShow(prev => !prev); console.log(show) }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
            </svg>
            </p>
            <input type="text" className={`absolute outline-none h-full rounded-md text-gray-700 w-[320px] px-2 -left-[328px] ${show ? "block" : "hidden"}`} />
        </div>
      </div> */
    //</nav>
  );
}
