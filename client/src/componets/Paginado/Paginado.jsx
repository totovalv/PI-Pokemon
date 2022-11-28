import React from "react";
import "./paginado.css"

export default function Paginado ({pokemonForPage,myPokemons,paginado}){
    const pageNumber = [];

    for(let i=1; i <= Math.ceil(myPokemons/pokemonForPage); i++){
        pageNumber.push(i);
    }

    return(
        <nav className="positionPag" >
                {
                    pageNumber.map((elm) => (
                        <div key={elm}>
                            <a className="aPag" onClick={()=>paginado(elm)}>
                                {elm}
                            </a>
                        </div>
                    ))
                }
        </nav>
    )

}