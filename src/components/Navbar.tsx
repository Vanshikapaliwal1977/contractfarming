
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="bg-green-700">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar with logo and auth buttons */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            Contract Farming
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                type="text"
                placeholder="Search contracts, crops, locations..."
                className="pl-10 bg-white/90 border-0"
              />
            </div>
            <Link to="/farmer-login">
              <Button variant="outline" className="bg-green-600 text-white border-white/20 hover:bg-green-700">
                Farmer Login
              </Button>
            </Link>
            <Link to="/buyer-login">
              <Button className="bg-farming-accent hover:bg-farming-accent/90">
                Buyer Login
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex space-x-8 py-2">
          <Link to="/" className="text-white hover:text-white/80 py-2 px-3 bg-green-600 rounded">
            Home
          </Link>
          <Link to="/become-farmer" className="text-white hover:text-white/80 py-2">
            Become a Contract Farmer
          </Link>
          <Link to="/become-buyer" className="text-white hover:text-white/80 py-2">
            Become a Buyer
          </Link>
          <Link to="/contact" className="text-white hover:text-white/80 py-2">
            Contact Us
          </Link>
          <Link to="/about" className="text-white hover:text-white/80 py-2">
            About Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
