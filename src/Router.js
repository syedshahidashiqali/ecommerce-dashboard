import {
  Routes,
  Route,
} from "react-router-dom";
import OrderView from "./components/OrderView";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage"
import OrdersPage from "./pages/OrdersPage";
import OrderViewPage from "./pages/OrderViewPage";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductEditPage from "./pages/ProductEditPage";
import ProductsPage from "./pages/ProductsPage";
import ReviewsPage from "./pages/ReviewsPage";
import UsersPage from "./pages/UsersPage";
import PrivateRoutes from "./PrivateRoutes";

function Router() {
  return (
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
      <Route
        path="/users"
        element={
          <PrivateRoutes>
            <UsersPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoutes>
            <ProductsPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/products/edit/:productId"
        element={
          <PrivateRoutes>
            <ProductEditPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/orders"
        element={
          <PrivateRoutes>
            <OrdersPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/orders/:orderId"
        element={
          <PrivateRoutes>
            <OrderViewPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/products/:productId/reviews"
        element={
          <PrivateRoutes>
            <ReviewsPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/products/add"
        element={
          <PrivateRoutes>
            <ProductCreatePage />
          </PrivateRoutes>
        }
      />
    </Routes>
  )
}

export default Router;