import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Landing} from './pages';
import Dictator from './dictator'
import './styles.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/:Dictator" component={Dictator}/>
          <Route exact path="/:Dictator/:year" component={Dictator}/>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));