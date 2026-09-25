import { Outlet } from "react-router-dom";

import AdminSidebar from "./component/AdminSidebar";
import AdminHeader from "./component/AdminHeader";

import "./admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-main">

        <AdminHeader />

        <main className="admin-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;