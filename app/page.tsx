import Image from "next/image";
import { Outfit, Inter } from "next/font/google";
import ClientComponnet from "./components/Page/ClientComponents/ClientHolder";
import ROver from "./components/Page/ClientComponents/Modules/WOrkSample";
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

function FeatureA() {
  return (
    <div className="bg-[#ededfa] p-5 w-[600px] pt-[76px] pb-[35px] px-[40px] rounded-2xl ">
      <div className="flex flex-col gap-2 ">
        <div className="text-2xl bg-white w-fit p-2 rounded-2xl">⭐️</div>
        <div
          className={
            outfir.className +
            " text-[34px] leading-tight xl:text-[42px] font-medium tracking-tighter"
          }
        >
          Boost productivity and streamline workflow with us. Enjoy our
          intuitive interface and robust features.
        </div>
      </div>
    </div>
  );
}

function FeatureB() {
  return (
    <div className="border rounded-2xl w-fit">
      <Image
        src={
          "https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"
        }
        alt="Feature 2"
        height={323}
        width={600}
      />
      <div className="py-[30px] px-[30px] flex flex-col gap-1.5 mt-auto">
        <div className="text-[25px]  font-semibold tracking-tighter">
          Smart Task Management
        </div>
        <div className={"text-[#767575] " + inter.className}>
          Say goodbye to chaos with our smart task management system
        </div>
      </div>
    </div>
  );
}

function FeatureC_D_E({
  ImageURL,
  Headline,
  Subline,
}: {
  ImageURL: string;
  Headline: string;
  Subline: string;
}) {
  return (
    <div className="rounded-2xl border flex justify-between flex-col w-[600px]">
      <Image
        src={ImageURL}
        className="w-full"
        alt="Feature"
        width={373}
        height={300}
      />
      <div className="py-[30px] px-[30px]">
        <div className="text-[25px] font-semibold tracking-tighter ">
          {Headline}
        </div>
        <div className={"text-[#767575] " + inter.className}>{Subline}</div>
      </div>
    </div>
  );
}

function ProductFeatures() {
  return (
    <section className="py-24 max-w-[1200px] mx-auto">
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
      <div className="mx-auto mt-[60px]">
        <div className="flex gap-11 2xl:flex-row flex-col items-center mb-10 2xl:items-stretch">
          <FeatureA />
          <FeatureB />
        </div>
        <div className="flex gap-10 2xl:flex-row flex-col items-center mb-10 2xl:items-stretch">
          <FeatureC_D_E
            ImageURL="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=1024"
            Headline="Flexible Scheduling"
            Subline="Stay productive with our flexible scheduling system"
          />
          <FeatureC_D_E
            ImageURL="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=1024"
            Headline="Easy Communication"
            Subline="Collaborate seamlessly with your team in real-time"
          />
          <FeatureC_D_E
            ImageURL="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=1024"
            Headline="Analytics"
            Subline="Gain valuable insights with our advanced analytics feature"
          />
        </div>
      </div>
    </section>
  );
}

function XtraFeat({
  children,
  headline,
  subhead,
}: {
  headline: string;
  subhead: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#212121] w-full py-[50px] px-[30px] rounded-3xl border border-[#242424]">
      <div className="h-fit w-fit bg-[#8247ff] p-[13px] rounded-xl mb-4 mx-auto">
        {children}
      </div>
      <div
        className={
          outfir.className +
          " text-[25px] font-semibold text-[#fdf2ec] text-center leading-tight"
        }
      >
        {headline}
      </div>
      <div
        className={
          inter.className +
          " mt-2 text-[#767575] text-[16px] tracking-tight text-center font-medium"
        }
      >
        {subhead}
      </div>
    </div>
  );
}

function MoreFeatures() {
  return (
    <div className="bg-[#1c1c1c] py-[120px] ">
      <section className="2xl:max-w-[1200px] max-w-[1050px] mx-auto">
        <div className="flex flex-col gap-4">
          <div
            className={
              "w-fit  text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
              outfir.className
            }
          >
            <span className="text-base mr-2">🤩</span>
            AND MORE...
          </div>
          <div
            className={
              "2xl:text-[56px] text-[45px] font-medium tracking-tighter leading-none text-[#fdf2ec] " +
              outfir.className
            }
          >
            Explore an array of features that elevate your{" "}
            <span className="text-[#fe8162]">Productivity</span> to new heights
          </div>
          <div
            className={
              "text-[#767575] text-[20px] w-[550px] font-medium " +
              inter.className
            }
          >
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </div>
        </div>
        <section className="flex gap-9 flex-col 2xl:flex-row mt-14">
          <XtraFeat
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

function Integrations() {
  return (
    <div className="bg-[#1c1c1c]">
      <section className="2xl:max-w-[1200px] max-w-[1050px] mx-auto">
        <div
          className={
            "w-fit mx-auto text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
            outfir.className
          }
        >
          <span className="text-base mr-2">🛠</span>
          Integrations
        </div>
        <div className="mx-auto w-fit mt-3">
          <h2
            className={
              "text-[#fdf2ec] text-[45px] 2xl:text-[56px] w-[600px] font-medium leading-none text-center " +
              outfir.className
            }
          >
            Enable <span className="text-[#fe8162]">integration</span> with
            other popular tools and platforms
          </h2>
        </div>
        <div
          className={
            "text-[#767575] text-[20px] font-medium w-[450px] mx-auto mt-5 text-center " +
            inter.className
          }
        >
          Seamlessly connect and amplify your workflow by enabling integration
          with a diverse array of widely-used tools and platforms.
        </div>
        <Image
          src={
            "https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024"
          }
          alt="Image Alt"
          width={580}
          height={273}
          className="mt-12 mx-auto"
        />
      </section>
    </div>
  );
}

function FAQSectiom() {
  return (
    <section>
      <div className="2xl:max-w-[1200px] max-w-[1050px] mx-auto pt-[150px] pb-[120px] flex flex-col 2xl:flex-row">
        <div className="w-1/3">
          <div
            className={
              "w-fit  text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
              outfir.className
            }
          >
            <span className="text-base mr-2">🙋‍♀️</span>
            FAQ
          </div>
          <div
            className={
              "w-[400px] mt-4 text-[45px] 2xl:text-[56px] leading-none font-medium " +
              outfir.className
            }
          >
            Need
            <span className="text-[#fe8162] block">Answers?</span>
          </div>
          <div
            className={
              "text-[#767575] 2xl:w-[325px] w-[550px] mt-4 text-[20px] tracking-tighter font-medium " +
              inter.className
            }
          >
            Check out our most commonly asked questions below to find the
            information you need.
          </div>
        </div>
        <div className="2xl:w-2/3 w-full mt-7 2xl:mt-0 space-y-4">
          <ClientComponnet />
        </div>
      </div>
    </section>
  );
}

function TIcker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-check-lg fill-[#43d67e]"
        viewBox="0 0 16 16"
      >
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
      </svg>
      <span
        className={"text-[#767575] text-[16px] font-medium " + inter.className}
      >
        {children}
      </span>
    </div>
  );
}

function PricingVar1({ plan, price }: { plan: string; price: string }) {
  return (
    <div className="bg-[#ededfa] max-w-[440px]  h-fit py-[40px] px-[30px] w-full rounded-3xl">
      <div
        className={
          "text-[#fe8162] bg-white px-2 py-0.5 rounded-lg font-semibold w-fit " +
          outfir.className
        }
      >
        {plan}
      </div>
      <div className="mb-4">
        <span
          className={
            "text-[#1c1c1c] text-[45px] 2xl:text-[56px] font-medium " +
            outfir.className
          }
        >
          ${price}
        </span>
        <span className={"text-[16px] font-medium " + inter.className}>
          /month
        </span>
      </div>
      <TIcker>Access to all basic features</TIcker>
      <TIcker>Reporting and analytics</TIcker>
      <TIcker>Up to 5 individual users</TIcker>
      <TIcker>Chat and email support</TIcker>

      <button
        className={
          outfir.className +
          " flex gap-2 items-center mt-16 font-semibold text-lg px-5 py-3  bg-white rounded-xl border hover:border-black transition-all hover:transition-all duration-200 hover:duration-500"
        }
      >
        Get Started
      </button>
    </div>
  );
}

function PricingVar2() {
  return (
    <div className="bg-[#1c1c1c] max-w-[440px]  py-[40px] px-[30px] w-full rounded-3xl">
      <div
        className={
          "text-[#fe8162] bg-white px-2 py-0.5 rounded-lg font-semibold w-fit " +
          outfir.className
        }
      >
        STANDARD
      </div>
      <div className="mb-4">
        <span
          className={
            "text-white text-[45px] 2xl:text-[56px] font-medium " +
            outfir.className
          }
        >
          $25
        </span>
        <span
          className={"text-[16px] text-white font-medium " + inter.className}
        >
          /month
        </span>
      </div>
      <TIcker>Access to all basic features</TIcker>
      <TIcker>Reporting and analytics</TIcker>
      <TIcker>Up to 5 individual users</TIcker>
      <TIcker>Chat and email support</TIcker>
      <TIcker>3+ integrations</TIcker>
      <TIcker>Account performance reporting</TIcker>

      <button
        className={
          outfir.className +
          " bg-[#8247ff]  relative mt-6 group justify-center flex rounded-xl text-white font-semibold text-lg px-5 py-3 transition-all  hover:shadow-[0px_0px_0px_6px_#e3cff066]  "
        }
      >
        <div className="text-center  ">Get Started</div>
      </button>
    </div>
  );
}

function PricingPlan() {
  return (
    <section className="2xl:max-w-[1200px] max-w-[1050px] mx-auto">
      <div
        className={
          "w-fit mx-auto  text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
          outfir.className
        }
      >
        <span className="text-base mr-2">💲</span>
        PRICING
      </div>
      <div
        className={
          "text-[45px] 2xl:text-[56px] font-medium text-center " +
          outfir.className
        }
      >
        Select your ideal <span className="text-[#fe8162]">Pricing</span> plan
      </div>
      <div
        className={
          "w-[500px] text-[20px] font-medium text-[#767575] text-center mx-auto " +
          inter.className
        }
      >
        At Manage Wise, we believe in providing you with pricing plans that
        adapt to your unique needs.
      </div>
      <div className="mt-[40px] flex flex-col 2xl:flex-row gap-6 2xl:items-end items-center">
        <PricingVar1 plan="FREE" price="0" />
        <PricingVar2 />
        <PricingVar1 plan="BUSINESS" price="42" />
      </div>
    </section>
  );
}

function Testimony() {
  return (
    <section className="2xl:max-w-[1200px] max-w-[1050px] mx-auto py-[100px]">
      <div
        className={
          "w-fit   text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
          outfir.className
        }
      >
        <span className="text-base mr-2">🧡</span>
        TESTIMONIALS
      </div>
      <div
        className={
          "text-[45px] 2xl:text-[56px] font-medium " + outfir.className
        }
      >
        Hear from our <span className="text-[#fe8162]">Satisfied</span> clients
      </div>
      <div
        className={
          "w-[550px] text-[#767575] font-medium text-[20px] " + inter.className
        }
      >
        Discover why our clients love working with us. Read their testimonials
        and learn how we has helped businesses.
      </div>
      <section
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
        }}
        className=" overflow-x-hidden flex gap-10 mt-10"
      >
        <ROver />
      </section>
    </section>
  );
}

function Closing(){
  return <div className=" flex py-[100px] px-[30px] max-w-[1000px] 2xl:max-w-[1200px] mx-10 rounded-2xl border lg:mx-auto bg-white">
      <div className="w-full">
      <div
        className={
          "w-fit   text-[#8247ff] font-medium text-sm whitespace-pre bg-white px-2 py-1 rounded-md border-[#8247ff33] border " +
          outfir.className
        }
      >
        <span className="text-base mr-2">👋</span>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        DON'T MISS OUT
      </div>
      <h5 className={"text-[45px] 2xl:text-[56px] font-medium w-[500px] leading-none mt-6 "+outfir.className}>
      Unleash your <span className="text-[#fe8162]">Potential</span> with us
      </h5>
      <div className={"text-[#767575] text-[20px] font-medium w-[350px] mt-6 "+inter.className}>
      Join our community of ambitious individuals and organizations eager to make a difference.
      </div>
      <div className="mt-6">
      <button
        className={
          outfir.className +
          " bg-[#8247ff] relative w-[220px] group justify-center flex rounded-xl text-white font-semibold text-xl px-7 py-3 transition-all  hover:shadow-[0px_0px_0px_10px_#d7c5fc]  "
        }
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
      <div className="w-full">

      </div>
  </div>
}

function Footer(){
  return <div className="bg-gradient-to-b from-white to-[#fdf2ed]">
    <Closing/>
  </div>
}

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b  from-[#fdf2ed] to-white">
        <HeroSection />
      </div>
      <ProductFeatures />
      <MoreFeatures />
      <Integrations />
      <FAQSectiom />
      <PricingPlan />
      <Testimony />
      <Footer/>
    </>
  );
}
