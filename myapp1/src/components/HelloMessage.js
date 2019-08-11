import React from 'react';
// import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    const petImage = require('../../public/img/' + this.props.name + '.png')

    return (
      <div className="pet" style={{ color: this.props.color }}>
        <h1>Hello {this.props.color} {this.props.name}!</h1>
        <img src={petImage} alt={this.props.name} />
      </div>
    );
  }
}

export default HelloMessage
