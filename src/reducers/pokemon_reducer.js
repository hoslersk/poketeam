export default function pokemonReducer(state=[], action) {
  switch ( action.type ) {
    // case 'FETCH_POKEMON':
    //   // return action.payload;
    //   return [...state, action.payload]
    case 'FETCH_POKEMON_DATA':
      debugger
      return [...state, action.payload];
    default:
      return state;
  }
};
