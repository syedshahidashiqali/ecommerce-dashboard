import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../assets/Utils/helpers";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";

function PrivateRoutes({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getAccessToken()) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="app-content user-management content">
        <div className="content-wrapper">
          <div className="content-body mt-5">{children}</div>
        </div>
      </div>
    </>
  );
}

export default PrivateRoutes;
