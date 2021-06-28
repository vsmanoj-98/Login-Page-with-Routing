import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import TableComponent from './TableComponent'
import RadioComponent from './RadioComponent'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Route path="/welcome" component={WelcomeComponent} />
          <Route path="/welcome/:username" component={WelcomeComponent} />
          <Route path="/table" component={TableComponent} />
          <Route path="/radio" component={RadioComponent} />
          <Route path="/logout" component={LoginComponent} />
        </Switch>
      </Router>
    )
  }
}
export default App;