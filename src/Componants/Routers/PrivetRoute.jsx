import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner text-error"></span>;
    }

    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.any,
};

export default PrivetRoute;