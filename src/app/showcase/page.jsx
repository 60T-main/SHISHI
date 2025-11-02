import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="events-parent">
      <a href="https://ra.co/events/1937483" className="cursor-pointer">
        <div className="event">
          <div className="event-cover-div">
            <Image
              id="i"
              src={
                "https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vYjU0NmJlOTIzOGE1OGQyNGI5OGQ0NTFjOWRiZjk2NzQ5MjJiYzI3Ni5wbmc="
              }
              alt={"4 year"}
              width={500}
              height={500}
            />
          </div>

          <div className="event-title-div">
            <h3>SHISHI IV YEAR ANNIVERSARY</h3>
          </div>
        </div>
      </a>
    </div>
  );
}
