"use client";
import { Inter, Outfit } from "next/font/google";
import { PricingVar1 } from "./PricingVar1";
import { PricingVar2 } from "./PricingVar2";
 const outfir = Outfit({
  subsets: ["latin"],
});

  const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

export function PricingPlan() {
  return (
    <section className="2xl:max-w-[1200px] max-w-[1050px] mx-auto">
      <div
        className={"w-fit mx-auto  text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
          outfir.className}
      >
        <span className="text-base mr-2">💲</span>
        PRICING
      </div>
      <div
        className={" text-[36px] mx-3 md:mx-0 md:text-[45px] 2xl:text-[56px] font-medium text-center " +
          outfir.className}
      >
        Select your ideal <span className="text-[#fe8162]">Pricing</span> plan
      </div>
      <div
        className={"md:w-[500px] w-full text-[18px] md:text-[20px] font-medium text-[#767575] text-center mx-auto " +
          inter.className}
      >
        At Manage Wise, we believe in providing you with pricing plans that
        adapt to your unique needs.
      </div>
      <div className="mt-[40px] flex flex-col 2xl:flex-row gap-6 2xl:items-end items-center px-4 md:px-0">
        <PricingVar1 delayer={0.2} plan="FREE" price="0" />
        <PricingVar2 delayer={0.5} />
        <PricingVar1 delayer={0.2} plan="BUSINESS" price="42" />
      </div>
    </section>
  );
}
