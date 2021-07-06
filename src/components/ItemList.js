import * as itemActions from "../store/actions/itemAction";

import { Link } from "react-router-dom";
import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null
        }
    }

    componentDidMount() {
        // if (!this.props.itemsLoaded) {
        //     this.initData();
        // }        
        this.initData();
    }

    initData = () => {
        this.setState({ loading: true })
        this.props.onItem.fetchItems().then(() => {
            if (!this.props.loading) {
                if (!this.props.error) {
                    console.log("items fetched")
                } else {
                    alert(`Some error ${this.props.error}`)
                }
            }

            this.setState({ loading: this.props.loading })            
        });
    }

    deleteItem = (id) => {
        this.props.onItem.deleteItem(id)
    }

    render() {
        return (
            <div>
                <div>Item List Page</div><br />
                <Link to="/items/create">Create Item</Link>
                <table>
                    <thead>
                        <td style={{ width: "300px" }}>Name</td>
                        <td style={{ width: "200px" }}>Price</td>
                        <td style={{ width: "100px" }}>UnitOfMeasure</td>
                        <td style={{ width: "100px" }}>#</td>
                    </thead>
                    <tbody>
                        {this.state.loading &&
                            <tr>
                                <td colSpan="4">Loading....</td>
                            </tr>
                        }
                        {this.props.items.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td><Link to={`/items/${item.id}`}>{item.itemName}</Link></td>
                                    <td>{item.price}</td>
                                    <td>{item.unitOfMeasure}</td>
                                    <td>
                                        <span style={{ cursor: "pointer" }} onClick={() => this.deleteItem(item.id)}>Remove</span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        items: state.item.items,
        itemsLoaded: state.item.itemsLoaded,
        loading: state.item.loading,
        error: state.item.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onItem: bindActionCreators(itemActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);