import { useEffect, useState } from 'react';
import { getPokemon, getTypes } from '../services/getPokemon.js';

export function usePokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  // get pokemon
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await getPokemon();
      setPokemons(data.results);
      setLoading(false);
    };
    getData();
  }, []);
  // get types
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await getTypes();
      setTypes(data);
      setLoading(false);
    };
    getData();
  }, []);
  const handleFilter = async (type) => {
    setLoading(true);
    const data = await getPokemon(type);
    setPokemons(data.results);
    setLoading(false);
  };
  const handleSearch = async (filterParam, searchParam) => {
    setLoading(true);
    const data = await getPokemon(filterParam, searchParam);
    setPokemons(data.results);
    setLoading(false);
  };

  return {
    pokemons,
    types,
    handleFilter,
    handleSearch,
    loading,
    filter,
    setFilter,
    search,
    setSearch,
  };
}
