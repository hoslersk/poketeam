import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Team from './components/Team'
import SearchForm from './components/SearchForm'

class App extends Component {
  render() {
    const pokemonListString = "Bulbasaur,Ivysaur,Venusaur,Charmander,Charmeleon,Charizard,Squirtle,Wartortle,Blastoise,Caterpie,Metapod,Butterfree,Weedle,Kakuna,Beedrill,Pidgey,Pidgeotto,Pidgeot,Rattata,Raticate,Spearow,Fearow,Ekans,Arbok,Pikachu".split(",")

    // const renderSpriteRow = function(number, pokemonListString) {
    //   for (var j = number; j < (number + 5); j++) {
    //     debugger
    //     return (
    //       <td>{pokemonListString[j]}</td>
    //     )
    //   }
    // }
    // const renderPokemonSprites = function(pokemonListString) {
    //   for (var i = 0; i < 25; i++) {
    //     if (i % 5 === 0) {
    //       debugger
    //       return (
    //         <tr>
    //           {/* {renderSpriteRow(i, pokemonListString)} */}
    //           <td>{pokemonListString[i]}</td>
    //           <td>{pokemonListString[i+1]}</td>
    //           <td>{pokemonListString[i+2]}</td>
    //           <td>{pokemonListString[i+3]}</td>
    //           <td>{pokemonListString[i+4]}</td>
    //         </tr>
    //       )
    //     } else if (i === 0) {
    //       return (
    //         <tr>{renderSpriteRow(i, pokemonListString)}</tr>
    //       )
    //     }
    //   }
    // }
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://cdn.bulbagarden.net/upload/a/a8/Dream_Ultra_Ball_Sprite.png" className="App-logo" alt="logo" />
          <h2>Welcome to PokéTeam</h2>
          <SearchForm/>
        </div>
        <div>
          <Team/>
        </div>
        <table>
          <tbody>
            {pokemonListString.map((nameString, index) => {
              if (index % 5 === 0) {
                return(
                  <tr>
                    <td>{pokemonListString[index]}</td>
                    <td>{pokemonListString[index+1]}</td>
                    <td>{pokemonListString[index+2]}</td>
                    <td>{pokemonListString[index+3]}</td>
                    <td>{pokemonListString[index+4]}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
        {/* <table>
          <tbody>
            <tr>
              <td>Bulbasaur</td>
              <td>Ivysaur</td>
              <td>Venusaur</td>
              <td>Charmander</td>
              <td>Charmeleon</td>
            </tr>
            <tr>
              <td>Charizard</td>
              <td>Squirtle</td>
              <td>Wartortle</td>
              <td>Blastoise</td>
              <td>Caterpie</td>
            </tr>
            <tr>
              <td>Metapod</td>
              <td>Butterfree</td>
              <td>Weedle</td>
              <td>Kakuna</td>
              <td>Beedrill</td>
            </tr>
            <tr>
              <td>Pidgey</td>
              <td>Pidgeotto</td>
              <td>Pidgeot</td>
              <td>Rattata</td>
              <td>Raticate</td>
            </tr>
            <tr>
              <td>Spearow</td>
              <td>Fearow</td>
              <td>Ekans</td>
              <td>Arbok</td>
              <td>Pikachu</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }
}

export default App;
