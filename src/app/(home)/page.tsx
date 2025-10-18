import About from "@/components/pages/home/About";
import Hero from "@/components/pages/home/Hero";
import RecentUpdate from "@/components/pages/home/RecentUpdate";
import Sponsor from "@/components/pages/home/Sponsor";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <RecentUpdate />
      <Sponsor />
    </>
  );
};

export default page;
