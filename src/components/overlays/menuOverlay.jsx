"use client";

import OverlayPortal from "../../portals/OverlayPortal.jsx";

import usePageHooks from "../../hooks/usePageHooks.jsx";

import Link from "next/link.js";
import { useEffect } from "react";

export default function MenuOverlay() {
  const { overlayState, openOverlay, closeOverlay, toggleOverlay } =
    usePageHooks();

  useEffect(() => {
    overlayState
      ? document.body.classList.add("overlay-open")
      : document.body.classList.remove("overlay-open");
  }, [overlayState]);

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
              <div className="menu-text">Merch</div>
            </Link>
            <Link href="/discography">
              <div className="menu-text">Discography</div>
            </Link>
            <Link href="/podcast">
              <div className="menu-text">Podcast</div>
            </Link>
            <Link href="/premiere">
              <div className="menu-text">Premiere</div>
            </Link>
            <Link href="/showcase">
              <div className="menu-text">Showcase</div>
            </Link>
            <Link href="/contact">
              <div className="menu-text">Contact</div>
            </Link>
            <Link href="/info">
              <div className="menu-text">Info</div>
            </Link>
          </div>
        </>
      )}
    </OverlayPortal>
  );
}
