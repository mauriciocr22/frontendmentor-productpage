import { useState } from "react";

import menuIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-close.svg";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return !isOpen ? (
    <button className="h-[15px]" onClick={handleMenuClick}>
      <img src={menuIcon} alt="" />
    </button>
  ) : (
    <div>
      <button
        className="fixed top-0 left-0 h-full w-full z-10 bg-black opacity-50"
        onClick={handleMenuClick}
      ></button>
      <div className="flex flex-col gap-12 fixed h-screen bg-white w-[65%] top-0 left-0 z-20 p-[1.7rem]">
        <button onClick={handleMenuClick}>
          <img src={closeIcon} alt="" />
        </button>
        <div className="flex flex-col font-bold text-lg gap-3">
          <a href="">Collections</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
}
