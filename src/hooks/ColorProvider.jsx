"use client";
import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [color, setColor] = useState(null);
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useSharedValue() {
  return useContext(ColorContext);
}
