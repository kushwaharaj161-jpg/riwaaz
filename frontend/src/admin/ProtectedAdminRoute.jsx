import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ADMIN_LOGIN_PATH = "/manage-riwaaz-7f3a/login";

const isAdmin = (user) => {
  const role = String(user?.role ?? user?.userRole ?? "").toLowerCase();
  return role === "admin" || role === "administrator";
};

const ProtectedAdminRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="admin-route-loading">Verifying access…</div>;
  }

  if (!isAdmin(user)) {
    return <Navigate to={ADMIN_LOGIN_PATH} replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;
