import React, { useState} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router";


function NewProject () {

      let history = useHistory();

    const [projectName, setProjectName] = useState('')
    const [image, setImage] = useState('')
    const [github, setGithub] = useState('github.com')
    const [youtube, setYoutube] = useState('youtube.com')
    const [description, setDescription] = useState('What is the project about')
    const [collection, setCollection] = useState()
    const [likes, setLikes] = useState(0)
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const projects = {
          projectName,
          image,
          github,
          youtube,
          description,
          collection,
          likes,
          ongoing:true
        }
        fetch('/projects',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(projects)
        })
        .then(res => res.json())
        .then(json =>{
          if(json.error) {setErrors(json.error)}else{
            history.push("/projects")
          }
          
        })
    }
    return (
  
        <div className ="bg">
        <Form onSubmit={onSubmit}>
        <label>
          Project Name
          <br/>
          <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        </label>
        <label>
        Image  
        <br/>
          <input type="url" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
        Github
        <br/>
          <input type="url" value={github} onChange={(e) => setGithub(e.target.value)} />
        </label>
        <label>
        Youtube
        <br/>
          <input type="url" value={youtube} onChange={(e) => setYoutube(e.target.value)} />
        </label>
        <label>
        Collection
        <br/>
          <input type="text" value={collection} onChange={(e) => setCollection(e.target.value)} />
        </label>
        <label>
        Likes
        <br/>
          <input type="hidden" value={likes} onChange={(e) => setLikes(e.target.value)} />
        </label>
        <label>
        Description
        <br/>
          <textarea type="text" rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        
        <input type="submit" value="Submit Project" />
      </Form>
      {errors?errors.map(e => <div>{e}</div>):null}
  
        </div>
    )
}

export default NewProject;

const Form = styled.form `
    color: black;
    font-family: Andale Mono, monospace;
    font-size: 2em;
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
        font-family: 'Arnold Regular';
        font-size: 1em;
        background-color:#34bdeb;
        color:black;
    }
`
