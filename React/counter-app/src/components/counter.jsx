import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div className="row">
        <div className="col">
        {this.props.children}
        <span style={{fontSize: 18}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col-sm-10">
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2">
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2" disabled={this.getModeBtn()}>
          -
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    // return this.state.count === 0 ? "Zero" : this.state.count;
    // return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }

  getModeBtn() {
    const {value: count} = this.props.counter;


    return count === 0 ? true : false;
  }
}

export default Counter;
