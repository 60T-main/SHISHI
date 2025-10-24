"use client";
import Image from "next/image";
import MenuIcon from "./icons/MenuIcon.jsx";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="logo-div">
        <Link href="/">
          <Image
            loading="eager"
            src="/logo.svg"
            alt="logo"
            width={500}
            height={500}
            className="logo"
          />
        </Link>
      </div>

      <MenuIcon></MenuIcon>
    </header>
  );
}
