import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form1 from "./static/Form1";
import Form2 from "./static/Form2";
import Home from "./static/home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form1" component={Form1} />
          <Route path="/form2" component={Form2} />
        </Switch>
      </Router>
    );
  }
}
export default App;
