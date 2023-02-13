import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Benefits from "./components/Benefits/Benefits";
import DownloadApp from "./components/DownloadApp/Download";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Benefits />
      <DownloadApp />
    </div>
  );
}

export default App;
