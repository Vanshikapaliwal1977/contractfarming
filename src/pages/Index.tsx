
import CallToAction from "@/components/CallToAction";
import ContractsSection from "@/components/ContractsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LandsSection from "@/components/LandsSection";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import Stats from "@/components/Stats";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Navigation />
      <HeroSection />
      <Stats />
      <ContractsSection />
      <LandsSection />
      <TestimonialSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
