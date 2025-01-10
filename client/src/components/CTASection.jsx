const CTASection = () => {
    return (
      <div className="w-full h-[400px] bg-gradient-to-r from-primary to-accent flex items-center justify-center text-center px-6 text-white">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Ready to take control of your health?
          </h2>
          <p className="text-lg mb-6">
            Don’t wait any longer to start your journey towards a healthier, happier you. Our expert team is here to guide you every step of the way.
          </p>
          <button className="bg-white text-primary px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-100">
            Book a Call
          </button>
        </div>
      </div>
    );
  };
  
  export default CTASection;
  