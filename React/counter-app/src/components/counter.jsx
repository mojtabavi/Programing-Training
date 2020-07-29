import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    // tags: ["tag1", "tag2", "tag3"],
    // imageUrl: "https://picsum.photos/200",
  };

  //   styles = { fontSize: 50, fontWeight: "bold" };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  handleIncrement = (product) => {
    // this.state.count++;
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    // return this.state.count === 0 ? "Zero" : this.state.count;
    // return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
