export const API_BASED_URL = "http://localhost:8080/api/v1";

export const getApiURL = (endpoint) => API_BASED_URL + endpoint;

// auth endpoints
export const LOGIN = getApiURL("/admin/login")