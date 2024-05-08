"use client";
import MenuContext from "@/context/MenuContext";
import { useContext } from "react";

const HamburgerButton = () => {
  const { setShowing } = useContext(MenuContext);

  const handleHideMenu = () => {
    setShowing();
  }

  return (
    <div onClick={handleHideMenu} className=" text-white rounded-full h-10 w-10 bg-black flex items-center justify-center">
        <span>=</span>
      </div>
  );
};

export default HamburgerButton;