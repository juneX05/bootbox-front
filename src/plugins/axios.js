import axios from "axios";
import router from "../router/index";
import store from "../store/index";
import app from "../main";
import cookies from "js-cookie";

//axios instance
// axios.defaults.baseURL = "https://hy-api.herokuapp.com/api";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    config => {
        store.state.validation_errors = {}
        app.$Progress.start();
        const token = cookies.get('x-access-token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        // config.headers['Content-Type'] = 'application/json';
        return config;
    },
    // eslint-disable-next-line no-unused-vars
    error => {
        // Promise.reject(error);
        // console.clear();
        app.$Progress.fail();
    }
);


//Add a response interceptor
axios.interceptors.response.use(
    response => {
        app.$Progress.finish();
        return response;
    },
    function (error) {
        app.$Progress.fail();
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            originalRequest.url === process.env.VUE_APP_REFRESH_TOKEN_API_URL
        ) {
            router.push("/login");
            return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            return axios.post(process.env.VUE_APP_REFRESH_TOKEN_API_URL)
                .then(({status, data}) => {
                    if (status === 200) {
                        store.dispatch('setToken', data);
                        return axios(originalRequest);
                    }
                });
        }
        // console.clear();
        return Promise.reject(error);
    }
);

export default axios;
