"use client";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";
const outfir = Outfit({
  subsets: ["latin"],
});

export function HeroButton() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "10px" }}
      whileInView={{ opacity: 1, translateY: "0px" }}
      viewport={{ once: true }}
      className="mt-[30px] flex flex-col w-full md:flex-row gap-6 mx-auto md:w-fit px-4 md:px-0"
    >
      <button
        className={outfir.className +
          " bg-[#8247ff] w-full relative md:w-[220px] group justify-center flex rounded-xl text-white font-semibold text-xl px-7 py-3 transition-all  hover:shadow-[0px_0px_0px_10px_#d7c5fc]  "}
      >
        <div className="text-center group-hover:-translate-x-4 transition-all ease-in-out duration-300 ">
          Get Started
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
      <button
        className={outfir.className +
          " flex gap-2 items-center justify-center md:justify-normal font-semibold text-xl px-7 py-3 bg-white rounded-xl border hover:border-black transition-all hover:transition-all duration-200 hover:duration-500"}
      >
        Watch Demo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-play-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
        </svg>
      </button>
    </motion.div>
  );
}
