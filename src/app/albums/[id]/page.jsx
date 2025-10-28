import React from "react";
import { getAlbum, getArtist, getMerchByAlbum } from "@/api/queries";
import Image from "next/image";

import { ColorProvider } from "@/hooks/ColorProvider";
import AlbumImage from "@/components/AlbumImage.jsx";
import BandcampEmbed from "@/components/BandcampEmbed";
import MerchImages from "@/components/MerchImages";

export default async function page({ params }) {
  const id = (await params).id;
  let album = null;
  let artist = null;
  let merches = null;
  let merchDom = "";

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

    // Fetch Artist
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

    // Fetch Merch

    try {
      merches = await getMerchByAlbum(album.id);
    } catch (error) {
      <div>
        Error fetching merch {album.id}: {error.message}
      </div>;
    }
    console.log(merches);

    if (merches && merches[0] && !(merches.length === 0)) {
      merchDom = (
        <div className="merch-album-parent">
          <h2 className="album-merch-header">Merch</h2>
          <div className="merches-div-album">
            {merches.map((merch) => (
              <div className="merch-album" key={merch.id}>
                <div className="merch-album-img-div">
                  <MerchImages images={merch.image_urls} />
                </div>
                <div className="merch-title-div">
                  <h4>{merch.name}</h4>
                  <p>{merch.type}</p>
                  <div className="price-buy-div">
                    <p>€{merch.price}</p>
                    <a href="https://shishirecords.bandcamp.com/merch">
                      <h2 className="glitch" data-text="Buy Now">
                        Buy <span>Now</span>
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    // embed styles
  }
  const albumId = album.bandcamp_id;

  return (
    <ColorProvider>
      <div className="album-bancamp-parent">
        <div className="albums-detail-div">
          <div className="album">
            <AlbumImage album={album} />
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
        <BandcampEmbed albumId={albumId} />
      </div>
      {merchDom ? merchDom : ""}
    </ColorProvider>
  );
}
