import Nav from "../Nav/Nav";
import AboutDesc from "./AboutDesc/AboutDesc";
import DownloadBtn from "./DownloadBtn/DownloadBtn";
import AboutImage from "./AboutImage/AboutImage";
import SocialIcons from "./SocialIcons/SocialIcons";
import SkillSet from "./SkillSet/SkillSet";

import Resume from "../Resume/Resume";

import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
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
    </Container>
  );
}

export default About;
