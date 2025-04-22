
import ContractCard from "./ContractCard";
import SectionHeading from "./SectionHeading";

const landsData = [
  {
    id: 1,
    title: "Haryana",
    acres: 32,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Uttar Pradesh",
    acres: 12,
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Madhya Pradesh",
    acres: 10,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Gujrat",
    acres: 30,
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

const LandsSection = () => {
  return (
    <section className="py-16 bg-farming-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Lands Available For Contract Farming" />
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {landsData.map((land) => (
            <ContractCard
              key={land.id}
              title={land.title}
              acres={land.acres}
              image={land.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandsSection;
