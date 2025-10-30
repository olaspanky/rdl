"use client";

import React, { useState } from "react";
import Footer from "./components/Footer";
import { Check } from "lucide-react";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    "Do you provide non-African data?",
    "How does the platform help with data sovereignty?",
    "What analysis tools are included?",
    "Can we collaborate across institutions?",
    "How often is the data updated?",
    "What countries and facilities are currently covered?",
  ];

  return (
    <div className="min-h-screen bg-[#E0E8F0] isidora">
      {/* Header */}
      <header className="shadow-sm sticky top-0 z-50 bg-[#E0E8F0]">
        <div className="mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={"/images/rdlogo.png"}
                alt="Logo"
                className="h-6 sm:h-8 w-auto"
              />
            </div>

            {/* CTA Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                alert("Demo Coming Soon");
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-md font-medium transition-colors text-sm sm:text-base"
            >
              Contact us
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 xl:px-12 xl:py-20 bg-[#E0E8F0]">
        <div className="max-w-7xl 2xl:max-w-7xl ">
          {/* Desktop/Tablet Layout */}
          <div className="hidden lg:flex 2xl:grid grid-cols-2 gap-8 items-center">
            {/* Text Content - Overlaps on large screens */}
            <div className="lg:w-5/12 relative z-10 xl:-mr-32">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 lg:p-12 border border-white/50 lg:w-[590px] xl:w-[700px] 2xl:w-[1000px]">
                <h1 className="text-3xl lg:text-4xl 2xl:text-[52px] text-[#2C4A7C] mb-6 leading-tight isidora3 font-[700]">
                  Revolutionize Your Research With Africa's Top AI Health Data
                  Platform
                </h1>
                <p className="text-gray-700 mb-8 text-base lg:text-lg">
                  Trusted African real-world data powered by secure, AI-assisted
                  analytics to deliver your global evidence generation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-9">
                  <button className="bg-[#2C4A7C] text-white px-6 lg:px-8 py-3 rounded-full hover:bg-[#1e3456] transition flex items-center justify-center gap-3 lg:gap-5 shadow-lg">
                    Watch demo
                    <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full flex justify-center items-center">
                      <img
                        src="/images/ar1.svg"
                        alt="Play Icon"
                        className="w-4 h-4 lg:w-5 lg:h-5"
                      />
                    </div>
                  </button>
                  <button className="border-2 border-[#2C4A7C] text-[#2C4A7C] px-6 lg:px-8 py-3 rounded-full hover:bg-[#2C4A7C] hover:text-white transition flex items-center justify-center gap-3 lg:gap-5">
                    View plans
                    <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-[#2C4A7C] flex justify-center items-center">
                      <img
                        src="/images/ar.svg"
                        alt="Play Icon"
                        className="w-4 h-4 lg:w-5 lg:h-5"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Image Container - Right Side */}
            <div className="relative lg:w-7/12 xl:w-[200%] 2xl:pr-20">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/rdl.png"
                  alt="Team collaborating on health data"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Image */}
            <div className="mb-6">
              <img
                src="/images/rdl.png"
                alt="Team collaborating on health data"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            
            {/* Mobile Text Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/50">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#2C4A7C] leading-tight mb-4 isidora3">
                Revolutionize Your Research With Africa's Top AI Health Data
                Platform
              </h1>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Trusted African real-world data powered by secure, AI-assisted
                analytics to deliver your global evidence generation
              </p>
              <div className="flex flex-col gap-3">
                <button className="bg-[#2C4A7C] text-white px-6 py-3 rounded-full hover:bg-[#1e3456] transition flex items-center justify-center gap-2 text-sm sm:text-base">
                  Watch demo
                  <div className="w-8 h-8 rounded-full flex justify-center items-center">
                    <img
                      src="/images/ar1.svg"
                      alt="Play Icon"
                      className="w-4 h-4"
                    />
                  </div>
                </button>
                <button className="border-2 border-[#2C4A7C] text-[#2C4A7C] px-6 py-3 rounded-full hover:bg-[#2C4A7C] hover:text-white transition flex items-center justify-center gap-2 text-sm sm:text-base">
                  View plans
                  <div className="w-8 h-8 rounded-full bg-[#2C4A7C] flex justify-center items-center">
                    <img
                      src="/images/ar.svg"
                      alt="Play Icon"
                      className="w-4 h-4"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PBR Health Data Lab Matters */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-full">
              <img
                src={"/images/rd2.png"}
                alt="PBR Health Data Lab Screenshot"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl xl:text-[50px] text-gray-900 mb-4 sm:mb-6 leading-tight isidora1 font-[700]">
              Why PBR Health Data Lab Matters
            </h2>
            <p className="text-[#000000] text-base sm:text-lg lg:text-[22px] mb-6 sm:mb-8 leading-relaxed work2">
              PBR Research Data Lab closes the gap with high-quality,
              privacy-preserving pharmacy and{" "}
              <span className="underline decoration-2 decoration-gray-400">
                hospital data
              </span>{" "}
              from Africa so your discovery, HEOR, market access, and public
              health teams utilize{" "}
              <span className="underline decoration-2 decoration-gray-400">
                real African clinical insights
              </span>
              .
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div>
                <div className="text-3xl sm:text-4xl xl:text-[52px] font-[700] isidora text-[#3A6B2D] mb-1">
                  7K+
                </div>
                <div className="text-[#000000] text-sm sm:text-base lg:text-[20px] font-[400] work">
                  Hospitals
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl xl:text-[52px] font-[700] isidora text-[#3A6B2D] mb-1">
                  2K+
                </div>
                <div className="text-[#000000] text-sm sm:text-base lg:text-[20px] font-[400] work">
                  Pharmacies
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl xl:text-[52px] font-[700] isidora text-[#3A6B2D] mb-1">
                  2
                </div>
                <div className="text-[#000000] text-sm sm:text-base lg:text-[20px] font-[400] work">
                  Countries
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl xl:text-[52px] font-[700] isidora text-[#3A6B2D] mb-1">
                  10+
                </div>
                <div className="text-[#000000] text-sm sm:text-base lg:text-[20px] font-[400] work">
                  Publications
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#000000] text-base sm:text-lg lg:text-[22px] mb-6 sm:mb-8 leading-relaxed work2">
                Secure AI engine – fastest time to insight.
                <br />
                Run Python/R securely with LLM-aided cohort-ing, code, docs, and
                charts—built analysis from weeks to hours with generative AI
                reproducibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl xl:text-[50px] text-gray-900 mb-6 sm:mb-8 lg:mb-12 leading-tight isidora1 font-[700]">
            PBR Health Data Lab Platform Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Capability 1 */}
            <div className="border-2 border-[#FFFFFF01] p-6 rounded-lg shadow-sm hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 bg-[#2C4A7C] rounded-lg mb-4 flex items-center justify-center">
                <img src="./images/rc1.svg" alt="Integrated Analytics" />
              </div>
              <h3 className="text-lg sm:text-xl xl:text-[25px] font-bold mb-3">
                Integrated Analytics
              </h3>
              <p className="text-[#000000] mb-3 text-sm sm:text-base xl:text-[19px] leading-tight work2">
                Python Spark, Power BI, Microsoft Fabric, Azure SQL, Copilot
              </p>
              <p className="text-[#000000] text-sm sm:text-base xl:text-[19px] leading-tight work2">
                No need for multiple subscriptions; one subscription replaces
                multiple tool subscriptions, reducing your total cost of
                ownership by consolidating your analytical toolkit
              </p>
            </div>

            {/* Capability 2 */}
            <div className="border-2 border-[#FFFFFF01] p-6 rounded-lg shadow-sm hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                <img src="./images/rc2.svg" alt="AI Empowerment" />
              </div>
              <h3 className="text-lg sm:text-xl xl:text-[25px] font-bold mb-3">
                AI Empowerment
              </h3>
              <p className="text-[#000000] mb-3 text-sm sm:text-base xl:text-[19px] leading-tight work2">
                Generative AI and machine learning capabilities
              </p>
              <p className="text-[#000000] text-sm sm:text-base xl:text-[19px] leading-tight work2">
                Enhanced diagnostics, predictive analytics, and research
                acceleration
              </p>
            </div>

            {/* Capability 3 */}
            <div className="border-2 border-[#FFFFFF01] p-6 rounded-lg shadow-sm hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                <img src="./images/rc3.svg" alt="Collaboration workspaces" />
              </div>
              <h3 className="text-lg sm:text-xl xl:text-[25px] font-bold mb-3">
                Collaboration workspaces
              </h3>
              <p className="text-[#000000] mb-3 text-sm sm:text-base xl:text-[19px] leading-tight work2">
                Personal and group workspaces with connected app integrations
              </p>
              <p className="text-[#000000] text-sm sm:text-base xl:text-[19px] leading-tight work2">
                Streamlined teamwork and project management
              </p>
            </div>

            {/* Capability 4 */}
            <div className="border-2 border-[#FFFFFF01] p-6 rounded-lg shadow-sm hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                <img src="./images/rc4.svg" alt="Data Structure" />
              </div>
              <h3 className="text-lg sm:text-xl xl:text-[25px] font-bold mb-3">
                Data Structure
              </h3>
              <p className="text-[#000000] mb-3 text-sm sm:text-base xl:text-[19px] leading-tight work2">
                WHO ATC classification and ICD-10 coding
              </p>
              <p className="text-[#000000] text-sm sm:text-base xl:text-[19px] leading-tight work2">
                International standards enable comparative drug utilization
                research
              </p>
            </div>

            {/* Capability 5 */}
            <div className="border-2 border-[#FFFFFF01] p-6 rounded-lg shadow-sm hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                <img src="./images/rc5.svg" alt="Quarterly Updates" />
              </div>
              <h3 className="text-lg sm:text-xl xl:text-[25px] font-bold mb-3">
                Quarterly Updates
              </h3>
              <p className="text-[#000000] mb-3 text-sm sm:text-base xl:text-[19px] leading-tight work2">
                Personal and group workspaces with connected app integrations
              </p>
              <p className="text-[#000000] text-sm sm:text-base xl:text-[19px] leading-tight work2">
                Longitudinal and trend analysis capabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Outcomes */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 bg-[#7A622F] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
            <div className="w-full lg:w-5/12">
              <h2 className="text-3xl sm:text-4xl xl:text-[56px] text-white mb-4 sm:mb-6 leading-tight isidora1 font-[700]">
                Proven Outcomes
              </h2>
              <p className="text-white mb-6 lg:mb-0 work1 font-[100] text-base sm:text-lg lg:text-[23px] max-w-sm">
                Our platform speeds up cohort creation, reduces export needs, and
                delivers real insights through streamlined, AI-enhanced data
                analysis across
              </p>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                  <div className="text-4xl sm:text-5xl xl:text-[60px] isidora2">
                    60-80%
                  </div>
                  <div className="text-white/90 text-lg sm:text-xl xl:text-[42px] work">
                    faster cohort builds
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                  <div className="text-4xl sm:text-5xl xl:text-[60px] isidora2">
                    50-70%
                  </div>
                  <div className="text-white/90 text-lg sm:text-xl xl:text-[42px] work">
                    fewer export requests
                    <br />
                    <span className="text-xs sm:text-sm text-white/70">
                      (do more in platform)
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                  <div className="text-4xl sm:text-5xl xl:text-[60px] isidora2 flex items-baseline gap-2">
                    Days <span className="text-base sm:text-xl">not months</span>
                  </div>
                  <div className="text-white/90 text-lg sm:text-xl xl:text-[42px] work">
                    to insight: AI & standardized Datasets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 bg-[radial-gradient(50%_107.4%_at_50%_50%,#26B1F3_0%,#1D3C77_100%)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="./images/r11.png" 
              alt="Who it's for" 
              className="w-full h-full object-cover rounded-lg" 
            />
          </div>
          <div className="text-white order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl xl:text-[50px] text-white mb-6 sm:mb-8 leading-tight isidora1 font-[700]">
              Who it's for
            </h2>
            <ul className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 work2 text-sm sm:text-base lg:text-[18px]">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#1B61C9] rounded-full flex justify-center items-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>
                  Pharma & Biotech (R&D/HEOR/Medical): Evidence packages,
                  TLFs, RWE
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#1B61C9] rounded-full flex justify-center items-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>
                  Public Health & NGOs: Program monitoring, outcomes &
                  utilization
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#1B61C9] rounded-full flex justify-center items-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>
                  Payers & Health Systems: Pathways, cost & quality reviews
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#1B61C9] rounded-full flex justify-center items-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>
                  Academia & Think Tanks: Reproducible observational
                  research
                </span>
              </li>
            </ul>
            <button className="border border-white text-white px-6 sm:px-8 py-3 hover:bg-white hover:text-[#2C4A7C] transition flex items-center gap-4 sm:gap-7 text-sm sm:text-base">
              View plans
              <img src="/images/ar.svg" alt="Arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-20">
        <div className="max-w-7xl mx-auto lg:flex gap-2 justify-center  items-center">
          <h2 className="text-3xl sm:text-4xl xl:text-[50px] isidora font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Pricing
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Non-enterprise */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl xl:text-[42px] font-bold text-gray-900 mb-2 text-center">
                Non-enterprise
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base work1 text-center">
                Ideal for individual researchers and small teams
              </p>
              <button className="text-sm sm:text-base work1 w-full border-2 border-[#008CCC] text-[#008CCC] py-3 rounded-md hover:bg-[#2C4A7C] hover:text-white transition">
                Get started
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl xl:text-[42px] font-bold text-gray-900 mb-2 text-center">
                Enterprise
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base work1 text-center">
                Organization-wide access and priority support
              </p>
              <button className="text-sm sm:text-base work1 w-full border-2 border-[#008CCC] text-[#008CCC] py-3 rounded-md hover:bg-[#2C4A7C] hover:text-white transition">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[56px] isidora font-bold text-[#1D3C77] mb-8 sm:mb-12 text-center">
            You have questions? We have answers.
          </h2>

          <div className="mt-8 sm:mt-12 space-y-4">
            {faqItems.map((question, index) => (
              <div key={index} className="border-t border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-4 sm:py-6 text-left hover:text-[#2C4A7C] transition"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-4">
                    {question}
                  </span>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="pb-4 sm:pb-6 text-gray-600 text-sm sm:text-base">
                    <p>Answer content goes here...</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}