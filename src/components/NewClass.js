import React, { Component } from "react";

class NewClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default NewClass;
