import axios from "axios";
import handleErrorCode from "error-handler-lib";

const webApi = axios.create({
  baseURL: 'https://api.wisey.app/api/v1/core',
});

webApi.interceptors.request.use(async (config) => {
  let token = '';

  try {
    const response = await axios.get('https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions');
    token = response.data.token;
  } catch (error) {
    console.log(error);
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
}, error => {
  return Promise.reject(error);
});

webApi.interceptors.response.use((response) => {
  return response;
}, error => {
  handleErrorCode(error);

  return Promise.reject(error);
});

export default webApi;