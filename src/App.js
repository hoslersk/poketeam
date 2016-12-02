import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Team from './components/Team'
import SearchForm from './components/SearchForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      pokemon: {
        slot1: "",
        slot2: "",
        slot3: "",
        slot4: "",
        slot5: "",
        slot6: ""
      }
    }
    this.updateSearchQuery = this.updateSearchQuery.bind(this)
    this.fetchResults = this.fetchResults.bind(this)
  }
  updateSearchQuery(event) {
    const copyOfState = Object.assign({},this.state)
    copyOfState.searchQuery = event.target.value
    this.setState(copyOfState)
  }

  fetchResults(pokemonListArray) {
    if (this.state.searchQuery == "") {
      return pokemonListArray.map((nameString, index) => {
        if (index % 5 === 0) {
          return(
            <tr>
              <td className="poke-results">
                <span>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
                  <br/>
                  {pokemonListArray[index]}
                </span>
              </td>
              <td className="poke-results">
                <span>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+2}.png`}/>
                  <br/>
                  {pokemonListArray[index+1]}
                </span>
              </td>
              <td className="poke-results">
                <span>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+3}.png`}/>
                  <br/>
                  {pokemonListArray[index+2]}
                </span>
              </td>
              <td className="poke-results">
                <span>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+4}.png`}/>
                  <br/>
                  {pokemonListArray[index+3]}
                </span>
              </td>
              <td className="poke-results">
                <span>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+5}.png`}/>
                  <br/>
                  {pokemonListArray[index+4]}
                </span>
              </td>
            </tr>
          )
        }
      })
    } else {
      return(<h1>NO LUCK</h1>)
    }
  }

  render() {
    const pokemonListString = "Bulbasaur,Ivysaur,Venusaur,Charmander,Charmeleon,Charizard,Squirtle,Wartortle,Blastoise,Caterpie,Metapod,Butterfree,Weedle,Kakuna,Beedrill,Pidgey,Pidgeotto,Pidgeot,Rattata,Raticate,Spearow,Fearow,Ekans,Arbok,Pikachu"

    const pokemonListArray = pokemonListString.split(",")

    const resultElements = this.fetchResults(pokemonListArray)

    return (
      <div className="App">
        <div className="App-header">
          <img src="http://cdn.bulbagarden.net/upload/a/a8/Dream_Ultra_Ball_Sprite.png" className="App-logo" alt="logo" />
          <h2>Welcome to PokéTeam</h2>
          <SearchForm updateSearchQuery={this.updateSearchQuery}/>
        </div>
        <div className="selected-team">
          <Team/>
        </div>
        <div className="poke-table">
          <table>
            <tbody>
              {resultElements}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
