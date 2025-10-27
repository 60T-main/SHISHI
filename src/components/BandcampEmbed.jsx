"use client";
import React, { useEffect } from "react";
import { useSharedValue } from "@/hooks/ColorProvider";

export default function BandcampEmbed({ albumId }) {
  const { color } = useSharedValue();

  useEffect(() => {}, []);
  return (
    <div className="embed-div">
      <iframe
        className="embed"
        src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=333333/linkcol=${
          color ? color : "FFFFFF"
        }/artwork=small/transparent=true/`}
        seamless
        title="Bandcamp Player"
      />
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
