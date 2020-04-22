import axios from "axios";
import router from "../router/index";
import store from "../store/index";

//axios instance
let axiosInstance = axios.create({
	baseURL: "https://hy-api.herokuapp.com/api",
	withCredentials: true
});

//Add a response interceptor
axiosInstance.interceptors.response.use(
	response => {
		return response;
	},
	function(error) {
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
		return Promise.reject(error);
	}
);

export default axiosInstance;
