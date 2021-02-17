import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About/About";

import "./App.css";

class App extends react.Component {
  render() {
    return (
      <react.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={About} />
          </Switch>
        </BrowserRouter>
      </react.Fragment>
    );
  }
}

export default App;
