import albums from "@/data/albums.json";
import artists from "@/data/artists.json";
import merch from "@/data/merch.json";

export const getAlbums = () => albums;

export const getAlbum = (id) => albums.find((a) => a.id === Number(id)) ?? null;

export const getArtists = () => artists;

export const getArtist = (id) => artists.find((a) => a.id === Number(id)) ?? null;

export const getMerch = (id) => id ? merch.filter((m) => m.id === Number(id)) : merch;

export const getMerchByAlbum = (id) => merch.filter((m) => m.album_id === Number(id));
