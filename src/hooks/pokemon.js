import { useEffect, useState } from 'react';
import { getPokemon, getTypes } from '../services/getPokemon.js';

export function usePokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  // get pokemon
  useEffect(() => {
    const getData = async () => {
      const data = await getPokemon();
      setPokemons(data.results);
    };
    getData();
  }, []);
  // get types
  useEffect(() => {
    const getData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    getData();
  }, []);
  const handleFilterSelection = async (type) => {
    const data = await getPokemon(type);
    setPokemons(data.results);
  };
  return { pokemons, types, handleFilterSelection };
}
