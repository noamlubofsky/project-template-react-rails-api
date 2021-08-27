import React from "react";
import {useState, useEffect} from "react";
import {useHistory} from "react-router";
import FavoriteCard from "./FavoriteCard";
import Header from "./Header";
import styled from 'styled-components';


function FavoritesContainer ({user, favorites, setFavorites}) {


    let history = useHistory();

    useEffect(() => {
        function fetchItems(){
          fetch("/favorites")
          .then(res=>res.json())
          .then(projects => {
            if(projects.error){
                history.push(`/sign_up`);
              }else{
                setFavorites(projects)
              }
          })
        }
        fetchItems();
      },[]);


    //   const myFavorites = favorites.filter(favorite => 
    //     favorite.user_id !== user.id
    // ); 


    return (
             <div>
               <Header />
            <div className="ui five column grid"></div>
            {favorites.map(favorite => (
          <FavoriteCard favorite={favorite} setFavorites={setFavorites}/> 
        ))}
        <br></br>
        </div>
    )
}
export default FavoritesContainer;

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