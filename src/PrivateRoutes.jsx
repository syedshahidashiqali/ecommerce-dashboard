import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";

function PrivateRoutes({ children, redirectTo }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [token]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="app-content user-management content">
        <div className="content-wrapper">
          <div className="content-body">{children}</div>
        </div>
      </div>
    </>
  );
}

export default PrivateRoutes;
