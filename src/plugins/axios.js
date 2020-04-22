import axios from "axios";
import Cookie from "js-cookie";
import router from "../router/index";

// Cookie
const cookie = Cookie.get('x-access-token');

axios.defaults.baseURL='https://hy-api.herokuapp.com/api'

// Add a request interceptor
axios.interceptors.request.use(
   config => {
       const token = cookie
       if (token) {
           config.headers['Authorization'] = 'Bearer ' + token;
       }
       // config.headers['Content-Type'] = 'application/json';
       return config;
   },
   error => {
       Promise.reject(error)
   });



//Add a response interceptor

axios.interceptors.response.use((response) => {
   return response
}, function (error) {
   const originalRequest = error.config;

   if (error.response.status === 401 && originalRequest.url === 
'/refresh-token') {
       router.push('/login');
       return Promise.reject(error);
   }

   if (error.response.status === 401 && !originalRequest._retry) {

       originalRequest._retry = true;
       return axios.post('/refresh-token')
           .then(res => {
               if (res.status === 201) {
                 const {expiresIn,token} = res.data;
                const expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
                cookie.set('x-access-token', token, {expires: expiryTime});
                   return axios(originalRequest);
               }
           });
   }
   return Promise.reject(error);
});