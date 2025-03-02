import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { setAuthToken } from "./api/adminApi"; // Import token handler
import Header from "./components/Header";
import Home from "./components/Home";
import EMICalculator from "./components/EmiCalculator";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminLogin from "./components/admin/Login";
import AdminDashboard from "./components/admin/Dashboard";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div>
      {!isAdminPage && <Header />} {/* Hide header on admin pages */}
      <div className="container mx-auto p-6">{children}</div>
    </div>
  );
};

const App = () => {

  useEffect(() => {
    // Check for token in localStorage and set it
    const token = localStorage.getItem("adminToken");
    if (token) {
      setAuthToken(token);
    }
  }, []);


  return (
    <Router>
      <AppLayout>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
