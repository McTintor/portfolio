import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { toggleLanguage } from "../store/languageSlice";
import translations from "../utils/translations";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
  }, [darkMode]);
  

  return (
    <nav className={`${showNavbar ? "visible" : "hidden"} ${!darkMode ? "dark-theme" : "light-theme"}`}>
      <ul>
        <li><a href="#home">{translations[language].home}</a></li>
        <li><a href="#about">{translations[language].about}</a></li>
        <li><a href="#projects">{translations[language].projects}</a></li>
        <li><a href="#contact">{translations[language].contact}</a></li>
      </ul>
      <div className="nav-buttons">
        <div className="theme-toggle">
          <span className="emoji">☀️</span>
          <input
            type="checkbox"
            id="theme-toggle"
            checked={darkMode}
            onChange={() => dispatch(toggleTheme())}
          />
          <label htmlFor="theme-toggle" className="toggle-label">
            <span className="toggle-slider"></span>
          </label>
          <span className="emoji">🌙</span>
        </div>

        {/* Language Toggle */}
        <button onClick={() => dispatch(toggleLanguage())}>
          {language === "en" ? "🇬🇧 EN" : "🇷🇸 SR"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
