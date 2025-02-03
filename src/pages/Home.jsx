import { useSelector } from "react-redux";
import translations from "../utils/translations";

const Home = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div>
      <h1>{translations[language].welcome}</h1>
      <p>{translations[language].description}</p>
    </div>
  );
};

export default Home;
