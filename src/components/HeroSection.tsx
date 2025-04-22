
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-farming-background to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Get Assured Prices For Your <span className="text-farming-primary">Produce With Contract Farming</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Contract farming offers a strategic solution by establishing pre-agreed terms between farmers and buyers, ensuring a stable and reliable market for agricultural produce.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-farming-primary hover:bg-farming-secondary text-white transition-colors">
                Find Contracts
              </Button>
              <Button variant="outline" className="border-farming-primary text-farming-primary hover:bg-farming-light hover:text-farming-primary">
                Offer Land
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
