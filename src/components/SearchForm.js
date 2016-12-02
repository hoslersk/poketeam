import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
        <form>
          <input className="search-form" placeholder="Start typing a Pokémon's name..."/>
        </form>
      </div>
    )
  }
}

export default SearchForm;
