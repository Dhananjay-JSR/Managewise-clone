"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TIcker } from "./TIcker";
import { Inter, Outfit } from "next/font/google";

 const outfir = Outfit({
  subsets: ["latin"],
});

  const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});
export function PricingVar2({ delayer }: {
  delayer: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{
      transform: isInView ? "none" : "translateY(-200px)",
      opacity: isInView ? 1 : 0,
      transition: `all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) ${delayer}s`
    }} className="bg-[#1c1c1c] max-w-[440px]  py-[40px] px-[30px] w-full rounded-3xl">
      <div
        className={"text-[#fe8162] bg-white px-2 py-0.5 rounded-lg font-semibold w-fit " +
          outfir.className}
      >
        STANDARD
      </div>
      <div className="mb-4">
        <span
          className={"text-white text-[45px] 2xl:text-[56px] font-medium " +
            outfir.className}
        >
          $25
        </span>
        <span
          className={"text-[16px] text-white font-medium " + inter.className}
        >
          /month
        </span>
      </div>
      <TIcker>Access to all basic features</TIcker>
      <TIcker>Reporting and analytics</TIcker>
      <TIcker>Up to 5 individual users</TIcker>
      <TIcker>Chat and email support</TIcker>
      <TIcker>3+ integrations</TIcker>
      <TIcker>Account performance reporting</TIcker>

      <button
        className={outfir.className +
          " bg-[#8247ff]  relative mt-6 group justify-center flex rounded-xl text-white font-semibold text-lg px-5 py-3 transition-all  hover:shadow-[0px_0px_0px_6px_#e3cff066]  "}
      >
        <div className="text-center  ">Get Started</div>
      </button>
    </div>
  );
}
