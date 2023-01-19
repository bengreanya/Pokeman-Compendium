import React from 'react';
import { usePokemon } from '../hooks/pokemon.js';
import PokeCard from './PokeCard.js';
import Controls from './Controls.js';

export default function Main() {
  const { pokemons, types, handleFilterSelection } = usePokemon();
  return (
    <div>
      <Controls types={types} handler={handleFilterSelection} />
      {pokemons.map((pokemon) => {
        return <PokeCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}
