import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getPokemonByAlfavetic, getPokemonByAttack, getPokemonByNewOrOld, getPokemonByType } from "../../Redux/actions/actions";
import Loader from "../Loaders/Loaders";
import Paginado from "../Paginado/Paginado";
import Pokemon from "../Pokemon/Pokemon";
import "./home.css"

export default function Home(){

    const dispatch = useDispatch();

    const myPokemons = useSelector((state)=> state.allPokemons)

    const [order, setOrder] = useState("")
    

    const [currentPage, setCuerrentPage] = useState(1)
    const [pokemonForPage, setPokemonForPage] = useState(12)
    
    const lastPokemon = currentPage * pokemonForPage;
    const firstPokemon = lastPokemon - pokemonForPage;
    
    const currrentPokemons = myPokemons.slice(firstPokemon,lastPokemon);


    const paginado = (pageNumber) => {
        setCuerrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(getAllPokemons())
    },[dispatch])
    

    function handelNewOrOld(e){
        e.preventDefault();
        dispatch(getPokemonByNewOrOld(e.target.value))
    }

    function handelByType(e){
        e.preventDefault();
        dispatch(getPokemonByType(e.target.value))
    }

    function handleByAttack(e){
        e.preventDefault();
        dispatch(getPokemonByAttack(e.target.value))
        setCuerrentPage(1)
        setOrder(e.target.value)
    }

    function handleByAlfaphetical(e){
        e.preventDefault();
        dispatch(getPokemonByAlfavetic(e.target.value))
        setCuerrentPage(1)
        setOrder(e.target.value)
    }
    
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

        if(myPokemons.length === 0){
            dispatch(getAllPokemons())
            setLoading(false)
            alert("Pokemon Not Found")
        };

    return (
        <div className="backGroundHome">
            <br />
            <div className="optionsHome">
                <select className="filters" defaultValue="notFound"  onChange={e => {handleByAlfaphetical(e)}}>
                    <option disabled value="notFound">Alphabetical Order</option>
                    <option value="a-z">A - Z</option>
                    <option value="z-a">Z - A</option>
                </select>
                <select className="filters" defaultValue="notFound" onChange={e => {handelNewOrOld(e)}}>
                    <option disabled value="notFound">Pokemons</option>
                    <option value="myPokemons">My Pokemons</option>
                    <option value="nativePokemons">Native Pokemons</option>

                </select>
                <select className="filters" defaultValue="notFound" onChange={e => {handleByAttack(e)}}>
                    <option disabled value="notFound">Attack</option>
                    <option value="max_Atck" >Attack Des </option>
                    <option value="min_Atck" >Attack Asc </option>
                </select>
                <select className="filters" defaultValue="notFound" onChange={e => {handelByType(e)}} >
                    <option disabled value="notFound">Types</option>
                    <option value="normal">🐾 Normal</option>
                    <option value="fighting">🥊 Fighting</option>|
                    <option value="flying">🦅 Flying</option>
                    <option value="poison">⚗️ Poison</option>
                    <option value="ground">🌎 Ground</option>
                    <option value="rock">🗿 Rock</option>
                    <option value="bug">🦟 Bug</option>
                    <option value="ghost">👻 Ghost</option>
                    <option value="steel"> 🔩 Steel</option>
                    <option value="fire">🔥 Fire</option>
                    <option value="water">💧 Water</option>
                    <option value="grass">🌱 Grass</option>
                    <option value="electric">⚡ Electric</option>
                    <option value="psychic">🔮 Psychic</option>
                    <option value="ice">🧊 Ice</option>
                    <option value="dragon">🐉 Dragon</option>
                    <option value="dark">⚫ Dark </option>
                    <option value="fairy">🧚‍♂️ Fairy</option>
                    <option value="shadow">👥 Shadow</option>
                    <option value="unknown">❓ Unknown</option>
                </select>
            </div>
            <div className="position">
            {
                currrentPokemons && currrentPokemons.map(elm => {
                    return(
                        <Pokemon
                        key={elm.id}
                        id={elm.id}
                        name={elm.name}
                        types={elm.types}
                        img={elm.img}
                        />
                        )
                    })
                }
            </div>
            <div className="paginadoHome">
                <Paginado
                pokemonForPage={pokemonForPage}
                myPokemons={myPokemons.length}
                paginado={paginado}
                />
            </div>
            <br />
        </div>
    )
}
}


