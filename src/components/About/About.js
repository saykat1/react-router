import Nav from "../Nav/Nav";
import AboutDesc from "./AboutDesc/AboutDesc";

import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col sm={4}>
          <Nav />
        </Col>
        <Col sm={8}>
          <AboutDesc />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
