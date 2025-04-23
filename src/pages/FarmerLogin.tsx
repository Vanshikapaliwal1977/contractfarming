
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

const FarmerLogin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-700 via-green-500 to-green-300 flex items-center justify-center px-4">
      <div className="bg-white/80 shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-green-800 mb-2">Farmer Login</h2>
          <p className="text-muted-foreground text-sm">Connect to your farming dashboard</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                className="pl-10 w-full"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                className="pl-10 w-full"
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Login
          </Button>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            Don't have an account? {" "}
            <Link 
              to="/signup" 
              className="text-green-600 hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmerLogin;
