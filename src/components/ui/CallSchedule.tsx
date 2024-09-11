import React from "react";
import { LampContainer } from "./lamp";
import { Button } from "./button";
import { IconClock } from "@tabler/icons-react";

const CallSchedule = () => {
  return (
    <div className=" relative  mt-[22%]">
      <LampContainer className="">
        <div className=" lg:mt-48 lg:mx-48">
          <h1 className="text-center text-3xl   text-black font-bold ">
            All it takes is 4 simple steps
          </h1>
          <hr className="divide-y-1 w-full mt-[50px] h-0.5 my-4 bg-white" />
          {/* First */}
          <div className="flex flex-col justify-center items-center gap-6 w-full lg:flex-row lg:items-start lg:justify-between lg:gap-40 my-[60px]">
            <div className="flex flex-col items-center lg:flex-row lg:items-start  gap-6">
              <span>01</span>
              <h2 className="text-3xl font-extrabold">SCHEDULE</h2>
            </div>
            <div className=" lg:w-2/4 flex flex-col items-center justify-center lg:items-start">
              <p className="text-1xl text-center lg:text-start">
                Book your 30 minute consultation to see if you qualify for the
                Marketing Diagnostic.
              </p>
              <Button className="flex gap-3 mt-3">Apply Now</Button>
            </div>
          </div>
          <hr className="divide-y-1 w-full h-0.5 my-4 bg-white" />
          {/* Second */}
          <div className="flex flex-col justify-center items-center gap-6 w-full lg:flex-row lg:items-start lg:justify-between lg:gap-40 my-[60px]">
            <div className="flex flex-col items-center lg:flex-row lg:items-start  gap-6">
              <span>02</span>
              <h2 className="text-3xl font-extrabold">INTAKE</h2>
            </div>
            <div className="lg:w-2/4 flex flex-col items-center justify-center lg:items-start">
              <p className="text-1xl text-center lg:text-start">
                A quick introduction to you and your business and vet the
                partnership for approval.
              </p>
              <span className="flex gap-3 mt-3 ">
                <IconClock />
                <p className="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent font-extrabold">
                  30 Minutes
                </p>
              </span>
            </div>
          </div>
          <hr className="divide-y-1 w-full h-0.5 my-4 bg-white" />
          {/* third */}
          <div className="flex flex-col justify-center items-center gap-6 w-full lg:flex-row lg:items-start lg:justify-between lg:gap-40 my-[60px]">
            <div className="flex flex-col items-center lg:flex-row lg:items-start  gap-6">
              <span>03</span>
              <h2 className="text-3xl font-extrabold">DISCOVERY</h2>
            </div>
            <div className="lg:w-2/4 flex flex-col items-center justify-center lg:items-start">
              <p className="text-1xl text-center lg:text-start">
                Our experts dig deep to unearth a rich, clear understanding of
                your marketing ecosystem.
              </p>
              <span className="flex gap-3 mt-3">
                <IconClock />
                <p className="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent font-extrabold">
                  45 Minutes
                </p>
              </span>
            </div>
          </div>
          <hr className="divide-y-1 w-full h-0.5 my-4 bg-white" />
          {/* Fourth */}
          <div className="flex flex-col justify-center items-center gap-6 w-full lg:flex-row lg:items-start lg:justify-between lg:gap-40 my-[60px]">
            <div className="flex flex-col items-center lg:flex-row lg:items-start  gap-6">
              <span>04</span>
              <h2 className="text-3xl font-extrabold">DELIVERY</h2>
            </div>
            <div className="lg:w-2/4 flex flex-col items-center justify-center lg:items-start">
              <p className="text-1xl text-center lg:text-start">
                Our shareout of your Marketing Diagnostic with an action plan to
                unblock your growth.
              </p>
              <span className="flex gap-3 mt-3">
                <IconClock />{" "}
                <p className="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent font-extrabold">
                  45 Minutes
                </p>
              </span>
            </div>
          </div>
        </div>
      </LampContainer>
    </div>
  );
};

export default CallSchedule;
