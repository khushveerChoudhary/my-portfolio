// src/components/Home.js

import React from 'react';

const Home = () => {
  return (
    <section id="home" className="section section-home">
        <div className="container home-content">
            {/* These elements are ideal for individual text-reveal animations */}
            <p className="greeting">Hello, I'm</p>
            <h1 className="title">Khushveer Choudhary</h1>
            <h2 className="subtitle">Software Developer & Businessman</h2>
            <p className="pitch">
                I’m a Computer Science and Engineering graduate driven by tech, AI, and innovation. I love creating, exploring new places, capturing moments through my lens, and growing through business and travel.
            </p>
            <a href="#projects" className="cta-button">View My Work</a>
        </div>
    </section>
  );
};

export default Home;