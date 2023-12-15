import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import JobList from './JobList';
import JobDetail from './JobDetail';

const App = () => {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/jobs" component={JobList} />
            <Route path="/job/:id" component={JobDetail} />      
          </Switch>
        </Router>
      </div>
    );
};

export default App;
