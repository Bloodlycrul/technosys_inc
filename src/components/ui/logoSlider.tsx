import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import { reviews } from "@/lib/constant";

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative flex items-center w-48  grayscale cursor-pointer overflow-hidden hover:grayscale-0 "
      )}
    >
      <Image src={img} alt={img} width={120} height={120} />
    </figure>
  );
};

export default function LogoSlider() {
  return (
    <div className="my-32">
      <h1 className="text-center text-3xl text-gray-400">
        Trusted by big industries
      </h1>
      <div className="relative flex  m-auto  flex-col gap-11 items-center justify-center overflow-hidden rounded-lg  bg-background ">
        <Marquee  pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
