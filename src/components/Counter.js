import * as counterActions from "../store/actions/counterAction";

import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0
        }
    }

    increment = () => {
        this.props.onCounter.increment()
    }

    updateAmount = (e) => {
        this.setState({ amount: e.target.value })
    }

    render() {
        return (
            <div>
                <div>Counter page</div><br />
                <div>Count : {this.props.count}</div><br />
                <button onClick={() => this.props.onCounter.increment()}>Increment</button>
                <button onClick={() => this.props.onCounter.decrement()}>Decrement</button><br /><br />
                <input type="text" value={this.state.amount} onChange={this.updateAmount}></input><br />
                <button onClick={() => this.props.onCounter.incrementByAmount(this.state.amount)}>Increment By Amount</button>
                <button onClick={() => this.props.onCounter.decrementByAmount(this.state.amount)}>Decrement By Amount</button><br /><br />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter.count,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCounter: bindActionCreators(counterActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);