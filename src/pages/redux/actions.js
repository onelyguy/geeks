import { types } from "./types"

function getPokemon(pokemons) {
    return {
        type: types.POKEMON,
        payload: pokemons
    }
}

export function fetchPokemonAction() {
    return async function (dispatch) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const {data} = await response.json()
        dispatch(getPokemon(data))
    }
}