import { useState } from "react";

const AdminDashboard = () => {

  // ==========================================
  // LOAD DATA FROM LOCAL STORAGE
  // ==========================================

  const [employees] = useState(() => {
    const data = localStorage.getItem("employees");
    return data ? JSON.parse(data) : [];
  });

  const [customers] = useState(() => {
    const data = localStorage.getItem("customers");
    return data ? JSON.parse(data) : [];
  });

  const [reservations] = useState(() => {
    const data = localStorage.getItem("reservations");
    return data ? JSON.parse(data) : [];
  });

  const [menuItems] = useState(() => {
    const data = localStorage.getItem("menuItems");
    return data ? JSON.parse(data) : [];
  });


  // ==========================================
  // RECENT RESERVATIONS
  // ==========================================

  const recentReservations = reservations
    .slice(-5)
    .reverse();


  return (
    <div className="admin-dashboard">

      {/* ======================================
          DASHBOARD TITLE
      ====================================== */}

      <div className="dashboard-title">

        <h2>
          Overview
        </h2>

        <p>
          Here's what's happening with your restaurant today.
        </p>

      </div>


      {/* ======================================
          DASHBOARD CARDS
      ====================================== */}

      <div className="dashboard-cards">

        {/* CUSTOMERS */}

        <div className="dashboard-card">

          <div className="card-icon customer-icon">
            👥
          </div>

          <div className="card-content">

            <span>
              Total Customers
            </span>

            <h3>
              {customers.length}
            </h3>

          </div>

        </div>


        {/* EMPLOYEES */}

        <div className="dashboard-card">

          <div className="card-icon employee-icon">
            👨‍💼
          </div>

          <div className="card-content">

            <span>
              Total Employees
            </span>

            <h3>
              {employees.length}
            </h3>

          </div>

        </div>


        {/* RESERVATIONS */}

        <div className="dashboard-card">

          <div className="card-icon reservation-icon">
            📅
          </div>

          <div className="card-content">

            <span>
              Reservations
            </span>

            <h3>
              {reservations.length}
            </h3>

          </div>

        </div>


        {/* MENU */}

        <div className="dashboard-card">

          <div className="card-icon menu-icon">
            🍽️
          </div>

          <div className="card-content">

            <span>
              Menu Items
            </span>

            <h3>
              {menuItems.length}
            </h3>

          </div>

        </div>

      </div>


      {/* ======================================
          RECENT RESERVATIONS
      ====================================== */}

      <div className="dashboard-section">

        <div className="section-header">

          <div>

            <h2>
              Recent Reservations
            </h2>

            <p>
              Latest restaurant bookings
            </p>

          </div>

        </div>


        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>

              <tr>

                <th>
                  Customer
                </th>

                <th>
                  Date
                </th>

                <th>
                  Time
                </th>

                <th>
                  Guests
                </th>

                <th>
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {recentReservations.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="no-data"
                  >
                    No reservations found
                  </td>

                </tr>

              ) : (

                recentReservations.map(
                  (reservation) => (

                    <tr key={reservation.id}>

                      <td>
                        {reservation.customerName}
                      </td>

                      <td>
                        {reservation.date}
                      </td>

                      <td>
                        {reservation.time}
                      </td>

                      <td>
                        {reservation.guests}
                      </td>

                      <td>

                        <span
                          className={`status ${
                            reservation.status?.toLowerCase()
                          }`}
                        >
                          {reservation.status}
                        </span>

                      </td>

                    </tr>

                  )
                )

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;