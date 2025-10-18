import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <main
        id="hero"
        className="container mx-auto min-h-[80vh] flex flex-wrap items-center justify-center max-w-[1280px] px-5 pt-25 lg:pt-0"
      >
        <section className="sm:w-1/2">
          <section>
            <section className="border rounded-lg px-2 py-2 border-blue-800 text-blue-800 mb-3 font-semibold">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, fuga.</p>
            </section>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl/snug font-semibold">Kelompok Studi Pasar Modal SV IPB</h1>
            <p className="text-xl font-thin mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis aut explicabo eum veritatis, quis
              mollitia ab doloribus amet rem repellendus!
            </p>
          </section>
          <section>
            <Link
              href="/about"
              className="bg-blue-900 text-white px-5 py-3 rounded-sm mt-5 inline-block transition-colors duration-500 hover:bg-blue-700 hover:cursor-pointer "
            >
              Learn More
            </Link>
          </section>
        </section>
        <section className="mt-10 lg:mt-0 sm:w-1/2">
          <section className="flex justify-center px-5">
            <Image
              src={"/static/img/logo-kspm.png"}
              alt="LOGO KSPMSV IPB"
              width={500}
              height={500}
              className="object-cover"
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default Hero;
