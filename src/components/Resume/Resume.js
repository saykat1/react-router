import Nav from "../Nav/Nav";
import ResumeCard from "./ResumeCard/ResumeCard";

import { Container, Row, Col } from "react-bootstrap";
import "./Resume.css";

function Resume() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <ResumeCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
