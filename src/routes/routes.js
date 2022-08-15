import DashboardPage from "../pages/DashboardPage";
import OrdersPage from "../pages/OrdersPage";
import OrderViewPage from "../pages/OrderViewPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductEditPage from "../pages/ProductEditPage";
import ProductsPage from "../pages/ProductsPage";
import ReviewsPage from "../pages/ReviewsPage";
import UsersPage from "../pages/UsersPage";

export default {
  home: {
    path: "/dashboard",
    component: DashboardPage,
  },
  users: {
    path: "/users",
    component: UsersPage
  },
  products: {
    path: "/products",
    component: ProductsPage
  },
  productEdit: {
    path: "/products/edit/:productId",
    component: ProductEditPage
  },
  orders: {
    path: "/orders",
    component: OrdersPage
  },
  orderView: {
    path: "/orders/:orderId",
    component: OrderViewPage
  },
  reviews: {
    path: "/products/:productId/reviews",
    component: ReviewsPage
  },
  productAdd: {
    path: "/products/add",
    component: ProductCreatePage
  }
}