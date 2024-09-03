import { Outlet } from "react-router-dom";

type Props = {};

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Outlet />
    </div>
  );
};

export default Layout;
