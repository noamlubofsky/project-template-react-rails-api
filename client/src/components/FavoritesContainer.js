import React from "react";
import {useState, useEffect} from "react";
import {useHistory} from "react-router";
import FavoriteCard from "./FavoriteCard";
import Header from "./Header";
import styled from 'styled-components';


function ProjectContainer ({user, favorites, setFavorites}) {
    // const [favorites, setFavorites] = useState([])
//     const [ search, setSearch ] = useState('')

//     const handleChange = (e) => {
//       setSearch(e.target.value)
//     }
//     const searchFilterProjects = favorites.filter(project => 
//       project.name.toLowerCase().includes(search.toLowerCase())
//   ); 

    let history = useHistory();

    // function handleClick(){
    //   history.push("/projects/new")
    // }

    // function toFavorites(){
    //   history.push("/favorites")
    // }

    useEffect(() => {
          fetch("/favorites")
          .then(res=>res.json())
          .then((data) => setFavorites(data));
    }, []);

    //   function handleUpdateProject(updatedProject) {
    //     const updatedProjectsArray = projects.map((project) => {
    //       return project.id === updatedProject.id ? updatedProject : project;
    //     });
    //     setProjects(updatedProjectsArray);
    //   }

    //   console.log(projects)
    // function addToFavorites() {
    //   fetch('/favorites',{
    //     method:'POST',
    //     headers:{'Content-Type': 'application/json'},
    //     body:JSON.stringify(projects)
    //   })
    //   .then(res => res.json())
    //   .then(json =>{
    //     if(json.error) {setErrors(json.error)}else{
    //       history.push("/favorites")
    //     }
        
    //   })
    // }

    return (
             <div>
               <Header />
            <div className="ui five column grid"></div>
            {/* <Form >
                <input onChange = {handleChange} className="loginForm"
                 id="searchbox" type="text" placeholder="Search Projects"/>
            </Form> */}
        <br></br>
        {favorites.map(favorite => (
          <FavoriteCard favorite={favorite} user={user} />
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