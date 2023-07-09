import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
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
            <Route exact path="/resume" element={<Resume title="Nitin | Resume"/>}/>
            <Route exact path="/contact" element={<Contact title="Nitin | Contact Us"/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
