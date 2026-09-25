import { Outlet } from "react-router-dom";

import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import ScrollToTop from "../component/common/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;