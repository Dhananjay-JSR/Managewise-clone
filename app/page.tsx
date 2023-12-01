import Image from "next/image";
import { Outfit, Inter } from "next/font/google";
const outfir = Outfit({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

function HeroButton() {
  return (
    <div className="mt-[30px] flex gap-6 mx-auto w-fit ">
      <button
        className={
          outfir.className +
          " bg-[#8247ff] relative w-[220px] group justify-center flex rounded-xl text-white font-semibold text-xl px-7 py-3 transition-all  hover:shadow-[0px_0px_0px_10px_#d7c5fc]  "
        }
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
        className={
          outfir.className +
          " flex gap-2 items-center font-semibold text-xl px-7 py-3 bg-white rounded-xl border hover:border-black transition-all hover:transition-all duration-200 hover:duration-500"
        }
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
    </div>
  );
}

function WelcomeTag() {
  return (
    <div
      className={
        "w-fit mx-auto text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
        outfir.className
      }
    >
      <span className="text-base mr-2">👋</span>
      WELCOME TO MANAGE WISE!
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-24 max-w-5xl mx-auto ">
      <article className="mb-2">
        <div className="flex flex-col gap-2 mb-8">
          <WelcomeTag />
          <h1
            className={
              outfir.className +
              " text-[68px] xl:text-[85px] tracking-tight font-medium text-center leading-none"
            }
          >
            Empower your business with{" "}
            <span className="text-[#fe8162]">Strategic </span> insights
          </h1>
        </div>
        <div
          className={
            inter.className +
            " text-[#8d8b8b] max-w-[700px] mx-auto text-center text-[20px]"
          }
        >
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </div>
        <HeroButton />
      </article>
      <div className="mt-16 mb-24 shadow-xl">
        <Image
          src={
            "https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
          }
          className="rounded-3xl md:w-[600px] md:h-[322px] xl:w-[1200px] xl:h-[550px] mx-auto"
          alt="Dashboard Image"
          height={644}
          width={1200}
        />
      </div>
    </section>
  );
}

function ProductFeatures() {
  return (
    <section className="py-24">
      <div className="flex flex-col gap-2">
        <div
          className={
            "w-fit mx-auto text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
            outfir.className
          }
        >
          <span className="text-base mr-2">🔥</span>
          PREMIER FEATURES
        </div>
        <div
          className={
            "text-[45px] 2xl:text-[56px] text-center font-medium " +
            outfir.className
          }
        >
          Discover our product&apos;s{" "}
          <span className="text-[#fe8162]">Capabilities</span>
        </div>
        <div
          className={
            "max-w-[650px] text-[20px] text-[#767575] font-medium text-center mx-auto " +
            inter.className
          }
        >
          Don&apos;t settle for mediocrity - embrace the future of management
          with Manage Wise.
        </div>
      </div>

      <></>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b  from-[#fdf2ed] to-white">
        <HeroSection />
      </div>
      <ProductFeatures />
    </>
  );
}
