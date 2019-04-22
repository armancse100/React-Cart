import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
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
        <button
          onClick={this.props.onDelete}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? <i>Zero</i> : count;
  }
}

export default Counter;
