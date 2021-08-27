import './App.css';
import GlobalFonts from '../fonts/fonts'
// import Login from './Login'
import React, { useState } from 'react'
import { Route, Switch, useHistory} from "react-router";

import Authorize from "./Authorize"
import ProjectContainer from "./ProjectContainer"
import NewProject from "./NewProject"
import Header from "./Header"
import FavoritesContainer from "./FavoritesContainer"

function App() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([])
  // const [projects, setProjects] = useState([]);
  
  const history = useHistory();
  console.log(user)
  
if(!user)history.push('/sign_up');
// if(!user)history.push('/projects/new');

  return (
    <>
    <Switch>
     {/* <Header user={user} setUser={setUser}/>  */}
        <Route exact path="/projects">
          <ProjectContainer user={user}/>
        </Route>
        <Route exact path="/projects/new">
          <NewProject />
        </Route>
        <Route path="/sign_up">
          <Authorize user={user} setUser={setUser} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesContainer favorites={favorites} setFavorites={setFavorites} />
        </Route>
      </Switch>
      <GlobalFonts />
    </>
  );
}

export default App;
