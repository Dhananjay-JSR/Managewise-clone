"use client";
import { Inter, Outfit } from "next/font/google";
import { XtraFeat } from "./ClientComponents/XtraFeat";
 const outfir = Outfit({
  subsets: ["latin"],
});

    const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

export function MoreFeatures() {
  return (
    <div className="bg-[#1c1c1c] py-[120px] ">
      <section className="2xl:max-w-[1200px] max-w-[1050px] mx-5  lg:mx-auto">
        <div className="flex flex-col gap-4">
          <div
            className={"w-fit  text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
              outfir.className}
          >
            <span className="text-base mr-2">🤩</span>
            AND MORE...
          </div>
          <div
            className={"2xl:text-[56px] text-[45px] font-medium tracking-tighter leading-none text-[#fdf2ec] " +
              outfir.className}
          >
            Explore an array of features that elevate your{" "}
            <span className="text-[#fe8162]">Productivity</span> to new heights
          </div>
          <div
            className={"text-[#767575] md:text-[20px] text-[18px]  md:w-[550px] font-medium " +
              inter.className}
          >
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </div>
        </div>
        <section className="flex gap-9 flex-col 2xl:flex-row mt-14">
          <XtraFeat
            delayer={0.2}
            headline="Cross-Platform Compatibility"
            subhead="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-phone-fill fill-white "
              viewBox="0 0 16 16"
            >
              <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
            </svg>
          </XtraFeat>
          <XtraFeat
            delayer={0.4}
            headline="Stay Informed with Essential Notifications"
            subhead="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-bell-fill fill-white "
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </XtraFeat>
          <XtraFeat
            delayer={0.6}
            headline="Secure Data Encryption at all times"
            subhead="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-fire fill-white "
              viewBox="0 0 16 16"
            >
              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
            </svg>
          </XtraFeat>
        </section>
      </section>
    </div>
  );
}
