
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  
  const links = [
    { name: "Home", id: "home", href: "/" },
    { name: "Become a Contract Farmer", id: "farmer", href: "#" },
    { name: "Become a Buyer", id: "buyer", href: "#" },
    { name: "Contact Us", id: "contact", href: "#" },
    { name: "About Us", id: "about", href: "#" },
  ];

  return (
    <nav className="bg-farming-primary border-b border-farming-light/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.id)}
              className={cn(
                "py-4 px-4 text-sm font-medium text-white hover:bg-farming-secondary/80 transition-colors",
                activeLink === link.id && "bg-farming-secondary"
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
