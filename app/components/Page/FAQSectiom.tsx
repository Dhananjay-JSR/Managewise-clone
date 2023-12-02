"use client";
import ClientComponnet from "./ClientComponents/ClientHolder";
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

export function FAQSectiom() {
  const ref = useRef(null);
  const isInView = useInView(ref,{
    once:true
  });
  return (
    <section ref={ref}>
      <div className="2xl:max-w-[1200px] max-w-[1050px] mx-auto pt-[150px] pb-[120px] flex flex-col 2xl:flex-row">
        <div className="md:w-1/3 w-full px-5 lg:px-0">
          <div
            className={"w-fit mx-auto md:mx-0 text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
              outfir.className}
          >
            <span className="text-base mr-2">🙋‍♀️</span>
            FAQ
          </div>
          <div

            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            className={"lg:w-[400px] text-center md:text-left text-[36px] mt-4 md:text-[45px] 2xl:text-[56px] leading-none font-medium " +
              outfir.className}
          >
            Need
            <span className="text-[#fe8162] block">Answers?</span>
          </div>
          <div
            className={"text-[#767575] text-[18px] 2xl:w-[325px] md:w-[550px] w-full mt-4 md:text-[20px] px-4 md:px-0 text-center md:text-left tracking-tighter font-medium " +
              inter.className}
          >
            Check out our most commonly asked questions below to find the
            information you need.
          </div>
        </div>
        <div style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} className="2xl:w-2/3 w-full mt-7 2xl:mt-0 space-y-4 px-2 md:px-0">
          <ClientComponnet />
        </div>
      </div>
    </section>
  );
}
