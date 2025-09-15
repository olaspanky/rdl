import React, { useState } from 'react';
import { ChevronDown, Play, Search, Database, Code, BarChart3, Users, Shield, Layout, Settings, Star } from 'lucide-react';

const PBRDataLabLanding = () => {
  const [email, setEmail] = useState('');
  const [activeQuery, setActiveQuery] = useState(1);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
        {/* Main Content */}
        <div className="flex-1 lg:w-1/2 mx-auto px-4 lg:px-8 xl:p-16 py-8 lg:py-0">
          <div className="">
            <h1 className="text-xl lg:text-[50px]   text-[#292D34] mb-6 leading-tight isidora ">
              Get access to AI Engine and
              African Real-World Health
              Data, All in One Place
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-xl text-[#292D34] mb-8 work">
              Access to all these tools without a need to subscribe to each separately
            </p>

            {/* Technology Icons */}
            <div className="mb-8 flex justify-start">
              <img 
                src="/images/apps.png" 
                alt="Technology Apps" 
                className="w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain" 
              />
            </div>

            {/* Email Signup */}
            <div className="mb-8 flex flex-col">
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-7">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-80 lg:w-92 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-2 items-start sm:items-center'>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center w-full sm:w-48">
                    Explore Data
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <div className="isidora">
                    <p className="text-[12px] text-[#B9BEC7]">ONE SUBSCRIPTION</p>
                    <p className="text-[12px] text-[#B9BEC7]">ALL ACCESS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">Based on 10,000+ reviews</span>
            </div>
          </div>
        </div>

        {/* Query Interface Preview */}
        <div className="w-full lg:w-1/2 lg:min-h-screen mt-8 lg:mt-0">
          <img 
            src="/images/sc1.png" 
            alt="Query Interface" 
            className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg lg:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PBRDataLabLanding;