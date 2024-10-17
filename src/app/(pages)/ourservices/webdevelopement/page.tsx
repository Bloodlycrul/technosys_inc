import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import LetsChat from "@/components/ui/LetsChat";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WebDevelopment = () => {
  const color = [
    "#a9ff3c",
    "#ff612f",
    "#bd57e4",
    "#a9ff3c",
    "#ff612f",
    "#00a1e0",
    "#bd57e4",
  ];

  return (
    <div className="">
      <div className="h-screen flex justify-between">
        <div className="md:ml-20">
          <div className="flex flex-col justify-end h-full">
            <div className="flex flex-col gap-4 mb-24 w-2/3">
              <h1 className="text-7xl font-bold ">
                Web App & E-Commerce Development
              </h1>
              <p className="text-2xl font-semibold">
                Your online operations need tools that are more than just <br />
                functional; they need to be intuitive and efficient.
              </p>
              <p>
                Whether you&apos;re looking to revamp your existing operations
                or venture into new digital territories, Technosys Inc
                Technologies is your go-to partner. Our team of dedicated
                developers and strategists are ready to guide, build, and
                support your digital journey.
              </p>
              <div className="">
                <Button className="w-fit cursor-pointer z-50">
                  <Link href={"/contact"}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-1/3">
          <div className="absolute right-0 w-full h-full">
            <Image
              src="/Dark Grid.svg"
              alt="grid"
              width={462}
              height={990}
              className="h-full w-full object-cover border-l border-gray-300 "
            />
            <Image
              src="/web-developement.svg"
              alt="web development icon"
              width={300}
              height={300}
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
      {/* Header section end here */}

      {/* Expertise section start here */}
      <div className="mt-20   border-t border-gray-300/45 ">
        <div className="mt-10 flex gap-40 md:m-20">
          <div className="flex flex-col gap-4 w-1/3">
            <h2 className="text-4xl font-bold">Our Expertise</h2>
            <p>
              With our comprehensive range of services we create and optimize
              digital experiences that connect with your target audience and
              drive significant engagement.
            </p>
            <p>
              Dedicated to staying at the forefront of technology trends, we
              integrate the latest innovations into our solutions.
            </p>
          </div>
          {/* List of our services */}
          <div className="w-2/3">
            <div className="flex flex-wrap gap-2">
              {[
                "eCommerce Development",
                "Custom Web App Development",
                "API Development",
                "Web App Development",
                "Mobile App Development",
                "UI/UX Design",
                "Cloud Solutions",
                "DevOps Services",
                "Quality Assurance",
              ].map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    padding: "10px 10px",
                    backgroundColor: color[index % color.length],
                    color:
                      color[index % color.length] === "#a9ff3c"
                        ? "black"
                        : "white",
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Web App Development */}
      <div className="mt-20   border-t border-gray-300/45 ">
        <div className="mt-10 flex gap-40 md:m-20">
          <div className="flex flex-col gap-4 w-1/3">
            <h2 className="text-4xl font-bold">Web App Development</h2>
            <p className="text-2xl ">
              Your online operations need tools that are more than just
              functional; they need to be intuitive and efficient.
            </p>
          </div>
          {/* List of our services */}
          <div className="w-2/3">
            <div className="flex flex-wrap gap-2">
              {[
                {
                  title: "Analyzing Your Needs",
                  description:
                    "We start by understanding your business goals, target audience, and the specific needs of your users. This helps us tailor our solutions to meet your unique requirements.",
                  image: "/Analyzing.svg",
                },
                {
                  title: "Designing the Solution",
                  description:
                    "Our team of designers and developers work together to create a comprehensive design that not only meets your needs but also exceeds your expectations.",
                  image: "/custom-design.svg",
                },
                {
                  title: "Development and Testing",
                  description:
                    "Once the design is approved, we move on to the development phase. We use the latest technologies and best practices to ensure your solution is robust and scalable.",
                  image: "/developement-testing.svg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className=" flex gap-4 p-4 rounded-lg shadow-md"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <div className="">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ml-20 flex  flex-wrap gap-4">
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
      </div>
      {/* Ecommerce Development */}
      <div className="mt-20   border-t border-gray-300/45 ">
        <div className="mt-10 flex gap-40 md:m-20">
          <div className="flex flex-col gap-4 w-1/3">
            <h2 className="text-4xl font-bold">E-commerce Development</h2>
            <p className="text-2xl ">
              Robust functionality and seamless user expirience to elevate your
              digital storefront.
            </p>
          </div>
          {/* List of our services */}
          <div className="w-2/3">
            <div className="flex flex-wrap gap-2">
              {[
                {
                  title: "Platform Expertise",
                  description:
                    "Whether it’s Shopify, WooCommerce, Magento, or any other platform, we have seasoned experts ready to set up and optimize your online store.",
                  image: "/Analyzing.svg",
                },
                {
                  title: "Custom E-commerce Solutions",
                  description:
                    "Need something uniquely yours? We can develop a custom e-commerce platform tailored to your specific requirements.",
                  image: "/custom-design.svg",
                },
                {
                  title: "Optimized for Sales",
                  description:
                    "From user-friendly interfaces to seamless checkout processes, we ensure your customers have a smooth shopping experience.",
                  image: "/developement-testing.svg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className=" flex gap-4 p-4 rounded-lg shadow-md"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <div className="">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ml-20 flex  flex-wrap gap-4">
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
      </div>
      {/* Landing Page Development */}
      <div className="mt-20   border-t border-gray-300/45 ">
        <div className="mt-10 flex gap-40 md:m-20">
          <div className="flex flex-col gap-4 w-1/3">
            <h2 className="text-4xl font-bold">
              Landing Pages & Marketing Websites
            </h2>
            <p className="text-2xl ">
              Your brand’s voice deserves to be distinctive and memorable.
            </p>
          </div>
          {/* List of our services */}
          <div className="w-2/3">
            <div className="flex flex-wrap gap-2">
              {[
                {
                  title: "Aesthetic & Clean",
                  description:
                    "Step up your brand's digital presence, blending innovation and aesthetics to leave a lasting impression on your audience.",
                  image: "/Analyzing.svg",
                },
                {
                  title: "Conversion Focused",
                  description:
                    "With our approach, we identify and refine elements that maximize user interaction and conversion potential.",
                  image: "/custom-design.svg",
                },
                {
                  title: "SEO Excellence",
                  description:
                    "We create websites optimized for speed, providing a seamless and satisfying user experience that positively influences search engine rankings.",
                  image: "/developement-testing.svg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className=" flex gap-4 p-4 rounded-lg shadow-md"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <div className="">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ml-20 flex  flex-wrap gap-4">
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
        <ProjectCard
          title={"Moo Moves You"}
          description={
            "Moo Moves You is the first Digital Moving Marketplace; allowing simplify and standardize the moving process by combining our easy-to-use technology with our nationwide network of moving companies to provide you with a hassle-free moving experience.In collaboration with Moo, Brainstorm has created the product from scratch: from branding and visual standpoint, to the product design, building and launching it."
          }
          image={""}
          tags={[
            "Web Application",
            "UI/UX Design",
            "Product Design",
            "Content Creation",
            "Branding",
          ]}
        />
      </div>
      <div className="border border-gray-300/45 my-20 "></div>
      <LetsChat />
      <Contact />
    </div>
  );
};

export default WebDevelopment;

/*







*/
