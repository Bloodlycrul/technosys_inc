import React from "react";
import { sections } from "@/lib/constant";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card className="p-10">
      <CardTitle>{title}</CardTitle>
      <CardDescription className="mt-3">{description}</CardDescription>
    </Card>
  );
};
