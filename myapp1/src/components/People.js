import React from 'react';
import Person from './Person';

class People extends React.Component {
  render() {
    const peopleList = this.props.names.map((element, index, arr) => {
      return (
        <Person key={index} name={element.name} color={element.color} />
      )
    })

    return (
      <div className="people">
        {peopleList}
      </div>
    )
  }
}

export default People;

