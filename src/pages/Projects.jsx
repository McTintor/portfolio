import { useSelector } from "react-redux";
import translations from "../utils/translations";
import blog from "../assets/blog.png";
import library from "../assets/library.png";
import store from "../assets/store.png";
import "./Projects.css";

const projects = [
  {
    imgSrc: blog,
    altText: "Blog",
    titleKey: "projecttitle1",
    descKey: "projectdesc1",
    githubLink: "https://github.com/McTintor/blog-api",
  },
  {
    imgSrc: store,
    altText: "Online Store",
    titleKey: "projecttitle2",
    descKey: "projectdesc2",
    githubLink: "https://github.com/McTintor/shopping-cart-project",
  },
  {
    imgSrc: library,
    altText: "Personal Library",
    titleKey: "projecttitle3",
    descKey: "projectdesc3",
    githubLink: "https://github.com/McTintor/personal-library",
  },
];


const Projects = () => {

  const language = useSelector((state) => state.language.language);
  const theme = useSelector((state) => state.theme.darkMode);
  const themeColor = theme ? "light" : "dark";

    return (
      <div className="projects-wrapper">
        <h1 className={`projects-h1 ${themeColor}`}>{translations[language].projectsh}</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className={`project-container ${themeColor}`}>
              <img src={project.imgSrc} alt={project.altText} />
              <div className="project-info">
                <h3>{translations[language][project.titleKey]}</h3>
                <p className="project-p">{translations[language][project.descKey]}</p>
                <p className="project-p">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    {translations[language].clickgit}
                    <svg
                      className={themeColor}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 30 25"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </a>
                </p>
              </div>
          </div>
  ))}
        </div>

      </div>
    );
  };
  
  export default Projects;
  