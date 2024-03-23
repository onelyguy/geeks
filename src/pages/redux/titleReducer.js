import { types } from "./types"

const initialState = {
    pokemons: []
}

export default function titleReducer(state = initialState, action) {
    if (action.type === types.POKEMON) {
        return { ...state, pokemons: action.payload }
    }

    return state
}