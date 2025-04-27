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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4 md:px-12">
          {[
            {
              name: "Credit Card",
              icon: "💳",
              color: "bg-purple-100",
              path: "/loans/credit-card",
            },
            {
              name: "Business Loan",
              icon: "📂",
              color: "bg-yellow-100",
              path: "/loans/business-loan",
            },
            {
              name: "Home Loan",
              icon: "🏡",
              color: "bg-green-100",
              path: "/loans/home-loan",
            },
            {
              name: "Gold Loan",
              icon: "🪙",
              color: "bg-yellow-200",
              path: "/loans/gold-loan",
            },
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

      {/* New Sections (credit, offers, savings) */}
      {/* Check Credit Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Check your credit,
              <br /> <span className="text-blue-600">for free</span>
            </h3>
            <p className="mt-4 text-gray-600">
              Understand your current financial position and how to improve it.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-100 p-8 rounded-xl shadow-md">
              <p className="text-5xl font-bold text-blue-600">729</p>
              <p className="mt-2 text-gray-700">Your credit score is Good</p>
            </div>
          </div>
        </div>
      </div>

      {/* Great Loan Offers */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Get great loan <span className="text-blue-600">offers</span>
            </h3>
            <p className="mt-4 text-gray-600">
              We review your qualifications to find you the best rates from over
              50+ lenders.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="space-y-4">
              <div className="bg-green-100 p-4 rounded-lg shadow">
                Save on your LIC Housing Finance Ltd
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow">
                Get a Gold Loan without EMI*
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Identify Ways to Save */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Identify ways to <span className="text-blue-600">save</span>
            </h3>
            <p className="mt-4 text-gray-600">
              Analyze your spending habits and discover potential savings
              opportunities.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-purple-100 p-8 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-gray-800">₹6,31,336</p>
              <p className="text-gray-700">Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3Cs of Learning Section */}
      <section className="bg-yellow-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text and Cards */}
          <div className="md:w-2/3 space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Reclaim control over your personal finance <br />
              with our <span className="text-blue-600">3Cs of Learning</span>
            </h2>

            {/* Cards */}
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Check</h3>
                <p className="text-gray-600 mb-4">
                  Understand your credit report analysis
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Get Started
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Choose</h3>
                <p className="text-gray-600 mb-4">
                  Get personalized loan recommendations
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Browse Loans
                </button>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Comprehend</h3>
                <p className="text-gray-600 mb-4">
                  We make complex financial topics simple
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Learning Center
                </button>
              </div>
            </div>
          </div>

          {/* Phone Image - Hidden on Mobile */}
          <div className="hidden md:block md:w-1/3">
            <img
              src="/images/phone.png" // or wherever your image is
              alt="Credit Score App"
              className="mx-auto w-72 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Learning Center Section */}
      <div className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-6">Learning Center</h3>
          <p className="text-blue-200 mb-12">
            Understanding money and managing your personal finances is
            difficult. We can solve this problem with some amazing reads.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "The Ultimate Guide to Credit Score",
                tag: "Credit Score",
                img: "/images/credit-guide.jpg", // Replace with real images
              },
              {
                title: "6 Top Tips to Increase Home Loan Eligibility",
                tag: "Home Loan",
                img: "/images/home-loan.jpg",
              },
              {
                title: "What Is 70/30 Rule In Investing And Managing Money?",
                tag: "Money Management",
                img: "/images/money-management.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <span className="text-blue-600 text-sm font-semibold">
                    {item.tag}
                  </span>
                  <h4 className="text-lg font-bold mt-2">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-white p-5 rounded-xl shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                How do I get the cheapest home loan?
                <span className="ml-2 group-open:rotate-45 transform transition-transform text-2xl">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600 space-y-4">
                Securing the cheapest home loan involves strategic preparation
                and smart choices. First, build a strong credit history early to
                ensure you qualify for the best interest rates. Next, always
                compare offers from multiple banks and NBFCs rather than
                settling for the first one. Tailor your home loan to fit your
                specific profile – including your property type, income, and
                credit score – for better customized deals. Process your loan
                application efficiently to avoid delays, rejections, and
                additional costs. Most importantly, regularly monitor market
                interest rates and refinance when better opportunities arise. We
                offer a comprehensive package that helps you navigate all these
                steps, ensuring you save the most money throughout the lifetime
                of your loan.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white p-5 rounded-xl shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                What documents do I need for a home loan?
                <span className="ml-2 group-open:rotate-45 transform transition-transform text-2xl">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600">
                Generally, you’ll need to provide identity proof (like Aadhaar
                card, PAN card, passport), address proof, income proof (salary
                slips, IT returns, bank statements), property documents, and
                recent passport-sized photographs. Requirements may vary
                slightly depending on your employment type (salaried or
                self-employed) and the lender's policies. We will guide you
                through the exact checklist for your specific case to ensure a
                smooth approval process.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white p-5 rounded-xl shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                How does my credit score impact my finances?
                <span className="ml-2 group-open:rotate-45 transform transition-transform text-2xl">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600">
                Your credit score is a direct reflection of your financial
                reliability. A high score can unlock lower interest rates,
                higher loan approvals, better credit card offers, and overall
                stronger financial credibility. Conversely, a low score can make
                borrowing expensive or even inaccessible. Maintaining a good
                credit score means more opportunities and significant savings
                over time.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white p-5 rounded-xl shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                How is my credit score calculated?
                <span className="ml-2 group-open:rotate-45 transform transition-transform text-2xl">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600">
                Your credit score is calculated based on factors like your
                payment history (timely repayment of EMIs and bills), credit
                utilization (how much of your credit limit you use), length of
                your credit history, types of credit you hold (secured and
                unsecured loans), and the number of recent loan or credit
                inquiries you’ve made. Consistent, responsible credit behavior
                helps build a healthy credit score.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white p-5 rounded-xl shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                How long does it take to get a personal loan?
                <span className="ml-2 group-open:rotate-45 transform transition-transform text-2xl">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600">
                In many cases, personal loans are approved and disbursed within
                24 to 72 hours after submission of all required documents. Some
                lenders even offer instant loans to customers with pre-approved
                credit limits. However, if any documentation or eligibility
                issue arises, the process may take slightly longer. We help you
                choose the right lender to ensure the fastest possible
                disbursal.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white p-5 rounded-xl shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                Do loan applications impact my credit score?
                <span className="ml-2 group-open:rotate-45 transform transition-transform text-2xl">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600">
                Yes, each time you apply for a loan, the lender performs a hard
                inquiry on your credit report. Multiple loan applications in a
                short period can slightly lower your credit score, signaling
                riskier behavior to lenders. It's best to be selective and apply
                only after carefully comparing and pre-checking your
                eligibility. We assist you in finding the best match with
                minimal impact on your credit score.
              </p>
            </details>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Lending Art(India)
            </h3>
            <p className="text-gray-600">
              At Lending Art(India) Financial Services LLP, we help you achieve
              your financial goals with smarter loan solutions, expert advice,
              and personalized services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Contact
                </a>
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
              <li>✉️ support@lendingartindia.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lending Art(India) Financial Services
          LLP. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
