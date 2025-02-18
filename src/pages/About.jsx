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
      const x = Math.random() < 0.5 ? -1 : 1;
      const y = Math.random() < 0.5 ? -1 : 1;
      const angle = `${Math.random() * 10 + 5}deg`;

      e.currentTarget.style.transform = `rotate3d(${x}, ${y}, 0, ${angle})`;
    };

    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = "rotate3d(0, 0, 0, 0deg)";
    };

    techContainers.forEach((div) => {
      div.addEventListener("mouseenter", handleMouseEnter);
      div.addEventListener("mouseleave", handleMouseLeave);
    });

    
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
      <h2 className={`t-h ${themeColor}`}>{translations[language].abouth2}</h2>
      <div className={`about-tech ${themeColor}`}>
        {[
          { src: js, alt: "JavaScript", title: "JavaScript", desc: translations[language].pd1 },
          { src: postgre, alt: "PostgreSQL", title: "PostgreSQL", desc: translations[language].pd2 },
          { src: react, alt: "React JS", title: "React JS", desc: translations[language].pd3 },
          { src: next, alt: "Next JS", title: "Next JS", desc: translations[language].pd4 },
          { src: node, alt: "Node JS", title: "Node JS", desc: translations[language].pd5 },
          { src: express, alt: "Express JS", title: "Express JS", desc: translations[language].pd6 },
          { src: css, alt: "CSS", title: "CSS", desc: translations[language].pd7 },
          { src: mongodb, alt: "MongoDB", title: "MongoDB", desc: translations[language].pd8 },
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
