import React from "react";
import { getMerch } from "@/api/queries";
import Image from "next/image";
import Link from "next/link";
import MerchImage from "@/components/MerchImage";

export default async function page() {
  let merches = [];

  try {
    merches = await getMerch();
  } catch (error) {
    return <div>Error fetching merch: {error.message}</div>;
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
        <Link href={`/${merch.id}`} key={merch.id}>
          <div className="merch">
            <MerchImage merch={merch} />
            <div className="merch-title-div">
              <h4>{merch.name}</h4>
              <p>{merch.type}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
