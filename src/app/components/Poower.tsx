import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ResearchSections from './Right';

const RWEComponent: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('Clinical Researcher');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    organization: 'PBR Insights',
    role: 'Clinical Researcher'
  });

  const roles = [
    { value: 'Clinical Researcher', label: 'Clinical Researcher' },
    { value: 'Admin', label: 'Admin', description: 'Can do everything' },
    { value: 'Student', label: 'Student', description: 'Can do everything except add members and make reservations' },
    { value: 'Researcher', label: 'Researcher', description: 'Can do everything' },
    { value: 'Others', label: 'Others', description: 'Read-only access' }
  ];

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setFormData({ ...formData, role });
    setIsDropdownOpen(false);
  };

  return (
    <div className=" bg1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[42px] font-extrabold text-white mb-8 sm:mb-10 lg:mb-12 leading-tight text-center font-isidora2">
            The Power of Real-World Evidence
            <br />
            <span className="text-white">(RWE) in Your Hands</span>
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col justify-center items-center lg:flex-row gap-8 lg:gap-12 xl:gap-16 pb-12 lg:pb-16">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 space-y-8 sm:space-y-10">
           <ResearchSections/>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 order-first lg:order-last">
            <div className="bg-white shadow-2xl rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden  ">
            <video 
  src="/images/li.mp4" 
  autoPlay 
  loop 
  muted 
  playsInline
  className="w-full object-cover"
>
  Your browser does not support the video tag.
</video>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RWEComponent;