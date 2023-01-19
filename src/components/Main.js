import React from 'react';
import { usePokemon } from '../hooks/pokemon.js';
// import Controls
import PokeCard from './PokeCard.js';

export default function Main() {
  const { pokemons } = usePokemon();
  return (
    <div>
      {/* <Controls/> */}
      {/* <PokeCard/> */}
    </div>
  );
}
