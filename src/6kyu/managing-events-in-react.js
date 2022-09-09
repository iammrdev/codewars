// https://www.codewars.com/kata/5a8319f257c562ede8000037

const React = require("react");

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
  }

  onDecrement() {
    this.setState((state) => ({ counter: state.counter - 1 }));
  }

  onIncrement() {
    this.setState((state) => ({ counter: state.counter + 1 }));
  }

  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
        <button type="button" id="decrement" onClick={this.onDecrement}>
          Decrement
        </button>
        <button type="button" id="increment" onClick={this.onIncrement}>
          Increment
        </button>
      </div>
    );
  }
}
