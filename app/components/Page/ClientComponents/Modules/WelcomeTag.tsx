"use client";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";
const outfir = Outfit({
  subsets: ["latin"],
});

export function WelcomeTag() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "10px" }}
      whileInView={{ opacity: 1, translateY: "0px" }}
      viewport={{ once: true }}
      className={"w-fit mx-auto text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
        outfir.className}
    >
      <span className="text-base mr-2">👋</span>
      WELCOME TO MANAGE WISE!
    </motion.div>
  );
}
