// src/App.js

import React from 'react';
// src/App.js
import './App.css'; 

// *** CHANGE THESE IMPORTS ***
import Home from './components/Home'; // Home was likely already a default export
import Projects from './components/Projects'; // Projects was likely a default export

// Use curly braces for the components that failed (About, Skills, Education, Contact)
import { About } from './components/About'; 
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact'; 
// **************************

function App() {
// ... rest of App.js code
  return (
    <div className="App">
      
      {/* NOTE: In a real React app, you would use a dedicated Header 
        component and an animation library like Framer Motion 
        to achieve the ultra-smooth effects you want.
      */}
      <header className="header">
        <div className="container nav-container">
            <a href="#home" className="logo">Khushveer</a>
            <nav className="nav-menu">
                {/* Scroll logic handled by a library or custom hook in a production app */}
                <a href="#about" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#education" className="nav-link">Education</a>
                <a href="#contact" className="nav-link nav-contact-btn">Get In Touch</a>
            </nav>
        </div>
      </header>

      <main>
        {/* Each component below represents a section of your single-page portfolio */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
          <div className="container">
              <p>&copy; 2024 Khushveer Choudhary. All Rights Reserved.</p>
          </div>
      </footer>
    </div>
  );
}

export default App;