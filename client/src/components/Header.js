import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useHistory} from "react-router";

function Header({user,setUser}) {
  let history = useHistory();

   function handleLogout(){
    window.location.href="/"
   }

   function handleClick(){
    history.push("/projects/new")
  }

  function toFavorites(){
    history.push("/favorites")
  }

  function toProjects(){
    history.push("/projects")
  }
    return (
        <> 

         <h1>Git Projects</h1>
         <Nav>
          {/* <h3>{user?user.username:null}</h3>
          <h3 onClick={handleLogout}> {user?' Logout':null}</h3>   
           <Link to="/">Home</Link> */}
                <span>
        <button class="glow-on-hover" type="button" onClick={handleLogout}>Logout</button>
        <button class="glow-on-hover" type="button" onClick={toProjects}>Projects</button>
        <button class="glow-on-hover" type="button" onClick={handleClick}>New Project</button>
        <button class="glow-on-hover" type="button" onClick={toFavorites}>My Favorites</button>

        </span>
         </Nav>

        </>
    )
}

export default Header;


const Nav = styled.div `

  margin: auto 0 auto auto;
  font-size: 2em;
 a{
  padding:10px;
  color:black;
  text-decoration: none; 
  &:hover{
            color:yellowgreen;
        }
 }
 `