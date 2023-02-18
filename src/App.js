import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Benefits from "./components/Benefits/Benefits";
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
      <DownloadApp />
      <Membership />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
