import React from "react";
import {useState, useEffect} from "react";
import {useHistory} from "react-router";
import ProjectCard from "./ProjectCard";

function ProjectContainer () {
    const [projects, setProjects] = useState([])

    const [ search, setSearch ] = useState('')
    const handleChange = (e) => {
      setSearch(e.target.value)
    }
    const searchFilterProjects = projects.filter(project => 
      project.name.toLowerCase().includes(search.toLowerCase())
  ); 
    let history = useHistory();

    function handleClick(){
      history.push("/projects/new")
    }

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
        body:JSON.stringify(favorites)
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
            <div className="ui five column grid"></div>
            <h1>Available Projects</h1>
           <button onClick={handleClick}>New Project</button>
        <div className ="project-container">
            <form >
                <input onChange = {handleChange}
                 id="searchbox" type="text" placeholder="Search Projects"/>
            </form>
            </div>
        <br></br>
        {/* {projects.map(project => (
          <ProjectCard project={project} handleUpdateProject={handleUpdateProject}/>
        ))} */}
        <div>
            <h1 style={{color: "black"}}>Projects</h1>
                {searchFilterProjects.map(project => {
                    return (
                    <ProjectCard
                    project = {project}
                    handleUpdateProject={handleUpdateProject}
                    handleClick={handleClick}
                    handleAdd={addToFavorites}
                    />
                )
                })
                }
            </div>  
        </div>
     
    )
}
export default ProjectContainer;