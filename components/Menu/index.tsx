"use client";
import MenuContext from "@/context/MenuContext";
import { useContext } from "react";

const Menu: React.FC = () => {
  const { menuShowing, setShowing } = useContext(MenuContext);
  const handleHideMenu = () => {
    setShowing();
  }
  if (!menuShowing) return null;
  return (
    <div className="fixed top-0 h-screen bg-opacity-40 bg-neutral-950 w-full flex justify-end">
      <div onClick={handleHideMenu} className="bg-black w-1/2 h-full text-white">
        close
      </div>
    </div>
  );
};

export default Menu;