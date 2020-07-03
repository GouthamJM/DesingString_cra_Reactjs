import axios from 'axios'
import { toastFlashMessage } from './index';
var axiosInstance = axios.create();
axiosInstance.defaults.baseURL = "https://api.designstring.com/";
axiosInstance.interceptors.request.use(function(config){
const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return config;
}, function(error){
    return error;
});
axiosInstance.interceptors.response.use(function(response){
    return response.data;
},  function(error){
    return error;
});

export default axiosInstance;
