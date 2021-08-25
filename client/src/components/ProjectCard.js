
import React, {useState} from "react";

function ProjectCard({ project, handleUpdateProject }) {
    const [liked, setLiked] = useState(false)
    const [favorite, setFavorite] = useState(false)

    const toggleLike = (id) => {
        setLiked(!liked)
        {!liked ? fetch(`/projects/${id}/like`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ }),
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
                body: JSON.stringify({ }),
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
    <div className="ui column">
      <div
        className="ui card"
        key={project.id}
      >
            <div className="header">
            <h2>{project.name}</h2>
          </div>
        <div className="pic" >
          <img alt="pic" src={project.image} />
        </div>
        
        <div className="content">
        
          <div className="meta text-wrap">
            <small>{project.description}</small>
            <br></br>
            <small>{project.github_link}</small>
            <br></br>
            <small>{project.youtube_link}</small>
            <br></br>
            <small>{project.likes} Likes</small>
          </div>

          <span>
              <button className='likeBtn' onClick={toggleLike}>
                {!liked ? '♡' : '❤️'}
              </button>
              <button className='likeBtn' onClick={toggleFavorite}>
                  {!favorite ? 'Add to Favorites' : 'Remove from Favorites'}
                  </button>
          </span>
        
        </div>


        
      </div>
    </div>
  );
}

export default ProjectCard;