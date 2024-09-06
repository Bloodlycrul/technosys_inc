import React from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const LetsChat = () => {
  return (
    <div>
      <VelocityScroll
        text="LET'S CHAT!"
        default_velocity={5}
        className="font-display text-center text-4xl font-extrabold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
  );
};

export default LetsChat;
