import './App.css';
import GlobalFonts from '../fonts/fonts'
// import Login from './Login'
import React, { useState } from 'react'
import { Route, Switch, useHistory} from "react-router";

import Authorize from "./Authorize"
import ProjectContainer from "./ProjectContainer"
import NewProject from "./NewProject"
import Header from "./Header"

function App() {
  const [user, setUser] = useState(null);
  // const [projects, setProjects] = useState([]);
  
  const history = useHistory();
  console.log(user)
  
if(!user)history.push('/signup');
// if(!user)history.push('/projects/new');

  return (
    <>
    <Switch>
     {/* <Header user={user} setUser={setUser}/>  */}
        <Route exact path="/projects">
          <ProjectContainer/>
        </Route>
        <Route exact path="/projects/new">
          <NewProject />
        </Route>
        <Route path="/signup">
          <Authorize setUser={setUser} />
        </Route>
      </Switch>
      <GlobalFonts />
    </>
  );
}

export default App;
