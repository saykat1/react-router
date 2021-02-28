import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaSass,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import "./SkillSet.css";

function SkillSet() {
  return (
    <section className="skill-area">
      <h2 className="skill-area__title section-title">Skills</h2>
      <div className="skills">
        <div className="skills__item html">
          <FaHtml5 />
          <span className="sills__name">HTML5</span>
        </div>
        <div className="skills__item css">
          <FaCss3 />
          <span className="sills__name">CSS3</span>
        </div>
        <div className="skills__item bootstrap">
          <FaBootstrap />
          <span className="sills__name">Bootstrap</span>
        </div>
        <div className="skills__item sass">
          <FaSass />
          <span className="sills__name">Sass</span>
        </div>
        <div className="skills__item js">
          <FaJsSquare />
          <span className="sills__name">Javascript</span>
        </div>
        <div className="skills__item react">
          <FaReact />
          <span className="sills__name">React</span>
        </div>
        <div className="skills__item node">
          <FaNode />
          <span className="sills__name">NodeJS</span>
        </div>
        <div className="skills__item git">
          <FaGitAlt />
          <span className="sills__name">Git</span>
        </div>
      </div>
    </section>
  );
}

export default SkillSet;
