import Nav from "../Nav/Nav";
import AboutDesc from "./AboutDesc/AboutDesc";
import DownloadBtn from "./DownloadBtn/DownloadBtn";
import AboutImage from "./AboutImage/AboutImage";
import SocialIcons from "./SocialIcons/SocialIcons";
import SkillSet from "./SkillSet/SkillSet";
import ProjectData from "../Project/ProjectData";
import BestProjects from "./BestProjects/BestProjects";

import Resume from "../Resume/Resume";

import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import { useEffect, useState } from "react";

function About() {
  document.title = "NM Soikat";

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([...ProjectData()]);
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <div className="about-marge">
            <Row>
              <Col lg={3} xl={4}>
                <AboutImage />
              </Col>
              <Col lg={9} xl={8}>
                <AboutDesc />
                <SocialIcons />
                <div className="download-btn-impl">
                  <DownloadBtn />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h2 className="section-title">Some Of My Projects</h2>
        </Col>
      </Row>
      <Row>
        {projects.map((item) => {
          if (item.categories[2] === "top-page") {
            return (
              <Col sm={6}>
                <BestProjects item={item} />
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
}

export default About;
