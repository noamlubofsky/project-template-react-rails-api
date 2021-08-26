import React, { useState} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router";


function NewProject () {

      let history = useHistory();

    const [name, setProjectName] = useState('')
    const [image, setImage] = useState('')
    const [github_link, setGithub] = useState('')
    const [youtube_link, setYoutube] = useState('')
    const [description, setDescription] = useState('')
    const [collection, setCollection] = useState()
    const [likes, setLikes] = useState(0)
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const projects = {
          name,
          image,
          github_link,
          youtube_link,
          description,
          // collection,
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

    const toProjects= () => {
      history.push("/projects")
    }

    return (
  
        <div className ="bg">
        <Form onSubmit={onSubmit}>
        <label>
          Project Name*
          <br/>
          <input type="text" value={name} onChange={(e) => setProjectName(e.target.value)} />
        </label>
        <label>
        Image  
        <br/>
          <input type="url" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
        Github Link*
        <br/>
          <input type="url" value={github_link} onChange={(e) => setGithub(e.target.value)} />
        </label>
        <label>
        Youtube Link
        <br/>
          <input value={youtube_link} onChange={(e) => setYoutube(e.target.value)} />
        </label>
        {/* <label>
        Collection
        <br/>
          <input type="text" value={collection} onChange={(e) => setCollection(e.target.value)} />
        </label> */}
        {/* <label>
        Likes
        <br/>
          <input type="hidden" value={likes} onChange={(e) => setLikes(e.target.value)} />
        </label> */}
        <label>
        Project Description
        <br/>
          <textarea type="text" rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        
        <button type="submit" class="favBtn">Submit Project</button>
        <br></br>
        <button type="button" onClick={toProjects} class="favBtn">Back to Projects </button>

      </Form>
      {errors?errors.map(e => <div>{e}</div>):null}
  
        </div>
    )
}

export default NewProject;

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
    input[type=submit]{
        font-family: 'Monospace'; 
        font-size: large;
        background-color:#black;
        color:navy;
    }
`
