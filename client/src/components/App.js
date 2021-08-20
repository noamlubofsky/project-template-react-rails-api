import './App.css';
// import Login from './Login'
import React, { useState } from 'react'
import { Route, Switch, useHistory} from "react-router";

import Authorize from "./Authorize"
import ProjectContainer from "./ProjectContainer"
import NewProject from "./NewProject"


function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  console.log(user)
  if(!user)history.push('/signup');


  return (
    <>
    <Switch>
        <Route exact path="/">
          <ProjectContainer />
        </Route>
        <Route exact path="/projects/new">
          <NewProject />
        </Route>
        <Route path="/signup">
          <Authorize setUser={setUser} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
