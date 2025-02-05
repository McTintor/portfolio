import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import translations from "../utils/translations";
import { Link } from "react-scroll";
import profilePic from "../assets/profile.jpg";
import "./Home.css";

const Home = () => {
  const language = useSelector((state) => state.language.language);
  const theme = useSelector((state) => state.theme.darkMode);
  const themeColor = theme ? "light" : "dark";

  const handleDownloadCV = () => {
    const cvUrl = "/igorTintor.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Igor_Tintor_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

// Typewriter effect
const heroText = translations[language]?.heroText || ""; // Ensure it's defined
const [typedText, setTypedText] = useState("");

useEffect(() => {
  setTypedText(""); // Reset text before typing starts
  let i = 0;
  let tempText = ""; // Store typed text before setting state
  const typingInterval = setInterval(() => {
    if (i < heroText.length) {
      tempText += heroText[i]; // Update local variable first
      setTypedText(tempText); // Set state once per cycle
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 30);

  return () => clearInterval(typingInterval);
}, [language]);

const [textWidth, setTextWidth] = useState("auto");

useEffect(() => {
  // Create an offscreen span to measure text width
  const span = document.createElement("span");
  span.style.visibility = "hidden";
  span.style.whiteSpace = "nowrap";
  span.style.position = "absolute";
  span.style.fontSize = "2rem"; // Match your typed text style
  span.innerText = heroText;

  document.body.appendChild(span);
  setTextWidth(`${span.offsetWidth}px`); // Store width
  document.body.removeChild(span);
}, [heroText]);



  return (
    <div className={`hero-content ${themeColor}`}>
      <div className="hero-text" style={{width: textWidth}}>
        <p className="typed-text">{typedText}</p>
        <div className="hero-buttons">
          <button onClick={handleDownloadCV}>📥 {translations[language].downloadCV}</button>
          <Link to="about" smooth={true} duration={100}>
            <button className="scroll-btn">⬇ {translations[language].continueScrolling}</button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={profilePic} alt="Profile" className="fade-in" />
      </div>
    </div>
  );
};

export default Home;
