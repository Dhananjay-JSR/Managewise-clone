import Image from "next/image";
import {  Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});
function Profiles({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-fit rounded-3xl border">
        <div className={"w-[280px]  text-[20px] m-7 " + inter.className}>
          {children}
          <div>
            <div className="flex gap-4 mt-5">
              <Image
                src={"https://i.pravatar.cc/150"}
                height={150}
                width={150}
                className="w-14 h-14 rounded-full"
                alt="Iameg Name"
              />
              <div>
                <div className={"text-[20px] " + inter.className}>Dhananjay</div>
                <div className={"text-[16px] text-[#767575] " + inter.className}>
                  Designation
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }

export default function ROver(){
    return <>
    <ul className="animate-mover  flex gap-10 " >
          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Manage Wise transformed our team&apos;s productivity. The intuitive
            interface and powerful features have made a significant impact on
            our
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            daily operations"
          </Profiles>
          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "I can't imagine running my business without this product. The
            automation features have saved me hours of manual work, allowing me
            to focus on strategic tasks.
          </Profiles>

          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "The customer support team behind this product is exceptional. They
            have been incredibly responsive and helpful, addressing any
            questions or concerns promptly.{" "}
          </Profiles>

          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Using this product has been a game-changer for our team. The
            collaboration features and intuitive interface have greatly improved
            our productivity.
          </Profiles>
        </ul>
        <ul className="animate-mover  flex gap-10 " >
          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Manage Wise transformed our team&apos;s productivity. The intuitive
            interface and powerful features have made a significant impact on
            our
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            daily operations"
          </Profiles>
          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "I can't imagine running my business without this product. The
            automation features have saved me hours of manual work, allowing me
            to focus on strategic tasks.
          </Profiles>

          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "The customer support team behind this product is exceptional. They
            have been incredibly responsive and helpful, addressing any
            questions or concerns promptly.{" "}
          </Profiles>

          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Using this product has been a game-changer for our team. The
            collaboration features and intuitive interface have greatly improved
            our productivity.
          </Profiles>
        </ul>
        <ul className="animate-mover  flex gap-10 " >
          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Manage Wise transformed our team&apos;s productivity. The intuitive
            interface and powerful features have made a significant impact on
            our
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            daily operations"
          </Profiles>
          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "I can't imagine running my business without this product. The
            automation features have saved me hours of manual work, allowing me
            to focus on strategic tasks.
          </Profiles>

          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "The customer support team behind this product is exceptional. They
            have been incredibly responsive and helpful, addressing any
            questions or concerns promptly.{" "}
          </Profiles>

          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Using this product has been a game-changer for our team. The
            collaboration features and intuitive interface have greatly improved
            our productivity.
          </Profiles>
        </ul>
        <ul className="animate-mover flex gap-10">
          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Manage Wise transformed our team&apos;s productivity. The intuitive
            interface and powerful features have made a significant impact on
            our
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            daily operations"
          </Profiles>
          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "I can't imagine running my business without this product. The
            automation features have saved me hours of manual work, allowing me
            to focus on strategic tasks.
          </Profiles>

          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "The customer support team behind this product is exceptional. They
            have been incredibly responsive and helpful, addressing any
            questions or concerns promptly.{" "}
          </Profiles>

          <Profiles>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Using this product has been a game-changer for our team. The
            collaboration features and intuitive interface have greatly improved
            our productivity.
          </Profiles>
        </ul></>
}