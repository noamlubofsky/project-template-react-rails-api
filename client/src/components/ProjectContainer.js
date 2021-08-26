import React from "react";
import {useState, useEffect} from "react";
import {useHistory} from "react-router";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
import styled from 'styled-components';


function ProjectContainer () {
    const [projects, setProjects] = useState([])
    const [errors, setErrors] = useState([])

    const [ search, setSearch ] = useState('')
    const handleChange = (e) => {
      setSearch(e.target.value)
    }
    const searchFilterProjects = projects.filter(project => 
      project.name.toLowerCase().includes(search.toLowerCase())
  ); 

    let history = useHistory();

    // function handleClick(){
    //   history.push("/projects/new")
    // }

    // function toFavorites(){
    //   history.push("/favorites")
    // }

    useEffect(() => {
        function fetchItems(){
          fetch("/projects")
          .then(res=>res.json())
          .then(projects => {
            if(projects.error){
                history.push(`/sign_up`);
              }else{
                setProjects(projects)
              }
          })
        }
        fetchItems();
      },[]);

      function handleUpdateProject(updatedProject) {
        const updatedProjectsArray = projects.map((project) => {
          return project.id === updatedProject.id ? updatedProject : project;
        });
        setProjects(updatedProjectsArray);
      }

    //   console.log(projects)
    function addToFavorites() {
      fetch('/favorites',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(projects)
      })
      .then(res => res.json())
      .then(json =>{
        if(json.error) {setErrors(json.error)}else{
          history.push("/favorites")
        }
        
      })
    }

    return (
             <div>
               <Header />
            <div className="ui five column grid"></div>
            <Form >
                <input onChange = {handleChange} className="loginForm"
                 id="searchbox" type="text" placeholder="Search Projects"/>
            </Form>
        {/* <h1>Available Projects</h1> */}
        {/* <span>
        <button class="glow-on-hover" type="button" onClick={handleClick}>New Project</button>
        <button class="glow-on-hover" type="button" onClick={toFavorites}>My Favorites</button>
        </span> */}
        <br></br>
        {searchFilterProjects.map(project => (
          <ProjectCard project={project} handleUpdateProject={handleUpdateProject}/>
        ))}
        </div>
     
    )
}
export default ProjectContainer;

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
        margin-top:50px

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
