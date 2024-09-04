import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2 xl:px-0">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
