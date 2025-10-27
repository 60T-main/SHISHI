"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { getAverageRGB } from "@/utils/averageColor";
import { useSharedValue } from "@/hooks/ColorProvider";

export default function AlbumImage(album) {
  const { color, setColor } = useSharedValue();
  let avg_color = null;
  useEffect(() => {
    avg_color = getAverageRGB(document.getElementById("i"));
    setColor(avg_color);
    console.log(avg_color);
  }, []);
  return (
    <div className="album-img-div">
      <Image
        id="i"
        src={album.album.cover_url}
        alt={album.album.title}
        width={500}
        height={500}
      />
    </div>
  );
}
