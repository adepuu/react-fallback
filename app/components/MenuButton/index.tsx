"use client";

import { useContext, useEffect, useState } from "react";
import cn from "classnames";
import MenuContext from "@/context/MenuContext";

const MenuButton: React.FC = () => {
  const [showing, setShowing] = useState<boolean>(false);
  const { setShowing: setGlobalMenuShowing } = useContext(MenuContext);
  
  useEffect(() => {
    console.log("showing state:", showing)
  }, [showing]);
  
  const handleToggleMenuButton = () => {
    setShowing(prev => !prev);
  }

  const handleClickButton = () => {
    setGlobalMenuShowing()
  }

  return (
    <div
      onClick={handleClickButton}
      onMouseLeave={handleToggleMenuButton}
      onMouseEnter={handleToggleMenuButton}
      className={cn("rounded-s-full absolute flex py-5 px-8 bg-black text-[40px] gap-7 top-1/2 -translate-y-1/2",
        showing ? "right-0" : "-right-[275px]"
      )}
    >
      <div>👋</div>
      <div className="text-white font-medium">Hi I’m Ayush</div>
    </div>
  );
};

export default MenuButton;
