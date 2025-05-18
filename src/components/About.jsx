import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer"; 

const About = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About FastFi Connect</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Revolutionizing financial services with speed, technology, and transparency
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our <span className="text-blue-600">Story</span>
            </h2>
            <p className="text-gray-600 mb-4">
              FastFi Connect LLP was founded in 2020 with a simple mission: to make financial services faster, simpler, and more accessible.
            </p>
            <p className="text-gray-600 mb-4">
              The name "FastFi" represents our core values - <span className="font-semibold">Fast</span> (speed and efficiency) and <span className="font-semibold">Fi</span> (financial innovation). We combine cutting-edge technology with deep financial expertise to deliver solutions that traditional institutions can't match.
            </p>
            <p className="text-gray-600">
              Today, we serve over 50,000 customers across India with our innovative loan products and financial tools.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <img 
              src="/images/about-story.jpg" 
              alt="FastFi team working" 
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-blue-600">Mission</span> & Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Speed</h3>
              <p className="text-gray-600">
                We deliver financial solutions in record time with our automated processes and AI-powered decision making.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees or fine print. We believe in complete clarity about rates, terms, and processes.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make starts with what's best for our customers' financial health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our <span className="text-blue-600">Leadership</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src="/images/team1.jpg" 
                alt="Rahul Sharma" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Rahul Sharma</h3>
              <p className="text-blue-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former Head of Digital Banking at HDFC with 15+ years in fintech innovation.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src="/images/team2.jpg" 
                alt="Priya Patel" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Priya Patel</h3>
              <p className="text-blue-600 mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                AI and blockchain expert from IIT Bombay with a passion for financial inclusion.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src="/images/team3.jpg" 
                alt="Arjun Mehta" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Arjun Mehta</h3>
              <p className="text-blue-600 mb-2">Chief Risk Officer</p>
              <p className="text-gray-600 text-sm">
                12 years experience in credit risk management at ICICI and Axis Bank.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience FastFi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've found faster, smarter financial solutions.
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition"
          >
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Footer (same as home page) */}
      <footer className="bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              FastFi Connect LLP
            </h3>
            <p className="text-gray-600">
              FastFi represents the fusion of speed ("Fast") and finance ("Fi"),
              delivering instant loan approvals and technology-driven financial
              solutions as a modern alternative to traditional services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/" className="hover:text-gray-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-800 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/loans" className="hover:text-gray-800 transition-colors">
                  Loan Products
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>📞 +91-9876543210</li>
              <li>✉️ support@fastficonnect.com</li>
              <li>🏢 123 Financial Street, Mumbai 400001</li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FastFi Connect LLP. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;