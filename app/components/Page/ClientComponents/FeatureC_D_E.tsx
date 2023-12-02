"use client";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Inter } from "next/font/google";
export const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});


export function FeatureC_D_E({
  delayer, ImageURL, Headline, Subline,
}: {
  delayer: number;
  ImageURL: string;
  Headline: string;
  Subline: string;
}) {


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <div ref={ref}

      style={{
        transform: isInView ? "none" : "translateY(-200px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) ${delayer}s`
      }}

      className="rounded-2xl border flex justify-between flex-col w-full md:w-[600px]">
      <Image
        src={ImageURL}
        className="w-full"
        alt="Feature"
        width={373}
        height={300} />
      <div className="py-[30px] px-[30px]">
        <div className="text-[25px] font-semibold tracking-tighter ">
          {Headline}
        </div>
        <div className={"text-[#767575] " + inter.className}>{Subline}</div>
      </div>
    </div>
  );
}
