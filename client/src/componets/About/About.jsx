import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="backAbout" >
            <div className="pruebaAbout">
                <div className="titlePokemon">
                </div>
                <Link to="/pokemons" >
                    <button className="buttonAboutHome">Home</button>
                </Link>
            </div>
            <div className="detailApp">
                <p>
                    In this app you will find all the information about some pokemons (40) where initially on the HOME page the pokemon will be rendered with its respective image, name and type, there you can filter by TYPE of pokemon, ATTACK ascending and descending, CREATED by you or NATIVE from the pokedex and you can organize them in ALPHABETICAL order.
                    You can also create your own pokemon (CREATE POKEMON) and assign them all the necessary characteristics to be the best pokemon
                    and finally you will find the DETAIL of each pokemon with their respective characteristics in the option (See More).

                    THANK YOU FOR YOUR VISIT
                </p>
            </div>
        </div>
    )
}