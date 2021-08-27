import React, {useState} from "react";


function FavoriteCard({ favorite, setFavorites }) {
  const {id} = favorite;

  function deleteFavorite(){
    fetch(`/favorites/${id}`,
     { method: 'DELETE' })
     .then((r)=>{
      if (r.ok){
        handleDelete(favorite)
    }})
  }

const handleDelete = (deletedFavorite) =>{
    setFavorites((favorites)=>favorites.filter((favorite)=>favorite.id !== deletedFavorite.id))
  }

return (
    <div className="ui column" >
      <div>
      <div
        className="ui card"
        key={favorite.id}
      >
          <div class="card-body">
            <div className="header">
            <h2>{favorite.project.name}</h2>
          </div>
        <div className="pic" >
          <img alt="pic" src={favorite.project.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://static.thenounproject.com/png/2073332-200.png"}} />
        </div>
        
        <div className="content">
        
          <div className="meta text-wrap">
            <small>About this Project: {favorite.project.description}</small>
            <br></br>
            <br></br>
            <small>{favorite.project.github_link}</small>
            <br></br>
            <small>{favorite.project.youtube_link}</small>
            <br></br>
            <br></br>
            <small>{favorite.project.likes} Likes</small>
          </div>

          <span>
              <br></br>
              <button type='submit' class='favBtn' 
              onClick={deleteFavorite}
              >
                Remove from Favorites
              </button>
          </span>
        
        </div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;