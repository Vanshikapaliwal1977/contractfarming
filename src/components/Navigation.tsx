
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  
  const links = [
    { name: "Home", id: "home", href: "#" },
    { name: "Become a Contract Farmer", id: "farmer", href: "#" },
    { name: "Become a Buyer", id: "buyer", href: "#" },
    { name: "Contact Us", id: "contact", href: "#" },
    { name: "About Us", id: "about", href: "#" },
  ];

  return (
    <nav className="bg-farming-background border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.id)}
              className={cn(
                "py-4 px-1 text-sm font-medium border-b-2 transition-all duration-200 ease-in-out",
                activeLink === link.id
                  ? "border-farming-primary text-farming-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
