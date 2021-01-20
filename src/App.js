import React from "react";
import { BrowserRouter as Router, Route, Link,HashHistory,Switch  } from "react-router-dom";
import Home from './view/home'
import About from './view/about'
import Topics from './view/topics'

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/topics/2332">Topics</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" 
        render={routeProps => (
          <Home 
            {...routeProps}
            theme='theme12'
          />
        )} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/topics/:id" component={Topics} />
      </Switch>
      
    </div>
  </Router>
);
export default App;