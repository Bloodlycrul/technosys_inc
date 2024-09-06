import React from "react";

import { testimonials } from "@/lib/constant";
import { HeroHighlight, Highlight } from "./hero-highlight";
import { InfiniteMovingCards } from "./infinite-moving-cards";

const HeroSection = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroHighlight className="text-center">
        <h1 className=" text-center text-6xl lg:text-[200px] leading-none tracking-tighter  font-bold mb-3 lg:mb-10">
          Technosys Inc
        </h1>
        <Highlight className="text-black dark:text-white text-[18px]  lg:text-5xl lg:ml-40 lg:mt-20">
          a full cycle agency for{" "}
          <span className="font-bold"> all digital & creative.</span>
        </Highlight>
        <div className="pt-[50px]">
          <h1 className="text-center my-10 font-bold  text-[18px] lg:text-5xl">
            What Our
            <Highlight className="ml-3 p-2">Clients Are Saying</Highlight>
          </h1>
          <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default HeroSection;
