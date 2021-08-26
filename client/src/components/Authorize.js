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
        <h1> Login Below </h1>
        <Form onSubmit={onSubmit}>
        <label>
          Username
          <br/>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br/>
        <label>
         Password
        <br/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br/>
        <input type="submit" value="Sign up!" />
        <input type="submit" value="Login!" onClick={()=> setLogin(true)} />
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
    font-size: .5em;
    margin:auto;
    padding:auto;
    width:50%;
    display:flex;
    flex-direction:column;
    input{
        width: 100%;
    }
    textarea{
        width: 100%;
    }
    input[type=submit]{
        font-family: 'Bebas Neue', cursive; 
        font-size: 1em;
        background-color:#34bdeb;
        color:white;
    }
`