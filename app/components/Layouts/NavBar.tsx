import Image from "next/image";
import NavLinks from "./SubComponents/NavLinks";
import DotSvg from "./SubComponents/DotSvg";
import TemplateBuyBtn from "./SubComponents/TemplateBtn";
export default function NavBar() {
    return (
      <div className="py-4 px-6 flex justify-between items-center border-b-2 border-[#7675750d] bg-[#fdf2ed]">
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
    );
  }