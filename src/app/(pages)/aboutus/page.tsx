import Contact from "@/components/Contact";
import HeroVideoDialogDemoTopInBottomOut from "@/components/example/hero-video-dialog-demo-top-in-bottom-out";
import { Highlight } from "@/components/ui/hero-highlight";
import LetsChat from "@/components/ui/LetsChat";
import { CardHoverEffectDemo } from "@/components/ui/ourServices";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-32 px-5 md:mt-32 lg:m-20 lg:mt-32">
      <h2 className=" text-3xl lg:text-7xl font-bold">about us</h2>
      <p className="my-3 text-xl lg:my-5 lg:text-2xl">
        Who We are + What We Do
      </p>
      <p className=" lg:font-semibold lg:text-3xl lg:leading-snug">
        At Technosys Inc, we are a dynamic and innovative digital agency
        dedicated to helping businesses thrive in the digital world. With our
        passion for creativity and technology, we empower our clients to achieve
        their goals through cutting-edge solutions and exceptional customer
        service.
      </p>
      <p className="lg:my-5 text-sm my-3 lg:text-2xl">
        <Highlight className="leading-relaxed">
          We Design, Create and Push Website and Appliication
        </Highlight>
      </p>

      <div className="mt-11">
        <HeroVideoDialogDemoTopInBottomOut />
      </div>

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-44 mt-6 ">
        <div className=" lg:text-2xl font-medium">
          Technosys Inc operates according to the belief that the client comes
          first and their requirements and expectations should be met
          regardless. This wouldn’t be possible without our professional team of
          developers, graphic designers, Project Managers, Q&As, SEO
          Specialists. With a team of developers, designers, business
          consultants and digital marketing specialists, we take good ideas and
          build great companies.
        </div>
        <div className=" lg:text-2xl font-medium">
          With a team of developers, designers, business consultants and digital
          marketing specialists, we take good ideas and build great companies.
        </div>
      </div>
      <div className="relative my-24  lg:w-2/3 m-auto lg:p-10 rounded-lg text-white lg:my-56 ">
        <p className="relative z-10 text-center lg:text-4xl lg:font-bold lg:leading-snug">
          Technosys Inc is a trusted Salesforce implementor,
          <Highlight>helping businesses unlock the full potential</Highlight>
          of the Salesforce platform. We empower organizations to optimize their
          sales, marketing, and customer service processes for enhanced
          productivity and growth.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:justify-center">
        <Image
          src={
            "https://img.freepik.com/free-photo/group-people-working-team_23-2147656716.jpg?t=st=1725453910~exp=1725457510~hmac=7713914fcb3fdf72a7c086a3b3b8403891d6599ed3dfd4527457f425d3a0675b&w=740"
          }
          alt="It Discussion"
          width={700}
          height={500}
          className="rounded-lg hover:scale-110 transition duration-300 ease-in-out"
        />
        <Image
          src={
            "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241219.jpg?t=st=1725454105~exp=1725457705~hmac=37c8b28cae76e1ca8003ddb2666c2efa505322d840f1a7b1239a394fbf5500f7&w=740"
          }
          alt="It Discussion"
          width={700}
          height={500}
          className="rounded-lg hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="mt-16">
        <CardHoverEffectDemo />
      </div>
      <div className="">
        <LetsChat />
        <Contact />
      </div>
    </div>
  );
};

export default AboutUs;
