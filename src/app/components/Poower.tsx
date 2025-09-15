import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <div className="min-h-screen  -50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="py-8 sm:py-12 lg:py-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[42px] font-semibold text-gray-900 mb-8 sm:mb-10 lg:mb-12 leading-tight max-w-4xl">
            The Power of Real-World Evidence
            <br />
            <span className="text-gray-700">(RWE) in Your Hands</span>
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 pb-12 lg:pb-16">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 space-y-8 sm:space-y-10">
            {/* For Academics & Independent Researchers */}
            <div>
              <div className="flex items-start mb-4 sm:mb-6">
                <div className="w-1 bg-green-500 h-6 sm:h-8 mr-3 sm:mr-4 mt-1 flex-shrink-0"></div>
                <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900 leading-tight">
                  For Academics & Independent Researchers
                </h2>
              </div>
              <ul className="space-y-3 sm:space-y-4 ml-4 sm:ml-5">
                <li className="flex items-start">
                  <div className="w-2 h-2  -400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Get structured, research-ready datasets for high-impact studies
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2  -400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Collaborate with teams and analyze data in Python, R, or Jupyter
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2  -400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Publish groundbreaking insights backed by real-world evidence
                  </span>
                </li>
              </ul>
            </div>

            {/* For Pharmaceuticals & Life Sciences Company */}
            <div>
              <div className="flex items-start mb-4 sm:mb-6">
                <div className="w-1 bg-blue-500 h-6 sm:h-8 mr-3 sm:mr-4 mt-1 flex-shrink-0"></div>
                <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900 leading-tight">
                  For Pharmaceuticals & Life Sciences Company
                </h2>
              </div>
              <ul className="space-y-3 sm:space-y-4 ml-4 sm:ml-5">
                <li className="flex items-start">
                  <div className="w-2 h-2  -400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Optimize clinical trial design with patient insights
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2  -400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Identify drug efficacy trends across African populations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2  -400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Generate regulatory-grade real-world evidence (RWE)
                  </span>
                </li>
              </ul>
            </div>

            {/* For Researcher Institutions & NGOs */}
            <div>
              <div className="flex items-start mb-4 sm:mb-6">
                <div className="w-1 bg-purple-500 h-6 sm:h-8 mr-3 sm:mr-4 mt-1 flex-shrink-0"></div>
                <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900 leading-tight">
                  For Research Institutions & NGOs
                </h2>
              </div>
              <ul className="space-y-3 sm:space-y-4 ml-4 sm:ml-5">
                <li className="flex items-start">
                  <div className="w-2 h-2  -400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Conduct epidemiological studies & health policy research
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2  -400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Compare disease prevalence across multi-country datasets
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2  -400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Secure funding with data-backed proposals
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 order-first lg:order-last">
            <div className="bg-white shadow-2xl rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px] xl:min-h-[600px]">
              <img 
                src="/images/sc3.png" 
                alt="Research Data Visualization" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RWEComponent;