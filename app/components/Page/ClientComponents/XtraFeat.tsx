"use client";
import { useInView } from "framer-motion";
import { Inter, Outfit } from "next/font/google";
import { useRef } from "react";

 const outfir = Outfit({
  subsets: ["latin"],
});

   const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});
export function XtraFeat({
  delayer, children, headline, subhead,
}: {
  delayer: number;
  headline: string;
  subhead: string;
  children: React.ReactNode;
}) {


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });




  return (
    <div ref={ref} style={{
      transform: isInView ? "none" : "translateY(-200px)",
      opacity: isInView ? 1 : 0,
      transition: `all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) ${delayer}s`
    }} className="bg-[#212121] w-full py-[50px] px-[30px] rounded-3xl border border-[#242424]">
      <div className="h-fit w-fit bg-[#8247ff] p-[13px] rounded-xl mb-4 mx-auto">
        {children}
      </div>
      <div
        className={outfir.className +
          " text-[25px] font-semibold text-[#fdf2ec] text-center leading-tight"}
      >
        {headline}
      </div>
      <div
        className={inter.className +
          " mt-2 text-[#767575] text-[16px] tracking-tight text-center font-medium"}
      >
        {subhead}
      </div>
    </div>
  );
}
