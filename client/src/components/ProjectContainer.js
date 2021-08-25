import React from "react";
import {useState, useEffect} from "react";
import {useHistory} from "react-router";
import ProjectCard from "./ProjectCard";

function ProjectContainer () {
    const [projects, setProjects] = useState([])
    let history = useHistory();

    useEffect(() => {
        function fetchItems(){
          fetch('/productions')
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

      console.log(projects)

    return (
        <div>
        <h1>Available Projects</h1>
        <ProjectCard setProjects={projects} />
        </div>
    )
}
export default ProjectContainer;