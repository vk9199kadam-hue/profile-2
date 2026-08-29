import React from 'react';

const SkillBar = ({ name, percent }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5 text-xs font-mono tracking-wider">
        <span className="text-neutral-800 font-bold">{name}</span>
        <span className="text-[#ff2a2a] font-bold font-mono">{percent}%</span>
      </div>
      <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/60">
        <div 
          className="h-full bg-gradient-to-r from-[#ff2a2a] via-orange-500 to-amber-500 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Full-Stack Web Engineering",
      subtitle: "Production Systems & Web Apps",
      icon: "🌐",
      skills: [
        { name: "JavaScript (ES6+) & TypeScript", percent: 90 },
        { name: "React.js & Tailwind CSS", percent: 92 },
        { name: "Node.js & Express.js", percent: 88 },
        { name: "REST APIs & JWT Auth", percent: 85 }
      ],
      tools: ["React", "Node.js", "Express", "Vercel", "Tailwind"]
    },
    {
      title: "AI, ML & Data Analytics",
      subtitle: "Autonomous Agents & Analysis",
      icon: "🤖",
      skills: [
        { name: "Python (LangChain & LangGraph)", percent: 88 },
        { name: "LLMs & ReAct Pattern Agents", percent: 85 },
        { name: "Pandas, NumPy & EDA", percent: 90 },
        { name: "Power BI & Matplotlib / Seaborn", percent: 86 }
      ],
      tools: ["Python", "LangChain", "LangGraph", "Power BI", "Pandas"]
    },
    {
      title: "Databases & Hardware Integration",
      subtitle: "Print Domain & Infrastructure",
      icon: "🖨️",
      skills: [
        { name: "MongoDB & CockroachDB / MySQL", percent: 85 },
        { name: "Android Device & USB Protocols", percent: 82 },
        { name: "Git / GitHub Version Control", percent: 90 },
        { name: "Cloud Deployment & Razorpay", percent: 84 }
      ],
      tools: ["MongoDB", "USB I/O", "Razorpay", "Git", "Postman"]
    }
  ];

  return (
    <section id="skills" className="bg-gradient-to-br from-white via-white to-orange-50/50 py-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left" data-aos="fade-up">
          <span className="text-xs font-mono tracking-[0.2em] text-[#ff2a2a] uppercase font-black block">
            Technical Capability Matrix
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mt-3 tracking-tighter leading-none">
            Skills & Tools
          </h2>
          <p className="text-neutral-600 text-sm md:text-base mt-4 max-w-2xl font-medium">
            The technical stack powering my print domain systems, full-stack web platforms, data analysis models, and autonomous AI agents.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white border border-neutral-200 p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(249,115,22,0.06)] flex flex-col justify-between gap-6 hover:border-[#ff2a2a]/40 transition-all duration-500 hover:-translate-y-1 max-w-md w-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-black text-neutral-900 tracking-tight leading-snug">{category.title}</h3>
                    <p className="text-xs text-neutral-500 font-mono">{category.subtitle}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-5 mt-6">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
                  ))}
                </div>
              </div>

              {/* Tool Tags */}
              <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5 mt-2">
                {category.tools.map((tool) => (
                  <span key={tool} className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-neutral-100 text-neutral-700 border border-neutral-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

