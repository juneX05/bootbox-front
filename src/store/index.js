import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "../plugins/axios";
import router from "../router/index";
import cookie from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: null,
		user: null,
		refreshing: null
	},
	getters: {
		refreshingStatus(state) {
			return state.refreshing;
		}
	},

	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
		},
		SET_REFRESHING_TOKEN(state, status) {
			state.refreshing = status;
		}
	},

	actions: {
		setToken({ commit }, { token, expiresIn }) {
			const expiryTime = new Date(
				new Date().getTime() + expiresIn * 1000
			);
			cookie.set("x-access-token", token, {
				expires: expiryTime
			});
			axiosInstance.defaults.headers.common.Authorization =  'Bearer '+token;
			commit("SET_TOKEN", token);
			commit("SET_REFRESHING_TOKEN", false);
		},

		async refreshToken({ dispatch, commit }) {
			commit("SET_REFRESHING_TOKEN", true);
			const { token, expiresIn } = await axiosInstance.post(
				"/refresh-token"
			);
			dispatch("setToken", { token, expiresIn });
		},

		async login({ dispatch }, data) {
			const { token, expiresIn } = await axiosInstance.post(
				"/login",
				data
			);
			dispatch("setToken", { token, expiresIn });
			router.push({name:'secret'});
		},

		async logout({}){

		},

		loader({ dispatch, getters }, data) {
			var id = setInterval(checker, 1000);
			function checker() {
				if (!getters.refreshingStatus) {
					clearInterval(id);
					if (typeof data === "object") {
						const { action, payload } = data;
						dispatch(action, payload);
					} else {
						dispatch(data);
					}
				}
			}
		}
	}
});
