export async function getPokemon(type, search) {
  // create key=value parameters
  const parameters = new URLSearchParams();
  // set type=$type
  if (type) parameters.set('type', type);
  if (search) parameters.set('pokemon', search);
  // actually pull
  const response = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${parameters.toString()}`
  );
  // deconstruct
  const data = await response.json();
  return data;
}

export async function getTypes() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data;
}
