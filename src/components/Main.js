import React from 'react';
import { usePokemon } from '../hooks/pokemon.js';
import PokeCard from './PokeCard.js';
import Controls from './Controls.js';
import './Main.css';
export default function Main() {
  const {
    pokemons,
    types,
    handleFilter,
    handleSearch,
    loading,
    filter,
    setFilter,
    search,
    setSearch,
  } = usePokemon();
  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="main-div">
        <Controls
          types={types}
          handleFilter={handleFilter}
          handleSearch={handleSearch}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
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
