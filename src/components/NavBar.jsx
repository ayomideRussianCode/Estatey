import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Properties", "Agents", "Pages"];

  return (
    <header className="flex">
      <div className="flex justify-between items-center w-full px-[100px] h-30 bg-[#401408] text-white">
        <h1 className="font-medium text-4xl">Estatey</h1>
        <nav className="hidden md:flex">
          <ul className="flex justify-around gap-20">
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
        {isOpen && (
          <nav className="md:hidden bg-[#401408] mt-16 px-12 py-8">
            <ul className="flex flex-col gap-4 text-lg">
              {navLinks.map((link) => (
                <li key={link} className="cursor-pointer hover:text-black">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="md:hidden flex justify-center items-center ">
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
    </header>
  );
}

export default NavBar;
