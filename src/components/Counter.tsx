import React, { Component } from 'react';

interface CounterState {
  count: number;
}

interface CounterProps {}

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0
  };

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="bg-teal-500 text-black p-4 rounded-lg text-center text-xl">
        <p>Count: {this.state.count}</p>
        <button
          className="bg-purple-600 text-white px-4 py-2 mt-2 rounded-lg"
          onClick={this.increment}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
