import React from 'react'
import classes from './pokemonCard.module.css'

function PokemonCard({ cardInfo }) {
    return (
        <div className={classes.card}>
            <img src={cardInfo.url} className={classes.img} />
            <h1>{cardInfo.name}</h1>
        </div>
    )
}

export default PokemonCard