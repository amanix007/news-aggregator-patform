import axios, { AxiosInstance } from 'axios';
import { AUTH_HEADER_KEY, axios_timeout } from '@app/config/constants';
import { API_BASE_URL } from '@app/config';

interface API extends AxiosInstance {
  setToken: (token: string) => void;
  handleError: (error: any, callback?: (msg: string) => void) => void;
}

const api = <API>axios.create();
api.defaults.baseURL = API_BASE_URL;
api.defaults.timeout = axios_timeout;

api.setToken = token => {
  if (token) api.defaults.headers.common[AUTH_HEADER_KEY] = token;
  else delete api.defaults.headers.common[AUTH_HEADER_KEY];
};

if (typeof window !== 'undefined') {
  const token = window.localStorage.getItem('accessToken');
  if (token) api.setToken(token);
}

api.handleError = (error, callback) => {
  if (error.response) {
    if (typeof callback === 'function') callback(error.response.data.message);
    // else return error.response.data.message;

    console.table({
      '🚀 URL': `${error?.config?.method} -> : ${error?.config?.baseURL + error?.config?.url}`,
      '📢 Error': `${error?.message}`,
      '💬 Message': `${error?.response?.data?.message}`,
      '🔥 Data': `${error?.config?.data}`,
    });
  } else {
    console.table({
      '🚀 URL': `${error?.config?.method} -> : ${error?.config?.baseURL + error?.config?.url}`,
      '📢 Error': `${error?.message}`,
      '💬 Message': `${error?.response?.data?.message}`,
      '🔥 Data': `${error?.config?.data}`,
    });
    if (typeof callback === 'function') callback(error);
  }
};

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const isExpectedError =
      error?.response && error?.response?.status >= 400 && error?.response?.status < 500;
    if (!isExpectedError) {
      // toast.error('Something went wrong, try again later!');
      return Promise.reject({ error });
    } else {
      // toast.error(`🤷‍♀️ ${error.response.data.error}`);
      return Promise.reject({ error });
    }
  },
);

export default api;

export const ST_GET_REQUEST = async (query: string, errorCallBack) => {
  try {
    const { data } = await api.get(encodeURI(query));
    return data.response;
  } catch ({ error }) {
    return api.handleError(error, errorCallBack);
  }
};
