
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-farming-primary to-farming-secondary bg-clip-text text-transparent">Contract Farming</span>
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
                className="pl-10 border-0 bg-gray-50 focus:ring-2 focus:ring-farming-light focus:bg-white w-full rounded-full"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="hidden md:inline-flex border-farming-primary text-farming-primary hover:bg-farming-light hover:text-farming-primary">
              Farmer Login
            </Button>
            <Button className="bg-farming-primary hover:bg-farming-secondary text-white transition-colors">
              Buyer Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
