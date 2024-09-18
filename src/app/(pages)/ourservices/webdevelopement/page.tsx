import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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
    </div>
  );
};

export default WebDevelopment;

/*







*/
