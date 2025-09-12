import React from 'react';
import { ArrowUpRight, CheckCircle, Dot, Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CaseStudyCard from './CaseStudyCard';
import { Variants } from "framer-motion";
import Link from 'next/link';


const ResearchDataPlatform = () => {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const cardsRef = useRef(null);
  const securityRef = useRef(null);
  const securityImageRef = useRef(null);
  const securityContentRef = useRef(null);
  const pricingRef = useRef(null);
  const pricingTitleRef = useRef(null);
  const plansRef = useRef(null);

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px 0px 0px 0px" });
  const heroTitleInView = useInView(heroTitleRef, { once: true, margin: "-50px 0px 0px 0px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px 0px 0px 0px" });
  const securityInView = useInView(securityRef, { once: true, margin: "-100px 0px 0px 0px" });
  const securityImageInView = useInView(securityImageRef, { once: true, margin: "-50px 0px 0px 0px" });
  const securityContentInView = useInView(securityContentRef, { once: true, margin: "-50px 0px 0px 0px" });
  const pricingInView = useInView(pricingRef, { once: true, margin: "-100px 0px 0px 0px" });
  const pricingTitleInView = useInView(pricingTitleRef, { once: true, margin: "-50px 0px 0px 0px" });
  const plansInView = useInView(plansRef, { once: true, margin: "-100px 0px 0px 0px" });

  const caseStudies = [
    {
      image: "/images/c1.jpg",
      title: "Standardized Clinical Database",
      description:
        "Fully structured using WHO, ICD-10, and global healthcare classifications.",
      link: "#",
    },
    {
      image: "/images/c2.jpg",
      title: "No processing needed",
      description:
        "Ready-to-use datasets for epidemiology, health economics, and AI-driven analytics.",
      link: "#",
    },
    {
      image: "/images/c3.jpg",
      title: "AI & Machine Learning Models",
      description:
        "Structured data enables predictive analytics, disease modeling, & research automation.",
      link: "#",
    },
  ];

  // Animation variants for cards
  const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for pricing plans
  const plansContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const planVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -30,
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

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            ref={heroTitleRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={heroTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="lg:text-[42px] text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={heroTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access Research-Ready & Standardized Data for Seamless Integration
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-7xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Research Data Lab is designed for immediate use, eliminating the need for complex data cleaning or structuring. Our datasets are
              built for global compatibility, ensuring that researchers can analyze, model, and extract insights efficiently
            </motion.p>
          </motion.div>

          {/* Three Feature Cards */}
          <motion.div 
            ref={cardsRef}
            className=""
            variants={cardContainerVariants}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
          >
            <section className="py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudies.map((cs, i) => (
                  <motion.div 
                    key={i} 
                    variants={cardVariants}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <CaseStudyCard {...cs} />
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </motion.section>

      {/* Security Section */}
      <motion.section 
        ref={securityRef}
        className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0 }}
        animate={securityInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            animate={securityInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              ref={securityImageRef}
              className="relative"
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              animate={securityImageInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src="/images/secure.png"
                alt="Professional woman working on laptop"
                className="rounded-2xl shadow-2xl w-full object-cover"
               
              />
            </motion.div>
            <motion.div 
              ref={securityContentRef}
              initial={{ opacity: 0, x: 50 }}
              animate={securityContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 
                className="lg:text-[42px] font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={securityContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Security, Compliance & Ethical Research
              </motion.h2>
              <motion.div 
                className="space-y-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.4
                    }
                  }
                }}
              >
                <div className="border-l-4 border-green-500 pl-6">
                  <motion.h3 
                    className="text-2xl text-[#1E293B] mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={securityContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Trusted, Compliant & Secure
                  </motion.h3>
                  <div className="space-y-4 text-[24px]">
                    <motion.div 
                      className="flex items-start space-x-3"
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Dot className="w-6 h-6 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>GDPR & HIPAA Compliant</strong> – Ensuring privacy & security.
                      </p>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-3"
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Dot className="w-6 h-6 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>ISO 27001 Certified</strong> – Enterprise-grade encryption & data protection.
                      </p>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-3"
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Dot className="w-6 h-6 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Ethical Research Governance</strong> – Built for responsible studies with institutional approvals.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        ref={pricingRef}
        className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0 }}
        animate={pricingInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            ref={pricingTitleRef}
            className="text-left mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={pricingTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={pricingTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get Started today
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={pricingTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We believe Research Data Platform should be accessible to all companies, individuals, institute no matter the size.
            </motion.p>
          </motion.div>

          <motion.div 
            ref={plansRef}
            className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={plansContainerVariants}
            initial="hidden"
            animate={plansInView ? "visible" : "hidden"}
          >
            {/* Non-enterprise Plan */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              variants={planVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="p-10">
                <div className="text-center mb-8">
                  <motion.h3 
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={plansInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Non-enterprise
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={plansInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    monthly card billing
                  </motion.p>
                </div>
                
                <motion.div 
                  className="space-y-4 mb-10"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.6
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Platform + defined data bundle + included monthly CU-hours</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Small pool of Users + Viewers</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">CU policy reset monthly</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Pre-paid top-ups via card</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Margin posture: 45-60% GM</p>
                  </motion.div>
                </motion.div>
                
                <motion.button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Link href="/pages/join">
                  Get started
                  </Link>
                </motion.button>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden hover:shadow-2xl transition-all duration-300 relative"
              variants={planVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
              <div className="p-10">
                <div className="text-center mb-8">
                  <motion.h3 
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={plansInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Enterprise
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={plansInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    annual contract, paid upfront
                  </motion.p>
                </div>
                
                <motion.div 
                  className="space-y-4 mb-10"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.7
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Enterprise platform + premium data + annual CU-hour allotment + support SLAs</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Department/org scale; SSO/SCIM</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Annual pool</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Contracted overage (monthly bill or pre-paid blocks)</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Margin posture: 60-75% GM</p>
                  </motion.div>
                </motion.div>
                
                <motion.button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                    <Link href="/pages/join">
                  Get started
                  </Link>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ResearchDataPlatform;