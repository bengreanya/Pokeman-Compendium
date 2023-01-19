import React from 'react';

export default function PokeCard({ pokemon }) {
  return (
    <div className="poke-card" href={pokemon.pokedex}>
      <h2>{pokemon.pokemon}</h2>
      <img src={pokemon.url_image} />
      <p>
        types: {pokemon.type_1},{pokemon.type_2}
      </p>
    </div>
  );
}
