import { Redirect, Route } from 'react-router-dom';

import React from 'react';

const LoginRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            return !isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/" />
                );
        }}
    />
);

export default LoginRoute;
