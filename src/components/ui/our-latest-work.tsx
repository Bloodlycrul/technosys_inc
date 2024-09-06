import React from "react";
import { data } from "@/lib/constant";
import { Card, Carousel } from "./apple-cards-carousel";

const Latestwork = () => {
  const cards = data.map((card, index) => (
    // @ts-ignore
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 text-5xl">
        Discover our latest work
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

export default Latestwork;
