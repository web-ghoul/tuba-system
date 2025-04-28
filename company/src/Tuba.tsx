// import Header from "tuba_system/Header";
import Footer from "tuba_system/Footer";
import { Outlet } from "react-router-dom";
// import Sidebar from "tuba_system/Sidebar"

const Tuba = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Tuba;
