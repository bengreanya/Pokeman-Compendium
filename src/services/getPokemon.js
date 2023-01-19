export async function fetchPokemon(type) {
  // create key=value parameters
  const parameters = new URLSearchParams();
  // set type=$type
  parameters.set('type', type);
  // actually pull
  const response = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${parameters.toString()}`
  );
  // deconstruct
  const data = await response.json();
  return data;
}

export async function fetchTypes() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data;
}
