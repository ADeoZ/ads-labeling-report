const STORAGE_NAME = "user";

export const saveToken = (token) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(token));
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME));
};

export const removeToken = () => {
  localStorage.removeItem(STORAGE_NAME);
};
