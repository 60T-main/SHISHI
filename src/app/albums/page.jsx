import React from "react";
import Image from "next/image";
import { getAlbums, getArtists } from "@/api/queries";
import Link from "next/link";

export default async function page() {
  let albums = [];
  let artists = [];
  try {
    albums = await getAlbums();
  } catch (error) {
    return <div>Error fetching albums: {error.message}</div>;
  }

  try {
    artists = await getArtists();
  } catch (error) {
    return <div>Error fetching artists: {error.message}</div>;
  }

  if (!albums || albums.length === 0) {
    return (
      <div className="text-white flex items-center justify-center text-3xl mt-20">
        No albums found.
      </div>
    );
  }
  if (!artists || artists.length === 0) {
    return (
      <div className="text-white flex items-center justify-center text-3xl mt-20">
        No artists found.
      </div>
    );
  }

  return (
    <div className="albums-div">
      {albums.map((album) => (
        <Link href={`/albums/${album.id}`} key={album.id}>
          <div className="album">
            <div className="album-img-div">
              <Image
                src={album.cover_url}
                alt={album.title}
                width={500}
                height={500}
                loading="eager"
              />
            </div>

            <div className="album-title-div">
              <h3>{album.title}</h3>
              <h4>
                {/* fix this */}
                {artists.find((a) => a.id === album.artist_id)?.name ||
                  "Unknown Artist"}
              </h4>
              <p>[{album.catalog}]</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
