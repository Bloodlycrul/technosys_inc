import { TweetCard } from "@/components/magicui/tweet-card";

const FounderTweet = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-center text-3xl text-gray-400 my-5 ">
        What Our Founder Says...
      </h2>
      <div className="flex flex-col md:items-start lg:items-start lg:m-0 justify-center gap-4 lg:flex-row ">
        <TweetCard id="1792749931364782165" />
        <TweetCard id="1774088052853592433" />
        <TweetCard id="1767736403788718416" />
      </div>
    </div>
  );
};

export default FounderTweet;
