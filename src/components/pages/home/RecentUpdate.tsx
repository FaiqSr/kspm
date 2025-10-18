"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const RecentUpdate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  const recentUpdateData = [
    {
      imageSrc: "/static/img/content/content1.jpg",
      title: "📢 [EXTEND OPEN RECRUITMENT KSPM SV IPB 2025] 📢",
      url: "/updates/1",
      iamgeAlt: "Recent Update 1 Image",
    },
    {
      imageSrc: "/static/img/content/content2.webp",
      title: "📉[MEDIA PARTNER CORPORATE XPOSED – VOL.04]📉",
      url: "/updates/2",
      iamgeAlt: "Recent Update 2 Image",
    },
    {
      imageSrc: "/static/img/content/content3.jpeg",
      title: "📞[CORPORATE XPOSED – VOL.05]📞",
      url: "/updates/3",
      iamgeAlt: "Recent Update 3 Image",
    },
    {
      imageSrc: "/static/img/content/content4.webp",
      title: "📈[INVESTMENT TALK 2025]📈",
      url: "/updates/4",
      iamgeAlt: "Recent Update 4 Image",
    },
    {
      imageSrc: "/static/img/content/content5.jpg",
      title: "💡[KSPM FINANCIAL INSIGHT WEEK]💡",
      url: "/updates/5",
      iamgeAlt: "Recent Update 5 Image",
    },
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= recentUpdateData.length - 3 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  });

  if (isLoading) return <></>;

  return (
    <section className="container mx-auto max-w-[1280px] px-5">
      <h2 className="text-center text-3xl my-10 font-semibold">Recent Update</h2>

      <section className="relative overflow-hidden">
        <motion.div className="flex justify-center gap-6 transition-transform duration-700 ease-in-out">
          {recentUpdateData.slice(current, current + 3).map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </motion.div>

        <button
          onClick={() => setCurrent(current === 0 ? recentUpdateData.length - 3 : current - 1)}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-md hover:bg-white transition"
        >
          ◀
        </button>

        <button
          onClick={() => setCurrent(current >= recentUpdateData.length - 3 ? 0 : current + 1)}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-md hover:bg-white transition"
        >
          ▶
        </button>
      </section>
    </section>
  );
};

export default RecentUpdate;
