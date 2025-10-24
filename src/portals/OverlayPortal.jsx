"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function OverlayPortal({ children }) {
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    setPortalRoot(document.getElementById("overlay-portal-root"));
  }, []);

  return portalRoot ? createPortal(children, portalRoot) : null;
}
