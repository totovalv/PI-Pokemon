 import axios from "axios"
 export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
 export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
 export const GET_POKEMON_NEW_OLD = "GET_POKEMON_NEW_OLD";
 export const GET_POKEMON_BY_TYPE = "GET_POKEMON_BY_TYPE"; 
 export const GET_POKEMON_BY_ATTACK = "GET_POKEMON_BY_ATTACK";
 export const GET_POKEMON_BY_ALFAVETIC = "GET_POKEMON_BY_ALFAVETIC";
 export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
 export const GET_ALL_TYPES_POKEMON = "GET_ALL_TYPES_POKEMON";
 export const ADD_NEW_POKEMON = "ADD_NEW_POKEMON";
 


export const getAllPokemons = () =>{
    return function (dispatch){
        fetch("http://localhost:3001/pokemons")
        .then((response)=>response.json())
        .then(json => dispatch({
            type: GET_ALL_POKEMONS,
            payload: json
        }))
    }
}

export const getPokemonDetail = (id) =>{
    return function (dispatch){
        fetch(`http://localhost:3001/pokemons/${id}`)
        .then((response)=>response.json())
        .then(json => dispatch({
            type: GET_POKEMON_DETAIL,
            payload: json
        }))
    }
}

export const getPokemonByNewOrOld = (status) =>{
    return {
        type: GET_POKEMON_NEW_OLD,
        payload: status
    }
}

export const getPokemonByType = (type) => {
    return{
        type: GET_POKEMON_BY_TYPE,
        payload: type
    }
}

export const getPokemonByAttack = (attack) => {
    return{
        type: GET_POKEMON_BY_ATTACK,
        payload: attack
    }
}

export const getPokemonByAlfavetic = (name) => {
    return{
        type: GET_POKEMON_BY_ALFAVETIC,
        payload: name
    }
}

export const getPokemonByName = (name) =>{
    return function(dispatch){
        fetch(`http://localhost:3001/pokemons?name=${name}`)
        .then((response) => response.json())
        .then(json => dispatch({
            type: GET_POKEMON_BY_NAME,
            payload: json
        }))
    }
}

export const getAllTypesPokemon = () => {
    return function(dispatch){
        fetch("http://localhost:3001/types")
        .then((response)=>response.json())
        .then(json => dispatch({
            type: GET_ALL_TYPES_POKEMON,
            payload: json
        }))
    }
}

export const addNewPokemon = (payload) =>{
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/pokemons",payload)
        return response
    }
}







