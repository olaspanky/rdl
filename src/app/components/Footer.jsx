import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import location from "../../../public/images/location.svg"; // Adjust path if necessary

const Footer = () => {
  return (
    <div className="relative bg-[] bg-center h-full">
      {/* Background Image */}
      <div className="absolute inset-y-0 right-0  w-full h-full bg-[url('/images/f3.png')] bg-no-repeat bg-right bg-cover"></div>

      {/* Video Section */}

      {/* Footer Content */}
      <div className="relative z-20 text-white 2xl::px-7  py-8">
        <div className="flex flex-col lg:flex-row justify-between p-2 2xl:mx-7">
          <div className="flex flex-col gap-3  w-full">
            <div className="flex gap-3 lg:w-1/2 items-center">
              <div className="col-span-1">
                <Image
                  src={location}
                  alt="Location Icon"
                  width={24}
                  height={24}
                />
              </div>
              <div className="col-span-10 flex flex-col gap-2">
                <h1 className="text-[18px] font-bold my-1">
                  PBR International
                </h1>
                <p className="text-[18px] text-[#D1D1D1]">
                  Kemp House, 152-160 City Road, London EC1V 2NX, United Kingdom
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between ">
              <div className="flex gap-3 items-center lg:w-1/2">
                <div className="col-span-1">
                  <Image
                    src={location}
                    alt="Location Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-[18px] font-bold my-1">
                    PBR Sub-Saharan Africa
                  </h1>
                  <p className="text-[18px] text-[#D1D1D1]">
                    Reddo Workspaces, 2nd floor Wing, 4C Idowu Martins street,
                    Victoria Island, Lagos.{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center w-1/2  p-3 pt-5">
                <div>
                  <h1 className="text-[18px]  ">
                    {" "}
                    Reach us at{" "}
                    <a href="mailto:marketanalytics@pbrinsight.com">
                      marketanalytics@pbrinsight.com
                    </a>{" "}
                    or through our online contact form.
                  </h1>
                  <div className="flex gap-3 -pl-9">
                    <SocialIcon
                      network="linkedin"
                      bgColor="none"
                      url="https://ng.linkedin.com/company/pbr-life-sciences"
                      target="_blank"
                    />
                    <SocialIcon
                      network="twitter"
                      bgColor="none"
                      url="https://x.com/pbrlifesciences"
                      target="_blank"
                    />
                    <SocialIcon
                      network="facebook"
                      bgColor="none"
                      url="https://www.facebook.com/PBR-Life-Sciences-61554007611436"
                      target="_blank"
                    />
                    <SocialIcon
                      network="instagram"
                      bgColor="none"
                      url="https://www.instagram.com/pbrlifesciences/?hl=en"
                      target="_blank"
                    />
                    <SocialIcon
                      network="youtube"
                      bgColor="none"
                      url="https://www.youtube.com/@PBRLifeSciences-lw7hw"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[18px] flex gap-3 text-white m-7">
          <p>© 2024 PBR</p>
          <p>Privacy</p>
          <p>About</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
