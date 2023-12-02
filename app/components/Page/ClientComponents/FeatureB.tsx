"use client";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Inter } from "next/font/google";
export const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});


export function FeatureB() {



  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{
      transform: isInView ? "none" : "translateY(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
    }} className="border rounded-2xl w-fit">
      <Image
        src={"https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"}
        alt="Feature 2"
        height={323}
        width={600} />
      <div className="py-[30px] px-[30px] flex flex-col gap-1.5 mt-auto">
        <div className="text-[25px]  font-semibold tracking-tighter">
          Smart Task Management
        </div>
        <div className={"text-[#767575] " + inter.className}>
          Say goodbye to chaos with our smart task management system
        </div>
      </div>
    </div>
  );
}
