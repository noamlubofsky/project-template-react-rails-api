import React from "react";
import {useState, useEffect} from "react";
import {useHistory} from "react-router";
import ProjectCard from "./ProjectCard";
import Header from "./Header";

function ProjectContainer () {
    const [projects, setProjects] = useState([])
    const [errors, setErrors] = useState([])

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
        {/* <h1>Available Projects</h1> */}
        {/* <span>
        <button class="glow-on-hover" type="button" onClick={handleClick}>New Project</button>
        <button class="glow-on-hover" type="button" onClick={toFavorites}>My Favorites</button>
        </span> */}
        <br></br>
        {projects.map(project => (
          <ProjectCard project={project} handleUpdateProject={handleUpdateProject}/>
        ))}
        </div>
     
    )
}
export default ProjectContainer;