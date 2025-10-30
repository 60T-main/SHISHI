"use client";
import { useEffect } from "react";

export default function MerchImage(merch) {
  return (
    <div className="merch-img-div">
      <img src={merch.merch.image_urls[0]} alt={merch.merch.name} />
    </div>
  );
}
