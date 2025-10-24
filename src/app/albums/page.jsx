import React from "react";
import supabase from "@/api/client";
import Image from "next/image";

export default async function page() {
  const { data: albums, error } = await supabase
    .from("album")
    .select("*,artist(*)");

  if (error) {
    console.error("Error fetching albums:", error);
    return <div>Error fetching albums: {error.message}</div>;
  }

  if (!albums || albums.length === 0) {
    return (
      <div className="text-white flex items-center justify-center text-3xl mt-20">
        No albums found.
      </div>
    );
  }

  return (
    <div className="albums-div">
      {albums.map((album) => (
        <div className="album" key={album.id}>
          <div className="album-img-div">
            <Image
              src={album.cover_url}
              alt={album.title}
              width={500}
              height={500}
            />
          </div>

          <div className="album-title-div">
            <h3>{album.title}</h3>
            <p>[{album.catalog}]</p>
          </div>
        </div>
      ))}
    </div>
  );
}
