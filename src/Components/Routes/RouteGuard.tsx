import { Navigate, Outlet } from 'react-router-dom';

interface privateRouteProps {
    hasInteracted: boolean,
}

const PrivateRoute = ({ hasInteracted }: privateRouteProps) => {
    return hasInteracted ? <Outlet /> : <Navigate to='/' />;
};
 
export default PrivateRoute;