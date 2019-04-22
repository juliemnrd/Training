import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'blue',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
 
  }

  handleSubmit(event) {
    this.state.color === 'blue'
    ? (
    this.setState({ color: 'yellow' })
    ) : (
    this.setState({ color: 'blue' })
    )

  }


  render() {
    return (
     <div>
       <button onClick={this.handleSubmit}>
         Change me !
         {this.state.color}
       </button>
     </div>
    );
  }
}


export default Hello;
