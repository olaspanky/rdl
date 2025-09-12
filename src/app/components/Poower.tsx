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
    <div className="min-h-screen bg-gray-50">

        <div>
             <h1 className=" pl-20 text-xl lg:text-3xl font-bold text-gray-900 mb-12 leading-tight max-w-3xl">
            The Power of Real-World Evidence
            <br />
            <span className="text-gray-700">(RWE) in Your Hands</span>
          </h1>
        </div>
      {/* Left Content Section */}
      <div className="flex ">
        <div className=" pl-20 w-1/2">
         

          {/* For Academics & Independent Researchers */}
          <div className="mb-10">
            <div className="flex items-start mb-4">
              <div className="w-1 bg-green-500 h-8 mr-4 mt-1"></div>
              <h2 className="text-xl font-semibold text-gray-900">
                For Academics & Independent Researchers
              </h2>
            </div>
            <ul className="space-y-3 ml-5">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Get structured, research-ready datasets for high-impact studies</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Collaborate with teams and analyze data in Python, R, or Jupyter</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Publish groundbreaking insights backed by real-world evidence</span>
              </li>
            </ul>
          </div>

          {/* For Pharmaceuticals & Life Sciences Company */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              For Pharmaceuticals & Life Sciences Company
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Optimize clinical trial design with patient insights</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Identify drug efficacy trends across African populations</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Generate regulatory-grade real-world evidence (RWE)</span>
              </li>
            </ul>
          </div>

          {/* For Researcher Institutions & NGOs */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              For Researcher Institutions & NGOs
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Conduct epidemiological studies & health policy research</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Compare disease prevalence across multi-country datasets</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Secure funding with data-backed proposals</span>
              </li>
            </ul>
          </div>
        </div>

         <div className="w-1/2  bg-white shadow-2xl">
      <img src={"/images/scre.png"} alt="Form Background" className="w-full h-full object-cover" />
      </div>
      </div>

      {/* Right Form Section */}
     
    </div>
  );
};

export default RWEComponent;