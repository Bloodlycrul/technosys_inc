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
      <Carousel
        items={cards}
        title={
          <h2 className=" mx-auto md:text-5xl md:font-bold text-neutral-800 dark:text-neutral-200 text-2xl">
            Discover our latest work
          </h2>
        }
      />
    </div>
  );
};

export default Latestwork;
