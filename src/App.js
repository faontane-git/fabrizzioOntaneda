import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  const [visibleSection, setVisibleSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      // Buscar los elementos solo si están presentes en el DOM
      const aboutMeElement = document.getElementById('aboutMe');
      const contactElement = document.getElementById('contact');

      if (aboutMeElement && contactElement) {
        const aboutMeSection = aboutMeElement.offsetTop;
        const contactSection = contactElement.offsetTop;

        if (scrollPosition >= aboutMeSection && scrollPosition < contactSection) {
          setVisibleSection('about');
        } else if (scrollPosition >= contactSection) {
          setVisibleSection('contact');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <AboutMe id="aboutMe" isVisible={visibleSection === 'about'} />
      <Skills />
      <Projects />
      <Experience />
      <Contact id="contact" isVisible={visibleSection === 'contact'} />
    </div>
  );
}

export default App;
