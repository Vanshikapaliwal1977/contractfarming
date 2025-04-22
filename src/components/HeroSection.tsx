
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-farming-primary/90 to-farming-primary/70">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Get Assured Prices For Your Produce With Contract Farming
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Contract farming offers a strategic solution by establishing pre-agreed terms between farmers and buyers, ensuring a stable and reliable market for agricultural produce.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-farming-accent hover:bg-farming-accent/90 text-farming-primary font-medium">
                Find Contracts
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
