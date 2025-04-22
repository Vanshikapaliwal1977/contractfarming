
import { AnimateInView } from "./ui/animate-in-view";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    content: "Contract farming has given me the stability I needed in my agricultural business. I'm now guaranteed a fair price for my produce before the season even begins.",
    author: "Rajesh Singh",
    position: "Barley Farmer, Haryana",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    content: "As a small-scale farmer, finding consistent buyers was always a challenge. This platform connected me with corporate buyers, transforming my business completely.",
    author: "Lakshmi Patel",
    position: "Poultry Farmer, Gujarat",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    content: "The transparency and reliability of the contract system has helped me plan my operations better and invest in my farm with confidence.",
    author: "Vikram Choudhury",
    position: "Onion Producer, Maharashtra",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView variant="fade-in">
          <div className="text-center mb-12">
            <Badge variant="farming" className="mb-3">Success Stories</Badge>
            <h2 className="text-3xl font-bold text-gray-800">What Farmers Are Saying</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Hear from farmers who have transformed their agricultural practices through our contract farming platform.
            </p>
          </div>
        </AnimateInView>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateInView 
              key={index} 
              variant="zoom-in" 
              delay={index * 150}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-farming-muted">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-4 h-4 text-farming-accent" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
