
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const modules = [
    {
      title: "Contract for Farmers",
      description: "Manage and track farming contracts with detailed analytics and reporting.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Contract for Farmers",
    },
    {
      title: "Land Available for Contract Farming",
      description: "Browse and register agricultural lands available for contract farming.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Land Available for Contract Farming",
    },
    {
      title: "Land for Rent",
      description: "Purchase or rent farming equipment and tools from verified suppliers.",
      image: "https://images.unsplash.com/photo-1513273946853-e9c612ff7814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Land for Rent",
    },
    {
      title: "Product Available",
      description: "Access agricultural experts and support services for your farming needs.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb158e99d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Product Available",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Farming Solutions
            </h1>
            <p className="text-lg text-gray-600">
              Explore our comprehensive modules designed to streamline your farming operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <Button
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                  >
                    {module.tag}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
