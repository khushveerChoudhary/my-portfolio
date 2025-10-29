// src/components/Home.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    const roles = ["Software Developer", "Front-End Developer", "Businessman"];
    const [currentText, setCurrentText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    // Typing Logic for the Subtitle
    useEffect(() => {
        let timeout;
        const fullText = roles[roleIndex % roles.length];
        
        if (isTyping) {
            timeout = setTimeout(() => {
                setCurrentText(fullText.substring(0, currentText.length + 1));
            }, 100); // Typing speed
        } else {
            timeout = setTimeout(() => {
                setCurrentText(fullText.substring(0, currentText.length - 1));
            }, 50); // Deleting speed
        }

        if (isTyping && currentText === fullText) {
            setIsTyping(false); // Start deleting
            clearTimeout(timeout);
            setTimeout(() => setIsTyping(false), 1000); // Pause before deleting
        } else if (!isTyping && currentText === '') {
            setIsTyping(true); // Start typing next word
            setRoleIndex(prev => prev + 1);
        }

        return () => clearTimeout(timeout);
    }, [currentText, isTyping, roleIndex, roles]);


    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.section 
            id="home" 
            className="section section-home"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
        >
            <div className="container home-content">
                <motion.p className="greeting" variants={itemVariants}>Hello, I'm</motion.p>
                
                <motion.h1 className="title" variants={itemVariants}>
                    I'm a <span className="typing-role">{currentText}</span>
                    <span className="cursor">|</span> {/* Blinking Cursor */}
                </motion.h1>

                <motion.h2 className="subtitle" variants={itemVariants}>
                    Building Beautiful Digital Experiences
                </motion.h2>

                <motion.p className="pitch" variants={itemVariants}>
                    I’m a Computer Science and Engineering graduate driven by tech, AI, and innovation. I love creating, exploring new places, capturing moments through my lens, and growing through business and travel.
                </motion.p>
                <motion.a href="#projects" className="cta-button" variants={itemVariants}>View My Work</motion.a>
            </div>
        </motion.section>
    );
};

export default Home;