"use client";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="stream">
            <a href="https://shishirecords.bandcamp.com/">
              <i className="fa-brands fa-bandcamp"></i>
            </a>
            <a href="https://soundcloud.com/shishirecords">
              <i className="fa-brands fa-soundcloud"></i>
            </a>
            <a href="https://www.youtube.com/@shishirecords">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/shishi.records/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/shishirecords">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="copyright">
            <p>SHISHI © 2020</p>
          </div>
        </div>
      </footer>
    </>
  );
}
