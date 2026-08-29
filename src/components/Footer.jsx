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
          <p>Print Domain Innovation & Systems</p>
          <p>Full-Stack Development (React, Node, Express)</p>
          <p>AI Agents (LangChain, LangGraph) & Data Analytics</p>
        </div>
        
        <div className="flex flex-col gap-1 items-center">
          <p>Computer Science Student — RIT College</p>
          <a 
            href="#projects" 
            onClick={(e) => handleNavigateClick(e, 'projects')}
            className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1 font-bold text-[#ff2a2a]"
          >
            View Featured Projects
          </a>
        </div>
        
        <div className="flex flex-col gap-2 items-center md:items-end text-center md:text-right">
          <p className="text-white font-bold">Connect With Me</p>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/kadam-viraj-sanjay-6968a1352?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-white transition-colors text-orange-400"
            >
              LinkedIn ↗
            </a>
            <a 
              href="https://github.com/vk9199kadam-hue" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-white transition-colors text-orange-400"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[12vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          viraj kadam
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-center md:items-end font-medium text-center md:text-left">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <a 
            href="#contact" 
            onClick={(e) => handleNavigateClick(e, 'contact')}
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold text-[#ff2a2a]"
          >
            Contact
          </a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Viraj Sanjay Kadam | Built with React & Vite
          </p>
        </div>
        
        <div className="flex flex-col gap-1 items-center">
          <a href="mailto:vk9199kadam@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase text-white font-bold">
            vk9199kadam@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col gap-1 items-center md:items-end text-center md:text-right">
          <p className="text-white/50 text-[10px]">Ishvarpur, Sangli, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

