import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/UseAuth";

const AuthRoute = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return allowedRoles?.includes(auth?.user?.role) ? (
        <Outlet />
    ) : auth?.user ? (
        <Navigate to="/unauthorize" state={{ from: location }} replace />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default AuthRoute;
