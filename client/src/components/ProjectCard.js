
import React, {useState} from "react";

function ProjectCard({ project, handleUpdateProject }) {
    const [liked, setLiked] = useState(false)
    const [favorite, setFavorite] = useState(false)
    const {id} = project;

    function toggleLike() {
        const updateObj = {
            likes: project.likes + 1,
        };

        setLiked(!liked)

        {!liked ? 
            fetch(`/projects/${id}/like`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
          })
            .then((r) => r.json())
            .then((updatedProject) => {
              handleUpdateProject(updatedProject);
            }) 
            :
            fetch(`/projects/${id}/unlike`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(updateObj),
              })
                .then((r) => r.json())
                .then((updatedProject) => {
                  handleUpdateProject(updatedProject);
                });
            }
    }

    const toggleFavorite = () => {
        setFavorite(!favorite)
    }

  return (
    <div className="ui column" >
      <div>
      <div
        className="ui card"
        key={project.id}
      >
          <div class="card-body">
            <div className="header">
            <h2>{project.name}</h2>
          </div>
        <div className="pic" >
          <img alt="pic" src={project.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://static.thenounproject.com/png/2073332-200.png"}} />
        </div>
        
        <div className="content">
        
          <div className="meta text-wrap">
            <small>About this Project: {project.description}</small>
            <br></br>
            <br></br>
            <small>{project.github_link}</small>
            <br></br>
            <small>{project.youtube_link}</small>
            <br></br>
            <br></br>
            <small>{project.likes} Likes</small>
          </div>

          <span>
              <br></br>
              <button type='submit' class='likeBtn' onClick={toggleLike}>
                {!liked ? '♡' : '💙'}
              </button>
              <button class='favBtn' onClick={toggleFavorite}>
                  {!favorite ? 'Add to Favorites' : 'Remove from Favorites'}
                  </button>
          </span>
        
        </div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;