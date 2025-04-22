
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ModulesSection from "@/components/ModulesSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ModulesSection />
      <Footer />
    </div>
  );
};

export default Index;
