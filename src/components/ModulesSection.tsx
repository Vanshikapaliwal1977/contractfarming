
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { AnimateInView } from "./ui/animate-in-view";

const modules = [
  {
    id: 1,
    title: "Contract Management",
    description: "Manage and track farming contracts with detailed analytics and reporting.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6dfc6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "500+ Active Contracts"
  },
  {
    id: 2,
    title: "Land Registry",
    description: "Browse and register agricultural lands available for contract farming.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "12,000+ Acres Listed"
  },
  {
    id: 3,
    title: "Equipment Marketplace",
    description: "Purchase or rent farming equipment and tools from verified suppliers.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "2,000+ Products"
  },
  {
    id: 4,
    title: "Support Services",
    description: "Access agricultural experts and support services for your farming needs.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "24/7 Expert Support"
  }
];

const ModulesSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-farming-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="farming" className="mb-4">Our Modules</Badge>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Complete Farming Solutions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive modules designed to streamline your farming operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <AnimateInView
              key={module.id}
              variant="slide-up"
              delay={index * 100}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {module.description}
                    </p>
                    <Badge variant="outline" className="bg-farming-light/50 text-farming-primary">
                      {module.stats}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
