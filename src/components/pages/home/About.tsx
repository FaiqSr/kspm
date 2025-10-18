import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-0" id="about">
      <section id="about" className="container mx-auto px-5 min-h-[80vh] flex flex-wrap items-center max-w-[1280px]">
        <section className="sm:w-1/2">
          <section>
            <p>About Us</p>
            <h2 className="mt-5 text-2xl/relaxed">
              Kelompok Studi Pasar Modal
              <br />
              Sekolah Vokasi Institut Pertanian Bogor
            </h2>
            <p className="mt-2 font-thin">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt soluta, tenetur et aliquid omnis maxime
              ipsam repellendus saepe quasi error ex distinctio, voluptatibus quae natus, eligendi iste consequatur sed
              expedita?
            </p>
          </section>
          <section>
            <Link href={"/about"} className="button-primary">
              Ours Journey
            </Link>
          </section>
        </section>
        <section className="sm:w-1/2 flex justify-center items-center mt-10 lg:mt-0 w-full">
          <section className="relative w-full max-w-md h-auto max-h-[25rem]">
            <Image
              src="/static/img/kamuslopedia.webp"
              alt="kamuslopedia"
              width={1440}
              height={1800}
              className="rounded-xl object-cover w-full h-auto max-h-[25rem]"
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
