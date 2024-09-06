import HeroVideoDialog from "../magicui/hero-video-dialog";
import Digtal_Image from "../../../public/Digtial.svg";

export default function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/iebxb9HtN1U"
        thumbnailSrc={Digtal_Image}
        thumbnailAlt="Welcome Video"
      />
    </div>
  );
}
