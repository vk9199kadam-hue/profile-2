import React from 'react';

const ProjectCard = ({ emoji, title, desc, tags, gitLink, liveLink, index }) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-white border border-neutral-100 rounded-3xl overflow-hidden hover:border-orange-500/20 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 shadow-[0_15px_40px_rgba(249,115,22,0.06)] relative max-w-md w-full"
    >
      {/* Thumbnail Area */}
      <div className="h-44 bg-gradient-to-br from-orange-50 to-orange-100/50 flex items-center justify-center text-6xl relative select-none border-b border-neutral-100">
        <span className="group-hover:scale-110 transition-transform duration-500">{emoji}</span>
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
          <a 
            href={gitLink || "#"} 
            className="text-xs font-mono font-bold text-neutral-700 hover:text-neutral-950 flex items-center gap-1 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          {liveLink && (
            <a 
              href={liveLink} 
              className="text-xs font-mono font-bold text-orange-500 hover:underline flex items-center gap-1 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
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
      emoji: "🛒",
      title: "ShopEase — E-Commerce App",
      desc: "A full-stack e-commerce platform with product listings, cart management, secure checkout, and an admin dashboard for managing orders.",
      tags: ["React", "Node.js", "MongoDB"],
      gitLink: "https://github.com",
      liveLink: "https://google.com"
    },
    {
      emoji: "🤖",
      title: "Spam Detector — ML Model",
      desc: "A machine learning model using NLP techniques to classify email as spam or not-spam with over 95% accuracy using Naive Bayes.",
      tags: ["Python", "ML", "Scikit-learn"],
      gitLink: "https://github.com"
    },
    {
      emoji: "📋",
      title: "TaskMaster — Todo App",
      desc: "A real-time task management app with drag-and-drop boards, priority labels, deadline tracking, and Firebase authentication.",
      tags: ["React", "Firebase", "CSS"],
      gitLink: "https://github.com",
      liveLink: "https://google.com"
    },
    {
      emoji: "💬",
      title: "ChatBox — Real-time Chat",
      desc: "A real-time chat application supporting multiple rooms, private messaging, emoji reactions, and online status indicators using WebSockets.",
      tags: ["Node.js", "Socket.io", "Express"],
      gitLink: "https://github.com",
      liveLink: "https://google.com"
    },
    {
      emoji: "📊",
      title: "DataViz — Student Analytics",
      desc: "A data analysis dashboard that visualizes student performance trends, attendance patterns, and grade distribution with interactive charts.",
      tags: ["Python", "Pandas", "Matplotlib"],
      gitLink: "https://github.com"
    },
    {
      emoji: "🌐",
      title: "Portfolio v1 — Personal Site",
      desc: "My first personal portfolio website with smooth animations, dark theme, responsive design, and sections for skills and contact.",
      tags: ["HTML", "CSS", "JavaScript"],
      gitLink: "https://github.com",
      liveLink: "https://google.com"
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-br from-white via-white to-orange-50/50 py-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left" data-aos="fade-up">
          <span className="text-xs font-mono tracking-[0.2em] text-orange-500 uppercase font-black block">
            What I've Built
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mt-3 tracking-tighter leading-none">
            My Projects
          </h2>
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
