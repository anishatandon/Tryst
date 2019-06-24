import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp/SignUp';
import { 
    Switch, 
    BrowserRouter as Router, 
    Route 
 } from 'react-router-dom';
import './App.css';

export class App extends React.Component{

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;
