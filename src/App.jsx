import React, { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'skills', 'projects', 'education'

  const handleNavigate = (view) => {
    if (view === 'skills' || view === 'projects' || view === 'education') {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
      if (view === 'about' || view === 'contact') {
        setTimeout(() => {
          const el = document.getElementById(view);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Preloader />
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      {currentView === 'home' && (
        <>
          <Hero />
          <About />
          <Services />
          <Contact />
        </>
      )}

      {currentView === 'skills' && (
        <div className="pt-24 min-h-[80vh]">
          <Skills />
        </div>
      )}

      {currentView === 'projects' && (
        <div className="pt-24 min-h-[80vh]">
          <Projects />
        </div>
      )}

      {currentView === 'education' && (
        <div className="pt-24 min-h-[80vh]">
          <Education />
        </div>
      )}

      <Footer onNavigate={handleNavigate} />
    </>
  )
}

export default App
