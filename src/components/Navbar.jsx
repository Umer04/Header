import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Array of navigation links
  const navLinks = [
    { text: "Home", url: "#" },
    { text: "About", url: "#" },
    { text: "Services", url: "#" },
    { text: "Projects", url: "#" },
    { text: "Blogs", url: "#" },
    { text: "Contact", url: "#" },
  ];

  return (
    <nav className="flex justify-between p-4 w-full relative">
      <div className="flex items-center">
        <a href="#" className="text-white text-2xl lg:text-3xl ml-2">
          Umer
        </a>
      </div>
      <div className={`absolute md:relative top-full ml-4 md:top-0 md:left-auto  flex font-sans gap-4 italic font-semibold flex-col md:flex-row md:bg-transparent ${showMenu ? "flex" : "hidden md:flex"}`}>
        {navLinks.map((link, index) => (
          <a key={index} href={link.url} className="text-white transition duration-200 hover:opacity-75">
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
