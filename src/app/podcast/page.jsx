"use client";
import React from "react";

export default function page() {
  return (
    <div className="podcast-div">
      <iframe
        className="podcast"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1418074480&color=%23050505&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false&visual=false"
      ></iframe>
    </div>
  );
}
