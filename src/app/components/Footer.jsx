// import React from "react";
// import Image from "next/image";
// import { SocialIcon } from "react-social-icons";
// import location from "../../../public/images/location.svg"; // Adjust path if necessary

// const Footer = () => {
//   return (
//     <div className="relative bg-[] bg-center h-full">
//       {/* Background Image */}
//       <div className="absolute inset-y-0 right-0  w-full h-full bg-[url('/images/f3.png')] bg-no-repeat bg-right bg-cover"></div>

//       {/* Video Section */}

//       {/* Footer Content */}
//       <div className="relative z-20 text-white 2xl::px-7  py-8">
//         <div className="flex flex-col lg:flex-row justify-between p-2 2xl:mx-7">
//           <div className="flex flex-col gap-3  w-full">
//             <div className="flex gap-3 lg:w-1/2 items-center">
//               <div className="col-span-1">
//                 <Image
//                   src={location}
//                   alt="Location Icon"
//                   width={24}
//                   height={24}
//                 />
//               </div>
//               <div className="col-span-10 flex flex-col gap-2">
//                 <h1 className="text-[18px] font-bold my-1">
//                   PBR International
//                 </h1>
//                 <p className="text-[18px] text-[#D1D1D1]">
//                   Kemp House, 152-160 City Road, London EC1V 2NX, United Kingdom
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col lg:flex-row justify-between ">
//               <div className="flex gap-3 items-center lg:w-1/2">
//                 <div className="col-span-1">
//                   <Image
//                     src={location}
//                     alt="Location Icon"
//                     width={24}
//                     height={24}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <h1 className="text-[18px] font-bold my-1">
//                     PBR Sub-Saharan Africa
//                   </h1>
//                   <p className="text-[18px] text-[#D1D1D1]">
//                     Reddo Workspaces, 2nd floor Wing, 4C Idowu Martins street,
//                     Victoria Island, Lagos.{" "}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-3 items-center w-1/2  p-3 pt-5">
//                 <div>
//                   <h1 className="text-[18px]  ">
//                     {" "}
//                     Reach us at{" "}
//                     <a href="mailto:marketanalytics@pbrinsight.com">
//                       marketanalytics@pbrinsight.com
//                     </a>{" "}
//                     or through our online contact form.
//                   </h1>
//                   <div className="flex gap-3 -pl-9">
//                     <SocialIcon
//                       network="linkedin"
//                       bgColor="none"
//                       url="https://ng.linkedin.com/company/pbr-life-sciences"
//                       target="_blank"
//                     />
//                     <SocialIcon
//                       network="twitter"
//                       bgColor="none"
//                       url="https://x.com/pbrlifesciences"
//                       target="_blank"
//                     />
//                     <SocialIcon
//                       network="facebook"
//                       bgColor="none"
//                       url="https://www.facebook.com/PBR-Life-Sciences-61554007611436"
//                       target="_blank"
//                     />
//                     <SocialIcon
//                       network="instagram"
//                       bgColor="none"
//                       url="https://www.instagram.com/pbrlifesciences/?hl=en"
//                       target="_blank"
//                     />
//                     <SocialIcon
//                       network="youtube"
//                       bgColor="none"
//                       url="https://www.youtube.com/@PBRLifeSciences-lw7hw"
//                       target="_blank"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="text-[18px] flex gap-3 text-white m-7">
//           <p>© 2024 PBR</p>
//           <p>Privacy</p>
//           <p>About</p>
//           <p>Terms</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import location from "../../../public/images/location.svg";

const Footer = () => {
  return (
    <div className="relative bg-[] bg-center h-full work">
      {/* Background Image */}
      <div className="absolute inset-y-0 right-0 w-full h-full bg-[url('/images/f3.png')] bg-no-repeat bg-right bg-cover"></div>

      {/* Footer Content */}
      <div className="relative z-20 text-white px-4 md:px-8 lg:px-16 py-12">
        {/* Top Section with Links and Contact */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          {/* Left Side - Navigation Links */}
          <div className="flex gap-x-6 2xl:gap-x-12 gap-y-4">
            <div className="flex flex-col gap-3">
              <a href="https://pbrinsight.com/careers/" className="text-white hover:text-gray-300 transition-colors">
                About us
              </a>
              <a href="https://pbrinsight.com/our-company" className="text-white hover:text-gray-300 transition-colors">
                Our Company
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                Contact Us
              </a>
              <a href="https://pbrinsight.com/careers/" className="text-white hover:text-gray-300 transition-colors">
                Career
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#product" className="text-white hover:text-gray-300 transition-colors">
                Products
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#resources" className="text-white hover:text-gray-300 transition-colors">
                Solutions
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                Testimonials
              </a>
            </div>
          </div>

          {/* Right Side - Contact Info and Social */}
          <div className="flex flex-col justify-between md:h-36 xl:h-32 gap-4 lg:text-right">
            <p className="text-white">
              Reach us at{" "}
              <a
                href="mailto:marketanalytics@pbrinsight.com"
                className="hover:text-gray-300 transition-colors"
              >
                marketanalytics@pbrinsight.com
              </a>{" "}
              or through our online contact form.
            </p>
            <div className="flex gap-3">
              <a
                href="https://ng.linkedin.com/company/pbr-life-sciences"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com/pbrlifesciences"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/PBR-Life-Sciences-61554007611436"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/pbrlifesciences/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Left Side - Copyright and Links */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span>© 2025 PBR</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy
            </a>
            <span>.</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms
            </a>
            <span>All rights reserved.</span>
          </div>

          {/* Right Side - Country Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">
              UNITED KINGDOM
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors border-l-2 px-5">
              NIGERIA
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors border-l-2 px-5">
              GHANA
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors border-l-2 px-5">
              KENYA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;