<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form1 from "./static/Form1";
import Form2 from "./static/Form2";
import Home from "./static/home";
=======
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import TableComponent from './TableComponent'
import RadioComponent from './RadioComponent'
>>>>>>> 4d99cd0764035c83812a86e2fc24de18d8b13ddb

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Home} />
          <Route path="/form1" component={Form1} />
          <Route path="/form2" component={Form2} />
        </Switch>
      </Router>
    );
  }
}
export default App;
=======
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
>>>>>>> 4d99cd0764035c83812a86e2fc24de18d8b13ddb
