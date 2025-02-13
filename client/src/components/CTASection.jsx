import { Link } from "react-router-dom";
import { Button } from "./Button";

const CTASection = () => {
    return (
      <div className="w-full h-[400px] bg-gradient-to-r from-primary to-accent flex items-center justify-center text-center px-6 text-white">
        <div className="max-w-2xl flex flex-col justify-start items-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Ready to take control of your health?
          </h2>
          <p className="text-md sm:text-lg mb-6">
            Don’t wait any longer to start your journey towards a healthier, happier you. Our expert team is here to guide you every step of the way.
          </p>
          <Link to="/booking">
            <Button className="w-fit h-fit bg-primary hover:bg-secondary text-white py-3 px-6 text-md">Book Your Appointment Now</Button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default CTASection;
  