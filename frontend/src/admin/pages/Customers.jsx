import { useState } from "react";

const Customers = () => {
  // ==========================================
  // CUSTOMER DATA
  // ==========================================

  const [customers, setCustomers] = useState(() => {
    const savedCustomers =
      localStorage.getItem("customers");

    return savedCustomers
      ? JSON.parse(savedCustomers)
      : [];
  });

  // ==========================================
  // FORM STATE
  // ==========================================

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // ==========================================
  // SAVE CUSTOMERS
  // ==========================================

  const saveCustomers = (data) => {
    setCustomers(data);

    localStorage.setItem(
      "customers",
      JSON.stringify(data)
    );
  };

  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ==========================================
  // ADD CUSTOMER
  // ==========================================

  const handleAddCustomer = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    setEditingId(null);
    setShowForm(true);
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    // EDIT CUSTOMER
    if (editingId !== null) {
      const updatedCustomers = customers.map(
        (customer) =>
          customer.id === editingId
            ? {
                ...customer,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
              }
            : customer
      );

      saveCustomers(updatedCustomers);
    }

    // ADD CUSTOMER
    else {
      const newId =
        customers.length > 0
          ? Math.max(
              ...customers.map(
                (customer) => customer.id
              )
            ) + 1
          : 1;

      const newCustomer = {
        id: newId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };

      saveCustomers([
        ...customers,
        newCustomer,
      ]);
    }

    // RESET FORM

    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  // ==========================================
  // EDIT CUSTOMER
  // ==========================================

  const handleEdit = (customer) => {
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
    });

    setEditingId(customer.id);
    setShowForm(true);
  };

  // ==========================================
  // DELETE CUSTOMER
  // ==========================================

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedCustomers =
      customers.filter(
        (customer) => customer.id !== id
      );

    saveCustomers(updatedCustomers);
  };

  // ==========================================
  // CANCEL
  // ==========================================

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  // ==========================================
  // JSX
  // ==========================================

  return (
    <div className="customers-page">

      {/* PAGE HEADER */}

      <div className="page-header">

        <div>

          <h2>
            Customers
          </h2>

          <p>
            Manage restaurant customers
          </p>

        </div>

        <button
          className="add-btn"
          onClick={handleAddCustomer}
        >
          + Add Customer
        </button>

      </div>


      {/* ADD / EDIT FORM */}

      {showForm && (

        <div className="employee-form-card">

          <h3>
            {editingId !== null
              ? "Edit Customer"
              : "Add New Customer"}
          </h3>

          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter customer name"
                required
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />

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
                  ? "Update Customer"
                  : "Save Customer"}
              </button>

            </div>

          </form>

        </div>

      )}


      {/* CUSTOMER TABLE */}

      <div className="employee-table-card">

        {/* HEADER */}

        <div className="section-header">

          <div>

            <h2>
              All Customers
            </h2>

            <p>
              Registered restaurant customers
            </p>

          </div>

          <span className="employee-count">
            {customers.length}{" "}
            {customers.length === 1
              ? "Customer"
              : "Customers"}
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
                  Email
                </th>

                <th>
                  Phone
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {customers.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="no-data"
                  >
                    No customers found
                  </td>

                </tr>

              ) : (

                customers.map((customer) => (

                  <tr key={customer.id}>

                    <td>
                      {customer.id}
                    </td>

                    <td>

                      <strong>
                        {customer.name}
                      </strong>

                    </td>

                    <td>
                      {customer.email}
                    </td>

                    <td>
                      {customer.phone}
                    </td>

                    <td>

                      <button
                        className="edit-btn"
                        onClick={() =>
                          handleEdit(customer)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(
                            customer.id
                          )
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Customers;
