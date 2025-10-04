import React from 'react';

const LogoSlider = () => {
  const logos = [
    '/images/sl1.svg',
    '/images/sl2.svg',
    '/images/sl3.svg',
    '/images/sl4.svg',
    '/images/sl5.svg',
    '/images/sl6.svg'
  ];

  return (
    <div className="w-full bg-white py-5 overflow-hidden">
      <div className="relative">
        <div className="flex animate-slide">
          {/* First set of logos */}
          <div className="flex shrink-0 items-center justify-around min-w-full">
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-8">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 items-center justify-around min-w-full">
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-8">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-8 w-auto  hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for smooth fade */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;