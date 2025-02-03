import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleTheme } from "../store/themeSlice";
import { toggleLanguage } from "../store/languageSlice";
import translations from "../utils/translations";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);

  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>{translations[language].home}</NavLink></li>
        <li><NavLink to="/about">{translations[language].about}</NavLink></li>
        <li><NavLink to="/projects">{translations[language].projects}</NavLink></li>
        <li><NavLink to="/cv">{translations[language].cv}</NavLink></li>
        <li><NavLink to="/contact">{translations[language].contact}</NavLink></li>
      </ul>
      <button onClick={() => dispatch(toggleTheme())}>
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
      <button onClick={() => dispatch(toggleLanguage())}>
        {language === "en" ? "🇷🇸 SR" : "🇬🇧 EN"}
      </button>
    </nav>
  );
};

export default Navbar;
