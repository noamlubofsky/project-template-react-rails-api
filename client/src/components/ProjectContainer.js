import React from "react";
import {useState, useEffect} from "react";
import {useHistory} from "react-router";
import ProjectCard from "./ProjectCard";

function ProjectContainer () {
    const [projects, setProjects] = useState([])
    let history = useHistory();

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

    return (
        <div>
        <h1>Available Projects</h1>
        {projects.map(project => (
          <ProjectCard project={project} handleUpdateProject={handleUpdateProject}/>
        ))}
        </div>
    )
}
export default ProjectContainer;