import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="outer-body">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home title="Nitin | Home"/>} />
            <Route exact path="/about" element={<AboutUs title="Nitin | About"/>} />
            <Route exact path="/services" element={<Services title="Nitin | Services"/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
