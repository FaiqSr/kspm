import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CgMenuGridO } from "react-icons/cg";

const NavBar = () => {
  return (
    <>
      <header className="flex justify-between sm:justify-around py-2 fixed mx-auto w-full px-5 sm:px-0">
        <nav>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src={"/static/img/logo-kspm.png"} alt="KSPM" height={60} width={60} />
            KSPM SV IPB
          </Link>
        </nav>
        <nav className="hidden sm:flex">
          <ul className="flex justify-center items-center gap-2 font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
