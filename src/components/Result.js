import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0
        }
    }

    render() {
        return (
            <div>
                <div>Count : {this.props.count}</div><br />                
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
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);