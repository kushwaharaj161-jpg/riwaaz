import { useState } from "react";

const MenuManagement = () => {
  // ==========================================
  // MENU DATA
  // ==========================================

  const [menuItems, setMenuItems] = useState(() => {
    const savedMenuItems = localStorage.getItem("menuItems");

    return savedMenuItems
      ? JSON.parse(savedMenuItems)
      : [];
  });

  // ==========================================
  // FORM
  // ==========================================

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  // ==========================================
  // SAVE TO LOCAL STORAGE
  // ==========================================

  const saveMenuItems = (items) => {
    setMenuItems(items);

    localStorage.setItem(
      "menuItems",
      JSON.stringify(items)
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
  // ADD MENU
  // ==========================================

  const handleAddMenu = () => {
    setFormData({
      name: "",
      category: "",
      price: "",
      description: "",
    });

    setEditingId(null);
    setShowForm(true);
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    // EDIT
    if (editingId !== null) {
      const updatedItems = menuItems.map((item) =>
        item.id === editingId
          ? {
              ...item,
              name: formData.name,
              category: formData.category,
              price: Number(formData.price),
              description: formData.description,
            }
          : item
      );

      saveMenuItems(updatedItems);
    }

    // ADD
    else {
      const newId =
        menuItems.length > 0
          ? Math.max(
              ...menuItems.map((item) => item.id)
            ) + 1
          : 1;

      const newItem = {
        id: newId,
        name: formData.name,
        category: formData.category,
        price: Number(formData.price),
        description: formData.description,
      };

      saveMenuItems([
        ...menuItems,
        newItem,
      ]);
    }

    // RESET
    setFormData({
      name: "",
      category: "",
      price: "",
      description: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  // ==========================================
  // EDIT
  // ==========================================

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      category: item.category,
      price: item.price,
      description: item.description,
    });

    setEditingId(item.id);
    setShowForm(true);
  };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this menu item?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedItems = menuItems.filter(
      (item) => item.id !== id
    );

    saveMenuItems(updatedItems);
  };

  // ==========================================
  // CANCEL
  // ==========================================

  const handleCancel = () => {
    setFormData({
      name: "",
      category: "",
      price: "",
      description: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  // ==========================================
  // JSX
  // ==========================================

  return (
    <div className="menu-management-page">

      {/* PAGE HEADER */}

      <div className="page-header">

        <div>
          <h2>Menu Management</h2>

          <p>
            Manage your restaurant menu items
          </p>
        </div>

        <button
          className="add-btn"
          onClick={handleAddMenu}
        >
          + Add Menu Item
        </button>

      </div>


      {/* FORM */}

      {showForm && (
        <div className="employee-form-card">

          <h3>
            {editingId !== null
              ? "Edit Menu Item"
              : "Add New Menu Item"}
          </h3>

          <form onSubmit={handleSubmit}>

            {/* NAME + CATEGORY */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Item Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Example: Paneer Tikka"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Category
                  </option>

                  <option value="Starter">
                    Starter
                  </option>

                  <option value="Main Course">
                    Main Course
                  </option>

                  <option value="Rice">
                    Rice
                  </option>

                  <option value="Bread">
                    Bread
                  </option>

                  <option value="Dessert">
                    Dessert
                  </option>

                  <option value="Beverage">
                    Beverage
                  </option>
                </select>

              </div>

            </div>


            {/* PRICE */}

            <div className="form-group">

              <label>
                Price (₹)
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                min="0"
                required
              />

            </div>


            {/* DESCRIPTION */}

            <div className="form-group">

              <label>
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter item description"
                rows="4"
              />

            </div>


            {/* ACTIONS */}

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
                  ? "Update Menu Item"
                  : "Save Menu Item"}
              </button>

            </div>

          </form>

        </div>
      )}


      {/* MENU TABLE */}

      <div className="employee-table-card">

        <div className="section-header">

          <div>

            <h2>
              All Menu Items
            </h2>

            <p>
              Manage restaurant food items
            </p>

          </div>

          <span className="employee-count">
            {menuItems.length}{" "}
            {menuItems.length === 1
              ? "Item"
              : "Items"}
          </span>

        </div>


        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>

              <tr>

                <th>
                  ID
                </th>

                <th>
                  Item
                </th>

                <th>
                  Category
                </th>

                <th>
                  Price
                </th>

                <th>
                  Description
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {menuItems.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="no-data"
                  >
                    No menu items found
                  </td>

                </tr>

              ) : (

                menuItems.map((item) => (

                  <tr key={item.id}>

                    <td>
                      {item.id}
                    </td>

                    <td>
                      <strong>
                        {item.name}
                      </strong>
                    </td>

                    <td>
                      {item.category}
                    </td>

                    <td>
                      ₹{item.price}
                    </td>

                    <td>
                      {item.description || "-"}
                    </td>

                    <td>

                      <button
                        className="edit-btn"
                        onClick={() =>
                          handleEdit(item)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(item.id)
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

export default MenuManagement;