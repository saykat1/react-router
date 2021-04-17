import "./BestProjects.css";
import { Link } from "react-router-dom";

const BestProjects = ({ item: { title, image, link } }) => {
  return (
    <a href={link} target="_blank" className="best-project">
      <h2 className="best-project__title">{title}</h2>
      <p className="best-project__image">
        <img src={image} className="img-fluid" />
      </p>
    </a>
  );
};

export default BestProjects;
