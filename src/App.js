import './App.css';

import * as authActions from "../src/store/actions/authAction";

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Counter from './components/Counter';
import Home from './components/Home';
import ItemCreate from './components/ItemCreate';
import ItemDetail from './components/ItemDetail';
import ItemList from './components/ItemList';
import Login from './components/Login';
import LoginRoute from './routes/LoginRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import React from 'react';
import Result from './components/Result';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import logo from './logo.svg';

class App extends React.Component {

  componentDidMount() {
    Promise.resolve(
      this.props.onAuth.authCheckToken()
    ).then(() => {
    });
  }

  logout = () => {
    this.props.onAuth.authSignOut()
  }

  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: "20px" }}>
          {this.props.token ? "Authenticate" : "UnAuthenticate"}<br />
          {/* <Counter></Counter> */}

          {this.props.token ?
            <React.Fragment>
              <Link to="/" >Home</Link><br />
              <Link to="/items" >Item List</Link><br />
              <Link onClick={this.logout} >Logout</Link>
            </React.Fragment>
            :
            <Link to="/login" >Login</Link>
          }
          <hr />

          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            <ProtectedRoute
              isAuthenticated={this.props.token ? true : false}
              path="/"
              exact
              component={Home}
            ></ProtectedRoute>
            <ProtectedRoute
              isAuthenticated={this.props.token ? true : false}
              path="/items"
              exact
              component={ItemList}>
            </ProtectedRoute>
            {/* <Route exact path="/items">
              <ItemList />
            </Route> */}
            <Route path="/items/create">
              <ItemCreate />
            </Route>
            <Route path="/items/:id">
              <ItemDetail />
            </Route>
            <LoginRoute
              isAuthenticated={this.props.token ? true : false}
              path="/login"
              component={Login}
            />
            {/* <Route path="/login">
              <Login />
            </Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: bindActionCreators(authActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
