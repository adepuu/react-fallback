"use client"
import { createContext } from "react";

const defaultValue = {
  menuShowing: false,
  setShowing: () => {},
}

interface MenuContextType {
  menuShowing: boolean;
  setShowing: () => void;
}

const MenuContext = createContext<MenuContextType>(defaultValue);

export default MenuContext;