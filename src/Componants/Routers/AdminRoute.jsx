import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isPending] = useAdmin();
    const location = useLocation();

    if (loading || isPending) {
        return <div className="text-center mt-10">
            <span className="loading loading-spinner text-error"></span>
        </div>;
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

AdminRoute.propTypes = {
    children: PropTypes.any,
};

export default AdminRoute;