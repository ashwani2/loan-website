import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import EMICalculator from "./components/EmiCalculator";
import About from "./components/About";  // Add your About component
import Contact from "./components/Contact";  // Add your Contact component

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
