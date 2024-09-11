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
    <div className="px-10 py-7">
      <p className="text-2xl font-semibold mb-3">FrequentlyAskedQuestion</p>
      {FAQs &&
        FAQs.map((item) => {
          return (
            <Accordion
              key={item.question}
              className="border-b-2 border-white/35"
              type="single"
              collapsible
            >
              <AccordionItem value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
    </div>
  );
};

export default FrequentlyAskedQuestion;
