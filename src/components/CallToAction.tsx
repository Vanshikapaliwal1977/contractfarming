
import { Button } from "./ui/button";
import { AnimateInView } from "./ui/animate-in-view";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-farming-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimateInView variant="slide-right">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Transform Your <span className="text-farming-primary">Agricultural Business</span>?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Join our platform today and connect with farmers, buyers, and landowners to establish 
                beneficial contracts that provide stability and growth for all parties involved.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-farming-primary hover:bg-farming-secondary text-white transition-colors">
                  Join as Farmer
                </Button>
                <Button variant="outline" className="border-farming-primary text-farming-primary hover:bg-farming-light hover:text-farming-primary">
                  Join as Buyer
                </Button>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView variant="slide-left" delay={100}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1629413554890-ea5a1f7a6637?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Farmers collaboration" 
                className="w-full h-64 object-cover object-center" 
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-2">
                  Our Community Impact
                </h3>
                <p className="text-gray-600 mb-4">
                  Through contract farming, we've helped over 5,000 farmers increase their annual income 
                  by an average of 32% while providing reliable supply to businesses.
                </p>
                <div className="flex items-center text-farming-muted">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Learn more about our impact</span>
                </div>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
