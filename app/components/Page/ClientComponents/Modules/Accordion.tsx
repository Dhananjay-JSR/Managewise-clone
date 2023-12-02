"use client";
import {Outfit,Inter} from "next/font/google"
import { useState } from "react";
const outfit = Outfit({
    subsets: ["latin"]
})

const inter = Inter({
    subsets:["latin"]
})
export default function Accordion({
headline,
subline
}:{
    headline: string,
    subline :string
}) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="w-full bg-[#f7f8fd] max-h-96 rounded-2xl ">
      <button
      style={{
        color: isOpened ? "#8247ff"  : "",
        transition: "all 0.1s ",
        transitionTimingFunction: "ease-in",
      }}
      onClick={()=>{
        setIsOpened(prev=>!prev)
      }} className="flex justify-between items-center w-full px-[30px] py-4 text-left leading-tight  ">
        <span className={outfit.className + " text-[25px] font-semibold"}>
      {headline}
        </span>
        {isOpened ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-lg fill-[#8247ff]"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-plus-lg fill-[#8247ff]"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
        )}
      </button>
  
          <div className={"px-[30px] text-[#767575] font-medium text-[16px] tracking-wide"+inter.className} style={{
            maxHeight: isOpened? "300px" : "0",
            paddingBottom: isOpened? "40px" : "0",
            transition: "all 0.5s ",
            transitionTimingFunction: "ease-in-out",
            overflowY: "hidden"
          }}>
    {subline}    </div>
 
    </div>
  );
}
