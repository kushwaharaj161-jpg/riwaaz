const AdminHeader = () => {
  return (
    <header className="admin-header">

      <div className="admin-header-left">
        <h1>Admin Dashboard</h1>
        <p>Welcome back to Riwaaz Admin Panel</p>
      </div>

      <div className="admin-header-right">

        <button className="notification-btn">
          🔔
        </button>

        <div className="admin-profile">

          <div className="admin-avatar">
            A
          </div>

          <div className="admin-profile-info">
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>

        </div>

      </div>

    </header>
  );
};

export default AdminHeader;