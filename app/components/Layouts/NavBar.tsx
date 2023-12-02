"use client";
import Image from "next/image";
import NavLinks from "./SubComponents/NavLinks";
import DotSvg from "./SubComponents/DotSvg";
import TemplateBuyBtn from "./SubComponents/TemplateBtn";
import MobileNavbar from "./ClientsComponents/MobileRevealer";
import { useState } from "react";
import { Inter, Outfit } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

const outfir = Outfit({
  subsets: ["latin"],
});

function Linker({ children }: { children: React.ReactNode }) {
  return (
    <Link
      className={"text-[16px] font-medium p-2 " + inter.className}
      href={"/"}
    >
      {children}
    </Link>
  );
}

export default function NavBar() {
  const [Opened, setOpened] = useState(false);
  return (
    <>
      <div
        style={{
          maxHeight: Opened ? "100vh" : "90px",
          height: Opened ? "100vh" : "auto",
          transitionProperty: "all",
          transitionDuration: "0.7s",
          backgroundColor: Opened ? "white" : "#fdf2ed",
        }}
        className="py-4 px-6  border-b-2 md:hidden md:h-auto! border-[#7675750d] "
      >
        <div className="flex  justify-between items-center">
          <Image
            className="2xl:hidden hidden md:block"
            src={
              "https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
            }
            width={44}
            height={44}
            alt="Logo"
          />
          <Image
            className="md:hidden 2xl:block "
            src={
              "https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
            }
            width={180}
            height={50}
            alt="Full Logo Logo"
          />

          <div className=" md:hidden">
            <button
              onClick={() => {
                setOpened((prev) => !prev);
              }}
            >
              {!Opened ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {Opened && (
          <>
            <div className="flex flex-col items-center mt-14 gap-4">
              <Linker>Features</Linker>
              <Linker>FAQ</Linker>
              <Linker>Pricing</Linker>
              <Linker>Testimonials</Linker>
            </div>
            <button
              className={
                outfir.className +
                " bg-[#8247ff] w-full relative mt-6 group justify-center flex rounded-xl text-white font-semibold text-lg px-5 py-3 transition-all  hover:shadow-[0px_0px_0px_6px_#e3cff066]  "
              }
            >
              <div className="text-center  ">Buy Template</div>
            </button>
          </>
        )}
      </div>

      {/* MD View Starts */}
      <div className="py-4 px-6 hidden  md:flex justify-between items-center border-b-2 border-[#7675750d] bg-[#fdf2ed]">
        <Image
          className="2xl:hidden"
          src={
            "https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
          }
          width={44}
          height={44}
          alt="Logo"
        />
        <Image
          className="hidden 2xl:block"
          src={
            "https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
          }
          width={180}
          height={50}
          alt="Logo"
        />
        <div className="flex">
          <div className="flex items-center gap-3.5">
            <NavLinks>Features</NavLinks>
            <DotSvg />
            <NavLinks>FAQ</NavLinks>
            <DotSvg />
            <NavLinks>Pricing</NavLinks>
            <DotSvg />
            <NavLinks>Testimonials</NavLinks>
          </div>
          <TemplateBuyBtn />
        </div>
      </div>
    </>
  );
}
