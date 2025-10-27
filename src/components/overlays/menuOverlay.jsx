"use client";

import OverlayPortal from "../../portals/OverlayPortal.jsx";

import usePageHooks from "../../hooks/usePageHooks.jsx";

import Link from "next/link.js";
import { useEffect } from "react";

export default function MenuOverlay() {
  const { overlayState, openOverlay, closeOverlay, toggleOverlay } =
    usePageHooks();

  useEffect(() => {
    if (overlayState) {
      const elements = document.querySelectorAll(".menu-text");
      elements.forEach((element) => {
        element.onclick = () => {
          closeOverlay();
        };
      });
    }
  }, [overlayState, closeOverlay]);

  return (
    <OverlayPortal>
      {overlayState && (
        <>
          <div className="background-overlay" onClick={closeOverlay}></div>

          <div className="menu-overlay">
            <div className="menu-close" onClick={closeOverlay}>
              <i className="bi bi-x-lg"></i>
            </div>
            <Link href="/merch">
              <div className="menu-text">MERCH</div>
            </Link>
            <Link href="/albums">
              <div className="menu-text">ALBUMS</div>
            </Link>
            <Link href="/podcast">
              <div className="menu-text">PODCAST</div>
            </Link>
            <Link href="/contact">
              <div className="menu-text">CONTACT</div>
            </Link>
            <Link href="/info">
              <div className="menu-text">INFO</div>
            </Link>
          </div>
        </>
      )}
    </OverlayPortal>
  );
}
