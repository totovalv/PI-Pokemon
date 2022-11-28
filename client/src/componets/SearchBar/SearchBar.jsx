import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../Redux/actions/actions";
import "./searchBar.css"

export default function SearchBar (){
    
    const dispatch = useDispatch()

    const [name, setName] = useState("")

    function handleInpuntChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getPokemonByName(name))
        setName("")
    }

    

        return(
            <div className="positionSb">
            <input
            className="searchBar" 
            onChange={(e) => handleInpuntChange(e)}
            type="text"
            value={name} 
            placeholder="Pokemon..." />
            <button className="buttonSb" type="sumbmit" onClick={(e) => {handleSubmit(e)}} >🔎</button>
        </div>
    )
}