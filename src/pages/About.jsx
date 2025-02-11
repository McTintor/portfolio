import { useSelector } from "react-redux";
import { useState, useRef } from "react";
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

  return (
    <div className="about-container">
      <div ref={aboutRef} className={`about-text ${themeColor}`} onMouseMove={handleMouseMove} style={{ "--x": mousePosition.x, "--y": mousePosition.y }}>
        <p>{translations[language].description}</p>
      </div>
      <h2 className={`t-h ${themeColor}`}>Technologies I use</h2>
      <div className={`about-tech ${themeColor}`}>
        <div className={`tech-container ${themeColor}`}>
          <img src={js} alt="JavaScript" className="icon"/>
          <div className="tech-text">
            <h3>JavaScript</h3>
            <p className="tech-p">Programming Language</p>
          </div>
        </div>
        <div className={`tech-container ${themeColor}`}>
          <img src={postgre} alt="PostgreSQL" className="icon"/>
          <div className="tech-text">
            <h3>PostgreSQL</h3>
            <p className="tech-p">Database</p>
          </div>
        </div>
        <div className={`tech-container ${themeColor}`}>
          <img src={react} alt="React JS" className="icon"/>
          <div className="tech-text">
            <h3>React JS</h3>
            <p className="tech-p">Front-End Framework</p>
          </div>
        </div>
        <div className={`tech-container ${themeColor}`}>
          <img src={next} alt="Next JS" className="icon"/>
          <div className="tech-text">
            <h3>Next JS</h3>
            <p className="tech-p">Web Framework</p>
          </div>
        </div>
        <div className={`tech-container ${themeColor}`}>
          <img src={node} alt="Node JS" className="icon"/>
          <div className="tech-text">
            <h3>Node JS</h3>
            <p className="tech-p">Web Server</p>
          </div>
        </div>
        <div className={`tech-container ${themeColor}`}>
          <img src={express} alt="Express JS" className="icon"/>
          <div className="tech-text">
            <h3>Express JS</h3>
            <p className="tech-p">Back-End Framework</p>
          </div>
        </div>
        <div className={`tech-container ${themeColor}`}>
            <img src={css} alt="CSS" className="icon"/>
          <div className="tech-text">
            <h3>CSS</h3>
            <p className="tech-p">Styling</p>
          </div>
        </div>
        <div className={`tech-container ${themeColor}`}>
        <img src={mongodb} alt="MongoDB" className="icon"/>
          <div className="tech-text">
            <h3>MongoDB</h3>
            <p className="tech-p">Database</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
