"use client";

import { useState } from "react";

export default function ResearchSections() {
  const [active, setActive] = useState(0);

  const sections = [
    {
      title: "For Academics & Independent Researchers",
      items: [
        "Get structured, research-ready datasets for high-impact studies",
        "Collaborate with teams and analyze data in Python, R, or Jupyter",
        "Publish groundbreaking insights backed by real-world evidence",
      ],
    },
    {
      title: "For Pharmaceuticals & Life Sciences Company",
      items: [
        "Optimize clinical trial design with patient insights",
        "Identify drug efficacy trends across African populations",
        "Generate regulatory-grade real-world evidence (RWE)",
      ],
    },
    {
      title: "For Researcher Institutions & NGOs",
      items: [
        "Conduct epidemiological studies & health policy research",
        "Compare disease prevalence across multi-country datasets",
        "Secure funding with data-backed proposals",
      ],
    },
  ];

  return (
    <div className=" flex items-center justify-center lg:p-8">
      <div
        className="relative w-full "
        onMouseLeave={() => setActive(0)} /* revert to first when not hovering */
      >
        {/* Full white connector line (behind everything) */}
        <div className="absolute left-0 top-0 h-full w-1 bg-white z-0 pointer-events-none" />

        {/* Sections (stacked) */}
        <div className="space-y-12 z-10">
          {sections.map((section, idx) => (
            <article
              key={idx}
              role="button"
              tabIndex={0}
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
              className={`relative pl-5 bg-[#0D1854] bg-clip-padding rounded-r-xl cursor-pointer border-l-4 transition-colors duration-300 ease-in-out
                ${active === idx ? "border-green-400" : "border-white"}`}
            >
              <h3 className="text-[22px] text-white font-semibold font-isidora2 mb-3">{section.title}</h3>
              <ul className="list-disc list-inside font-extralight work text-[16px] text-white space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
