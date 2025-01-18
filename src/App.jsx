import { useEffect ,useRef} from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import OurValues from "./components/OurValues";
import RatedSection from "./components/Ratings";
import DentalServicesSection from "./components/ServiceSection";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const whyChooseUsRef = useRef(null);

  const scrollToWhyChooseUs = () => {
    if (whyChooseUsRef.current) {
      whyChooseUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const locationRef = useRef(null);

  const scrollToLocation = () => {
    if (locationRef.current) {
      locationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App font-kanit">
      <Hero onGetStartedClick={scrollToWhyChooseUs} onScrollToLocation={scrollToLocation}/>
      <OurValues />
      <WhyChooseUs ref={whyChooseUsRef} />
      <DentalServicesSection/>
      <RatedSection/>
      <Location ref={locationRef}/>
      <Location ref={locationRef}/>
      <Footer/>
    </div>
  );
}

const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
