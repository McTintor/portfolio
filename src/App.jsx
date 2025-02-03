import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
