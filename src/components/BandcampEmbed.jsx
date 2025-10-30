"use client";
import React, { useEffect } from "react";
import { useSharedValue } from "@/hooks/ColorProvider";

function isValidHex(color) {
  return typeof color === "string" && /^[0-9a-fA-F]{6}$/.test(color);
}

export default function BandcampEmbed({ albumId }) {
  const { color } = useSharedValue();
  const safeColor = isValidHex(color?.replace(/^#/, ""))
    ? color.replace(/^#/, "").toLowerCase()
    : "FFFFFF";

  return (
    <div className="embed-div">
      {color && (
        <iframe
          className="embed"
          src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=333333/linkcol=${safeColor}/artwork=small/transparent=true/`}
          seamless
          title="Bandcamp Player"
        />
      )}
    </div>
  );
}

<iframe
  style="border: 0; width: 100%; height: 472px;"
  src="https://bandcamp.com/EmbeddedPlayer/album=1698110341/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/"
  seamless
>
  <a href="https://shishirecords.bandcamp.com/album/sect-of-serpents">
    Sect of Serpents by Various Artists
  </a>
</iframe>;
