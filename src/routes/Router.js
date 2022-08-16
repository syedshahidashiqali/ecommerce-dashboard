import {
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage"

import PrivateRoutes from "./PrivateRoutes";
import data from "./routes"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {Object.values(data).map(({ component: Component, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <PrivateRoutes>
              <Component />
            </PrivateRoutes>
          }
        />
      ))}
    </Routes>
  )
}

export default Router;