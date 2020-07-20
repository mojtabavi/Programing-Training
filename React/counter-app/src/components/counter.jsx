import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    // tags: ["tag1", "tag2", "tag3"],
    tags: [],
    // imageUrl: "https://picsum.photos/200",
  };

  //   styles = { fontSize: 50, fontWeight: "bold" };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul>
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
