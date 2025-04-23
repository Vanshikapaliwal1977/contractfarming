import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ModulesSection from "@/components/ModulesSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-700 via-green-500 to-green-300 flex flex-col">
      <Navbar />
      <div className="flex-1 pt-40 sm:pt-44">
        <div className="max-w-2xl mx-auto bg-white/80 shadow-xl rounded-2xl p-6 mb-8 mt-4">
          <h2 className="text-xl font-semibold text-center text-green-800">Your Modules Go Here</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
