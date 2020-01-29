// import axios from 'axios';


// import config from '../config';
//
// import { uniqueId } from '../../utils';
//
// const instance = axios.create({
//   baseURL: config.API_ENDPOINT,
//   headers: {
//     'auth-token': config.AUTH_TOKEN
//   }
// });
//
// axiosCancel(instance, {
//   debug: false
// });
//
// instance.interceptors.request.use(config => {
//   config.requestId = uniqueId();
//   return config;
// });
//
// instance.interceptors.response.use((response) => {
//   return response.data;
// }, (err) => {
//   if (axios.isCancel(err)) {
//     return Promise.reject(err);
//   }
//
//   throw err;
// });
//
// export { instance };
// export default instance;
