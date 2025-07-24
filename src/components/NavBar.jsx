import React from "react";

function NavBar() {
  return (
    <header className="flex">
      <div className="flex justify-between items-center w-full px-[100px] p-[30px] bg-[#401408] text-white">
        <h1 className="font-medium text-4xl">Estatey</h1>
        <div className="flex">
          <ul className="flex justify-around gap-[120px]">
            <li>Home</li>
            <li>Properties</li>
            <li>Agents</li>
            <li>Pages</li>
          </ul>
        </div>
        <button className="px-6 py-3 text-xs bg-white text-[#401408] font-semibold rounded-none ">Contact Us</button>
      </div>
    </header>
  );
}

export default NavBar;
