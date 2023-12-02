"use client";
import Image from "next/image";
import {
  motion, useInView, useMotionValueEvent,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef, useState } from "react";
import { HeroButton } from "./ClientComponents/Modules/HeroButton";
import { WelcomeTag } from "./ClientComponents/Modules/WelcomeTag";
import { Inter, Outfit } from "next/font/google";
export const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

export const outfir = Outfit({
  subsets: ["latin"],
});


export function HeroSection() {


  const { scrollYProgress } = useScroll({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Value = useTransform(scrollYProgress,[0,1],[0.8,1])
  // const [scaleValue, setScaleValue] = useState(1);

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(1 + (latest/20 ));
  //   setScaleValue((prev) => 1 + (latest/20 ));
  // });
  return (
    <section className="pt-24 max-w-5xl mx-auto overflow-y-hidden">
      <article className="mb-2">
        <div className="flex flex-col gap-2 mb-8">
          <WelcomeTag />
          <motion.h1
            initial={{ opacity: 0, translateY: "10px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            viewport={{ once: true }}
            className={outfir.className +
              " md:text-[68px] xl:text-[85px] text-[54px] px-4 md:px-0 tracking-tight font-medium text-center leading-none"}
          >
            Empower your business with{" "}
            <span className="text-[#fe8162]">Strategic </span> insights
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: "10px" }}
          transition={{
            delay: 0.1,
            bounce: 0.25,
            type: "spring",
            mass: 0.5,
          }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          viewport={{ once: true }}
          className={inter.className +
            " text-[#8d8b8b] px-4 md:px-0 mx-4 max-w-[700px] md:mx-auto text-center text-[18px] md:text-[20px]"}
        >
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </motion.div>
        <HeroButton />
      </article>
      <div style={{
        perspective:"600px"
      }}>
  
      <motion.div
      ref={ref}
        initial={{
          
         

          // transform:`perspective(600px) rotateX(-10deg) `

          // transform:`perspective(600px) `,
          
          // translateY: "50px",
          // scaleZ: "1",
          // scaleX: "0.86",
          // scaleY: "0.75",
          // skew: "15deg",
          rotateX: "-10deg",
        }}
        transition={{
          // duration: 1,
        }}
        whileInView={{
          // transform:`perspective(600px) `,
          // perspective: "600px",
          // transform:`perspective(600px) rotateX(0deg)  `,
          // skew: "0deg",
          // perspective: 600,
          // translateX: "0px",
          rotateX: "0deg",
        }}
        // viewport={{ once: true }}
        style={{
          
          // transform:`perspective(600px) rotateX(0deg)  `,
          
          // transform: isInView ? "perspective(600px) rotateX(0deg)" : "perspective(600px) rotateX(-10deg)",
          // transform:`perspective(600px) rotateX(0deg)`
          scale: Value
        }}
        className="mt-16 mb-24 shadow-xl mx-4 md:mx-0"
      >

        <Image
          src={"https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"}
          className="rounded-3xl md:w-[600px] md:h-[322px] xl:w-[1200px] xl:h-[550px] mx-auto"
          alt="Dashboard Image"
          height={644}
          width={1200} />
      </motion.div>
            
      </div>
    </section>
  );
}
