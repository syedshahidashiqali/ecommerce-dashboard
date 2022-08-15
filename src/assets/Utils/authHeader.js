const TOKEN_NAME = "TOKEN";

export const getAuthHeader = () => {
  return {
    Authorization: localStorage.getItem(TOKEN_NAME),
  };
};

export const setAuthHeader = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getToken = () => localStorage.getItem(TOKEN_NAME);
