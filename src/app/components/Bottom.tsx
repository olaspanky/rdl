"use client";

import React, { useState, useRef } from "react";
import { ArrowUpRight, CheckCircle, Dot, Check } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";

interface CaseStudyCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  imageSrc,
  title,
  description,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Overlay Content */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 opacity-90">{description}</p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-300 hover:text-blue-100 transition-colors"
        >
          View case study <ArrowUpRight className="ml-1 w-4 h-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

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
      imageSrc: "/images/c1.jpg",
      title: "Standardized Clinical Database",
      description:
        "Fully structured using WHO, ICD-10, and global healthcare classifications.",
      link: "#",
    },
    {
      imageSrc: "/images/c2.jpg",
      title: "No processing needed",
      description:
        "Ready-to-use datasets for epidemiology, health economics, and AI-driven analytics.",
      link: "#",
    },
    {
      imageSrc: "/images/c3.jpg",
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
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for pricing plans
  const plansContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const planVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -30,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Security image overlay
  const [isSecurityHovered, setIsSecurityHovered] = useState(false);

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="py-20 px-6 bg-[#B3E2B2]"
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
              className="lg:text-[36px] text-[#1A3A7B] mb-6 leading-tight isidora2 font-[900]"
              initial={{ opacity: 0, y: 20 }}
              animate={heroTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access Research-Ready & Standardized Data for Seamless Integration
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-7xl mx-auto leading-relaxed work"
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 isidora">
                {caseStudies.map((cs, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
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
        className="py-20 px-6 "
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
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onHoverStart={() => setIsSecurityHovered(true)}
              onHoverEnd={() => setIsSecurityHovered(false)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/secure.png"
                alt="Professional woman working on laptop"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              {/* Overlay for Security Image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isSecurityHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: isSecurityHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">Security Overview</h3>
                <p className="text-sm mb-4 opacity-90">
                  Explore our security features in action.
                </p>
                <Link
                  href="#security-details"
                  className="flex items-center text-blue-300 hover:text-blue-100 transition-colors"
                >
                  Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              ref={securityContentRef}
              initial={{ opacity: 0, x: 50 }}
              animate={securityContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                className="text-3xl lg:text-[42px] text-gray-900 mb-8 isidora2 font-[900]"
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
                      delayChildren: 0.4,
                    },
                  },
                }}
              >
                <div className="border-l-4 border-green-500 pl-6">
                  <motion.h3
                    className=" text-2xl lg:text-2xl text-[#1E293B] mb-4 work"
                    initial={{ opacity: 0, x: -20 }}
                    animate={securityContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Trusted, Compliant & Secure
                  </motion.h3>
                  <div className="space-y-4 text-xl lg:text-[24px] work">
                    <motion.div
                      className="flex items-start space-x-3"
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Dot className="w-6 h-6 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        GDPR & HIPAA Compliant – Ensuring privacy & security.
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
                        ISO 27001 Certified – Enterprise-grade encryption & data protection.
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
                        Ethical Research Governance – Built for responsible studies with institutional approvals.
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
        className="py-20 lg:px-6 p-2 "
        initial={{ opacity: 0 }}
        animate={pricingInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto " id="pricing">
          <motion.div
            ref={pricingTitleRef}
            className="text-left mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={pricingTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl text-gray-900 mb-6 isidora2 font-[900]"
              initial={{ opacity: 0, y: 20 }}
              animate={pricingTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get Started today
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl work"
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
                transition: { duration: 0.3 },
              }}
            >
              <div className="p-10">
                <div className="text-center mb-8">
                  <motion.h3
                    className="text-3xl text-gray-900 mb-2 isidora2 font-[900]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={plansInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Non-enterprise
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 work"
                    initial={{ opacity: 0 }}
                    animate={plansInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    monthly card billing
                  </motion.p>
                </div>

                <motion.div
                  className="space-y-4 mb-10 work"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.6,
                      },
                    },
                  }}
                >
                  <motion.div className="flex items-start space-x-3" variants={listItemVariants}>
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Platform + defined data bundle + included monthly CU-hours</p>
                  </motion.div>
                  <motion.div className="flex items-start space-x-3" variants={listItemVariants}>
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Small pool of Users + Viewers</p>
                  </motion.div>
                  <motion.div className="flex items-start space-x-3" variants={listItemVariants}>
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">CU policy reset monthly</p>
                  </motion.div>
                  <motion.div className="flex items-start space-x-3" variants={listItemVariants}>
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Pre-paid top-ups via card</p>
                  </motion.div>
                 
                </motion.div>

                <Link href="/signup">
                  <motion.button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 text-lg isidora2 font-[900]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    Get started
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden hover:shadow-2xl transition-all duration-300 relative"
              variants={planVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
              <div className="p-10">
                <div className="text-center mb-8">
                  <motion.h3
                    className="text-3xl font-bold text-gray-900 mb-2 isidora2 font-[900]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={plansInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Enterprise
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 work"
                    initial={{ opacity: 0 }}
                    animate={plansInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    monthly card billing
                  </motion.p>
                </div>

                <motion.div
                  className="space-y-4 mb-10 work"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.7,
                      },
                    },
                  }}
                >
                  <motion.div className="flex items-start space-x-3" variants={listItemVariants}>
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Enterprise platform + premium data + annual CU-hour allotment + support SLAs</p>
                  </motion.div>
                  <motion.div className="flex items-start space-x-3" variants={listItemVariants}>
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Department/org scale; SSO/SCIM</p>
                  </motion.div>
                  <motion.div className="flex items-start space-x-3" variants={listItemVariants}>
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Annual pool</p>
                  </motion.div>
                  <motion.div className="flex items-start space-x-3" variants={listItemVariants}>
                    <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Contracted overage (monthly bill or pre-paid blocks)</p>
                  </motion.div>
                 
                </motion.div>

                <Link href="/signup">
                  <motion.button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 text-lg isidora2 font-[900]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    Get started
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ResearchDataPlatform;