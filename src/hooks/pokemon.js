import { useEffect, useState } from 'react';
import { getPokemon, getTypes } from '../services/getPokemon.js';

export function usePokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getPokemon();
      setPokemons(data);
    };
    getData();
  }, []);
}
