import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: null,
		user: null,
		refreshing: null,
		roles: []
	},

	getters: {
		refreshingStatus(state) {
			return state.refreshing;
		},

		getRoles(state) {
			return state.roles;
		}
	},

	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
		},

		SET_REFRESHING_TOKEN(state, status) {
			state.refreshing = status;
		},

		SET_ROLES(state, roles) {
			state.roles = roles;
		}
	},

	actions: {
		setToken({ commit }, { token, expiresIn }) {
			const expiryTime = new Date(
				new Date().getTime() + expiresIn * 1000
			);
			cookies.set("x-access-token", token, {
				expires: expiryTime
			});
			this._vm.$axios.defaults.headers.common.Authorization =
				"Bearer " + token;
			commit("SET_TOKEN", token);
			commit("SET_REFRESHING_TOKEN", false);
		},

		async refreshToken({ dispatch, commit }) {
			commit("SET_REFRESHING_TOKEN", true);
			let data = await this._vm.$axios.post("/refresh-token");
			const { token, expiresIn } = data.data;
			dispatch("setToken", { token, expiresIn });
		},

		async loadRoles({ commit }) {
			await this._vm.$axios.get("/roles").then(({ data }) => {
				const roles = data.data;
				commit("SET_ROLES", roles);
			});
		},

		async login({ dispatch }, data) {
			await this._vm.$axios.post("/login", data).then(({ data }) => {
				const { token, expiresIn } = data;
				dispatch("setToken", { token, expiresIn });
			});
			router.push({ name: "secret" });
		},

		logout({ commit }) {
			delete this._vm.$axios.defaults.headers.common.Authorization;
			cookies.remove("x-access-token");
			commit("REMOVE_TOKEN");
		},

		loader({ dispatch, getters }, data) {
			let id = setInterval(checker, 1000);
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
