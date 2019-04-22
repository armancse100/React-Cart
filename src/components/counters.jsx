import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  

  render() {
    return (
      <div>
        <button
          className="btn btn-sm btn-success m-2"
          onClick={this.props.onReset}
        >
          RESET
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
