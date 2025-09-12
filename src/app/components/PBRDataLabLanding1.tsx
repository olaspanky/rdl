import React, { useState } from 'react';
import { ChevronDown, Play, Search, Database, Code, BarChart3, Users, Shield, Layout, Settings, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const PBRDataLabLanding = () => {
  const [email, setEmail] = useState('');
  const [activeQuery, setActiveQuery] = useState(1);

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center items-center">
        {/* Main Content */}
        <motion.div 
          className="flex-1 w-1/2 mx-auto px-4 pl-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="">
            <motion.h1 
              className="text-5xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              Get access to AI Engine an
              African Real-World Health
              Data, All in One Place
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Access to all these tools without a need to subscribe to each separately
            </motion.p>

            {/* Technology Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src="/images/apps.png" alt="PBR Logo" className="" />
            </motion.div>

            {/* Email Signup */}
            <motion.div 
              className="mb-8 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex flex-col gap-7">
                <motion.input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent w-92"
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.div 
                  className='flex gap-2 items-center'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  <motion.button 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-r-md font-medium transition-colors flex items-center w-48"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Data
                    <motion.svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.button>
                  
                  <motion.div 
                    className=""
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <p className="text-[12px] text-gray-500 font-medium">ONE SUBSCRIPTION</p>
                    <p className="text-[12px] text-gray-400">ALL ACCESS</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Rating */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + (i * 0.1) }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <Star className="w-4 h-4 fill-current" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-gray-600">Based on 10,000+ reviews</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Query Interface Preview */}
        <motion.div 
          className="w-1/2 min-h-screen bg-white border-l border-gray-200 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          <motion.img 
            src="/images/query.png" 
            alt="Query Interface" 
            className="w-full h-full object-cover"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PBRDataLabLanding;