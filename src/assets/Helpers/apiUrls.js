export const API_BASED_URL = "http://localhost:8080/api/v1";

export const getApiURL = (endpoint) => API_BASED_URL + endpoint;

// auth endpoints
export const LOGIN = getApiURL("/admin/login")
export const USERS = getApiURL("/admin/users/all")
// users endpoints
export const DELUSERS = getApiURL("/admin/users/delete")

// products endpoints
export const ALLPRODUCTS = getApiURL("/products")
export const PRODUCT = getApiURL("/products/product")
export const PRODUCTSEDIT = getApiURL("/products/product")
export const PRODUCTUPDATE = getApiURL("/products/product")
export const CREATEPRODUCT = getApiURL("/products/add")

// orders endpoints
export const ALLORDERS = getApiURL("/orders/all")
export const ORDER = getApiURL("/orders")
export const TOTALSALES = getApiURL("/orders/purchases/all")

// reviews endpoints
export const ALLREVIEWS = getApiURL("/reviews/product")
export const AVERAGERATING = getApiURL("/reviews/averageRating/single")