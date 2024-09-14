import Contact from "@/components/Contact";
import FrequentlyAskedQuestion from "@/components/FrequentlyAskedQuestion";
import Reimagine from "@/components/Reimagine";
import { TabsDemo } from "@/components/teamGeathering";
import CallSchedule from "@/components/ui/CallSchedule";
import FounderTweet from "@/components/ui/founder-tweet";
import HeroSection from "@/components/ui/hero-section";
import LetsChat from "@/components/ui/LetsChat";
import LogoSlider from "@/components/ui/logoSlider";
import Latestwork from "@/components/ui/our-latest-work";
import { CardHoverEffectDemo } from "@/components/ui/ourServices";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <HeroSection />
        {/*  This is the new vim   */}
        <Latestwork />
        <Reimagine />
        <div className="md:px-8">
          <CardHoverEffectDemo />
        </div>
        <LogoSlider />
        <FounderTweet />
        <CallSchedule />
        <FrequentlyAskedQuestion />
        <LetsChat />
        <Contact />
      </main>
    </>
  );
}
