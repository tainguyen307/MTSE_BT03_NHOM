import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/auth/store/authSlice";
import { ROUTES } from "../constants";

export function ProtectedRoute(props) {
  const { children } = props;
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
}
