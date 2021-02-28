import "./ProjectItem.css";

function ProjectItem({ link, description, imgPath }) {
  return (
    <a href={link} target="_blank" className="project">
      <div className="project__image">
        <img className="img-fluid" src={imgPath} alt="Small Website" />
      </div>
      <p className="project__desc">{description}</p>
    </a>
  );
}

export default ProjectItem;
