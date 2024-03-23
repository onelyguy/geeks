import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonAction } from './redux/actions'
import PokemonCard from '../pages/components/PokemonCard'

function MainPage() {

    const pokemons = useSelector(state => state.pokemonData.pokemons)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPokemonAction)
    }, [])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px'}}>
            {pokemons && pokemons.map((pokemon, index) => <PokemonCard key={index} cardInfo={pokemon} />)}
        </div>
    )
}

export default MainPage