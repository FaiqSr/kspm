"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`flex justify-between sm:justify-around fixed mx-auto w-full px-5 sm:px-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-2"
        }`}
      >
        <nav>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src={"/static/img/logo-kspm.png"} alt="KSPM" height={60} width={60} />
            KSPM SV IPB
          </Link>
        </nav>

        <nav className="hidden sm:flex">
          <ul className="flex justify-center items-center gap-4 font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#update">Update</Link>
            </li>
            <li>
              <Link href="#sponsor">Sponsor</Link>
            </li>
          </ul>
        </nav>

        <nav className="flex items-center sm:hidden">
          <button>
            <CgMenuGridO size={30} />
          </button>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
