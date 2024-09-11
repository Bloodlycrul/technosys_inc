import React from "react";
import { sections } from "@/lib/constant";
const Reimagine = () => {
  return (
    <div className="my-9 w-10/12 m-auto">
      <p className="text-3xl mb-5 font-semibold ">
        Reimagine your brand, minus the <br /> headaches and high costs.
      </p>
      <div className="flex flex-1 gap-6">
        {sections.map((section) => {
          return (
            <div className="" key={section.heading}>
              <ReimagineCard
                title={section.heading}
                description={section.content}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reimagine;

export const ReimagineCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#0A0A0A] p-10">
      <p className="text-2xl font-bold mb-2 ">{title}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};
