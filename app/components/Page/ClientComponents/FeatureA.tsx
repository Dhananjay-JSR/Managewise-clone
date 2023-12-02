"use client";
import { useInView } from "framer-motion";
import { Outfit } from "next/font/google";
import { useRef } from "react";
const outfir = Outfit({
  subsets: ["latin"],
});

export function FeatureA() {


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <div
      ref={ref}

      style={{
        transform: isInView ? "none" : "translateY(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}

      className="bg-[#ededfa] p-5  w-full  md:w-[600px] pt-[76px] pb-[35px] px-[40px] rounded-2xl ">
      <div className="flex flex-col gap-2 ">
        <div className="text-2xl bg-white w-fit p-2 rounded-2xl">⭐️</div>
        <div
          className={outfir.className +
            " md:text-[34px] text-[27px] leading-tight xl:text-[42px] font-medium tracking-tighter"}
        >
          Boost productivity and streamline workflow with us. Enjoy our
          intuitive interface and robust features.
        </div>
      </div>
    </div>
  );
}
