import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../Redux/actions/actions";
import "./nav.css"

export default function Nav() {

    const dispatch = useDispatch()

    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllPokemons());
    }


        return (
            <div className="positionNav"  >
                <SearchBar />
                <div className="positionButtonCreate">
                    <Link to="/pokemonCreate" >
                        <button className="buttonCreate">Create Pokemon</button>
                    </Link>
                </div>
                <div className="positionButtonCreate">
                    <button className="buttonSearch" onClick={e => { handleClick(e) }} >
                        Refresh
                    </button>
                </div>
                <div className="positionButtonCreate">
                    <Link to="/about" >
                        <button className="buttonAbout">About</button>
                    </Link>
                </div>
            </div>
        )
    }
