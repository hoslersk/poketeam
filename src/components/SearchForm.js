import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   searchQuery: ""
    // }
    // this.updateSearchQuery = this.updateSearchQuery.bind(this)
  }
  // const updateSearchQuery(event) {
  //   const copyOfState = Object.assign({},this.state)
  //   copyOfState.searchQuery = event.target.value
  //   this.setState(copyOfState)
  // }
  render(){
    return(
      <div>
        <form>
          <input className="search-form" value={this.props.searchQuery} onChange={this.props.updateSearchQuery} placeholder="Start typing a Pokémon's name..."/>
        </form>
      </div>
    )
  }
}

export default SearchForm;
