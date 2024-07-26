import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar bg-black text-white font-semiblod">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="outline outline-offset-2 outline-1  menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-white text-black rounded-box w-52 flex items-center justify-center"
              >
                <li className="hover:bg-gray-200 rounded-md font-bold">
                  <a href="/Info" className="text-[13px]">
                    ACTIVITY & INFORMATION
                  </a>
                </li>
                <li className="hover:bg-gray-200 rounded-md font-bold">
                  <a href="/Vision" className="px-[4.5rem]">
                    VISION
                  </a>
                </li>
                <li>
                  <a href="/APPLYING" className="px-[4rem] font-bold">
                    APPLYING
                  </a>
                </li>
                <li className="hover:bg-gray-200 rounded-md">
                  <a href="/" className="px-[4rem] font-bold">
                    Homepage
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="navbar-center">
          <img className="w-10 h-10" src="/cc-logo.png" loading="lazy" />
          <a href="/" className="btn btn-ghost text-xl">
            Computer Club
          </a>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default Header;
