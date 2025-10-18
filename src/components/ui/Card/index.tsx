import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  url: string;
  iamgeAlt?: string;
}

const index = ({ data }: { data: CardProps }) => {
  return (
    <>
      <article className="w-96 h-fit bg-slate-100 rounded-b-sm ">
        <section className="relative w-96 h-100">
          <Image
            src={data.imageSrc}
            alt={data.iamgeAlt!}
            width={400}
            height={550}
            className="object-cover h-full w-full"
          />
        </section>
        <section className="p-3">
          <p className="text-2xl font-semibold">{data.title}</p>
          <Link href={data.url} className="button-primary mt-5">
            Read More
          </Link>
        </section>
      </article>
    </>
  );
};

export default index;
