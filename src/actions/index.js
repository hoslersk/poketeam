const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export function fetchPokemonData(pokedexNumber){

  const pokemon = fetch(`${BASE_URL}/${pokedexNumber}`).then(response => {
    return response.json()
  }).then(pokemonPayload => {
    return pokemonPayload
  });
  debugger
  return {
    type: 'FETCH_POKEMON_DATA',
    payload: pokemon
  }
}
