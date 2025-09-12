import React, { useState } from 'react';
import { ChevronDown, Play, Search, Database, Code, BarChart3, Users, Shield, Layout, Settings, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Variants } from "framer-motion";

const PBRDataLabLanding = () => {
  const [email, setEmail] = useState('');
  const [activeQuery, setActiveQuery] = useState(1);

  // Refs for scroll animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  // InView hooks
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px 0px 0px 0px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-50px 0px 0px 0px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-50px 0px 0px 0px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px 0px 0px 0px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px 0px 0px 0px" });

  // Animation variants for features
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const featureVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -40,
      y: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
  

    


        {/* What Our Platform Offers Section */}
        <motion.div 
          ref={sectionRef}
          className="bg-gray-50 py-20"
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={titleRef}
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 className="text-[42px] font-bold text-gray-900 mb-4">
                What Our Platform Offers
              </motion.h2>
              <motion.p className="text-xl text-gray-600">
                The Power of Real-World Evidence at Your Fingertips
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
              initial={{ opacity: 0 }}
              animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Left Column - Image */}
              <motion.div 
                ref={imageRef}
                className="relative h-full"
                initial={{ opacity: 0, scale: 0.9, x: -50 }}
                animate={imageInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                  <img
                    src="images/lady.png"
                    alt="African female researcher working on laptop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20"></div>
                </div>
              </motion.div>

              {/* Right Column - Features */}
              <motion.div 
                ref={featuresRef}
                className="space-y-8 h-full flex flex-col justify-between"
                variants={containerVariants}
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
              >
                <div className="space-y-8 pr-20">
                  {/* Feature 1 */}
                  <motion.div 
                    className="flex items-start space-x-4"
                    variants={featureVariants}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                      variants={iconVariants}
                    >
                      <div className="w-6 h-6 flex flex-col space-y-1">
                        <div className="h-1 bg-white rounded w-full"></div>
                        <div className="h-1 bg-white rounded w-4"></div>
                        <div className="h-1 bg-white rounded w-5"></div>
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Structured & AI-Ready
                      </h3>
                      <p className="text-gray-600">
                        Standardized data, optimized for Python, R, and SQL.
                      </p>
                    </div>
                  </motion.div>

                  {/* Feature 2 */}
                  <motion.div 
                    className="flex items-start space-x-4"
                    variants={featureVariants}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                      variants={iconVariants}
                    >
                      <Shield className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Secure & Compliant
                      </h3>
                      <p className="text-gray-600">
                        GDPR, HIPAA, and ISO 27001 certified.
                      </p>
                    </div>
                  </motion.div>

                  {/* Feature 3 */}
                  <motion.div 
                    className="flex items-start space-x-4"
                    variants={featureVariants}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                      variants={iconVariants}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white rounded transform rotate-12"></div>
                        <div className="w-3 h-3 border-2 border-white rounded transform -rotate-12 -ml-2"></div>
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Seamless Collaboration
                      </h3>
                      <p className="text-gray-600">
                        Share datasets, queries, and reports with your research team.
                      </p>
                    </div>
                  </motion.div>

                  {/* Feature 4 */}
                  <motion.div 
                    className="flex items-start space-x-4"
                    variants={featureVariants}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                      variants={iconVariants}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Cutting-Edge Tools in one go
                      </h3>
                      <p className="text-gray-600">
                        Research Data Lab revolutionizes African healthcare research by integrating Microsoft Fabric, Power BI, PySpark, SQL, and more into a single, powerful platform.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div 
                  ref={ctaRef}
                  className="pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center">
                    Explore A Free Sample Dataset
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
  );
};

export default PBRDataLabLanding;