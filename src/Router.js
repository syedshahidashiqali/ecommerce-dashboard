import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage"
import PrivateRoutes from "./PrivateRoutes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <DashboardPage />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;