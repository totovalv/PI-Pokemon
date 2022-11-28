import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css"

export default function PrincipalPage() {

    return (
        <div className="principalImg">
            <div>
                <h1 className="prueba">Welcome</h1>
                <Link to="/pokemons" >
                    <button className="buttonLanding">Start</button>
                </Link>
            </div>
        </div>

    )
}

