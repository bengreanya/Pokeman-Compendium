import React from 'react';
import { usePokemon } from '../hooks/pokemon.js';
// import Controls
import PokeCard from './PokeCard.js';

export default function Main() {
  const { pokemons } = usePokemon();
  console.log('pokemons', pokemons);
  return (
    <div>
      {pokemons.map((pokemon) => {
        <PokeCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}
