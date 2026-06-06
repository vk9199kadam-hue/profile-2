import React from 'react';

const SkillBar = ({ name, percent }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5 text-xs font-mono tracking-wider">
        <span className="text-neutral-700 font-bold">{name}</span>
        <span className="text-orange-500 font-bold">{percent}%</span>
      </div>
      <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/50">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: "💻",
      skills: [
        { name: "C / C++", percent: 85 },
        { name: "Python", percent: 80 },
        { name: "JavaScript", percent: 75 },
        { name: "Java", percent: 65 }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "HTML & CSS", percent: 90 },
        { name: "React.js", percent: 78 },
        { name: "Node.js & Express", percent: 70 },
        { name: "MongoDB / MySQL", percent: 72 }
      ]
    },
    {
      title: "Fundamentals & Tools",
      icon: "🛠️",
      skills: [
        { name: "Data Structures & Algo", percent: 82 },
        { name: "Git & GitHub", percent: 85 },
        { name: "Machine Learning", percent: 60 },
        { name: "Linux / OS", percent: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-gradient-to-br from-white via-white to-orange-50/50 py-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left" data-aos="fade-up">
          <span className="text-xs font-mono tracking-[0.2em] text-orange-500 uppercase font-black block">
            What I Know
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mt-3 tracking-tighter leading-none">
            My Skills
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white border border-neutral-100 p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(249,115,22,0.06)] flex flex-col gap-6 hover:border-orange-500/20 transition-all duration-500 hover:-translate-y-1 max-w-md w-full"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-black text-neutral-900 tracking-tight leading-none">{category.title}</h3>
              </div>
              
              <div className="flex flex-col gap-5 mt-2">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
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
