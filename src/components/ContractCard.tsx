
import { cn } from "@/lib/utils";

export interface ContractCardProps {
  title: string;
  acres: number;
  image: string;
  className?: string;
}

const ContractCard = ({ title, acres, image, className }: ContractCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group", 
        className
      )}
    >
      <div className="aspect-w-16 aspect-h-10 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <div className="flex items-center mt-2">
          <span className="text-farming-primary font-medium">{acres} Acres</span>
          <span className="ml-auto bg-farming-light text-farming-primary rounded-full py-1 px-3 text-sm">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
