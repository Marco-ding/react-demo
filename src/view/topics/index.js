import React from "react";
import { BrowserRouter as Router, Route, Link,useParams,useRouteMatch } from "react-router-dom";
import { Lifecycle } from 'react-router'
import Topic  from './list'
const Topics = ({ match }) =>  {
  console.log(987,useRouteMatch())
    return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Route path={`${match.url}/:topicId`} children={<Topic/>} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
    )}
  ;

  export default Topics