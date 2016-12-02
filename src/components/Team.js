import React from 'react';

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: {
        slot1: "",
        slot2: "",
        slot3: "",
        slot4: "",
        slot5: "",
        slot6: ""
      }
    }
  }
  render(){
    return(
      <div>
        <h1>TEST</h1>
      </div>
    )
  }
}

export default Team;
