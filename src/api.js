import axios from 'axios';

const BACKEND_SERVER = `https://6.react.pages.academy/wtw`;
const SERVER_TIMEOUT = 5000;
const UNAUTHORIZED = 401;


export const createAPI = (/* onUnauthorized*/) => {
  const api = axios.create({
    baseURL: BACKEND_SERVER,
    timeout: SERVER_TIMEOUT,
    withCredentials: true,
  });
  const onSuccess = (response) => response;
  const onFail = (err) => {
    const {response} = err;
    if (response.status === UNAUTHORIZED) {
    // onUnauthorized();
      throw err;
    }
    throw err;
  };
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

