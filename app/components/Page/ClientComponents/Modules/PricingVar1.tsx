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

export function PricingVar1({ plan, price, delayer }: { delayer: number; plan: string; price: string; }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{
      transform: isInView ? "none" : "translateY(-200px)",
      opacity: isInView ? 1 : 0,
      transition: `all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) ${delayer}s`
    }} className="bg-[#ededfa] max-w-[440px]  h-fit py-[40px] px-[30px] w-full rounded-3xl">
      <div
        className={"text-[#fe8162] bg-white px-2 py-0.5 rounded-lg font-semibold w-fit " +
          outfir.className}
      >
        {plan}
      </div>
      <div className="mb-4">
        <span
          className={"text-[#1c1c1c] text-[45px] 2xl:text-[56px] font-medium " +
            outfir.className}
        >
          ${price}
        </span>
        <span className={"text-[16px] font-medium " + inter.className}>
          /month
        </span>
      </div>
      <TIcker>Access to all basic features</TIcker>
      <TIcker>Reporting and analytics</TIcker>
      <TIcker>Up to 5 individual users</TIcker>
      <TIcker>Chat and email support</TIcker>

      <button
        className={outfir.className +
          " flex gap-2 items-center mt-16 font-semibold text-lg px-5 py-3  bg-white rounded-xl border hover:border-black transition-all hover:transition-all duration-200 hover:duration-500"}
      >
        Get Started
      </button>
    </div>
  );
}
