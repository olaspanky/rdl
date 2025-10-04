// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   ChevronDown,
//   Shield,
//   Database,
//   Users,
//   BarChart3,
//   Building2,
//   Pill,
//   Search,
//   Award,
//   Check,
//   Play,
//   Edit3,
//   ChevronRight,
// } from "lucide-react";
// import { Code, Layout, Settings, Star } from "lucide-react";
// import Link from "next/link";
// import ic1 from "../../public/images/ic1.png";
// import ic2 from "../../public/images/ic2.png";
// import ic3 from "../../public/images/ic3.png";
// import ic4 from "../../public/images/ic4.png";
// import sp1 from "../../public/images/sp1.png";
// import sp2 from "../../public/images/sp2.png";
// import sp3 from "../../public/images/sp3.png";
// import sp4 from "../../public/images/sp4.png";
// import sp5 from "../../public/images/sp5.png";
// import sp6 from "../../public/images/sp6.png";
// import sp7 from "../../public/images/sp7.png";
// import sp8 from "../../public/images/sp8.png";
// import sp9 from "../../public/images/sp9.png";
// import Footer from "./components/Footer";

// import Image from "next/image";
// import PBRDataLabLanding from "./components/PBRDataLabLanding";
// import PBRDataLabLanding1 from "./components/PBRDataLabLanding1";
// import PBRDataLabLanding2 from "./components/PBRDataLabLanding2";
// import RWEComponent from "./components/Poower";
// import ResearchDataPlatform from "./components/Bottom";

// const HomePage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const [email, setEmail] = useState("");
//   const [activeQuery, setActiveQuery] = useState(1);
//   const features = [
//     {
//       icon: <Database className="w-6 h-6" />,
//       title: "Structured & AI Ready",
//       description:
//         "Transform unstructured biomedical data into AI-ready datasets with advanced processing capabilities.",
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Secure & Compliant",
//       description:
//         "HIPAA compliant infrastructure with enterprise-grade security protocols and data governance.",
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Seamless Collaboration",
//       description:
//         "Enable cross-functional teams to collaborate efficiently with real-time data sharing and version control.",
//     },
//     {
//       icon: <Search className="w-6 h-6" />,
//       title: "Cloud-based & Scalable",
//       description:
//         "Scale from prototype to production with cloud-native architecture and flexible deployment options.",
//     },
//   ];

//   const useCases = [
//     {
//       title: "For Academic & Independent Researchers",
//       items: [
//         "NIH STRIDES cloud-based credits",
//         "Aggregated studies",
//         "Real-world evidence across multiple therapeutic areas",
//         "FAIR & AI-Ready",
//         "Public and health system-integrated datasets",
//       ],
//     },
//     {
//       title: "For Pharmaceutical & Life Sciences Companies",
//       items: [
//         "Expedite clinical trial design and patient identification",
//         "Regulatory submissions",
//         "Post-market surveillance",
//         "Health economics and outcomes research",
//         "Protocol optimization",
//       ],
//     },
//     {
//       title: "For Research Institutions & MDCs",
//       items: [
//         "Cross-site technological synergies",
//         "Multi-center research",
//         "Health policy research",
//         "Population health studies",
//         "Consortium building with data exchange",
//       ],
//     },
//   ];

//   const certifications = [
//     { name: "GDPR", logo: sp1 },
//     { name: "CSA", logo: sp2 },
//     { name: "1198 x 162", logo: sp3 },
//     { name: "AWS", logo: sp4 },
//     { name: "HIPAA", logo: sp6 },
//     { name: "HITRUST", logo: sp7 },
//     { name: "SOC", logo: sp8 },
//     { name: "Microsoft Azure", logo: sp9 },
//   ];
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className=" mx-auto px-4 sm:px-6 lg:px-16">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center">
//               <img
//                 src={"/images/rdlogo.png"}
//                 alt="Logo"
//                 className="h-8 w-auto"
//               />
//             </div>

//             {/* Navigation */}
//             <nav className="hidden md:flex space-x-8">
//               <a
//                 href="#"
//                 className="text-gray-900 hover:text-teal-600 transition-colors"
//               >
//                 Home
//               </a>
//               <div className="relative group">
//                 <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors">
//                   Products <ChevronDown className="ml-1 w-4 h-4" />
//                 </button>
//               </div>
//               <div className="relative group">
//                 <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors">
//                   Resources <ChevronDown className="ml-1 w-4 h-4" />
//                 </button>
//               </div>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-teal-600 transition-colors"
//               >
//                 Pricing
//               </a>
//             </nav>

//             {/* CTA Button */}
//             <Link href="https://pbrmf.vercel.app/">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
//                 Request Demo
//               </button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className=" py-20">
//         <PBRDataLabLanding1 />
//       </section>

//       {/* Stats Section */}
//       <section className="">
//         <PBRDataLabLanding />
//       </section>
//       <section className="">
//         <PBRDataLabLanding2 />
//       </section>
//       <section>
//         <RWEComponent />
//       </section>

//       {/* Security Section */}
//       <section className="py-20 px-4 ">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-[24px] lg:text-[42px] font-bold text-gray-900 mb-4 isidora">
//             The World's Most Secure Platform.
//           </h2>
//           <p className="text-[12px] lg:text-[18px] text-[#666666]  mb-12 work">
//             Because Biomedical Data Needs It.
//           </p>

          // <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-12 gap-7">
          //   <div className="flex justify-left gap-7 mb-6">
          //     <img src="/images/sec.png" alt="" className="text-blue-600" />
          //     <div className="px-5 border-l-1 py-9 border-black">
          //       <h3 className="text-[30px] font-bold text-gray-900">
          //         End-to-End Data Governance and Security by Design
          //       </h3>
          //       <p className="text-gray-600 text-left">
          //         based on the most advanced federated architecture in the industry
          //       </p>
          //     </div>
          //   </div>
          // </div>

//           <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 gap-6 mb-12">
//             {certifications.map((cert, index) => (
//               <div
//                 key={index}
//                 className=" transform hover:scale-110 transition-all duration-300"
//               >
//                 <div className="text-2xl mb-2">
//                   <Image src={cert.logo} alt="" />
//                 </div>{" "}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section>
//         <ResearchDataPlatform />
//       </section>

//       {/* Footer */}
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Shield,
  Database,
  Users,
  BarChart3,
  Building2,
  Pill,
  Search,
  Award,
  Check,
  Play,
  Edit3,
  ChevronRight,
} from "lucide-react";
import { Code, Layout, Settings, Star } from "lucide-react";
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
import Footer from "./components/Footer";

import Image from "next/image";
import PBRDataLabLanding from "./components/PBRDataLabLanding";
import PBRDataLabLanding1 from "./components/PBRDataLabLanding1";
import PBRDataLabLanding2 from "./components/PBRDataLabLanding2";
import RWEComponent from "./components/Poower";
import ResearchDataPlatform from "./components/Bottom";
import LogoSlider from "./components/Slider";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [email, setEmail] = useState("");
  const [activeQuery, setActiveQuery] = useState(1);
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Structured & AI Ready",
      description:
        "Transform unstructured biomedical data into AI-ready datasets with advanced processing capabilities.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Compliant",
      description:
        "HIPAA compliant infrastructure with enterprise-grade security protocols and data governance.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Seamless Collaboration",
      description:
        "Enable cross-functional teams to collaborate efficiently with real-time data sharing and version control.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Cloud-based & Scalable",
      description:
        "Scale from prototype to production with cloud-native architecture and flexible deployment options.",
    },
  ];

  const useCases = [
    {
      title: "For Academic & Independent Researchers",
      items: [
        "NIH STRIDES cloud-based credits",
        "Aggregated studies",
        "Real-world evidence across multiple therapeutic areas",
        "FAIR & AI-Ready",
        "Public and health system-integrated datasets",
      ],
    },
    {
      title: "For Pharmaceutical & Life Sciences Companies",
      items: [
        "Expedite clinical trial design and patient identification",
        "Regulatory submissions",
        "Post-market surveillance",
        "Health economics and outcomes research",
        "Protocol optimization",
      ],
    },
    {
      title: "For Research Institutions & MDCs",
      items: [
        "Cross-site technological synergies",
        "Multi-center research",
        "Health policy research",
        "Population health studies",
        "Consortium building with data exchange",
      ],
    },
  ];

  const certifications = [
    { name: "GDPR", logo: sp1 },
    { name: "CSA", logo: sp2 },
    { name: "1198 x 162", logo: sp3 },
    { name: "AWS", logo: sp4 },
    { name: "HIPAA", logo: sp6 },
    { name: "HITRUST", logo: sp7 },
    { name: "SOC", logo: sp8 },
    { name: "Microsoft Azure", logo: sp9 },
  ];
  return (
    <div className="lg:min-h-screen bg-white">
      {/* Header */}
      <header className="bg1 shadow-sm sticky top-0 z-50">
        <div className=" lg:mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={"/images/rdlogoo.png"}
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>

            {/* Navigation */} 
            <nav className="hidden md:flex justify-between w-[60%] text-white">
              <a
                href="#"
                className="text-white hover:text-teal-600 transition-colors"
              >
                Home
              </a>
              <div className="relative group">
 <a
                href="#product"
                className=" hover:text-teal-600 transition-colors"
              >                  Products
                </a>
              </div>
              <div className="relative group">
 <a
                href="#resources"
                className=" hover:text-teal-600 transition-colors"
              >                  Resources 
                </a>
              </div>
              <a
                href="#pricing"
                className=" hover:text-teal-600 transition-colors"
              >
                Pricing
              </a>
            </nav>

            {/* CTA Button */}
            <Link href="https://pbrmf.vercel.app/">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="">
        <PBRDataLabLanding1 />
      </section>
      <section>
        <LogoSlider/>
      </section>

      {/* Stats Section */}
      <section id="product" className="">
        <PBRDataLabLanding />
      </section>
      <section className="bg1 flex justify-center items-center">
        <PBRDataLabLanding2 />
      </section>
      <section>
        <RWEComponent />
      </section>

      {/* Security Section */}
       <section className="py-12  px-4 sm:px-6 lg:px-8 bg1">
      <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[42px] font-extrabold text-white mb-8 sm:mb-10 lg:mb-12 leading-tight text-center font-isidora2">
          The World's Most Secure Platform
        </h2>
        <p className="text-xs sm:text-sm lg:text-lg text-[white] mb-8 sm:mb-12 work">
          Because Biomedical Data Needs It
        </p>

       <div className="bg-white  rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl mb-8 sm:mb-12  lg:hidden">
  <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between gap-4 sm:gap-6 lg:gap-12 mb-6">
    {/* Flex container adjusted to use justify-between on larger screens for balanced spacing */}
    <div className="flex-shrink-0">
      <img
        src="/images/sec.png"
        alt="Security Icon"
        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
      />
    </div>
    <div className="border-t sm:border-t-0 sm:border-l border-black pt-4 sm:pt-0 sm:pl-6 lg:pl-8 flex-1">
      <h3 className="text-left text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
        End-to-End Data Governance and Security by Design
      </h3>
      <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-left text-justify">
        {/* Added text-justify for even text distribution */}
        Based on the most advanced federated architecture in the industry.
      </p>
    </div>
  </div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl mb-12 gap-7 hidden lg:block">
            <div className="flex justify-left gap-7 mb-6">
              <img src="/images/sec.png" alt="" className="text-blue-600" />
              <div className="px-5 border-l-1 py-9 border-black">
                <h3 className="text-[30px] font-bold text-gray-900">
                  End-to-End Data Governance and Security by Design
                </h3>
                <p className="text-gray-600 text-left">
                  based on the most advanced federated architecture in the industry
                </p>
              </div>
            </div>
          </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex justify-center items-center transform hover:scale-110 transition-all duration-300"
            >
              <div className=" ">
                <Image
                  src={cert.logo}
                  alt=""
                  
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section>
        <ResearchDataPlatform />
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
