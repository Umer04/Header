import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex justify-between p-4 w-full fixed ">
      <div className="flex items-center">
        <a href="#" className="text-white text-2xl lg:text-3xl ml-2">
          Umer
        </a>
      </div>
      <div className={`absolute md:relative top-full  md:top-0 md:left-auto ${showMenu ? "bg-gray-900" : ""}  p-2 flex font-sans gap-4 italic font-semibold flex-col md:flex-row md:bg-transparent ${showMenu ? "flex" : "hidden md:flex"} "`}  >
        {NavLinks.map((link, index) => (
          <a key={index} href={link.url} className={`" text-white  px-1  transition duration-200 hover:opacity-50 "`}>
            {link.text}
          </a>
        ))}
      </div>
      <div className="w-fit block md:hidden">
        {showMenu ? (
          <FaTimes className="text-xl lg:text-3xl text-white" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-xl lg:text-3xl text-white" onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;