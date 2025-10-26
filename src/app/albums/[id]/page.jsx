import React from "react";
import { getAlbum, getArtist } from "@/api/queries";
import Image from "next/image";

export default async function page({ params }) {
  const id = (await params).id;
  let album = null;
  let artist = null;

  // Fetch Album
  try {
    album = await getAlbum(id);
  } catch (error) {
    <div>
      Error fetching album {id}: {error.message}
    </div>;
  }
  if (!album && !album[0] && album.length === 0) {
    return (
      <div className="text-white flex items-center justify-center text-3xl mt-20">
        No album found.
      </div>
    );
  } else {
    album = album[0];
    console.log(album);

    //   Fetch Artist
    try {
      artist = await getArtist(album.artist_id);
    } catch (error) {
      <div>
        Error fetching artist {album.artist_id}: {error.message}
      </div>;
    }
    if (!artist && !artist[0] && artist.length === 0) {
      return (
        <div className="text-white flex items-center justify-center text-3xl mt-20">
          No artist found.
        </div>
      );
    } else {
      artist = artist[0];
    }
    // embed styles
  }
  const style = { border: 0, width: 360, height: 274 };
  const albumId = 309505626;
  const color = album.id === 1 ? "aa0b0a" : "ffffff";
  return (
    <>
      <div className="albums-div">
        <div className="album">
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
            <h4>{artist.name}</h4>
            <div className="release-catalog-div">
              <p>[{album.catalog}]</p>
              <p>{album.release_date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="embed-div">
        <iframe
          style={style}
          src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=333333/linkcol=${color}/artwork=small/transparent=true/`}
          seamless
          title="Bandcamp Player"
        />
      </div>
    </>
  );
}
