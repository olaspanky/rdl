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
    const platformRef = useRef(null);
    const screenRef = useRef(null);

  // InView hooks
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px 0px 0px 0px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-50px 0px 0px 0px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-50px 0px 0px 0px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px 0px 0px 0px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px 0px 0px 0px" });
  const platformInView = useInView(platformRef, { once: true, margin: '-50px 0px 0px 0px' });
    const screenInView = useInView(screenRef, { once: true, margin: '-100px 0px 0px 0px' });

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
    <div className=" p-3  lg:p-20 max-w-[1420px]">





              {/* Powerful Platform Section */}
              <motion.div
                ref={platformRef}
                className="text-center "
                initial={{ opacity: 0, y: 60 }}
                animate={platformInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <motion.h2
                  className="text-3xl  sm:text-4xl lg:text-5xl text-white py-20 isidora2 font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={platformInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  The world's most powerful
                  research platform
                </motion.h2>
              </motion.div>
      
              {/* Platform Interface */}
              <motion.div
                ref={screenRef}
                className="max-w-full  px-4 sm:px-0"
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={screenInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
                transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: 100 }}
              >
                <motion.img
                  src="/images/sc22.png"
                  alt="Platform Interface"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                    transition: { duration: 0.3 },
                  }}
                  initial={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
              </motion.div>
      {/* What Our Platform Offers Section */}
      <motion.div 
        ref={sectionRef}
        className=" py-12 sm:py-16 md:py-20 lg:py-32"
        initial={{ opacity: 0 }}
        animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        id='resources'
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={titleRef}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 className="text-2xl font-isidora2  sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight px-2">
              What Our Platform Offers
            </motion.h2>
            <motion.p className="text-base sm:text-lg md:text-xl lg:text-xl text-white max-w-3xl mx-auto px-4">
              The Power of Real-World Evidence at Your Fingertips
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-stretch"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Left Column - Image */}
            <motion.div 
              ref={imageRef}
              className="relative h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px] xl:min-h-[600px] flex items-center order-1 lg:order-none"
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              animate={imageInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl w-full h-full">
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
              className="space-y-6 sm:space-y-8 lg:space-y-10 h-full flex flex-col justify-center order-2 lg:order-none"
              variants={containerVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <div className="space-y-6 sm:space-y-8">
                {/* Feature 1 */}
                <motion.div 
                  className="flex items-start space-x-3 sm:space-x-4"
                  variants={featureVariants}
                >
                  <motion.div 
                    className="rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                    variants={iconVariants}
                  >
                    <img 
                      src="/images/m1.png" 
                      alt="Structured & AI-Ready" 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-white mb-1 sm:mb-2 leading-tight">
                      Structured & AI-Ready
                    </h3>
                    <p className="text-sm sm:text-base  text-white leading-relaxed">
                      Standardized data, optimized for Python, R, and SQL.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div 
                  className="flex items-start space-x-3 sm:space-x-4"
                  variants={featureVariants}
                >
                  <motion.div 
                    className="rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                    variants={iconVariants}
                  >
                    <img 
                      src="/images/m2.png" 
                      alt="Secure & Compliant" 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-xl font-semibold  text-white mb-1 sm:mb-2 leading-tight">
                      Secure & Compliant
                    </h3>
                    <p className="text-sm sm:text-base  text-white leading-relaxed">
                      GDPR, HIPAA, and ISO 27001 certified.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div 
                  className="flex items-start space-x-3 sm:space-x-4"
                  variants={featureVariants}
                >
                  <motion.div 
                    className="rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                    variants={iconVariants}
                  >
                    <img 
                      src="/images/m3.png" 
                      alt="Seamless Collaboration" 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-xl font-semibold  text-white mb-1 sm:mb-2 leading-tight">
                      Seamless Collaboration
                    </h3>
                    <p className="text-sm sm:text-base  text-white leading-relaxed">
                      Share datasets, queries, and reports with your research team.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 4 */}
                <motion.div 
                  className="flex items-start space-x-3 sm:space-x-4"
                  variants={featureVariants}
                >
                  <motion.div 
                    className="rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                    variants={iconVariants}
                  >
                    <img 
                      src="/images/m4.png" 
                      alt="Cutting-Edge Tools" 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-xl font-semibold  text-white mb-1 sm:mb-2 leading-tight">
                      Cutting-Edge Tools in one go
                    </h3>
                    <p className="text-sm sm:text-base  text-white leading-relaxed">
                      Research Data Lab revolutionizes African healthcare research by integrating Microsoft Fabric, Power BI, PySpark, SQL, and more into a single, powerful platform.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PBRDataLabLanding;