"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
import Image from "next/image";
import "swiper/css/zoom";

export default function MerchImages({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
      navigation
      zoom={true}
      className="swiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="w-full">
          <div className="swiper-zoom-container">
            <Image src={image} alt={image} width={500} height={500} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
