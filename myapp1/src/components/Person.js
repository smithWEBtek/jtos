import React from 'react';
// import ReactDOM from 'react-dom';

class Person extends React.Component {
  render() {
    const personImage = require('../../public/img/' + this.props.name + '.png')

    return (
      <div className="person" style={{ color: this.props.color }}>
        <h1>Hello {this.props.color} {this.props.name}!</h1>
        <img src={personImage} alt={this.props.name} />
      </div>
    );
  }
}

export default Person
