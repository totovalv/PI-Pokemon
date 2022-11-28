import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { addNewPokemon, getAllTypesPokemon } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import "./pokemonCreate.css"

function validate(input) {
    let err = {}
    let RegEXP = /[`ª!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    if (!input.name) {
        err.name = "Name Is Required"
    }
    else if (RegEXP.test(input.name)){
        err.name = "Special characters are not accepted"
    }
    else if (!input.hp) {
        err.hp = "Hp Is Required"
    }
    else if (input.hp > 150) {
        err.hp = "Max 150 Points"
    }
    else if (!input.attack) {
        err.attack = "Attack Is Required"
    }
    else if (input.attack > 130) {
        err.attack = "Max 130 Points"
    }
    else if (!input.defense) {
        err.defense = "Defense Is Required"
    }
    else if (input.defense > 130) {
        err.defense = "Max 130 Points"
    }
    else if (!input.speed) {
        err.speed = "Speed Is Required"
    }
    else if (input.speed > 110) {
        err.speed = "Max 110 Points"
    }
    else if (!input.height) {
        err.height = "Height Is Required"
    }
    else if (input.height > 15) {
        err.height = "Max 15 Meters"
    }
    else if (!input.weight) {
        err.weight = "Weight Is Required"
    }
    else if (input.weight > 3000) {
        err.weight = "Max 3000 Kilograms"
    }
    else if (!input.types.length) {
        err.types = "Choose 1 Or 2 Types"
    }
    return err
}

export default function PokemonCreate() {

    const dispatch = useDispatch();
    const history = useHistory();
    const pokemonsTypes = useSelector((state) => state.pokemonsTypes)
    const [err, setErrors] = useState({})
    const [input, setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: []
    })

    useEffect(() => {
        dispatch(getAllTypesPokemon())
    }, [])


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleDelete(type) {
        setInput({
            ...input,
            types: input.types.filter(e => e !== type)
        })
    }


    function handleSelectType(e) {
        e.preventDefault()
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
        setErrors(validate({
            ...input,
            types: [...input.types, e.target.value]
        }))

        console.log(input.types)
    }


    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addNewPokemon(input))
        alert(`The Pokemon ${input.name} Created Succesfuly`)
        setInput({
            name: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: []
        })
        history.push("/pokemons")
    }

    console.log(input)


    

    return (
        <div className="back">
            <section className="title">
                <h1>Create Your Pokemon</h1>
                <Link to="/pokemons">
                    <button className="home"> Go Back </button>
                </Link>
            </section>
            <div className="body" >
                <form onSubmit={(e) => handleSubmit(e)}>

                    <section>
                        <div>
                            <label className="name">Name</label>
                            <input
                                className="input"
                                type="text"
                                placeholder=" Pokemon Name"
                                value={input.name}
                                name="name"
                                onChange={(e) => handleChange(e)}
                            />
                            {err.name && (<a className="a" >{err.name}</a>)}
                        </div>
                        <br />
                    </section>

                    <section>
                        <div>
                            <label className="hp" >Hp </label>
                            <input
                                className="input"
                                type="number"
                                placeholder=" Health Points"
                                value={input.hp}
                                name="hp"
                                onChange={(e) => handleChange(e)}
                            />
                            {err.hp && (<a className="a">{err.hp}</a>)}
                        </div>
                        <br />
                    </section>

                    <section>
                        <div>
                            <label className="atk">Attack </label>
                            <input
                                className="input"
                                type="number"
                                placeholder=" num"
                                value={input.attack}
                                name="attack"
                                onChange={(e) => handleChange(e)}
                            />
                            {err.attack && (<a className="a">{err.attack}</a>)}
                        </div>
                        <br />
                    </section>

                    <section>
                        <div>
                            <label className="def">Defense </label>
                            <input
                                className="input"
                                type="number"
                                placeholder=" num"
                                value={input.defense}
                                name="defense"
                                onChange={(e) => handleChange(e)}
                            />
                            {err.defense && (<a className="a">{err.defense}</a>)}
                        </div>
                        <br />
                    </section>

                    <section>
                        <div>
                            <label>Speed </label>
                            <input
                                className="input"
                                type="number"
                                placeholder=" num"
                                value={input.speed}
                                name="speed"
                                onChange={(e) => handleChange(e)}
                            />
                            {err.speed && (<a className="a">{err.speed}</a>)}
                        </div>
                        <br />
                    </section>

                    <section>
                        <div>
                            <label>Height </label>
                            <input
                                className="input"
                                type="number"
                                placeholder=" num"
                                value={input.height}
                                name="height"
                                onChange={(e) => handleChange(e)}
                            />
                            {err.height && (<a className="a">{err.height}</a>)}
                        </div>
                        <br />
                    </section>

                    <section>
                        <div>
                            <label className="wgt">Weight </label>
                            <input
                                className="input"
                                type="number"
                                placeholder=" num"
                                value={input.weight}
                                name="weight"
                                onChange={(e) => handleChange(e)}
                            />
                            {err.weight && (<a className="a">{err.weight}</a>)}
                        </div>
                        <br />
                    </section>


                    <section>
                        <label>Types</label>
                        <select className="select" disabled={input.types.length >= 2 ? true : false} onChange={e => handleSelectType(e)}>
                            {pokemonsTypes.map((e, index) => (

                                <option className="option" disabled={input.types.includes(e.name) === false ? false : true} value={e.name} key={index}>
                                    
                                {e.name === "fire"? "🔥" + e.name: e.name === "flying"? "🦅" + e.name: e.name === "normal"? "🐾" + e.name: e.name === "fighting"? "🥊" + e.name:
                                e.name === "poison"?"⚗️" + e.name: e.name === "ground"?"🌎" + e.name: e.name === "rock"? "🗿" + e.name: e.name === "bug"?"🦟" + e.name: e.name === "ghost"? "👻" + e.name: 
                                e.name === "steel"?"🔩" + e.name :e.name === "water"?"💧" + e.name: e.name === "grass"? "🌱" + e.name: e.name === "electric"?"⚡" + e.name: e.name === "psychic"? "🔮" + e.name:
                                e.name === "ice"?"🧊" + e.name: e.name === "dragon"?"🐉" + e.name: e.name === "dark"? "⚫" + e.name: e.name === "fairy"?"🧚‍♂️" + e.name: e.name === "unknown"? "❓" + e.name:
                                e.name === "shadow"?"👥" + e.name:e.name}
                                
                                </option>
                            ))}
                        </select>

                        {err.types && (<a className="a">{err.types}</a>)}
                        
                        <button className="button2" type="submit" disabled={!input.name || err.name || err.hp || err.attack || err.defense || err.speed || err.height || err.height || err.weight || err.types || input.types.length === 0 ? true : false} >CreatePokemon</button>



                        {input.types.map(e => <div className="divtType"><p>{e === "fire"? e + "🔥": e === "flying"?e + "🦅": e === "normal"? e +  "🐾": e === "fighting"? e +  "🥊":
                                e === "poison"? e + "⚗️": e === "ground"?e + "🌎": e === "rock"?e +  "🗿": e === "bug"? e + "🦟": e === "ghost"? e + "👻": 
                                e === "steel"?e + "🔩":e === "water"?e + "💧": e === "grass"?e +  "🌱": e === "electric"? e + "⚡": e === "psychic"?e +  "🔮":
                                e === "ice"?e + "🧊" : e === "dragon"?e + "🐉": e === "dark"?e +  "⚫": e === "fairy"? e + "🧚‍♂️": e === "unknown"?e +  "❓":
                                e === "shadow"? e + "👥":e}
                                
                                </p><button type="button" className="botonX" onClick={() => handleDelete(e)}> X </button></div>)}


                    </section>
                </form>
            </div>
        </div>
    )

}
