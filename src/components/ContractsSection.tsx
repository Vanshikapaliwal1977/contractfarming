
import ContractCard from "./ContractCard";
import SectionHeading from "./SectionHeading";

const contractsData = [
  {
    id: 1,
    title: "Barley Seeds",
    acres: 32,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6dfc6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Onion Seeds",
    acres: 12,
    image: "https://images.unsplash.com/photo-1594063788908-24095406dd5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Poultry Farm",
    acres: 10,
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Fish Farming",
    acres: 30,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

const ContractsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contracts For Farmers" />
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contractsData.map((contract) => (
            <ContractCard
              key={contract.id}
              title={contract.title}
              acres={contract.acres}
              image={contract.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractsSection;
