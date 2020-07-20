import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    // imageUrl: "https://picsum.photos/200",
  };

  //   styles = { fontSize: 50, fontWeight: "bold" };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt=""></img> */}
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increament</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // return this.state.count === 0 ? "Zero" : this.state.count;
    // return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
