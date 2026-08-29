import React from 'react';

const ProjectCard = ({ emoji, title, desc, tags, gitLink, liveLink, badge, index }) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 shadow-[0_15px_40px_rgba(249,115,22,0.06)] relative max-w-md w-full"
    >
      {/* Thumbnail Area */}
      <div className="h-48 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100/60 flex items-center justify-center text-6xl relative select-none border-b border-neutral-100">
        <span className="group-hover:scale-110 transition-transform duration-500">{emoji}</span>
        
        {badge && (
          <span className="absolute top-4 right-4 bg-[#ff2a2a] text-white text-[10px] font-mono font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
            {badge}
          </span>
        )}

        {/* Glow effect */}
        <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-500/10 border border-orange-500/20 text-orange-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-6">
            {desc}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-4 border-t border-neutral-100 pt-4 mt-auto">
          {gitLink && (
            <a 
              href={gitLink} 
              className="text-xs font-mono font-bold text-neutral-700 hover:text-neutral-950 flex items-center gap-1 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              className="text-xs font-mono font-bold text-[#ff2a2a] hover:underline flex items-center gap-1 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo / Post ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      emoji: "🖨️",
      title: "RIT Library Print Management System",
      desc: "Deployed live at RIT Central Library (Letter of Appreciation from Dr. Vishwas Hase). Replaced manual WhatsApp file downloads with secure remote PDF uploads, automated librarian queue, and monthly Excel reporting.",
      tags: ["React.js", "Node.js", "Express.js", "Vercel"],
      badge: "In Production",
      gitLink: "https://github.com/vk9199kadam-hue",
      liveLink: "https://print-lib.vercel.app/"
    },
    {
      emoji: "⚡",
      title: "PrintEase — Campus Print Platform",
      desc: "Online print management application for students and local print shop owners. Supports remote document upload, single/double sided & color configuration, Razorpay online payments, and live queue status tracking.",
      tags: ["React", "Node.js", "MongoDB", "Razorpay"],
      badge: "Featured Demo",
      gitLink: "https://github.com/vk9199kadam-hue",
      liveLink: "https://printease-queue.vercel.app/"
    },
    {
      emoji: "🩸",
      title: "Blood Donation Analytics (MedTourEasy)",
      desc: "Data Analytics traineeship analyzing 10,000 blood donor records (2005–2026). Performed EDA, donor eligibility trend evaluation (64.16% eligibility rate, AB- rarest ~1%), and interactive Power BI dashboard.",
      tags: ["Python", "Pandas", "Matplotlib", "Power BI"],
      badge: "Data Science",
      gitLink: "https://lnkd.in/g2B8-r6k",
      liveLink: "https://lnkd.in/guTp8iMA"
    },
    {
      emoji: "🤖",
      title: "Autonomous Trip Planner (AI Agent)",
      desc: "Autonomous travel planning system leveraging the ReAct pattern with LangChain and LangGraph to reason, plan, and execute multi-step travel itineraries using live search and data sources.",
      tags: ["Python", "LangChain", "LangGraph", "LLM", "ReAct"],
      badge: "AI / ML",
      gitLink: "https://lnkd.in/dxSaeMtf",
      liveLink: "https://lnkd.in/p/dS4riabV"
    },
    {
      emoji: "🚀",
      title: "More Repositories & Research",
      desc: "Explore more full-stack web applications, machine learning experiments, and hardware integration projects on my GitHub and LinkedIn profiles.",
      tags: ["GitHub", "LinkedIn", "Open Source"],
      badge: "Connect",
      gitLink: "https://github.com/vk9199kadam-hue",
      liveLink: "https://www.linkedin.com/in/kadam-viraj-sanjay-6968a1352?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-br from-white via-white to-orange-50/50 py-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left" data-aos="fade-up">
          <span className="text-xs font-mono tracking-[0.2em] text-orange-500 uppercase font-black block">
            What I've Built & Shipped
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mt-3 tracking-tighter leading-none">
            Featured Projects
          </h2>
          <p className="text-neutral-600 text-sm md:text-base mt-4 max-w-2xl font-medium">
            Real-world software systems in full-stack web development, data analytics, print domain innovation, and autonomous LLM agents.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

