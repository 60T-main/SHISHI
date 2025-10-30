"use client";
import React, { useEffect } from "react";
import { useSharedValue } from "@/hooks/ColorProvider";

// function isValidHex(color) {
//   return typeof color === "string" && /^[0-9a-fA-F]{6}$/.test(color);
// }

export default function BandcampEmbed({ albumId }) {
  // const { color } = useSharedValue();
  // const safeColor = isValidHex(color)
  //   ? color.replace(/^#/, "").toLowerCase()
  //   : "ffffff";

  const safeColor = "ffffff";

  return (
    <div className="embed-div">
      <iframe
        key={safeColor} // force remount on color change
        className="embed"
        src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=333333/linkcol=${safeColor}/artwork=small/transparent=true/`}
        seamless
        title="Bandcamp Player"
      />
    </div>
  );
}
