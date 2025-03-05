import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { setAuthToken } from "./api/adminApi"; // Import token handler
import Header from "./components/Header";
import Home from "./components/Home";
import EMICalculator from "./components/EmiCalculator";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminLogin from "./components/admin/Login";
import AdminDashboard from "./components/admin/Dashboard";
import LoanForm from "./components/loans/LoanForm";
import WhatsAppButton from "./components/WhatsAppButton";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden"; // Prevent horizontal scroll
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {!isAdminPage && <Header />}
      <div className="max-w-screen-xl w-full mx-auto p-4 sm:p-6">
        {children}
        {!isAdminPage && <WhatsAppButton />} {/* Show only on non-admin pages */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
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

          {/* Loan Routes */}
          <Route path="/loans/:loanType" element={<LoanForm />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
