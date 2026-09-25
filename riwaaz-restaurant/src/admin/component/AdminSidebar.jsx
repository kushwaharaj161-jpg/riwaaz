import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const AdminSidebar = () => {

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/manage-riwaaz-7f3a/login", { replace: true });
  };

  return (
    <aside className="admin-sidebar">

      <div className="admin-logo">
        <h2>RIWAAZ</h2>
        <span>ADMIN PANEL</span>
      </div>

      <nav className="admin-nav">

        <NavLink
          to="/manage-riwaaz-7f3a"
          end
          className={({ isActive }) =>
            `admin-nav-link ${isActive ? "active" : ""}`
          }
        >
          <span>📊</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/manage-riwaaz-7f3a/employees"
          className={({ isActive }) =>
            `admin-nav-link ${isActive ? "active" : ""}`
          }
        >
          <span>👨‍💼</span>
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/manage-riwaaz-7f3a/menu"
          className={({ isActive }) =>
            `admin-nav-link ${isActive ? "active" : ""}`
          }
        >
          <span>🍽️</span>
          <span>Menu</span>
        </NavLink>

        <NavLink
          to="/manage-riwaaz-7f3a/reservations"
          className={({ isActive }) =>
            `admin-nav-link ${isActive ? "active" : ""}`
          }
        >
          <span>📅</span>
          <span>Reservations</span>
        </NavLink>

        <NavLink
          to="/manage-riwaaz-7f3a/customers"
          className={({ isActive }) =>
            `admin-nav-link ${isActive ? "active" : ""}`
          }
        >
          <span>👥</span>
          <span>Customers</span>
        </NavLink>

      </nav>

      <div className="admin-sidebar-bottom">

        <button
          className="admin-logout-btn"
          onClick={handleLogout}
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
};

export default AdminSidebar;
