import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const loanSectionRef = useRef(null);

  const scrollToLoanSection = () => {
    loanSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-blue-50 text-center px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Welcome to Loan Website
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Easily calculate your EMI and manage your loans effectively.
        </p>
        <button
          onClick={scrollToLoanSection}
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>

      {/* Loan Products Section */}
      <div ref={loanSectionRef} className="py-12 bg-blue-50">
        <h2 className="text-3xl font-bold text-gray-800">
          Bringing you the <span className="text-blue-600">Best Products</span>{" "}
          from Top Banks & Financial Institutions
        </h2>
        <div className="border-b-4 border-blue-600 w-24 mx-auto mt-2"></div>

        {/* Loan Cards with Clickable Redirections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4 md:px-12">
          {[
            { name: "Credit Card", icon: "💳", color: "bg-purple-100", path: "/loans/credit-card" },
            { name: "Business Loan", icon: "📂", color: "bg-yellow-100", path: "/loans/business-loan" },
            { name: "Home Loan", icon: "🏡", color: "bg-green-100", path: "/loans/home-loan" },
            { name: "Gold Loan", icon: "🪙", color: "bg-yellow-200", path: "/loans/gold-loan" },
          ].map((item, index) => (
            <Link key={index} to={item.path}>
              <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-xl hover:shadow-lg transition cursor-pointer">
                <div className={`p-4 rounded-full ${item.color} text-3xl`}>
                  {item.icon}
                </div>
                <p className="text-md font-semibold text-gray-800 mt-2">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
