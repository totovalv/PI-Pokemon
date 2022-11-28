const axios = require("axios");
const { Pokemon, Type } = require("../db")

const url = "https://pokeapi.co/api/v2/pokemon?limit=40";
// const url = "https://pokeapi.co/api/v2/pokemon?limit=100";



const getAllPokemons = async () => {
    const pokemons = await axios.get(url);
    const allPokemons = pokemons.data

    const res = allPokemons.results.map((elm) => {
        return parseInt(elm.url.split("/")[6])
    })

    const resultado = await Promise.all(
        res.map(async (elm) => {
            return await getAllPokemonsById(elm)
        })
    )
    return resultado 

    // ruta para traerme pokemones de la api
}

const getAllPokemonsById = async (id) => {

    if (id.length > 15) {
        const dbResult = await Pokemon.findAll({
            where:{
                id:`${id}`
            },
            include:{
                model: Type,
                attributes:["name"],
                through:{
                    attributes:[]
                }
            }
        })

        let response = await dbResult?.map(pokemon => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                hp: pokemon.hp,
                attack: pokemon.attack,
                defense: pokemon.defense,
                speed: pokemon.speed,
                weight: pokemon.weight,
                height: pokemon.height,
                types: pokemon.types?.map(p => p.name),
                img: pokemon.img
            }
                });
        return response[0]

    // traigo los pokemones por id de la db


    } else {
        const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const result = pokemons.data;
        let obj = {
            id: result.id,
            name: result.name,
            hp: result.stats[0].base_stat,
            attack: result.stats[1].base_stat,
            defense: result.stats[2].base_stat,
            speed: result.stats[4].base_stat,
            height: result.height,
            weight: result.weight,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.id}.png`,
            types: result.types.map((elm) => {
                return elm.type.name 
            })
        }
        return obj
    // traigo lod pokemones de la api por id

    }


}

const getAllPokemonsDataBase = async () => {

    const dbResult = await Pokemon.findAll({
        include: {
            model: Type,
            atributes: ["name"],
            through: {
                attributes: [],
            },
        },
    })

    let response = await dbResult?.map(pokemon => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            hp: pokemon.hp,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            weight: pokemon.weight,
            height: pokemon.height,
            types: pokemon.types?.map(p => p.name),
            img: pokemon.img
        }
            });


    return response
}

const getAllPokemonsByNameApi = async (name) => {

    const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const results = pokemons.data;

    let obj = {
        name: results.name,
        id: results.id,
        hp: results.stats[0].base_stat,
        attack: results.stats[1].base_stat,
        defense: results.stats[2].base_stat,
        speed: results.stats[4].base_stat,
        height: results.height,
        weight: results.weight,
        img: results.sprites.other.home.front_default,
        type: results.types.map((elm) => {
            return elm.type.name
        })
    }
    return obj
}

const listAllPokemons = async () => {
    try {
        const resApi = await getAllPokemons()
        const resDataBase = await getAllPokemonsDataBase()
        const all = resDataBase.concat(resApi)
        return all
    } catch (error) {
        console.error(error)
    }
}


const getAllTypes = async () => {
    const types = await axios.get("https://pokeapi.co/api/v2/type")
    let result = types.data.results

    result = result.map((elm) => {
        return {
            name:elm.name
        }
    })
    return result;

}

module.exports = {
    getAllPokemons,
    getAllPokemonsById,
    getAllPokemonsByNameApi,
    getAllPokemonsDataBase,
    getAllTypes,
    listAllPokemons,
}

