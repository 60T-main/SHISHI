import React from "react";
import { getMerch } from "@/api/queries";
import Image from "next/image";

export default async function page() {
  let merches = [];

  try {
    merches = await getMerch();
  } catch (error) {
    return <div>Error fetching artists: {error.message}</div>;
  }

  if (!merches || merches.length === 0) {
    return (
      <div className="text-white flex items-center justify-center text-3xl mt-20">
        No merch found.
      </div>
    );
  }
  return (
    <div className="merches-div">
      {merches.map((merch) => (
        <div className="merch" key={merch.id}>
          <div className="merch-img-div">
            <Image
              src={merch.image_urls[0]}
              alt={merch.name}
              width={500}
              height={500}
            />
          </div>

          <div className="merch-title-div">
            <h4>{merch.name}</h4>
            <p>{merch.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
