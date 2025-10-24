"use client";
import usePageHooks from "../../hooks/usePageHooks.jsx";

export default function MenuIcon() {
  const { openOverlay, overlayState } = usePageHooks();

  return (
    !overlayState && (
      <div className="menu-div" onClick={openOverlay}>
        <i className="bi bi-list"></i>
      </div>
    )
  );
}
