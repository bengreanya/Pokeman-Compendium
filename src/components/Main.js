import React from 'react';
import { usePokemon } from '../hooks/pokemon.js';
import PokeCard from './PokeCard.js';
import Controls from './Controls.js';
import './Main.css';
export default function Main() {
  const { pokemons, types, handleFilterSelection, loading, filter, setFilter } = usePokemon();
  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="main-div">
        <Controls
          types={types}
          handler={handleFilterSelection}
          filter={filter}
          setFilter={setFilter}
        />
        <section className="card-container">
          {pokemons.map((pokemon) => {
            return <PokeCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </section>
      </div>
    );
  }
}
