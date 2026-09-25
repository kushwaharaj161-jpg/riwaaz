import { createBrowserRouter } from "react-router-dom";

// =========================
// CUSTOMER LAYOUT
// =========================
import MainLayout from "../layouts/MainLayout";

// =========================
// CUSTOMER PAGES
// =========================
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Reservation from "../pages/Reservation";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

// =========================
// ADMIN
// =========================
import AdminLayout from "../admin/AdminLayout";
import AdminDashboard from "../admin/pages/AdminDashboard";
import ProtectedAdminRoute from "../admin/ProtectedAdminRoute";

// Admin pages
import Employees from "../admin/pages/Employees";
import MenuManagement from "../admin/pages/MenuManagement";
import Reservations from "../admin/pages/Reservations";
import Customers from "../admin/pages/Customers";
import AdminLogin from "../admin/pages/AdminLogin";


const router = createBrowserRouter([

  // ==================================================
  // CUSTOMER WEBSITE
  // ==================================================

  {
    path: "/",
    element: <MainLayout />,

    children: [

      {
        index: true,
        element: <Home />,
      },

      {
        path: "menu",
        element: <Menu />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "gallery",
        element: <Gallery />,
      },

      {
        path: "reservation",
        element: <Reservation />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "profile",
        element: <Profile />,
      },

    ],
  },


  // ==================================================
  // ADMIN PANEL
  // ==================================================

  // This route is deliberately not linked from the public site.
  {
    path: "/manage-riwaaz-7f3a/login",
    element: <AdminLogin />,
  },

  {
    path: "/manage-riwaaz-7f3a",

    element: <ProtectedAdminRoute />,

    children: [

      {
        element: <AdminLayout />,

        children: [

          // Admin Dashboard
          {
            index: true,
            element: <AdminDashboard />,
          },

          // Employees
          {
            path: "employees",
            element: <Employees />,
          },

          // Menu
          {
            path: "menu",
            element: <MenuManagement />,
          },

          // Reservations
          {
            path: "reservations",
            element: <Reservations />,
          },

          // Customers
          {
            path: "customers",
            element: <Customers />,
          },

        ],
      },

    ],
  },

]);


export default router;
