import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import translations from "../utils/translations";
import css from "../assets/css.png";
import express from "../assets/express.png";
import js from "../assets/js.png";
import mongodb from "../assets/mongodb.png";
import next from "../assets/next.png";
import node from "../assets/node.png";
import postgre from "../assets/postgre.png";
import react from "../assets/react.png";
import "./About.css";

const About = () => {
  const language = useSelector((state) => state.language.language);
  const theme = useSelector((state) => state.theme.darkMode);
  const themeColor = theme ? "light" : "dark";

  const aboutRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = aboutRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x: `${x}%`, y: `${y}%` });
  };

  // Effect to add random tilt effect on hover
  useEffect(() => {
    const techContainers = document.querySelectorAll(".tech-container");

    const handleMouseEnter = (e) => {
      const x = Math.random() < 0.5 ? -1 : 1; // Random X direction
      const y = Math.random() < 0.5 ? -1 : 1; // Random Y direction
      const angle = `${Math.random() * 10 + 5}deg`; // Random tilt angle (5-15 degrees)

      e.currentTarget.style.transform = `rotate3d(${x}, ${y}, 0, ${angle})`;
    };

    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = "rotate3d(0, 0, 0, 0deg)"; // Reset tilt
    };

    techContainers.forEach((div) => {
      div.addEventListener("mouseenter", handleMouseEnter);
      div.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners
    return () => {
      techContainers.forEach((div) => {
        div.removeEventListener("mouseenter", handleMouseEnter);
        div.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="about-container">
      <div ref={aboutRef} className={`about-text ${themeColor}`} onMouseMove={handleMouseMove} style={{ "--x": mousePosition.x, "--y": mousePosition.y }}>
        <p className="about-p">{translations[language].description}</p>
      </div>
      <h2 className={`t-h ${themeColor}`}>Technologies I use</h2>
      <div className={`about-tech ${themeColor}`}>
        {[
          { src: js, alt: "JavaScript", title: "JavaScript", desc: "Programming Language" },
          { src: postgre, alt: "PostgreSQL", title: "PostgreSQL", desc: "Database" },
          { src: react, alt: "React JS", title: "React JS", desc: "Front-End Framework" },
          { src: next, alt: "Next JS", title: "Next JS", desc: "Web Framework" },
          { src: node, alt: "Node JS", title: "Node JS", desc: "Web Server" },
          { src: express, alt: "Express JS", title: "Express JS", desc: "Back-End Framework" },
          { src: css, alt: "CSS", title: "CSS", desc: "Styling" },
          { src: mongodb, alt: "MongoDB", title: "MongoDB", desc: "Database" },
        ].map((tech, index) => (
          <div key={index} className={`tech-container ${themeColor}`}>
            <img src={tech.src} alt={tech.alt} className="icon" />
            <div className="tech-text">
              <h3>{tech.title}</h3>
              <p className="tech-p">{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
