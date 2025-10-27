import supabase from "@/api/client";  

export const getAlbums = async () => {
    const { data: albums, error } = await supabase.from("album").select("*");

    if (error) {
      console.error("Error fetching albums:", error);
      return error.message
      }
      
      return albums;

};
export const getAlbum = async (id) => {
    const { data: album, error } = await supabase
      .from("album")
      .select("*")
      .eq("id", id);

    if (error) {
      console.error("Error fetching album:", error);
      return error.message;
    }
    
    return album ? album : null;
};

export const getArtists = async () => {
    const { data: artists, error } = await supabase.from("artist").select("*");

    if (error) {
        console.error("Error fetching artists:", error);
        return error.message
    }
    
    return artists;
}
export const getArtist = async (id) => {
    const { data: artist, error } = await supabase.from("artist").select("*")
      .eq("id", id);

    if (error) {
        console.error("Error fetching artist:", error);
        return error.message
    }
    
    return artist ? artist : null;
}
      
  export const getMerch =  async (id) => {
    let query = supabase.from("merch").select("*");
    if (id) {
      query = query.eq("id", id);
    }
    
    const { data: merch, error } = await query;

    if (error) {
      console.error("Error fetching merch:", error);
      return error.message
      }
    
    return merch;


};
  export const getMerchByAlbum =  async (id) => {
    let query = supabase.from("merch").select("*");
    if (id) {
      query = query.eq("album_id", id);
    }
    
    const { data: merch, error } = await query;

    if (error) {
      console.error("Error fetching merch:", error);
      return error.message
      }
    
    return merch;


};
  
