import * as itemActions from "../store/actions/itemAction";

import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ItemCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: Math.random() * 1000000,
                itemName: "",
                price: 0,
                unitOfMeasure: ""
            }
        }
    }

    updateValue = (e) => {
        const { name, value } = e.target;
        const item = this.state.item;
        item[name] = value;
        this.setState({ item });
    }

    createItem = () => {
        const item = this.state.item;
        this.props.onItem.createItem(item)
            .then(() => {
                if (!this.props.loading && !this.props.error) {
                    this.props.history.push("/items")
                }
            });
    }

    render() {
        return (
            <div>
                <div>Create Item Page</div><br />
                <table>
                    <tr>
                        <td>
                            Item Name
                    </td>
                        <td>
                            <input type="text" name="itemName" value={this.state.item.itemName} onChange={this.updateValue}></input><br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Price
                    </td>
                        <td>
                            <input type="text" name="price" value={this.state.item.price} onChange={this.updateValue}></input><br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Unit of Measure
                    </td>
                        <td>
                            <input type="text" name="unitOfMeasure" value={this.state.item.unitOfMeasure} onChange={this.updateValue}></input><br />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={() => this.createItem()}>Submit</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        loading: state.item.loading,
        error: state.item.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onItem: bindActionCreators(itemActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemCreate));