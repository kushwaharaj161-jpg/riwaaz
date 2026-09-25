import { useState } from "react";

const Reservations = () => {
  // ==========================================
  // RESERVATION DATA
  // ==========================================

  const [reservations, setReservations] = useState(() => {
    const savedReservations =
      localStorage.getItem("reservations");

    return savedReservations
      ? JSON.parse(savedReservations)
      : [];
  });

  // ==========================================
  // FORM STATE
  // ==========================================

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    customerName: "",
    date: "",
    time: "",
    guests: "",
    status: "Pending",
  });

  // ==========================================
  // SAVE TO LOCAL STORAGE
  // ==========================================

  const saveReservations = (data) => {
    setReservations(data);

    localStorage.setItem(
      "reservations",
      JSON.stringify(data)
    );
  };

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ==========================================
  // OPEN ADD FORM
  // ==========================================

  const handleAddReservation = () => {
    setFormData({
      customerName: "",
      date: "",
      time: "",
      guests: "",
      status: "Pending",
    });

    setEditingId(null);
    setShowForm(true);
  };

  // ==========================================
  // SUBMIT FORM
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    // ========================================
    // EDIT
    // ========================================

    if (editingId !== null) {
      const updatedReservations =
        reservations.map((reservation) =>
          reservation.id === editingId
            ? {
                ...reservation,
                customerName:
                  formData.customerName,
                date: formData.date,
                time: formData.time,
                guests: Number(formData.guests),
                status: formData.status,
              }
            : reservation
        );

      saveReservations(updatedReservations);
    }

    // ========================================
    // ADD
    // ========================================

    else {
      const newId =
        reservations.length > 0
          ? Math.max(
              ...reservations.map(
                (reservation) => reservation.id
              )
            ) + 1
          : 1;

      const newReservation = {
        id: newId,
        customerName: formData.customerName,
        date: formData.date,
        time: formData.time,
        guests: Number(formData.guests),
        status: formData.status,
      };

      saveReservations([
        ...reservations,
        newReservation,
      ]);
    }

    // ========================================
    // RESET
    // ========================================

    setFormData({
      customerName: "",
      date: "",
      time: "",
      guests: "",
      status: "Pending",
    });

    setEditingId(null);
    setShowForm(false);
  };

  // ==========================================
  // EDIT RESERVATION
  // ==========================================

  const handleEdit = (reservation) => {
    setFormData({
      customerName: reservation.customerName,
      date: reservation.date,
      time: reservation.time,
      guests: reservation.guests,
      status: reservation.status,
    });

    setEditingId(reservation.id);
    setShowForm(true);
  };

  // ==========================================
  // DELETE RESERVATION
  // ==========================================

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this reservation?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedReservations =
      reservations.filter(
        (reservation) =>
          reservation.id !== id
      );

    saveReservations(updatedReservations);
  };

  // ==========================================
  // CANCEL FORM
  // ==========================================

  const handleCancel = () => {
    setFormData({
      customerName: "",
      date: "",
      time: "",
      guests: "",
      status: "Pending",
    });

    setEditingId(null);
    setShowForm(false);
  };

  // ==========================================
  // JSX
  // ==========================================

  return (
    <div className="reservations-page">

      {/* ======================================
          PAGE HEADER
      ====================================== */}

      <div className="page-header">

        <div>

          <h2>
            Reservations
          </h2>

          <p>
            Manage restaurant table reservations
          </p>

        </div>

        <button
          className="add-btn"
          onClick={handleAddReservation}
        >
          + Add Reservation
        </button>

      </div>


      {/* ======================================
          ADD / EDIT FORM
      ====================================== */}

      {showForm && (

        <div className="employee-form-card">

          <h3>
            {editingId !== null
              ? "Edit Reservation"
              : "Add New Reservation"}
          </h3>

          <form onSubmit={handleSubmit}>

            {/* CUSTOMER NAME */}

            <div className="form-group">

              <label>
                Customer Name
              </label>

              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter customer name"
                required
              />

            </div>


            {/* DATE + TIME */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* GUESTS + STATUS */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Number of Guests
                </label>

                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Enter guests"
                  min="1"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Confirmed">
                    Confirmed
                  </option>

                  <option value="Cancelled">
                    Cancelled
                  </option>

                </select>

              </div>

            </div>


            {/* ACTION BUTTONS */}

            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-btn"
              >
                {editingId !== null
                  ? "Update Reservation"
                  : "Save Reservation"}
              </button>

            </div>

          </form>

        </div>

      )}


      {/* ======================================
          RESERVATION TABLE
      ====================================== */}

      <div className="employee-table-card">

        {/* SECTION HEADER */}

        <div className="section-header">

          <div>

            <h2>
              All Reservations
            </h2>

            <p>
              Manage restaurant bookings
            </p>

          </div>

          <span className="employee-count">

            {reservations.length}{" "}

            {reservations.length === 1
              ? "Reservation"
              : "Reservations"}

          </span>

        </div>


        {/* TABLE */}

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>

              <tr>

                <th>
                  ID
                </th>

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

                <th>
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {reservations.length === 0 ? (

                <tr>

                  <td
                    colSpan="7"
                    className="no-data"
                  >
                    No reservations found
                  </td>

                </tr>

              ) : (

                reservations.map(
                  (reservation) => (

                    <tr
                      key={reservation.id}
                    >

                      <td>
                        {reservation.id}
                      </td>

                      <td>

                        <strong>
                          {reservation.customerName}
                        </strong>

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
                          className={`status ${reservation.status.toLowerCase()}`}
                        >
                          {reservation.status}
                        </span>

                      </td>

                      <td>

                        <button
                          className="edit-btn"
                          onClick={() =>
                            handleEdit(
                              reservation
                            )
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(
                              reservation.id
                            )
                          }
                        >
                          Delete
                        </button>

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

export default Reservations;