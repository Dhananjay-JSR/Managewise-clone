import { HeroSection } from "./components/Page/HeroSection";
import { ProductFeatures } from "./components/Page/ProductFeatures";
import { MoreFeatures } from "./components/Page/MoreFeatures";
import { Integrations } from "./components/Page/Integrations";
import { FAQSectiom } from "./components/Page/FAQSectiom";
import { PricingPlan } from "./components/Page/ClientComponents/Modules/PricingPlan";
import { Testimony } from "./components/Page/Testimony";
import { Footer } from "./components/Page/Footer";
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
       <Footer />   
    </>
  );
}
