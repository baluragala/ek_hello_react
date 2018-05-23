import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, highlight: false }; //initial state
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          INC
        </button>
        <span
          onMouseEnter={() => this.setState({ highlight: true })}
          onMouseLeave={() => this.setState({ highlight: false })}
          style={
            this.state.highlight
              ? { backgroundColor: "red" }
              : { backgroundColor: null }
          }
        >
          {this.state.counter}
        </span>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          DEC
        </button>
      </div>
    );
  }
}

export default Counter;
