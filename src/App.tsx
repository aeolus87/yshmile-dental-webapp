import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Preparing Your Smile");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Animated loading text
    const textTimer = setInterval(() => {
      setLoadingText((prev) =>
        prev.endsWith("...") ? "Preparing Your Smile" : prev + "."
      );
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(textTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#dccbf5]">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-20 animate-pulse"></div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120">
              {/* Rotating background circles */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#E0E7FF"
                stroke-width="3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#C7D2FE"
                stroke-width="3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 50 50"
                  to="0 50 50"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Main tooth */}
              <path
                d="M50 20 
                       C60 20, 75 25, 75 45
                       C75 65, 65 80, 65 90
                       C65 95, 60 95, 60 90
                       C60 85, 55 75, 50 75
                       C45 75, 40 85, 40 90
                       C40 95, 35 95, 35 90
                       C35 80, 25 65, 25 45
                       C25 25, 40 20, 50 20Z"
                fill="white"
                stroke="#3B82F6"
                stroke-width="4"
              >
                <animate
                  attributeName="fill"
                  values="#EFF6FF;#DBEAFE;#EFF6FF"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-width"
                  values="4;5;4"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Shine effects */}
              <circle cx="40" cy="35" r="3" fill="#93C5FD">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="60" cy="40" r="2" fill="#93C5FD">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="1.5s"
                  begin="0.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
          <p className="text-xl text-gray-700 mt-6 font-semibold min-w-[200px]">
            {loadingText}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
