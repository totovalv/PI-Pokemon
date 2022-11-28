import React from "react";
import { Link } from "react-router-dom";
import "./pokemon.css";

export function Pokemon({id,name,hp,attack,defense,speed,height,weight,img,types}){

        
    return(
        <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src={img}/>
          </div>
          <div class="contentBx">
            <h2>{name}</h2>
            <div class="color">
              <h3>Type :</h3>
              {
                types.map(e => {return e === "fire"? <span>🔥</span>: e === "flying"?<span>🦅</span>: e === "normal"? <span>🐾</span>: e === "fighting"?<span>🥊</span>:
                e === "poison"?<span>⚗️</span>: e === "ground"?<span>🌎</span>: e === "rock"?<span>🗿</span>: e === "bug"?<span>🦟</span>: e === "ghost"?<span>👻</span>:
                e === "steel"?<span>🔩</span>:e === "water"?<span>💧</span>: e === "grass"?<span>🌱</span>:e === "electric"?<span>⚡</span>:e === "psychic"?<span>🔮</span>:
                e === "ice"?<span>🧊</span>: e === "dragon"?<span>🐉</span>: e === "dark"?<span>⚫</span>: e === "fairy"?<span>🧚‍♂️</span>: e === "unknown"?<span>❓</span>:
                e === "shadow"?<span>👥</span>:<span></span>
                })
              }
              <span></span>
              <span></span>
            </div>
            <Link to={`pokemons/pokemonDetail/${id}`}>
            <a href="#">See More</a>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Pokemon