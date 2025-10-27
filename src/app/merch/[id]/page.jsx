import React from "react";
import { getMerch } from "@/api/queries";
import Image from "next/image";

export default async function page({ params }) {
  const id = (await params).id;
  let merch = null;
  // Fetch Merch
  try {
    merch = await getMerch(id);
  } catch (error) {
    <div>
      Error fetching merch {id}: {error.message}
    </div>;
  }

  if (!merch && !merch[0] && merch.length === 0) {
    return (
      <div className="text-white flex items-center justify-center text-3xl mt-20">
        merch not found.
      </div>
    );
  } else {
    merch = merch[0];
    console.log(merch);
  }
  return (
    <div className="merches-div">
      <div className="merch">
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
    </div>
  );
}
