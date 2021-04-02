const tokenName = 'token';
const setToken = token => localStorage.setItem(tokenName, token);
const getToken = () => localStorage.getItem(tokenName);
const clearToken = () => localStorage.removeItem(tokenName);

export default {
  setToken,
  getToken,
  clearToken
};
