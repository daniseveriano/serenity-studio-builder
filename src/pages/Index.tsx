import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ApproachSection from "@/components/sections/ApproachSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import AboutSection from "@/components/sections/AboutSection";
import EthicsSection from "@/components/sections/EthicsSection";
import LocationSection from "@/components/sections/LocationSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ApproachSection />
        <SpecialtiesSection />
        <AboutSection />
        <EthicsSection />
        <LocationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
