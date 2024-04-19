import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const user = {
    name: "dogukhan",
    type: "admin",
  };
  if (user.type !== "admin") {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="d-flex gap-5 p-4">
      <aside className="d-flex flex-column bg-light rounded p-3">
        <NavLink to={"/ekstra/kategoriler"}>Kategoriler</NavLink>
        <NavLink to={"/ekstra/kampanyalar"}>Kampanyalar</NavLink>
        <NavLink to={"/ekstra/ayarlar"}>Ayarlar</NavLink>
      </aside>
      <div>
        <h1>
          <Outlet />
        </h1>
      </div>
    </div>
  );
};

export default Layout;
