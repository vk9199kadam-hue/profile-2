import React from 'react';

const Footer = ({ onNavigate }) => {
  const handleNavigateClick = (e, view) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(view);
    }
  };

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium text-center md:text-left">
        <div className="flex flex-col gap-1">
          <p>Full-Stack Web Development</p>
          <p>React, Node.js, Express, MongoDB</p>
          <p>Python, ML & Algorithms</p>
        </div>
        
        <div className="flex flex-col gap-1 items-center">
          <p>Computer Science Student</p>
          <a 
            href="#projects" 
            onClick={(e) => handleNavigateClick(e, 'projects')}
            className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1"
          >
            View Projects
          </a>
        </div>
        
        <div className="flex flex-col gap-1 items-center md:items-end text-center md:text-right">
          <p>Available for Internships</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[12vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          vk orgnization
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-center md:items-end font-medium text-center md:text-left">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <a 
            href="#contact" 
            onClick={(e) => handleNavigateClick(e, 'contact')}
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold"
          >
            Contact
          </a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} VK Organization | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-1 items-center">
          <a href="mailto:virajkadam@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">virajkadam@gmail.com</a>
        </div>
        
        <div className="flex flex-col gap-1 items-center md:items-end text-center md:text-right">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
