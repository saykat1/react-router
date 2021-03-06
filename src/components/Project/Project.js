import "./Project.css";
import react from "react";
import ProjectData from "./ProjectData";
import NavSub from "../Nav/NavSub/NavSub";
import ProjectItem from "./ProjectItem/ProjectItem";

import { Container, Row, Col } from "react-bootstrap";

class Project extends react.Component {
  state = {
    projects: ProjectData(),
  };

  render() {
    document.title = "Projects";
    let { category } = this.props;
    return (
      <Container>
        {/* <Row>
          <Col sm={12}>
            <div className="subNav-impl">
              <NavSub />
            </div>
          </Col>
        </Row> */}
        <Row>
          <Col sm={12}>
            <Row className="projects">
              {this.state.projects.map((item, index) => {
                // console.log("includes", item.categories.includes(category));
                if (item.categories.includes(category)) {
                  return (
                    <Col sm={6} md={4} xl={4}>
                      <ProjectItem
                        key={index}
                        link={item.link}
                        imgPath={item.image}
                        description={item.description}
                      />
                    </Col>
                  );
                }
              })}
            </Row>

            {/* <div className="projects-wrap">
              {this.state.projects.map((item, index) => {
                // console.log("includes", item.categories.includes(category));
                if (item.categories.includes(category)) {
                  return (
                    <ProjectItem
                      key={index}
                      link={item.link}
                      imgPath={item.image}
                      description={item.description}
                    />
                  );
                }
              })}
            </div> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Project;
