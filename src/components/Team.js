import React from 'react';

class Team extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
        <div className="team-member">
          <h4>Slot 1</h4>
        </div>
        <div className="team-member">
          <h4>Slot 2</h4>
        </div>
        <div className="team-member">
          <h4>Slot 3</h4>
        </div>
        <div className="team-member">
          <h4>Slot 4</h4>
        </div>
        <div className="team-member">
          <h4>Slot 5</h4>
        </div>
        <div className="team-member">
          <h4>Slot 6</h4>
        </div>
      </div>
    )
  }
}

export default Team;
