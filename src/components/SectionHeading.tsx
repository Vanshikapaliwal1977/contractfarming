
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
        {title}
        <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-farming-accent rounded-full"></div>
      </h2>
      {subtitle && <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
