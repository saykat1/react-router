import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Project from "./Project/Project";

import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "./Nav/Nav";

class App extends react.Component {
  render() {
    return (
      <react.Fragment>
        <BrowserRouter>
          <div className="nav-wrap">
            <Container>
              <Row>
                <Col>
                  <Nav />
                </Col>
              </Row>
            </Container>
          </div>
          <main className="pt-5">
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/resume" component={Resume} />
              <Route
                path="/project/:category"
                component={({ match: { params } }) => {
                  // console.log(props);
                  // console.log(params.category);
                  return <Project category={params.category} />;
                }}
              />
              <Route path="/project/all" component={Project} />
            </Switch>
          </main>
        </BrowserRouter>
      </react.Fragment>
    );
  }
}

export default App;
