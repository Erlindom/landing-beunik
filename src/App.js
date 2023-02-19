import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Benefits from "./components/Benefits/Benefits";
import BenefitsMobile from "./components/Benefits/BenefisMobile/BenefitsMobile";
import DownloadApp from "./components/DownloadApp/Download";
import Membership from "./components/Membership/Membership";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Benefits />
      <BenefitsMobile />
      <DownloadApp />
      <Membership />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
