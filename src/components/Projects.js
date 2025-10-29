// src/components/Projects.js

import React from 'react';
import { motion } from 'framer-motion'; 

// Paste the missing data array here!
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
    const cardAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        viewport: { once: true, amount: 0.3 }
    };

    return (
        <section id="projects" className="section section-projects">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                {projectData.map((project, index) => (
                    <motion.div 
                        className="project-card mica-panel" // Apply Mica/Glass to the card
                        key={index}
                        {...cardAnimation}
                    >
                        <h3>{`${index + 1}. ${project.name}`}</h3>
                        <p className="project-desc">{project.description}</p>
                        {/* ... rest of project card content ... */}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;