"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Outfit,Inter } from "next/font/google";
 const outfir = Outfit({
  subsets: ["latin"],
});

   const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});


function HappyCustomerContainer() {
  return (
    <div className="mx-auto relative w-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-96 -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"
        viewBox="0 0 364 108"
        width={200}
        height={100}
      >
        <defs>
          <filter
            id="a"
            width="159.2%"
            height="346.7%"
            x="-29.8%"
            y="-124%"
            filterUnits="objectBoundingBox"
          >
            <feOffset in="SourceAlpha" result="a1016z" />
            <feGaussianBlur in="a1016z" result="a1017z" stdDeviation="14.825" />
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              in="a1017z"
              result="a1018z"
              values="0 0 0 0 0.929 0 0 0 0 0.929 0 0 0 0 0.98 0 0 0 1 0"
            />
          </filter>
          <path
            id="b"
            d="M64.056 41.019c0-6.295 5.152-11.398 11.507-11.398h212.874c6.355 0 11.507 5.103 11.507 11.398v27.117c0 6.295-5.152 11.398-11.507 11.398h-100.08L182 85.659l-6.447-6.125h-99.99c-6.355 0-11.507-5.103-11.507-11.398Z"
          />
        </defs>
        <g filter="url(#a)">
          <use
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="1.48"
            clipPath="url(#a1013z)"
            href="#b"
          />
        </g>
        <use
          fill=" rgb(255, 255, 255)"
          stroke=" rgb(237, 237, 250)"
          strokeMiterlimit="10"
          strokeWidth="1.48"
          clipPath="url(#a1013z)"
          href="#b"
        />
      </svg>
      <div
        className={
          "text-[25px] relative z-20 font-semibold  left-0 -top-1/2     " +
          outfir.className
        }
      >
        <span className="text-[#8247ff]">200+</span> Happy users
      </div>
    </div>
  );
}
export function Closing() {




  return (
    <motion.div

      initial={{ transform: `perspective(600px) rotateX(-10deg)` }}
      whileInView={{ transform: `perspective(600px) rotateX(0deg)` }}
      transition={{
        delay: 0.3
      }}
      viewport={{ once: true }}

      className=" flex justify-center flex-col 2xl:flex-row py-[100px] md:px-[30px] max-w-[1000px] 2xl:max-w-[1200px] mx-10 rounded-2xl border lg:mx-auto bg-white">
      <div className="w-fit mx-auto">
        <div
          className={"w-fit 2xl:mx-0 mx-auto  text-[#8247ff] font-semibold text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
            outfir.className}
        >
          <span className="text-base mr-2">👋</span>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          DON'T MISS OUT
        </div>
        <h5
          className={"md:text-[45px] text-center md:text-left text-[36px] 2xl:text-[56px] font-medium 2xl:w-[500px] leading-none mt-6 " +
            outfir.className}
        >
          Unleash your <span className="text-[#fe8162]">Potential</span> with us
        </h5>
        <div
          className={"text-[#767575] px-5 md:px-0 md:text-[20px] text-[18px] font-medium 2xl:w-[350px] md:w-[600px] text-center 2xl:text-left mt-6 " +
            inter.className}
        >
          Join our community of ambitious individuals and organizations eager to
          make a difference.
        </div>
        <div className="mt-6 mx-auto 2xl:mx-0 w-fit">
          <button
            className={outfir.className +
              " bg-[#8247ff] relative w-[220px] group justify-center flex rounded-xl text-white font-semibold text-xl px-7 py-3 transition-all  hover:shadow-[0px_0px_0px_10px_#d7c5fc]  "}
          >
            <div className="text-center group-hover:-translate-x-4 transition-all ease-in-out duration-300 ">
              Try Out Now
            </div>
            <div className="hidden group-hover:block absolute right-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="w-fit  grid place-content-center 2xl:mt-0 mt-24 mx-auto 2xl:mx-0">
        <div className="space-y-12 ">
          <HappyCustomerContainer />
          <div className="relative w-fit  mx-auto">
            <Image
              className="absolute"
              src={"https://framerusercontent.com/images/584hzJDnWCS5SFABKjaCzgDspY.png?scale-down-to=512"}
              alt="Overlay"
              width={440}
              height={170} />
            <Image
              src={"https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=512"}
              alt="Overlay Emoji"
              width={440}
              height={170} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
