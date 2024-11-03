import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { navItems } from "../constant";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawer] = useState(false); //i.e is closed

  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl border-b border-neutral-700/80 py-3">
      <div className="container mx-auto relative px-4 text-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Adexbits log" className="h-10 w-10 mr-2" />
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="py-2 hover:border-orange-600 hover:border-b-4 ">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="" className="px-3 py-2 rounded-md border">
              Join Us
            </a>
            <a
              href=""
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
            >
              Contact Us
            </a>
          </div>

          <div className="flex lg:hidden flex-column justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <i className="fa-sharp fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden top-14">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-6">
                <a href="" className="px-3 py-2 rounded-md border">
                  Join Us
                </a>
                <a
                  href=""
                  className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
