
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 shadow-lg">
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-3 flex flex-col items-center justify-center rounded-b-2xl backdrop-blur-md">
        <div className="flex items-center gap-2 mb-2">
          <Leaf className="text-white" size={36} />
          <span className="text-3xl md:text-4xl font-bold text-white drop-shadow">
            Farmer Connect
          </span>
        </div>
        <span className="text-base italic text-white/80 mb-2 tracking-tight">
          Empowering Farmers, Connecting Communities
        </span>
      </div>
      <div className="w-full h-2 bg-gradient-to-r from-green-300/40 via-white/10 to-green-200/10 shadow" />
    </nav>
  );
};

export default Navbar;
