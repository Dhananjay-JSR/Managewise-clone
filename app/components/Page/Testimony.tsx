"use client";
import { Inter, Outfit } from "next/font/google";
import ROver from "./ClientComponents/Modules/WOrkSample";
export const outfir = Outfit({
  subsets: ["latin"],
});

 export const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});
export function Testimony() {
  return (
    <section className="2xl:max-w-[1200px] max-w-[1050px] mx-auto py-[100px] px-4 md:px-0">
      <div
        className={"w-fit   text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
          outfir.className}
      >
        <span className="text-base mr-2">🧡</span>
        TESTIMONIALS
      </div>
      <div
        className={" text-[36px] md:text-[45px] 2xl:text-[56px] font-medium " +
          outfir.className}
      >
        Hear from our <span className="text-[#fe8162]">Satisfied</span> clients
      </div>
      <div
        className={" md:w-[550px] text-[#767575] text-[18px] font-medium md:text-[20px] " +
          inter.className}
      >
        Discover why our clients love working with us. Read their testimonials
        and learn how we has helped businesses.
      </div>
      <section
        style={{
          WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
        }}
        className=" overflow-x-hidden flex gap-10 mt-10"
      >
        <ROver />
      </section>
    </section>
  );
}
