import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow-sm m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image src={"/static/img/logo-kspm.png"} alt="logo kspm" width={80} height={80} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">KSPM SV IPB</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <Link href={"/"} className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"#about"} className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link href={"#update"} className="hover:underline me-4 md:me-6">
                  Update
                </Link>
              </li>
              <li>
                <Link href={"#sponsor"} className="hover:underline">
                  Sponsor
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default index;
