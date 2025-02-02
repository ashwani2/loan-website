import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        Welcome to Loan website
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mt-4">
        Easily calculate your EMI and manage your loans effectively.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default Home;
