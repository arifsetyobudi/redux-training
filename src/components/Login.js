import * as authActions from "../store/actions/authAction";

import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import instance from "../api/AxiosInstance";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            loading: false
        }
    }

    componentDidMount() {

    }

    updateValue = (e) => {
        const { name, value } = e.target;
        this.setState({ email: value });
    }

    submit = () => {
        this.setState({ loading: true })
        this.props.onAuth.authSignIn(this.state.email).then(() => {
            if (!this.props.loading) {
                if (!this.props.error) {
                    alert("Login success")
                } else {
                    alert(`Login fail ${this.props.error}`)
                }
            }

            this.setState({ loading: this.props.loading })
            //console.log('this.props.token', this.props.token);
        });
    }

    render() {
        return <div>
            <h1>Login Page</h1><br />

            {this.state.loading && <h2>Loading ....</h2>}
            <table>
                <tr>
                    <td>
                        Email
                    </td>
                    <td>
                        <input type="text" name="email" value={this.state.email} onChange={this.updateValue}></input><br />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button onClick={this.submit}>Submit</button>
                    </td>
                </tr>
            </table>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.auth.loading,
        error: state.auth.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: bindActionCreators(authActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));