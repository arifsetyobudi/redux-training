import * as itemActions from "../store/actions/itemAction";

import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: Math.random(),
                itemName: "",
                price: 0,
                unitOfMeasure: ""
            }
        }

        this.initdata = this.initdata.bind(this);
    }

    componentDidMount() {
        this.initdata();
    }

    initdata() {
        const {
            match: { params },
        } = this.props;

        var id = params.id;

        Promise.resolve(
            this.props.onItem.viewItem(id)
        ).then(() => {
            const item = this.state.item;
            if (item != undefined) {
                item.id = this.props.item.id;
                item.itemName = this.props.item.itemName;
                item.price = this.props.item.price;
                item.unitOfMeasure = this.props.item.unitOfMeasure;
                this.setState({
                    item
                })
            }
        })
            .catch((err) => {
                this.props.history.push("/items")
            });
    }

    updateValue = (e) => {
        const { name, value } = e.target;
        const item = this.state.item;
        item[name] = value;
        this.setState({ item });
    }

    updateItem = () => {
        const item = this.state.item;
        Promise.resolve(
            this.props.onItem.updateItem(item)
        ).then(() => {
            this.props.history.push("/items")
        });
    }

    render() {
        return (
            <div>
                <div>Item Detail Page</div><br />
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
                            <button onClick={this.updateItem}>Update</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        item: state.item.item
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onItem: bindActionCreators(itemActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemDetail));