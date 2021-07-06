import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => (
        <Route
            {...rest}
            render={(props) => {
                return !isAuthenticated ? (
                    <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />
                ) :
                    (
                        <Component {...props} />
                    )
                    ;
            }}
        />
    );

export default ProtectedRoute;
