import React from 'react';
import HelloMessage from './HelloMessage';

class People extends React.Component {
  render() {
    const peopleList = this.props.names.map((element, index, arr) => {
      return (
        <HelloMessage key={index} name={element.name} color={element.color} />
      )
    })

    return (
      <div className="pets">
        {peopleList}
      </div>
    )
  }
}

export default People;

