import Contact from "@/components/Contact";
import FrequentlyAskedQuestion from "@/components/FrequentlyAskedQuestion";
import { CardHoverEffectDemo } from "@/components/ui/ourServices";
import React from "react";

const OurServices = () => {
  return (
    <div className="mt-32 px-5 md:mt-32 lg:m-20 lg:mt-32">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center ">
        <h1 className="text-5xl font-bold">OurServices</h1>
        <p className="md:w-1/3">
          Our innovative approach blends the cost-effectiveness of offshore
          development with the peace of mind of onshore project management.{" "}
        </p>
      </div>
      <div className="mt-11">
        <CardHoverEffectDemo />
      </div>
      <div className="mt-11">
        <FrequentlyAskedQuestion />
      </div>
      <div className="mt-11">
        <Contact />
      </div>
    </div>
  );
};

export default OurServices;
