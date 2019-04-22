import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"]
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-sm btn-secondary"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <i>Zero</i> : count;
  }
}

export default Counter;
