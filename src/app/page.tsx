"use client"
import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Shield,
  Database,
  Users,
  BarChart3,
  Building2,
  Pill,Search, Award, Check, Play, Edit3, ChevronRight
} from "lucide-react";
import Link from "next/link";
import ic1 from "../../public/images/ic1.png";
import ic2 from "../../public/images/ic2.png";
import ic3 from "../../public/images/ic3.png";
import ic4 from "../../public/images/ic4.png";  
import sp1 from "../../public/images/sp1.png";  
import sp2 from "../../public/images/sp2.png";  
import sp3 from "../../public/images/sp3.png";  
import sp4 from "../../public/images/sp4.png";        
import sp5 from "../../public/images/sp5.png";
import sp6 from "../../public/images/sp6.png";
import sp7 from "../../public/images/sp7.png";
import sp8 from "../../public/images/sp8.png";
import sp9 from "../../public/images/sp9.png";

import Image from 'next/image';


const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);
 useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Structured & AI Ready",
      description: "Transform unstructured biomedical data into AI-ready datasets with advanced processing capabilities."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Compliant",
      description: "HIPAA compliant infrastructure with enterprise-grade security protocols and data governance."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Seamless Collaboration",
      description: "Enable cross-functional teams to collaborate efficiently with real-time data sharing and version control."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Cloud-based & Scalable",
      description: "Scale from prototype to production with cloud-native architecture and flexible deployment options."
    }
  ];

  const useCases = [
    {
      title: "For Academic & Independent Researchers",
      items: [
        "NIH STRIDES cloud-based credits",
        "Aggregated studies",
        "Real-world evidence across multiple therapeutic areas",
        "FAIR & AI-Ready",
        "Public and health system-integrated datasets"
      ]
    },
    {
      title: "For Pharmaceutical & Life Sciences Companies",
      items: [
        "Expedite clinical trial design and patient identification",
        "Regulatory submissions",
        "Post-market surveillance",
        "Health economics and outcomes research",
        "Protocol optimization"
      ]
    },
    {
      title: "For Research Institutions & MDCs",
      items: [
        "Cross-site technological synergies",
        "Multi-center research",
        "Health policy research",
        "Population health studies",
        "Consortium building with data exchange"
      ]
    }
  ];

  const certifications = [
    { name: "GDPR", logo: sp1 },
    { name: "CSA", logo: sp2 },
    { name: "1198 x 162", logo: sp3 },
    { name: "AWS", logo: sp4 },
    { name: "HIPAA", logo: sp6 },
    { name: "HITRUST", logo: sp7 },
    { name: "SOC", logo: sp8},
    { name: "Microsoft Azure", logo: sp9 }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={"/images/rdlogo.png"}
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-teal-600 transition-colors"
              >
                Home
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors">
                  Products <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors">
                  Resources <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Pricing
              </a>
            </nav>

            {/* CTA Button */}
            <Link href="/pages/join">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Unlock Africa's
                <br />
                Largest Real-World
                <br />
                Health Data for
                <br />
                Research & Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Access standardized, research-ready datasets
              </p>
              <div className="flex space-x-4">
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Request Demo
                </button>
                <Link href="/pages/join">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                    Explore Data{" "}
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="">
                <img
                  src={"/images/rdl1.png"}
                  alt="Hero"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#32379E] py-16 m-5 rounded-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Africa's Largest Real-World Dataset Network
          </h2>
          <div className="text-[128px] font-bold text-white mb-6">
            13million+
          </div>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Datasets integrating patient records, health metrics, and multi-omic
            data that drive research, streamline drug development, and inform
            clinical trials.
          </p>
        </div>
      </section>

      {/* Data Power Section */}
      <section className="py-16 bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unleash the full power of data
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16">
            PBR's database captures a wide range of diseases, clinical
            procedures, and treatment outcomes, enabling data-driven
            decision-making in drug discovery, public health, and clinical
            research.
          </p>

          {/* Stats Grid */}
          <div className="bg-indigo-800 rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-lg font-semibold text-blue-200 mb-2">
                  Diseases Covered
                </div>
                <p className="text-blue-100 text-sm">
                  Surveillance and diagnostic trend of chronic, infectious
                  diseases and neglected tropical diseases
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">13M+</div>
                <div className="text-lg font-semibold text-blue-200 mb-2">
                  Patients Records
                </div>
                <p className="text-blue-100 text-sm">
                  Longitudinal, de-identified data for long-term health analysis
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">7k+</div>
                <div className="text-lg font-semibold text-blue-200 mb-2">
                  Hospitals
                </div>
                <p className="text-blue-100 text-sm">
                  Real-world data from diverse healthcare settings
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">1k+</div>
                <div className="text-lg font-semibold text-blue-200 mb-2">
                  Pharmacies
                </div>
                <p className="text-blue-100 text-sm">
                  Real-world data from diverse healthcare settings
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">50M+</div>
                <div className="text-lg font-semibold text-blue-200 mb-2">
                  Products Dispensed
                </div>
                <p className="text-blue-100 text-sm">
                  Pharmaceutical supply chain intelligence and drug access
                  trends
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">20k+</div>
                <div className="text-lg font-semibold text-blue-200 mb-2">
                  Brands
                </div>
                <p className="text-blue-100 text-sm">
                  Market-level pharmaceutical data for health economics
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="text-5xl font-bold text-white mb-2">4k+</div>
              <div className="text-lg font-semibold text-blue-200 mb-2">
                Companies
              </div>
              <p className="text-blue-100 text-sm">
                Market-level pharmaceutical data for health economics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Platform Offers
            </h2>
            <p className="text-xl text-gray-600">
              The Power of Real-World Evidence at Your Fingertips
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
               <img src='/images/p1.png' alt='' className='w-full h-full'/>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 rounded-lg">
                  <Image src={ic1} alt='' className=" text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Structured & AI-Ready
                  </h3>
                  <p className="text-gray-600">
                    Standardized data, optimized for Python, R, and SQL.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 rounded-lg">
                  <Image src={ic2} alt='' className=" text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Secure & Compliant
                  </h3>
                  <p className="text-gray-600">
                    GDPR, HIPAA, and ISO 27001 certified.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 rounded-lg">
                  <Image src={ic3} alt='' className=" text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Seamless Collaboration
                  </h3>
                  <p className="text-gray-600">
                    Share datasets, queries, and reports with your research team
                    effortlessly.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100  rounded-lg">
                  <Image src={ic4} alt='' className=" text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Cloud-based & Scalable
                  </h3>
                  <p className="text-gray-600">
                    Analyze millions of records instantly, with customizable dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
     

     

    

      {/* RWE Section */}
      <section className="py-20 px-4 bg-[#B3E2B2] flex flex-col gap-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  The Power of Real-World<br/> Evidence (RWE) in Your Hands
                </h2>
                <button className="bg-green-600 text-white px-6 py-3  font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <span>Request a Demo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
            </div>
            <div className="relative">
              <img 
                src="/images/man1.png" 
                alt="Data visualization"
                className="relative w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center text-center'>
           <div className="grid lg:grid-cols-3  max-w-7xl">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className={`${index === 1 ? 'bg-gradient-to-br from-blue-600 to-purple-700 text-white' : 'bg-gray-50'} p-8  shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500`}
              >
                <h3 className={`text-xl font-bold mb-6 ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                  {useCase.title}
                </h3>
                <ul className="space-y-4">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${index === 1 ? 'text-green-300' : 'text-green-500'}`} />
                      <span className={`text-sm leading-relaxed ${index === 1 ? 'text-white/90' : 'text-gray-600'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
        
      </section>

      {/* Use Cases Section */}
    
      {/* Security Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-4">
            The World's Most Secure Platform.
          </h2>
          <p className="text-2xl lg:text-5xl text-gray-600 font-bold mb-12">
            Because Biomedical Data Needs It.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">

              <img src="/images/sec.png" alt='' className="text-blue-600" />
              <div className='px-5 border-l-1 py-9 border-black'>
                  <h3 className="text-2xl font-bold text-gray-900">
                End-to-End Data Governance and Security by Design
              </h3>
                <p className="text-gray-600">
              Built-in privacy and robust compliance infrastructure is standard to the industry
            </p>

              </div>
            
            </div>
          
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className=" transform hover:scale-110 transition-all duration-300"
              >
                <div className="text-2xl mb-2"><Image src={cert.logo} alt=''/></div>              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Access Research-Ready & Standardized Data for Seamless Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Research Data Lab is designed for immediate use, eliminating the complex data cleaning and structuring. Our datasets are built for speed, compatibility, ensuring that researchers can extract, transform, and analyze insights efficiently.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Data integration dashboard"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="bg-white/20 rounded-xl p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Database className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">SQL</span>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Python</span>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">R</span>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Edit3 className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Ask to edit</span>
                </div>
              </div>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
                <span>Get Started Today</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Biomedical Research?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of researchers already using our platform to accelerate discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-2">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div className="text-white font-bold">
                  PBR RESEARCH
                  <br />
                  <span className="text-sm font-normal">DATA LAB</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Unlocking Africa's health data for research and innovation.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Clinical Data
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pharmaceutical Data
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Public Health Data
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Research Papers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 PBR Research Data Lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
