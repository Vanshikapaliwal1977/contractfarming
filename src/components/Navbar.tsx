
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Navigation from './Navigation';

const Navbar = () => {
  return (
    <header className="bg-farming-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Contract Farming</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center flex-1 max-w-md mx-10">
            <div className="w-full relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input 
                type="text"
                placeholder="Search contracts, crops, locations..."
                className="pl-10 border-0 bg-white/90 focus:ring-2 focus:ring-farming-light focus:bg-white w-full rounded-full"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="bg-farming-primary/20 text-white border-white/30 hover:bg-farming-primary/40">
              Farmer Login
            </Button>
            <Button className="bg-farming-accent hover:bg-farming-accent/90 text-farming-primary font-medium">
              Buyer Login
            </Button>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
}

export default Navbar;
