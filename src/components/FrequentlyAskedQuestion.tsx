import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/lib/constant";

const FrequentlyAskedQuestion = () => {
  return (
    <div className="px-10 py-7 flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
      <div className="lg:w-1/3">
        <p className="text-2xl md:text-5xl font-semibold leading-tight">
          Frequently Asked <br /> Questions
        </p>
      </div>
      <div className="lg:w-2/3 space-y-4">
        {FAQs &&
          FAQs.map((item) => {
            return (
              <Accordion
                key={item.question}
                className=" pb-4"
                type="single"
                collapsible
              >
                <AccordionItem value={item.question}>
                  <AccordionTrigger className="text-start  md:text-xl font-medium ">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 mt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
