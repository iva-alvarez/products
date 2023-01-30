import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProtectedRoutes() {
  const user = JSON.parse(localStorage.getItem("Token"));
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ProtectedRoutes;
