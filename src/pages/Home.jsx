import { useSelector } from "react-redux";
import translations from "../utils/translations";
import { Link } from "react-scroll";
import profilePic from "../assets/profile.jpg";
import "./Home.css";

const Home = () => {
  const language = useSelector((state) => state.language.language);

  const handleDownloadCV = () => {
    const cvUrl = "/igorTintor.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Igor_Tintor_CCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <div className="hero-content">
        <div className="hero-text">
          <h1>{translations[language].welcome}</h1>
          <h2>{translations[language].description}</h2>
          <p>
            {translations[language].heroText ||
              "Passionate about building high-performance web applications with React and Node.js."}
          </p>
          <div className="hero-buttons">
            <button onClick={handleDownloadCV}>📥 {translations[language].downloadCV}</button>
            <Link to="about" smooth={true} duration={600}>
              <button className="scroll-btn">⬇ {translations[language].continueScrolling}</button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
  );
};

export default Home;
