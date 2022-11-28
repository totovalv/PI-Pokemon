import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../Redux/actions/actions";
import { useEffect, useState } from "react";
import "./pokemonDetail.css"
import Loader from "../Loaders/Loaders";

export default function PokemonDetail(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonDetail(props.match.params.id))
    }, [dispatch])


    const pokemonDetail = useSelector((state) => state.detailPokemons)
    console.log(pokemonDetail)

    const [loading , setLoading] = useState(false)

    const  changeState = () => {
        setTimeout(() => {
            setLoading(true)
        }, 4000);
    }

    if(loading === false){
        changeState()
        return(
            <Loader/>
        )
    } else{

    return (
        <div className="backDetail">
            <div className="containDetail">
                <h1 className="namePokemon">{pokemonDetail.name}</h1>
                {
                    typeof(pokemonDetail.id) === "string"? <img className="positionImg" width="350px" src={pokemonDetail.img} alt={pokemonDetail.name} />: 
                    <img className="positionImg" width="300px" src={pokemonDetail.img} alt={pokemonDetail.name} />
                }
                <div className="positionDetail">
                    <h3 className="textDetail2">{pokemonDetail.types + " "}</h3>
                    <h4 className="textDetail">Hp: {pokemonDetail.hp}</h4>
                    <h4 className="textDetail">Attack: {pokemonDetail.attack}</h4>
                    <h4 className="textDetail">Defense: {pokemonDetail.defense}</h4>
                    <h4 className="textDetail">Speed: {pokemonDetail.speed}</h4>
                    <h4 className="textDetail">Height: {pokemonDetail.height}</h4>
                    <h4 className="textDetail">Weight: {pokemonDetail.weight}</h4>
                </div>
            </div>
            <div className="buttonDetail">
                <Link to="/pokemons">
                    <button className="styleButton">Home</button>
                </Link>
            </div>
        </div>
    )
}
}