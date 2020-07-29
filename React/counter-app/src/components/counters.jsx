import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

    render() { 
        const {onReset,counters,onDelete,onIncrement,onDecrement} = this.props
        return ( 
        <div>
            <button className="btn btn-primary m-2" onClick={onReset}>Reset</button>
            {counters.map(counter => <Counter
            onDelete={onDelete} 
            onIncrement= {onIncrement}
            onDecrement={onDecrement}
            key={counter.id} 
            counter={counter} >
            </Counter>)}
        </div> );
    }
}
 
export default Counters;