const { Router } = require('express');
const { getAllPokemonsById, listAllPokemons } = require('../controllers/controllers');
const { Pokemon, Type } = require("../db")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const pokemonsRoutes = Router();

pokemonsRoutes.get("/", async (req, res) => {
    const { name } = req.query
    const allPokemons = await listAllPokemons()
    try {
        if (name) {
            const exist = await allPokemons.filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(name.toLowerCase())
            })
            return res.status(200).send(exist)
        } else {
            return res.status(200).send(allPokemons)
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }
})


pokemonsRoutes.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await getAllPokemonsById(id)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(404).send("Id Not Found")
    }
})

pokemonsRoutes.post("/", async (req, res) => {
    try {
        const { name, hp, attack, defense, speed, height, weight, types} = req.body

        const allPokemons = await listAllPokemons()

        const exist = await allPokemons.filter((pokemon) => {
            return pokemon.name === name
        })
        if (!name || !hp || !attack || !defense || !speed || !height || !weight) {
            throw new Error("Incomplete Parameters")
        }
        else if (exist.length !== 0){
            throw new Error("Pokemon Exist")
        }
        else {
            let typeFind = await Type.findAll({ where: { name: types } })
            const newPokemon = await Pokemon.create({ name, hp, attack, defense, speed, height, weight})
            await newPokemon.addTypes(typeFind)
            return res.status(200).send(newPokemon)
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

pokemonsRoutes.delete("/:id", async (req,res) => {
    try {
        const { id } = req.params
        const deletedPokemon = await Pokemon.findByPk(id)
        if(!id || !deletedPokemon){
            throw new Error("Pokemon Not Found")
        } else {
            deletedPokemon.destroy()
            return res.status(200).send(`Pokemon ${deletedPokemon.name} deleted Successfully`)
        }
    } catch (error) {
        return res.status(400).send(error.message)
    }
})




module.exports = pokemonsRoutes;

