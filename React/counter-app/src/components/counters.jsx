import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

    render() { 
        return ( 
        <div>
            <button className="btn btn-primary m-2" onClick={this.props.onReset}>Reset</button>
            {this.props.counters.map(counter => <Counter
            onDelete={this.props.onDelete} 
            onIncrement= {this.props.onIncrement}
            key={counter.id} 
            counter={counter} >
            </Counter>)}
        </div> );
    }
}
 
export default Counters;