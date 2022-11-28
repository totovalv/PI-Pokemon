import { ADD_NEW_POKEMON, GET_ALL_POKEMONS, GET_ALL_TYPES_POKEMON, GET_POKEMON_BY_ALFAVETIC, GET_POKEMON_BY_ATTACK, GET_POKEMON_BY_NAME, GET_POKEMON_BY_TYPE, GET_POKEMON_DETAIL, GET_POKEMON_NEW_OLD } from "../actions/actions";

const initialState = {
    allPokemons: [],
    pokemonsPrueba: [],
    pokemonsTypes: [],
    detailPokemons: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemonsPrueba: action.payload
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                detailPokemons: action.payload,
            }
        case GET_POKEMON_NEW_OLD:
            const pokemons = state.pokemonsPrueba;
            const oldPokemons = pokemons.filter(elm => typeof (elm.id) === "number")
            const newPokemons = pokemons.filter(elm => typeof (elm.id) === "string")
            const pokemosFilter = action.payload === "all" ? pokemons : action.payload === "myPokemons" ? newPokemons : oldPokemons;
            return {
                ...state,
                allPokemons: pokemosFilter
            }

        case GET_POKEMON_BY_TYPE:
            const typePokemon = state.pokemonsPrueba;
            const byTypePokemon = typePokemon.filter(elm => elm.types.includes(action.payload))
            return {
                ...state,
                allPokemons: byTypePokemon
            }

        case GET_POKEMON_BY_ATTACK:
            const attack = state.pokemonsPrueba
            const pokemonsAscOrDesc = action.payload === "min_Atck" ? attack.sort((a, b) => {
                if (a.attack > b.attack) return 1
                if (a.attack < b.attack) return -1
                return 0
            }) : action.payload === "max_Atck" ?
                attack.sort((a, b) => {
                    if (a.attack > b.attack) return -1
                    if (a.attack < b.attack) return 1
                    return 0
                }) : action.payload === "notFoun" ? attack : state.allPokemons
            return {
                ...state,
                allPokemons: pokemonsAscOrDesc
            }

        case GET_POKEMON_BY_ALFAVETIC:
            const alfavetic = state.pokemonsPrueba
            const pokemonsOrderAlfavetic = action.payload === "a-z" ? alfavetic.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                return 0
            }) :
                alfavetic.sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                    return 0
                })
            return {
                ...state,
                allPokemons: pokemonsOrderAlfavetic
            }

        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                allPokemons: action.payload
            }
        
        case GET_ALL_TYPES_POKEMON:
            return{
                ...state,
                pokemonsTypes: action.payload
            }

        case ADD_NEW_POKEMON:
            return{
                ...state
            }

        default:
            return state
    }
}

export default rootReducer;

