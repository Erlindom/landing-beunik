import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Benefits from "./components/Benefits/Benefits";
import DownloadApp from "./components/DownloadApp/Download";
import Membership from "./components/Membership/Membership";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Benefits />
      <DownloadApp />
      <Membership />
    </div>
  );
}

export default App;
