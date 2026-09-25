import { useEffect, useState } from "react";

const Employees = () => {
  // ==========================================
  // EMPLOYEE DATA
  // ==========================================

  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");

    if (savedEmployees) {
      return JSON.parse(savedEmployees);
    }

    return [
      {
        id: 1,
        firstName: "Rahul",
        lastName: "Kumar",
        email: "rahul@gmail.com",
      },
      {
        id: 2,
        firstName: "Amit",
        lastName: "Sharma",
        email: "amit@gmail.com",
      },
    ];
  });

  // ==========================================
  // FORM STATE
  // ==========================================

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // ==========================================
  // SAVE DATA TO LOCAL STORAGE
  // ==========================================

  useEffect(() => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }, [employees]);

  // ==========================================
  // HANDLE INPUT CHANGE
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

  const handleAddEmployee = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
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
    // EDIT EMPLOYEE
    // ========================================

    if (editingId !== null) {
      setEmployees(
        employees.map((employee) =>
          employee.id === editingId
            ? {
                ...employee,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
              }
            : employee
        )
      );
    }

    // ========================================
    // ADD EMPLOYEE
    // ========================================

    else {
      const newEmployee = {
        id:
          employees.length > 0
            ? Math.max(
                ...employees.map(
                  (employee) => employee.id
                )
              ) + 1
            : 1,

        firstName: formData.firstName,

        lastName: formData.lastName,

        email: formData.email,
      };

      setEmployees([
        ...employees,
        newEmployee,
      ]);
    }

    // ========================================
    // RESET FORM
    // ========================================

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });

    setEditingId(null);

    setShowForm(false);
  };

  // ==========================================
  // EDIT EMPLOYEE
  // ==========================================

  const handleEdit = (employee) => {
    setFormData({
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
    });

    setEditingId(employee.id);

    setShowForm(true);
  };

  // ==========================================
  // DELETE EMPLOYEE
  // ==========================================

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) {
      return;
    }

    setEmployees(
      employees.filter(
        (employee) => employee.id !== id
      )
    );
  };

  // ==========================================
  // CANCEL FORM
  // ==========================================

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });

    setEditingId(null);

    setShowForm(false);
  };

  // ==========================================
  // JSX
  // ==========================================

  return (
    <div className="employees-page">

      {/* ======================================
          PAGE HEADER
      ====================================== */}

      <div className="page-header">

        <div>
          <h2>Employees</h2>

          <p>
            Manage your restaurant employees
          </p>
        </div>

        <button
          className="add-btn"
          onClick={handleAddEmployee}
        >
          + Add Employee
        </button>

      </div>


      {/* ======================================
          ADD / EDIT FORM
      ====================================== */}

      {showForm && (

        <div className="employee-form-card">

          <h3>
            {editingId !== null
              ? "Edit Employee"
              : "Add New Employee"}
          </h3>

          <form onSubmit={handleSubmit}>

            {/* FIRST + LAST NAME */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  required
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />

            </div>


            {/* BUTTONS */}

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
                  ? "Update Employee"
                  : "Save Employee"}
              </button>

            </div>

          </form>

        </div>

      )}


      {/* ======================================
          EMPLOYEE TABLE
      ====================================== */}

      <div className="employee-table-card">

        {/* TABLE HEADER */}

        <div className="section-header">

          <div>

            <h2>
              All Employees
            </h2>

            <p>
              Manage employee records
            </p>

          </div>

          <span className="employee-count">
            {employees.length}{" "}
            {employees.length === 1
              ? "Employee"
              : "Employees"}
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
                  Employee
                </th>

                <th>
                  Email
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {/* NO DATA */}

              {employees.length === 0 ? (

                <tr>

                  <td
                    colSpan="4"
                    className="no-data"
                  >
                    No employees found
                  </td>

                </tr>

              ) : (

                /* EMPLOYEE LIST */

                employees.map((employee) => (

                  <tr key={employee.id}>

                    <td>
                      {employee.id}
                    </td>


                    <td>

                      <strong>
                        {employee.firstName}{" "}
                        {employee.lastName}
                      </strong>

                    </td>


                    <td>
                      {employee.email}
                    </td>


                    <td>

                      {/* EDIT */}

                      <button
                        className="edit-btn"
                        onClick={() =>
                          handleEdit(employee)
                        }
                      >
                        Edit
                      </button>


                      {/* DELETE */}

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(employee.id)
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

export default Employees;