import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sponsor = () => {
  return (
    <>
      <section className="min-h-svh" id="sponsor">
        <section className="container mx-auto my-20">
          <h2 className="text-center">Sponsored By</h2>
          <section className="flex items-center justify-center flex-col">
            <Link href={"https://phintracosekuritas.com/"}>
              <Image
                src={"/static/img/sponsor/phintraco-securities.png"}
                alt="phintraco securities"
                width={3375}
                height={660}
                className="w-200"
              />
            </Link>
            <Link href={"https://www.idx.co.id/id/"}>
              <Image
                src={"/static/img/sponsor/idx.png"}
                alt="phintraco securities"
                width={5000}
                height={1648}
                className="w-100"
              />
            </Link>
            <section className="flex gap-5">
              <Link href={"https://sv.ipb.ac.id/"}>
                <Image
                  src={"/static/img/sponsor/sv.png"}
                  alt="phintraco securities"
                  width={5000}
                  height={1648}
                  className="w-100"
                />
              </Link>
              <Link href={"https://phintracosekuritas.com/"}>
                <Image
                  src={"/static/img/sponsor/idclear.png"}
                  alt="phintraco securities"
                  width={5000}
                  height={1648}
                  className="w-100"
                />
              </Link>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Sponsor;
