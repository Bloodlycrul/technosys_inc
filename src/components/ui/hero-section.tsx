import React from "react";

import { testimonials } from "@/lib/constant";
import { HeroHighlight, Highlight } from "./hero-highlight";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { Button } from "./button";

const HeroSection = () => {
  return (
    <>
      <div className="hidden   md:w-full md:block md:relative overflow-x-hidden">
        {/* desktop */}
        <HeroHighlight className="text-center">
          <Highlight className="text-5xl font-bold">
            A Full-Service Digital Agency
          </Highlight>
          <p className="mt-10 mx-auto max-w-4xl text-lg ">
            Tailor-made digital solutions from India, trusted by top brands and
            startups. Specializing in SEO, paid ads, web development, and mobile
            app creation to deliver results that drive business growth
          </p>
          <div className="flex items-center justify-center gap-5 mt-10">
            <Button>See plans</Button>
            <Button className="border-white" variant={"outline"}>
              Lets talk
            </Button>
          </div>
          <div className="pt-[50px] ">
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
        <Highlight className="text-2xl">
          {" "}
          A Full-Service Digital Agency
        </Highlight>
        <h1 className="text-5xl font-bold">Technosys Inc</h1>
        <p className="text-start">
          Technosys Incor is a full-service digital agency from India, trusted
          by <span className="font-bold"> startups</span> and{" "}
          <span className="font-bold"> established brands </span>. Our core
          expertise lies in driving organic growth through advanced SEO
          techniques and maximizing ROI with targeted paid advertising
          campaigns. We create customized strategies to boost your online
          visibility, attract quality leads, and grow your business.
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
