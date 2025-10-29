// src/components/Projects.js

import React from 'react';

// Your project data
const projectData = [
  {
    name: "Voice-to-Face Generator",
    description: "An AI system that generates a human face based on a person’s voice or spoken description using deep learning and speech analysis.",
    tech: ["Python", "OpenCV", "Librosa", "Stable Diffusion", "Speech-to-Text API"]
  },
  {
    name: "Personalized Advertisement Recommendation System",
    description: "A web-based AI system that recommends ads based on user preferences, behavior, and browsing patterns to enhance personalization and engagement.",
    tech: ["Python", "Flask", "Machine Learning", "HTML/CSS/JavaScript"]
  },
  {
    name: "Driver Drowsiness Detection System",
    description: "A computer vision project that detects driver fatigue using real-time eye movement tracking and alerts the user to prevent accidents.",
    tech: ["Python", "OpenCV", "dlib", "winsound"]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section section-projects">
      <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          {projectData.map((project, index) => (
            // This card is where you would apply a scroll-reveal animation
            <div className="project-card" key={index}>
                <h3>{`${index + 1}. ${project.name}`}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech-list">
                    {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                </div>
                <a href="#" className="project-link" aria-label={`View code for ${project.name}`}>View Code →</a>
            </div>
          ))}

      </div>
    </section>
  );
};

export default Projects;