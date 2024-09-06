"use client";
import Contact from "@/components/Contact";
import React from "react";
import GoogleMapContainer from "@/components/Google_Maps/googleMapContainer";

const ContactPage = () => {
  return (
    <div className="mt-32 px-5 md:mt-32 lg:m-20 lg:mt-32">
      <h2 className=" text-3xl lg:text-7xl font-bold">contact</h2>
      <p className="my-3 text-xl lg:my-5 lg:text-2xl">
        We are always open to discuss your next project, idea or just to have a
      </p>
      <Contact />
      <GoogleMapContainer />
    </div>
  );
};

export default ContactPage;
