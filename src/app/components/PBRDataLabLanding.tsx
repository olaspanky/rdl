import React, { useState } from 'react';
import { ChevronDown, Play, Search, Database, Code, BarChart3, Users, Shield, Layout, Settings, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Variants } from "framer-motion";


const PBRDataLabLanding = () => {
  const [email, setEmail] = useState('');
  const [activeQuery, setActiveQuery] = useState(1);

  // Refs for scroll animations
  const featuresRef = useRef(null);
  const titleRef = useRef(null);
  const platformRef = useRef(null);
  const screenRef = useRef(null);

  // InView hooks
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px 0px 0px 0px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-50px 0px 0px 0px" });
  const platformInView = useInView(platformRef, { once: true, margin: "-50px 0px 0px 0px" });
  const screenInView = useInView(screenRef, { once: true, margin: "-100px 0px 0px 0px" });

  // Animation variants for features
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

  const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ FIXED
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 200,
    },
  },
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-[42px] font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What can you do with Research Data Lab?
          </motion.h2>
        </motion.div>

        <motion.div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
        >
          {/* Feature 1 */}
          <motion.div 
            className="text-center p-6"
            variants={featureVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
              variants={iconVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
             <img src="/images/icc1.png" alt="Feature 1" className="w-8 h-8"/>
            </motion.div>
            <motion.h3 
              className="text-lg font-semibold text-gray-900 mb-3"
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Access African-specific health data not available in traditional global datasets
            </motion.h3>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="text-center p-6"
            variants={featureVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
              variants={iconVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: -5,
                transition: { duration: 0.2 }
              }}
            >
              <img src="/images/icc2.png" alt="Feature 2" className="w-8 h-8"/>
            </motion.div>
            <motion.h3 
              className="text-lg font-semibold text-gray-900 mb-3"
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Speed up research and analytics with pre-cleaned, structured, and mapped data
            </motion.h3>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="text-center p-6"
            variants={featureVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
              variants={iconVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 10,
                transition: { duration: 0.2 }
              }}
            >
              <img src="/images/icc3.png" alt="Feature 3" className="w-8 h-8"/>
            </motion.div>
            <motion.h3 
              className="text-lg font-semibold text-gray-900 mb-3"
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Leverage AI and advanced analytics to uncover trends in drugs, diseases, and health economics
            </motion.h3>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex gap-8 justify-center mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Feature 4 */}
          <motion.div 
            className="text-center p-6 w-1/3"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={featuresInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={featuresInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -90 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
              whileHover={{ 
                scale: 1.1,
                rotate: -5,
                transition: { duration: 0.2 }
              }}
            >
              <img src="/images/icc4.png" alt="Feature 4" className="w-8 h-8"/>
            </motion.div>
            <motion.h3 
              className="text-lg font-semibold text-gray-900 mb-3"
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Collaborate and share insights seamlessly within the Fabric ecosystem
            </motion.h3>
          </motion.div>

          {/* Feature 5 */}
          <motion.div 
            className="text-center p-6 w-1/3"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={featuresInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0, rotate: 90 }}
              animate={featuresInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 90 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/images/icc5.png" alt="Feature 5" className="w-8 h-8"/>
              </div>
            </motion.div>
            <motion.h3 
              className="text-lg font-semibold text-gray-900 mb-3"
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Scale with confidence – from exploratory research to enterprise-grade solutions
            </motion.h3>
          </motion.div>
        </motion.div>

        {/* Powerful Platform Section */}
        <motion.div 
          ref={platformRef}
          className="text-center lg:my-20"
          initial={{ opacity: 0, y: 60 }}
          animate={platformInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-[42px] text-[#333333] my-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={platformInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            The world's most powerful<br />
            research platform
          </motion.h2>
        </motion.div>

        {/* Platform Interface */}
        <motion.div 
          ref={screenRef}
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={screenInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
          transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
        >
          <motion.img 
            src="/images/screen.png" 
            alt="Platform Interface" 
            className="w-full h-auto rounded-lg shadow-lg"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
            initial={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PBRDataLabLanding;