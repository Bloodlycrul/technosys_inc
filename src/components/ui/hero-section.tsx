import React from "react";

import { testimonials } from "@/lib/constant";
import { HeroHighlight, Highlight } from "./hero-highlight";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { Button } from "./button";

const HeroSection = () => {
  return (
    <>
      <div className="hidden md:w-full md:block overflow-x-hidden">
        {/* desktop */}
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
      {/* mobile */}
      <div className="mt-32 px-5 text-center flex flex-col overflow-x-hidden gap-4  w-full md:hidden">
        <Highlight className="text-2xl"> a full cycle agency for </Highlight>
        <h1 className="text-5xl font-bold">Technosys Inc</h1>
        <p className="text-start">
          Delivering tailored digital solutions from India, trusted by top
          brands and startups. We specialize in creating impactful brands,
          high-performance websites, innovative mobile apps, and providing
          services like SEO, social media marketing, PPC, and content strategy.
          Our expertise ensures that your business excels in the competitive
          digital landscape.
        </p>
        <div className="flex items-center justify-center gap-5">
          <Button>See plans</Button>
          <Button className="border-white" variant={"outline"}>
            Lets talk
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
