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
const heroTexts = Object.values(translations[language]?.heroText || {});
const [typedText, setTypedText] = useState("");

useEffect(() => {
  setTypedText(""); // Reset text before typing starts
  let i = 0;
  let tempText = ""; // Store typed text before setting state
  const typingInterval = setInterval(() => {
    if (i < heroTexts.length) {
      tempText += heroTexts[i]; // Update local variable first
      setTypedText(tempText); // Set state once per cycle
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);

  return () => clearInterval(typingInterval);
}, [language]);




  return (
    <div className={`hero-content ${themeColor}`}>
      <div className={`hero-text ${themeColor}`}>
        <p className={`typed-text ${themeColor}`}>{typedText}</p>
        <div className={`hero-buttons ${themeColor}`}>
          <button onClick={handleDownloadCV}>📥 {translations[language].downloadCV}</button>
          <Link to="about" smooth={true} duration={100}>
            <button className="scroll-btn">⬇ {translations[language].continueScrolling}</button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={profilePic} alt="Profile" className={`fade-in ${themeColor}`} />
      </div>
    </div>
  );
};

export default Home;
