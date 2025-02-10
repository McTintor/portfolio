import { useSelector } from "react-redux";
import translations from "../utils/translations";
import "./About.css";


const About = () => {
    const language = useSelector((state) => state.language.language);

    return (
        <div className="about-container">
            <p>{translations[language].description}</p>
        </div>
    );
};

export default About;
