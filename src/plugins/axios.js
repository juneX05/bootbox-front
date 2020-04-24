import axios from "axios";
import router from "../router/index";
import store from "../store/index";
import app from "../main";

//axios instance
let axiosInstance = axios.create({
	baseURL: "https://hy-api.herokuapp.com/api",
	withCredentials: true
});

axiosInstance.interceptors.request.use(
    config => {
        app.$Progress.start();
        return config;
    },
    // eslint-disable-next-line no-unused-vars
    error => {
        // console.clear();
        app.$Progress.fail();
    }
);

//Add a response interceptor
axiosInstance.interceptors.response.use(
	response => {
        app.$Progress.finish();
		return response;
	},
	function(error) {
        app.$Progress.fail();
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			originalRequest.url === "/refresh-token"
		) {
			router.push("/login");
			return Promise.reject(error);
		}

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			return store.dispatch("refreshToken").then(() => {
				return axiosInstance(originalRequest);
			});
		}
        // console.clear();
		return Promise.reject(error);
	}
);

export default axiosInstance;
