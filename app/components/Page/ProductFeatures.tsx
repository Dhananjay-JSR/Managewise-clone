"use client";
import { Inter, Outfit } from "next/font/google";
import { FeatureA } from "./ClientComponents/FeatureA";
import { FeatureB } from "./ClientComponents/FeatureB";
import { FeatureC_D_E } from "./ClientComponents/FeatureC_D_E";

 const outfir = Outfit({
  subsets: ["latin"],
});

  const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});
export function ProductFeatures() {
  return (
    <section className="py-24 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-2">
        <div
          className={"w-fit mx-auto text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
            outfir.className}
        >
          <span className="text-base mr-2">🔥</span>
          PREMIER FEATURES
        </div>
        <div
          className={"md:text-[45px] leading-none 2xl:text-[56px] text-[36px] text-center font-medium " +
            outfir.className}
        >
          Discover our product&apos;s{" "}
          <span className="text-[#fe8162]">Capabilities</span>
        </div>
        <div
          className={"max-w-[650px] md:text-[20px] text-[18px] px-4 md:px-0 text-[#767575] font-medium text-center mx-auto " +
            inter.className}
        >
          Don&apos;t settle for mediocrity - embrace the future of management
          with Manage Wise.
        </div>
      </div>
      <div className="mx-auto mt-[60px]">
        <div className="flex gap-11 2xl:flex-row px-4 lg:px-0 flex-col items-center mb-10 2xl:items-stretch">
          <FeatureA />
          <FeatureB />
        </div>
        <div className="flex px-4 lg:px-0 gap-10 2xl:flex-row flex-col items-center mb-10 2xl:items-stretch">
          <FeatureC_D_E delayer={0.4}
            ImageURL="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=1024"
            Headline="Flexible Scheduling"
            Subline="Stay productive with our flexible scheduling system" />
          <FeatureC_D_E delayer={0.6}
            ImageURL="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=1024"
            Headline="Easy Communication"
            Subline="Collaborate seamlessly with your team in real-time" />
          <FeatureC_D_E delayer={0.8}
            ImageURL="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=1024"
            Headline="Analytics"
            Subline="Gain valuable insights with our advanced analytics feature" />
        </div>
      </div>
    </section>
  );
}
