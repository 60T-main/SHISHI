"use client";
import React, { useEffect, useRef } from "react";
// import { getAverageRGB } from "@/utils/averageColor";
// import { useSharedValue } from "@/hooks/ColorProvider";

export default function AlbumImage(album) {
  // const imgRef = useRef(null);
  // const { color, setColor } = useSharedValue();
  // let avg_color = null;
  // useEffect(() => {
  //   if (imgRef.current) {
  //     avg_color = getAverageRGB(imgRef.current);
  //     setColor(avg_color);
  //   }
  // }, []);

  return (
    <div className="album-img-div">
      <img
        src={album.album.cover_url}
        alt={album.album.title}
        loading="eager"
      />
    </div>
  );
}
