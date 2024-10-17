import { HoverEffect } from "../ui/card-hover-effect";
import { Highlight } from "./hero-highlight";
import { FaChartLine } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaRegFileVideo } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaLink } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { TbDeviceMobileCode } from "react-icons/tb";
import { BorderBeam } from "../magicui/border-beam";

export function CardHoverEffectDemo() {
  return (
    <>
      <div className="text-center text-3xl font-bold my-2">
        <Highlight className="ml-3 p-2 text-center">
          Our Services <BorderBeam />
        </Highlight>
      </div>
      <div className=" w-full mx-auto ">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
export const projects = [
  {
    title: "Search Engine Optimization",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    icon: <FaChartLine size={34} />,
  },
  {
    title: "Social Media Marketing",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    icon: <FaHashtag size={34} />,
  },
  {
    title: "Online Reputation Management",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    icon: <FaShieldAlt size={34} />,
  },
  {
    title: "Email Marketing",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    icon: <FaEnvelopeOpenText size={34} />,
  },
  {
    title: "Video Marketing",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    icon: <FaRegFileVideo size={34} />,
  },
  {
    title: "Content Marketing",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    icon: <HiOutlinePencilAlt size={34} />,
  },
  {
    title: "Link Building Services",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    icon: <FaLink size={34} />,
  },
  {
    title: "Pay Per Click",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    icon: <FaBullseye size={34} />,
  },
  {
    title: "Web Development",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/ourservices/webdevelopement",
    icon: <FaFileCode size={34} />,
  },
  {
    title: "E-commerce Development",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    icon: <TiShoppingCart size={34} />,
  },
  {
    title: "Mobile Application Development",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon1.com",
    icon: <TbDeviceMobileCode size={34} />,
  },
];
