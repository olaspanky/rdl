import React, { useState } from "react";
import {
  ChevronDown,
  Play,
  Search,
  Database,
  Code,
  BarChart3,
  Users,
  Shield,
  Layout,
  Settings,
  Star,
} from "lucide-react";

const PBRDataLabLanding = () => {
  const [email, setEmail] = useState("");
  const [activeQuery, setActiveQuery] = useState(1);

  return (
    <div className="lg:min-h-screen flex flex-col  justify-center items-center p-2 bg1 lg:p-3  lg:py-12  lg:px-8">
    <div className="lg:min-h-screen flex flex-col  justify-center items-center bg-[url('/images/stri.png')] lg:p-3 py-5  lg:py-12  lg:px-8">
      {" "}
      <div className="flex flex-col  lg:justify-center lg:items-center max-w-[1420px] ">
        {/* Main Content */}
        <div className="flex flex-col mx-auto  lg:px-8 xl:p-16  lg:py-0 ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl lg:text-[50px] text-center   text-white mb-6 leading-tight isidora font-[700] ">
              Get access to AI Engine and African Real-World Health Data, All in
              One Place
            </h1>

            <p className="text-sm sm:text-xl lg:text-xl text-white mb-8 work max-w-3xl text-center">
              Powerful, self-serve team engagement tools and analytics.
              Supercharge your managers & keep employees engaged from anywhere.
            </p>

            {/* Technology Icons */}

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-start sm:items-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center w-full sm:w-48">
                Explore Data
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Rating */}
          </div>
        </div>

        {/* Query Interface Preview */}
        <div className="w-full  lg:min-h-screen mt-8 lg:mt-0">
          <img
            src="/images/lapi.png"
            alt="Query Interface"
            className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg lg:rounded-none"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default PBRDataLabLanding;
