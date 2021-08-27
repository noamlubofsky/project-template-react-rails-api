import styled from 'styled-components'
import React, {useState} from 'react'
import {useHistory} from "react-router";

function Authorize({setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin]  = useState('')
    const [errors, setErrors] = useState([])
    let history = useHistory();

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        console.log(user)
        let API_PATH 
        login?API_PATH = 'sessions' : API_PATH = 'users'
        fetch(`/${API_PATH}`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.error){
                setErrors(json.error)
            }else {
                setUser(json)
                history.push("/projects")
            }
        })
    }
    return (
        <> 
        <div className = "App">
        <h1> Welcome to </h1>
        <h1> Git Projects </h1>
        <h3> A New Way to Explore </h3>
        <h3> and Share Github Projects </h3>

        <Form onSubmit={onSubmit}>
        <label>
          Username
          <br/>
          <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="loginForm" />
        </label>
        <br/>
        <label>
         Password
        <br/>
        <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="loginForm" />
        </label>
        <br/>
        <button class="glow-on-hover" value="Login" type="submit" onClick={()=> setLogin(true)}>Login</button>
        <br></br>
        <button class="glow-on-hover" value="Sign up" type="submit">Sign Up</button>

        {/* <input type="submit" value="Sign up" className="button" class="glow-on-hover"/>
        <input type="submit" value="Login" onClick={()=> setLogin(true)} className="button" class="glow-on-hover"/> */}
      </Form>
      {errors?errors.map(e => <Errors>{e}</Errors>):null}
        </div>
        </>
    )
}

export default Authorize;
const Errors = styled.div `
color: white;`

const Form = styled.form `
    color: white;
    font-family: Andale Mono, monospace;
    font-size: 2em;
    margin:auto;
    padding:auto;
    width:50%;
    display:flex;
    flex-direction:column;
    input{
        width: 100%;
        position: relative;
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: calc(1px + 1vw);
        font-weight: 700;
        color: black;
        letter-spacing: 0.02em;
        text-shadow: 0 0 0.15em #grey;
        user-select: none;
        white-space: nowrap;
        filter: blur(0.007em);
        border-radius:10px;

    }
    textarea{
        width: 100%;
    }
    input[type=submit]{
        font-family: 'Monospace'; 
        font-size: large;
        background-color:#black;
        color:navy;
    }
`