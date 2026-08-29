import React from 'react';

const EducationItem = ({ year, degree, school, grade, icon, achievements, index }) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="flex gap-6 md:gap-10 relative md:w-[80%] mx-auto"
    >
      {/* Icon Node & Line */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-12 h-12 rounded-full bg-white border border-orange-500/30 flex items-center justify-center text-xl z-10 shadow-lg relative transition-colors text-orange-500">
          <span>{icon}</span>
          {/* Pulse ring for first item */}
          {index === 0 && (
            <div className="absolute inset-0 rounded-full border border-orange-500 animate-ping opacity-25 pointer-events-none"></div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 bg-white border border-neutral-100 rounded-3xl p-6 md:p-8 hover:border-orange-500/20 transition-all duration-300 relative shadow-[0_15px_40px_rgba(249,115,22,0.06)]">
        <div className="text-xs font-mono font-bold text-orange-500 mb-2 tracking-wider">
          {year}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1">
          {degree}
        </h3>
        <p className="text-neutral-600 text-xs md:text-sm mb-4">
          {school}
        </p>

        {grade && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/10 border border-orange-500/20 text-orange-600 mb-2">
            {grade}
          </span>
        )}

        {achievements && (
          <ul className="list-disc list-inside text-neutral-500 text-xs md:text-sm mt-3 space-y-1.5 border-t border-neutral-100 pt-3">
            {achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      year: "JUNE 2026 — INTERNSHIP",
      degree: "Data Analytics Trainee",
      school: "MedTourEasy Pvt. Ltd., Gurugram",
      grade: "Project: Blood Donation Analytics",
      icon: "📊",
      achievements: [
        "Analyzed 10,000 blood donor dataset (2005–2026) using Python & statistical methods.",
        "Quantified a 64.16% donor eligibility rate and identified AB- as rarest group (~1%).",
        "Built interactive Power BI dashboard & analytical report with retention recommendations."
      ]
    },
    {
      year: "2022 — EXPECTED 2026",
      degree: "B.E. in Computer Science & Engineering",
      school: "Rajarambapu Institute of Technology (RIT), Rajaramnagar",
      grade: "CGPA: 8.0 / 10",
      icon: "🎓",
      achievements: [
        "Formally awarded Letter of Appreciation (Ref: RIT/LIB/483/29-07-2026) by Dr. Vishwas Hase, Librarian RIT Central Library, for developing the Reprographic Management System.",
        "Coursework: DSA, Discrete Math, Probability & Statistics, Database Systems, Computer Networks, Software Engineering."
      ]
    },
    {
      year: "2020 — 2022",
      degree: "HSC — Science (PCM + CS)",
      school: "Maharashtra State Board",
      grade: "Score: 87.40%",
      icon: "📘"
    },
    {
      year: "2020",
      degree: "SSC — Secondary School Certificate",
      school: "Maharashtra State Board",
      grade: "Score: 91.20%",
      icon: "📗"
    },
    {
      year: "RECOGNITION & CERTIFICATIONS",
      degree: "Honors & Achievements",
      school: "Professional Certifications",
      icon: "🏆",
      achievements: [
        "Letter of Appreciation — RIT Central Library (Reprographic System)",
        "Certificate of Traineeship Completion — MedTourEasy Pvt. Ltd.",
        "freeCodeCamp — Responsive Web Design & JavaScript Data Structures"
      ]
    }
  ];

  return (
    <section id="education" className="bg-gradient-to-br from-white via-white to-orange-50/50 py-24 px-6 md:px-12 w-full min-h-screen relative overflow-hidden">
      {/* Background ambient orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center md:text-left" data-aos="fade-up">
          <span className="text-xs font-mono tracking-[0.2em] text-orange-500 uppercase font-black block">
            My Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mt-3 tracking-tighter leading-none">
            Education
          </h2>
        </div>

        {/* Timeline Items */}
        <div className="relative flex flex-col gap-10">
          {/* Vertical connecting line */}
          <div className="absolute left-[24px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-orange-500 to-orange-100"></div>

          {educationData.map((edu, index) => (
            <EducationItem key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
