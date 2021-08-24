import styled from 'styled-components'
import {Link} from "react-router-dom";

function Header({user,setUser}) {
   function handleLogout(){
     fetch('/logout')
     .then(() => setUser(null))
   }
    return (
        <> 

         <h1>Project Keeper</h1>
         <Nav>
          <h3>{user?user.username:null}</h3>
          <h3 onClick={handleLogout}> {user?' Logout':null}</h3>   
           <Link to="/">Home</Link>
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