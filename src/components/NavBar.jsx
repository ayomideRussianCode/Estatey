import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Properties", "Agents", "Pages"];

  return (
    <header className="flex bg-[#401408] text-white">
      <div className="flex justify-between items-center  w-full px-4 md:px-10 xl:px-[100px] h-30 bg-[#401408]">
        <h1 className="font-medium text-4xl">Estatey</h1>
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex justify-center items-center gap-10 xl:gap-20">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className=" hidden md:flex px-6 py-3 text-xs bg-white text-[#401408] font-semibold rounded-none ">
          Contact Us
        </button>
        <div className="md:hidden ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <div className="">
                <IoCloseOutline className="w-12 h-8" />
              </div>
            ) : (
              <RxHamburgerMenu className="w-12 h-10" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-[#401408] text-white px-8 pb-6 py-4">
          <ul className="flex flex-col gap-4 text-lg">
            {navLinks.map((link) => (
              <li key={link} className="cursor-pointe">
                <a href="#">{link}</a>
              </li>
            ))}
            <li>
              <button className=" flex p-2 text-xs bg-white text-[#401408] font-semibold rounded-none ">
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
